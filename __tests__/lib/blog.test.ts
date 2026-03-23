import { getAllPosts, getPostBySlug, getPostsByCategory, getLatestPosts, getRelatedPosts } from '@/lib/blog';

describe('blog utilities', () => {
  describe('getAllPosts', () => {
    it('should return all blog posts', () => {
      const posts = getAllPosts();
      expect(Array.isArray(posts)).toBe(true);
      expect(posts.length).toBeGreaterThan(0);
    });

    it('should return posts sorted by date (newest first)', () => {
      const posts = getAllPosts();
      for (let i = 1; i < posts.length; i++) {
        expect(new Date(posts[i - 1].date).getTime()).toBeGreaterThanOrEqual(
          new Date(posts[i].date).getTime()
        );
      }
    });

    it('should include required fields in each post', () => {
      const posts = getAllPosts();
      posts.forEach((post) => {
        expect(post.slug).toBeTruthy();
        expect(post.title).toBeTruthy();
        expect(post.date).toBeTruthy();
        expect(post.category).toBeTruthy();
        expect(post.content).toBeTruthy();
      });
    });
  });

  describe('getPostBySlug', () => {
    it('should return a post by slug', () => {
      const post = getPostBySlug('labor-overtime-claim');
      expect(post).not.toBeNull();
      expect(post?.title).toContain('残業代');
    });

    it('should return null for non-existent slug', () => {
      const post = getPostBySlug('non-existent-post');
      expect(post).toBeNull();
    });
  });

  describe('getPostsByCategory', () => {
    it('should filter posts by category', () => {
      const posts = getPostsByCategory('labor');
      expect(posts.length).toBeGreaterThan(0);
      posts.forEach((post) => {
        expect(post.category).toBe('labor');
      });
    });
  });

  describe('getLatestPosts', () => {
    it('should return the specified number of posts', () => {
      const posts = getLatestPosts(2);
      expect(posts.length).toBeLessThanOrEqual(2);
    });
  });

  describe('getRelatedPosts', () => {
    it('should return posts from the same category excluding the current post', () => {
      const related = getRelatedPosts('labor-overtime-claim', 3);
      related.forEach((post) => {
        expect(post.slug).not.toBe('labor-overtime-claim');
      });
    });
  });
});
