import { blogPosts as fallbackBlogPosts } from "../../components/HomeSections/data/homeSectionsData.js";

export const BLOG_PAGE_SIZE = 5;
export const BLOG_FETCH_PAGE_SIZE = 100;

const DEFAULT_AUTHOR_ROLE = "Super Admin";
const EMPTY_PUBLISHED_AT = "---";

const fallbackImage = fallbackBlogPosts[0]?.image || null;

const monthLookup = {
  Apr: "04",
  Aug: "08",
  Dec: "12",
  Feb: "02",
  Jan: "01",
  Jul: "07",
  Jun: "06",
  Mar: "03",
  May: "05",
  Nov: "11",
  Oct: "10",
  Sep: "09",
};

const reverseMonthLookup = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Aug",
  "09": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec",
};

export const slugifyTitle = (title = "") =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);

export const createClientBlogId = (title = "") => `${slugifyTitle(title) || "blog-post"}-${Date.now().toString(36)}`;

const formatDateLabel = (inputDate) => {
  if (!inputDate) {
    return "---";
  }

  const [year, month, day] = inputDate.split("-");
  const monthLabel = reverseMonthLookup[month];

  if (!year || !monthLabel || !day) {
    return "---";
  }

  return `${monthLabel} ${String(Number(day)).padStart(2, "0")}, ${year}`;
};

export const getBlogMonthLabel = (inputDate) => {
  if (!inputDate) {
    return "Unscheduled";
  }

  const [year, month] = inputDate.split("-");
  const monthLabel = reverseMonthLookup[month];

  return monthLabel && year ? `${monthLabel} ${year}` : "Unscheduled";
};

export const getAvatarInitials = (name = "Admin") =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

export const toInputDate = (value) => {
  if (!value || value === EMPTY_PUBLISHED_AT) {
    return "";
  }

  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return value;
  }

  const directDate = new Date(value);

  if (!Number.isNaN(directDate.getTime())) {
    return directDate.toISOString().slice(0, 10);
  }

  const [month, dayWithComma, year] = value.split(" ");
  const monthValue = monthLookup[month];

  if (!monthValue || !dayWithComma || !year) {
    return "";
  }

  const day = dayWithComma.replace(",", "").padStart(2, "0");

  return `${year}-${monthValue}-${day}`;
};

const splitContent = (content) => {
  if (Array.isArray(content)) {
    return content.filter(Boolean);
  }

  if (typeof content !== "string") {
    return [];
  }

  return content
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
};

const joinContent = (content) => splitContent(content).join("\n\n");

const normalizePublishedAt = (publishedAt, dateLabel) => {
  if (publishedAt && publishedAt !== EMPTY_PUBLISHED_AT) {
    return publishedAt;
  }

  return dateLabel || EMPTY_PUBLISHED_AT;
};

export const normalizeBlog = (blog) => {
  if (!blog) {
    return null;
  }

  const contentBlocks = splitContent(blog.content);
  const publishDateValue = toInputDate(blog.publishedAt) || toInputDate(blog.date);

  return {
    ...blog,
    authorRole: blog.authorRole || DEFAULT_AUTHOR_ROLE,
    commentThread: Array.isArray(blog.commentThread) ? blog.commentThread : [],
    comments: Number(blog.comments || 0),
    content: contentBlocks,
    contentText: joinContent(blog.content),
    date: blog.date || formatDateLabel(publishDateValue),
    featuredVideo: blog.isVideo ? blog.url || "" : "",
    image: blog.image || fallbackImage,
    pendingComments: Number(blog.pendingComments || 0),
    publishDateValue,
    publishedAt: normalizePublishedAt(blog.publishedAt, blog.date),
    readTime: blog.readTime || "2 min Read",
    tags: Array.isArray(blog.tags) && blog.tags.length ? blog.tags : [blog.category].filter(Boolean),
    views: Number(blog.views || 0),
  };
};

export const normalizeBlogList = (payload) => {
  if (Array.isArray(payload)) {
    return payload.map(normalizeBlog).filter(Boolean);
  }

  if (Array.isArray(payload?.items)) {
    return payload.items.map(normalizeBlog).filter(Boolean);
  }

  if (Array.isArray(payload?.blogs)) {
    return payload.blogs.map(normalizeBlog).filter(Boolean);
  }

  return [];
};

export const unwrapBlogPayload = (payload) => normalizeBlog(payload?.blog || payload);

const resolvePublishedAt = ({ existingBlog, publishDate, status }) => {
  if (publishDate) {
    return new Date(`${publishDate}T10:30:00.000Z`).toISOString();
  }

  if (status === "Published") {
    return existingBlog?.publishedAt && existingBlog.publishedAt !== EMPTY_PUBLISHED_AT
      ? existingBlog.publishedAt
      : new Date().toISOString();
  }

  return undefined;
};

export const buildBlogRequestPayload = ({ existingBlog, formValues, status }) => ({
  author: formValues.author.trim(),
  authorRole: existingBlog?.authorRole || DEFAULT_AUTHOR_ROLE,
  category: formValues.category.trim(),
  content: formValues.content.trim(),
  excerpt: formValues.excerpt.trim(),
  id: existingBlog?.id || createClientBlogId(formValues.title),
  image: existingBlog?.image || fallbackImage,
  isVideo: Boolean(formValues.featuredVideo.trim()),
  publishedAt: resolvePublishedAt({
    existingBlog,
    publishDate: formValues.publishDate,
    status,
  }),
  readTime: formValues.readTime,
  status,
  title: formValues.title.trim(),
  url: formValues.featuredVideo.trim() || existingBlog?.url || null,
  views: existingBlog?.views || 0,
});

export const getEditorInitialValues = (post) => ({
  author: post?.author || "Admin",
  category: post?.category || "New Store Openings",
  content: post?.contentText || "",
  excerpt: post?.excerpt || "",
  featuredVideo: post?.featuredVideo || "",
  publishDate: post?.publishDateValue || "",
  readTime: post?.readTime || "2 min Read",
  tags: post?.tags || [],
  title: post?.title || "",
});

export const buildBlogCounts = (posts) =>
  posts.reduce(
    (accumulator, post) => ({
      ...accumulator,
      total: accumulator.total + 1,
      [post.status.toLowerCase()]: (accumulator[post.status.toLowerCase()] || 0) + 1,
    }),
    { total: 0, published: 0, draft: 0, trash: 0 }
  );

export const getBlogFilterOptions = (posts) => ({
  authors: [...new Set(posts.map((post) => post.author).filter(Boolean))],
  categories: [...new Set(posts.map((post) => post.category).filter(Boolean))],
  months: [...new Set(posts.map((post) => getBlogMonthLabel(post.publishDateValue)).filter(Boolean))],
});

export const getFallbackPublishedBlogs = (limit = 4) =>
  fallbackBlogPosts.filter((post) => post.status === "Published").slice(0, limit);
