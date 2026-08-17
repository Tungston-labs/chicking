import blogReducer, {
  clearBlogMutationState,
  clearCurrentBlog,
  clearPublicCurrentBlog,
  fetchBlogsList,
  fetchPublicBlogsList,
  fetchBlogById,
  fetchPublicBlogById,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
  selectBlogState,
  selectAdminBlogs,
  selectPublishedBlogs,
} from './blogSlice.js';

describe('blogSlice', () => {
  const initialState = {
    createError: '',
    createStatus: 'idle',
    currentBlog: null,
    currentBlogError: '',
    currentBlogStatus: 'idle',
    deleteError: '',
    deleteStatus: 'idle',
    items: [],
    listError: '',
    listStatus: 'idle',
    publicCurrentBlog: null,
    publicCurrentBlogError: '',
    publicCurrentBlogStatus: 'idle',
    publicItems: [],
    publicListError: '',
    publicListStatus: 'idle',
    updateError: '',
    updateStatus: 'idle',
  };

  it('returns initial state on empty action', () => {
    expect(blogReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('reducers', () => {
    it('handles clearBlogMutationState', () => {
      const state = {
        ...initialState,
        createError: 'Error',
        createStatus: 'failed',
        deleteError: 'Error',
        deleteStatus: 'failed',
        updateError: 'Error',
        updateStatus: 'failed',
      };

      const nextState = blogReducer(state, clearBlogMutationState());
      expect(nextState.createError).toBe('');
      expect(nextState.createStatus).toBe('idle');
      expect(nextState.deleteError).toBe('');
      expect(nextState.deleteStatus).toBe('idle');
      expect(nextState.updateError).toBe('');
      expect(nextState.updateStatus).toBe('idle');
    });

    it('handles clearCurrentBlog', () => {
      const state = {
        ...initialState,
        currentBlog: { id: '1' },
        currentBlogError: 'Error',
        currentBlogStatus: 'failed',
      };

      const nextState = blogReducer(state, clearCurrentBlog());
      expect(nextState.currentBlog).toBeNull();
      expect(nextState.currentBlogError).toBe('');
      expect(nextState.currentBlogStatus).toBe('idle');
    });

    it('handles clearPublicCurrentBlog', () => {
      const state = {
        ...initialState,
        publicCurrentBlog: { id: '1' },
        publicCurrentBlogError: 'Error',
        publicCurrentBlogStatus: 'failed',
      };

      const nextState = blogReducer(state, clearPublicCurrentBlog());
      expect(nextState.publicCurrentBlog).toBeNull();
      expect(nextState.publicCurrentBlogError).toBe('');
      expect(nextState.publicCurrentBlogStatus).toBe('idle');
    });
  });

  describe('extraReducers', () => {
    it('handles fetchBlogsList pending, fulfilled, rejected', () => {
      let state = blogReducer(initialState, fetchBlogsList.pending('requestId'));
      expect(state.listStatus).toBe('loading');

      const mockItems = [{ id: '1', title: 'Blog 1' }];
      state = blogReducer(state, fetchBlogsList.fulfilled(mockItems, 'requestId'));
      expect(state.listStatus).toBe('succeeded');
      expect(state.items).toEqual(mockItems);

      state = blogReducer(state, fetchBlogsList.rejected(null, 'requestId', null, 'Failed'));
      expect(state.listStatus).toBe('failed');
      expect(state.listError).toBe('Failed');
      expect(state.items).toEqual([]);
    });

    it('handles createBlogPost fulfilled', () => {
      const newBlog = { id: '10', title: 'New Blog' };
      const state = blogReducer(initialState, createBlogPost.fulfilled(newBlog, 'requestId', {}));
      expect(state.createStatus).toBe('succeeded');
      expect(state.currentBlog).toEqual(newBlog);
      expect(state.items[0]).toEqual(newBlog);
    });

    it('handles deleteBlogPost fulfilled', () => {
      const stateWithBlog = {
        ...initialState,
        items: [{ id: '1' }, { id: '2' }],
        currentBlog: { id: '1' },
      };

      const nextState = blogReducer(stateWithBlog, deleteBlogPost.fulfilled('1', 'requestId', '1'));
      expect(nextState.items).toHaveLength(1);
      expect(nextState.items[0].id).toBe('2');
      expect(nextState.currentBlog).toBeNull();
    });
  });

  describe('selectors', () => {
    it('selects state correctly', () => {
      const state = {
        blogs: {
          ...initialState,
          items: [{ id: '1', status: 'Published' }, { id: '2', status: 'Draft' }],
          publicItems: [{ id: '1', status: 'Published' }],
        },
      };

      expect(selectBlogState(state)).toEqual(state.blogs);
      expect(selectAdminBlogs(state)).toHaveLength(2);
      expect(selectPublishedBlogs(state)).toHaveLength(1);
    });
  });
});
