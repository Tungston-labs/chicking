import {
  normalizeBlogStatus,
  slugifyTitle,
  createClientBlogId,
  getBlogMonthLabel,
  getAvatarInitials,
  toInputDate,
  extractFirstImageSrc,
  stripFirstImageFromHtml,
  normalizeBlog,
  normalizeBlogList,
  unwrapBlogPayload,
  buildBlogRequestPayload,
  getEditorInitialValues,
  buildBlogCounts,
  getBlogFilterOptions,
  getFallbackPublishedBlogs,
} from './blogUtils.js';

describe('blogUtils', () => {
  describe('normalizeBlogStatus', () => {
    it('normalizes known status strings', () => {
      expect(normalizeBlogStatus('published')).toBe('Published');
      expect(normalizeBlogStatus('DRAFT')).toBe('Draft');
      expect(normalizeBlogStatus('trash ')).toBe('Trash');
    });

    it('returns trimmed string or fallback for non-standard inputs', () => {
      expect(normalizeBlogStatus('Archived')).toBe('Archived');
      expect(normalizeBlogStatus(null)).toBe('');
      expect(normalizeBlogStatus(123)).toBe('');
    });
  });

  describe('slugifyTitle', () => {
    it('converts titles to url-friendly slugs', () => {
      expect(slugifyTitle('Hello World! 123')).toBe('hello-world-123');
      expect(slugifyTitle('   Special --- Chars #$%   ')).toBe('special-chars');
    });

    it('handles empty titles gracefully', () => {
      expect(slugifyTitle('')).toBe('');
      expect(slugifyTitle(null)).toBe('');
    });
  });

  describe('createClientBlogId', () => {
    it('creates a blog ID containing the slugified title', () => {
      const id = createClientBlogId('Test Title');
      expect(id).toMatch(/^test-title-[a-z0-9]+$/);
    });

    it('falls back to blog-post when title is empty', () => {
      const id = createClientBlogId('');
      expect(id).toMatch(/^blog-post-[a-z0-9]+$/);
    });
  });

  describe('getBlogMonthLabel', () => {
    it('formats date strings like YYYY-MM into Month YYYY', () => {
      expect(getBlogMonthLabel('2026-05-15')).toBe('May 2026');
      expect(getBlogMonthLabel('2025-11-01')).toBe('Nov 2025');
    });

    it('returns Unscheduled for invalid or missing inputs', () => {
      expect(getBlogMonthLabel('')).toBe('Unscheduled');
      expect(getBlogMonthLabel(null)).toBe('Unscheduled');
    });
  });

  describe('getAvatarInitials', () => {
    it('extracts up to 2 initials from a name', () => {
      expect(getAvatarInitials('John Doe')).toBe('JD');
      expect(getAvatarInitials('Alice')).toBe('A');
      expect(getAvatarInitials('Robert Baden Powell')).toBe('RB');
    });

    it('defaults to Admin initials when empty or no argument', () => {
      expect(getAvatarInitials('')).toBe('');
      expect(getAvatarInitials()).toBe('A');
    });
  });

  describe('toInputDate', () => {
    it('returns ISO YYYY-MM-DD for valid dates', () => {
      expect(toInputDate('2026-04-20')).toBe('2026-04-20');
      expect(toInputDate('2026-05-15')).toBe('2026-05-15');
    });

    it('returns empty string for empty or invalid inputs', () => {
      expect(toInputDate('')).toBe('');
      expect(toInputDate('---')).toBe('');
      expect(toInputDate('invalid date string')).toBe('');
    });

    it('parses fallback month/day/year values when direct Date parsing fails', () => {
      expect(toInputDate('May 10, 2026 extra')).toBe('2026-05-10');
    });
  });

  describe('extractFirstImageSrc', () => {
    it('extracts img src from HTML string', () => {
      const html = '<div><p>Text</p><img src="https://example.com/image.png" alt="img" /></div>';
      expect(extractFirstImageSrc(html)).toBe('https://example.com/image.png');
    });

    it('returns empty string when no img is found', () => {
      expect(extractFirstImageSrc('<p>No image here</p>')).toBe('');
      expect(extractFirstImageSrc('')).toBe('');
    });
  });

  describe('stripFirstImageFromHtml', () => {
    it('removes first img tag from HTML', () => {
      const html = '<div><img src="test.png" /><p>Content</p></div>';
      const stripped = stripFirstImageFromHtml(html);
      expect(stripped).not.toContain('<img');
    });

    it('removes an image and its empty wrapper from HTML', () => {
      expect(stripFirstImageFromHtml('<div><img src="test.png"/></div>')).toBe('');
    });

    it('returns original input when no image is present', () => {
      expect(stripFirstImageFromHtml('<p>Text</p>')).toBe('<p>Text</p>');
    });

    it('uses regex fallback when DOMParser is unavailable', () => {
      const originalParser = global.DOMParser;
      global.DOMParser = undefined;

      expect(extractFirstImageSrc('<img src=test.png>')).toBe('test.png');
      expect(stripFirstImageFromHtml('<img src="test.png" /><p>Hi</p>')).toBe('<p>Hi</p>');

      global.DOMParser = originalParser;
    });

    it('returns empty string when stripping an empty value', () => {
      expect(stripFirstImageFromHtml('')).toBe('');
    });
  });

  describe('normalizeBlog', () => {
    it('returns null when given falsy input', () => {
      expect(normalizeBlog(null)).toBeNull();
      expect(normalizeBlog(undefined)).toBeNull();
    });

    it('normalizes a complete blog object', () => {
      const input = {
        id: '1',
        title: 'Test Blog',
        status: 'published',
        content: 'Paragraph 1\n\nParagraph 2',
        date: 'May 10, 2026',
        category: 'News',
      };

      const normalized = normalizeBlog(input);
      expect(normalized.title).toBe('Test Blog');
      expect(normalized.status).toBe('Published');
      expect(normalized.content).toEqual(['Paragraph 1', 'Paragraph 2']);
      expect(normalized.tags).toEqual(['News']);
      expect(normalized.views).toBe(0);
    });

    it('formats date and resolves image URL for HTML content', () => {
      const input = {
        id: '2',
        title: 'HTML Post',
        status: 'published',
        content: '<p>Hello</p><img src="uploads/hello.png" />',
        publishedAt: '2026-09-15T00:00:00.000Z',
        category: 'News',
      };

      const normalized = normalizeBlog(input);
      expect(normalized.date).toBe('Sep 15, 2026');
      expect(normalized.publishDateValue).toBe('2026-09-15');
      expect(normalized.contentHtml).toContain('<p>Hello</p>');
      expect(normalized.image).toBe('/uploads/hello.png');
      expect(normalized.content).toEqual(['Hello']);
      expect(normalized.contentText).toContain('Hello');
    });

    it('handles array content and empty paragraphs', () => {
      const input = {
        id: '3',
        title: 'Array Content',
        status: 'draft',
        content: ['First paragraph', '', 'Second paragraph'],
        category: 'News',
      };

      const normalized = normalizeBlog(input);
      expect(normalized.content).toEqual(['First paragraph', 'Second paragraph']);
      expect(normalized.contentHtml).toContain('<p>First paragraph</p>');
      expect(normalized.contentHtml).toContain('<p>Second paragraph</p>');
      expect(normalized.date).toBe('---');
      expect(normalized.publishedAt).toBe('---');
    });

    it('returns no content HTML for non-string content values', () => {
      const normalized = normalizeBlog({
        id: '4',
        title: 'Invalid Content',
        status: 'draft',
        content: { foo: 'bar' },
        category: 'News',
      });

      expect(normalized.contentHtml).toBe('');
    });
  });

  describe('normalizeBlogList', () => {
    it('normalizes a collection of blogs from array or wrapped objects', () => {
      const list = [{ id: '1', title: 'Blog 1' }, { id: '2', title: 'Blog 2' }];
      expect(normalizeBlogList(list)).toHaveLength(2);
      expect(normalizeBlogList({ items: list })).toHaveLength(2);
      expect(normalizeBlogList({ blogs: list })).toHaveLength(2);
      expect(normalizeBlogList({ data: list })).toHaveLength(2);
    });

    it('returns empty array for invalid inputs', () => {
      expect(normalizeBlogList(null)).toEqual([]);
      expect(normalizeBlogList('invalid')).toEqual([]);
    });

    it('normalizes nested data payloads', () => {
      const payload = { data: { items: [{ id: '3', title: 'Nested Blog' }] } };
      expect(normalizeBlogList(payload)).toHaveLength(1);
    });

    it('returns empty array for no-item payloads', () => {
      expect(normalizeBlogList({})).toEqual([]);
    });
  });

  describe('unwrapBlogPayload', () => {
    it('unwraps single blog payload wrapped in object', () => {
      const blog = { id: '1', title: 'Single' };
      expect(unwrapBlogPayload({ blog })?.title).toBe('Single');
      expect(unwrapBlogPayload({ item: blog })?.title).toBe('Single');
      expect(unwrapBlogPayload({ data: blog })?.title).toBe('Single');
    });

    it('unwraps deeply nested blog payloads', () => {
      const payload = { data: { data: { item: { id: '2', title: 'Nested' } } } };
      expect(unwrapBlogPayload(payload)?.title).toBe('Nested');
    });

    it('returns null for invalid payload values', () => {
      expect(unwrapBlogPayload(null)).toBeNull();
      expect(unwrapBlogPayload(undefined)).toBeNull();
      expect(unwrapBlogPayload(0)).toBeNull();
    });
  });

  describe('buildBlogRequestPayload', () => {
    it('constructs request payload from form values and existing blog', () => {
      const formValues = {
        author: 'Jane Admin',
        category: 'Updates',
        content: 'Some text',
        excerpt: 'Excerpt text',
        featuredVideo: '',
        publishDate: '2026-06-01',
        readTime: '3 min Read',
        title: 'New Post',
      };

      const payload = buildBlogRequestPayload({ formValues, status: 'Published' });
      expect(payload.author).toBe('Jane Admin');
      expect(payload.category).toBe('Updates');
      expect(payload.status).toBe('Published');
      expect(payload.isVideo).toBe(false);
      expect(payload.publishedAt).toBe('2026-06-01T10:30:00.000Z');
    });

    it('preserves existing publishedAt if status is Published and no publishDate is provided', () => {
      const existingBlog = {
        id: '1',
        authorRole: 'Editor',
        image: '/uploads/old.png',
        publishedAt: '2026-05-01T10:30:00.000Z',
        url: 'http://old.url',
        views: 42,
      };

      const formValues = {
        author: 'Jane Admin',
        category: 'Updates',
        content: 'Some text',
        excerpt: 'Excerpt text',
        featuredVideo: 'http://video',
        publishDate: '',
        readTime: '3 min Read',
        title: 'New Post',
      };

      const payload = buildBlogRequestPayload({ existingBlog, formValues, status: 'Published' });
      expect(payload.publishedAt).toBe(existingBlog.publishedAt);
      expect(payload.url).toBe('http://video');
      expect(payload.isVideo).toBe(true);
      expect(payload.image).toBe('/uploads/old.png');
      expect(payload.views).toBe(42);
    });

    it('does not include publishedAt for draft posts without publishDate', () => {
      const formValues = {
        author: 'Jane Admin',
        category: 'Updates',
        content: 'Some text',
        excerpt: 'Excerpt text',
        featuredVideo: '',
        publishDate: '',
        readTime: '3 min Read',
        title: 'New Post',
      };

      const payload = buildBlogRequestPayload({ formValues, status: 'Draft' });
      expect(payload.publishedAt).toBeUndefined();
    });
  });

  describe('getEditorInitialValues', () => {
    it('returns default initial values for new post', () => {
      const defaults = getEditorInitialValues(null);
      expect(defaults.author).toBe('Admin');
      expect(defaults.category).toBe('New Store Openings');
      expect(defaults.readTime).toBe('2 min Read');
    });

    it('populates values from existing post', () => {
      const post = {
        author: 'Custom Author',
        category: 'Food',
        contentHtml: '<p>Content</p>',
        excerpt: 'Short summary',
        featuredVideo: 'http://video.url',
        publishDateValue: '2026-07-01',
        readTime: '5 min Read',
        tags: ['Food', 'Recipe'],
        title: 'Tasty Dishes',
      };

      const values = getEditorInitialValues(post);
      expect(values.author).toBe('Custom Author');
      expect(values.category).toBe('Food');
      expect(values.title).toBe('Tasty Dishes');
      expect(values.tags).toEqual(['Food', 'Recipe']);
    });
  });

  describe('buildBlogCounts', () => {
    it('aggregates status counts correctly', () => {
      const posts = [
        { status: 'Published' },
        { status: 'Published' },
        { status: 'Draft' },
        { status: 'Trash' },
      ];

      const counts = buildBlogCounts(posts);
      expect(counts.total).toBe(4);
      expect(counts.published).toBe(2);
      expect(counts.draft).toBe(1);
      expect(counts.trash).toBe(1);
    });
  });

  describe('getBlogFilterOptions', () => {
    it('extracts unique authors, categories, and months', () => {
      const posts = [
        { author: 'Alice', category: 'News', publishDateValue: '2026-01-10' },
        { author: 'Bob', category: 'News', publishDateValue: '2026-01-15' },
        { author: 'Alice', category: 'Events', publishDateValue: '2026-02-10' },
      ];

      const filterOptions = getBlogFilterOptions(posts);
      expect(filterOptions.authors).toEqual(['Alice', 'Bob']);
      expect(filterOptions.categories).toEqual(['News', 'Events']);
      expect(filterOptions.months).toEqual(['Jan 2026', 'Feb 2026']);
    });

    it('returns Unscheduled for invalid month values', () => {
      const posts = [{ author: 'Alice', category: 'News', publishDateValue: '2026-13' }];
      const filterOptions = getBlogFilterOptions(posts);
      expect(filterOptions.months).toEqual(['Unscheduled']);
    });
  });

  describe('getFallbackPublishedBlogs', () => {
    it('returns published fallback blogs up to requested limit', () => {
      const blogs = getFallbackPublishedBlogs(2);
      expect(blogs.length).toBeLessThanOrEqual(2);
    });
  });
});
