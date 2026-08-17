import {
  EMPTY_COMMENT_FORM,
  normalizePublicComments,
  buildCommentPayload,
  formatCommentDate,
  getArticleSourceLabel,
} from './newsArticleCommentUtils.js';

describe('newsArticleCommentUtils', () => {
  it('exports correct EMPTY_COMMENT_FORM', () => {
    expect(EMPTY_COMMENT_FORM).toEqual({
      email: '',
      message: '',
      name: '',
    });
  });

  describe('normalizePublicComments', () => {
    it('normalizes comments from array or wrapped objects', () => {
      const comments = [{ id: '1', name: 'User 1' }];
      expect(normalizePublicComments(comments)).toEqual(comments);
      expect(normalizePublicComments({ comments })).toEqual(comments);
      expect(normalizePublicComments({ data: comments })).toEqual(comments);
      expect(normalizePublicComments({ data: { comments } })).toEqual(comments);
    });

    it('returns empty array for invalid inputs', () => {
      expect(normalizePublicComments(null)).toEqual([]);
      expect(normalizePublicComments('invalid')).toEqual([]);
    });
  });

  describe('buildCommentPayload', () => {
    it('trims whitespace from form fields', () => {
      const payload = buildCommentPayload({
        email: '  user@example.com ',
        message: ' Great article! ',
        name: ' John ',
      });

      expect(payload).toEqual({
        email: 'user@example.com',
        message: 'Great article!',
        name: 'John',
      });
    });
  });

  describe('formatCommentDate', () => {
    it('returns "Recently" for missing or invalid dates', () => {
      expect(formatCommentDate('')).toBe('Recently');
      expect(formatCommentDate(null)).toBe('Recently');
      expect(formatCommentDate('invalid')).toBe('Recently');
    });

    it('formats valid ISO date strings', () => {
      const formatted = formatCommentDate('2026-06-15T10:00:00.000Z');
      expect(formatted).not.toBe('Recently');
      expect(formatted).toContain('2026');
    });
  });

  describe('getArticleSourceLabel', () => {
    it('returns the URL if it starts with http or https', () => {
      expect(getArticleSourceLabel('https://example.com/news')).toBe('https://example.com/news');
      expect(getArticleSourceLabel('http://test.com')).toBe('http://test.com');
    });

    it('returns fallback label for invalid/relative URLs', () => {
      expect(getArticleSourceLabel('')).toBe('Open linked media');
      expect(getArticleSourceLabel(null)).toBe('Open linked media');
      expect(getArticleSourceLabel('/local/path')).toBe('Open linked media');
    });
  });
});
