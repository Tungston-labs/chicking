import {
  ADMIN_COMMENT_STATUS_OPTIONS,
  normalizeAdminComment,
  normalizeAdminCommentList,
  extractAdminComment,
  formatAdminCommentDate,
  getAdminCommentSummary,
} from './adminBlogCommentUtils.js';

describe('adminBlogCommentUtils', () => {
  it('exports correct ADMIN_COMMENT_STATUS_OPTIONS', () => {
    expect(ADMIN_COMMENT_STATUS_OPTIONS).toEqual(['Pending', 'Approved', 'Rejected']);
  });

  describe('normalizeAdminComment', () => {
    it('returns null for null or non-object input', () => {
      expect(normalizeAdminComment(null)).toBeNull();
      expect(normalizeAdminComment(undefined)).toBeNull();
      expect(normalizeAdminComment('string')).toBeNull();
    });

    it('normalizes comment status and reply fields', () => {
      const comment = {
        id: 'c1',
        status: 'approved',
        reply: 'Thank you for your feedback!',
      };

      const normalized = normalizeAdminComment(comment);
      expect(normalized.status).toBe('Approved');
      expect(normalized.reply).toEqual({
        adminName: 'Admin',
        message: 'Thank you for your feedback!',
      });
      expect(normalized.email).toBe('');
    });

    it('handles nested reply object correctly', () => {
      const comment = {
        id: 'c2',
        status: 'pending',
        reply: { author: 'SuperAdmin', message: 'Under review' },
      };

      const normalized = normalizeAdminComment(comment);
      expect(normalized.reply).toEqual({
        author: 'SuperAdmin',
        adminName: 'SuperAdmin',
        message: 'Under review',
      });
    });
  });

  describe('normalizeAdminCommentList', () => {
    it('extracts and normalizes comment collections from arrays and wrapped objects', () => {
      const rawComments = [
        { id: '1', status: 'approved' },
        { id: '2', status: 'pending' },
      ];

      expect(normalizeAdminCommentList(rawComments)).toHaveLength(2);
      expect(normalizeAdminCommentList({ comments: rawComments })).toHaveLength(2);
      expect(normalizeAdminCommentList({ data: rawComments })).toHaveLength(2);
      expect(normalizeAdminCommentList({ data: { comments: rawComments } })).toHaveLength(2);
    });

    it('returns empty array for invalid inputs', () => {
      expect(normalizeAdminCommentList(null)).toEqual([]);
      expect(normalizeAdminCommentList('invalid')).toEqual([]);
    });
  });

  describe('extractAdminComment', () => {
    it('unwraps single comment payload', () => {
      const comment = { id: 'c10', status: 'approved' };
      expect(extractAdminComment({ comment })?.id).toBe('c10');
      expect(extractAdminComment({ item: comment })?.id).toBe('c10');
      expect(extractAdminComment({ data: comment })?.id).toBe('c10');
    });
  });

  describe('formatAdminCommentDate', () => {
    it('returns "Recently" for missing or invalid date strings', () => {
      expect(formatAdminCommentDate('')).toBe('Recently');
      expect(formatAdminCommentDate(null)).toBe('Recently');
      expect(formatAdminCommentDate('invalid-date')).toBe('Recently');
    });

    it('formats valid ISO date strings', () => {
      const formatted = formatAdminCommentDate('2026-05-10T12:00:00.000Z');
      expect(formatted).not.toBe('Recently');
      expect(formatted).toContain('2026');
    });
  });

  describe('getAdminCommentSummary', () => {
    it('computes correct status totals', () => {
      const comments = [
        { status: 'Approved' },
        { status: 'Approved' },
        { status: 'Pending' },
        { status: 'Rejected' },
      ];

      const summary = getAdminCommentSummary(comments);
      expect(summary).toEqual({
        approved: 2,
        pending: 1,
        rejected: 1,
        total: 4,
      });
    });
  });
});
