import { blogPosts } from "../HomeSections/data/homeSectionsData.js";

const STORAGE_KEY = "chicking-admin-blog-posts-v1";

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

const blogContentMap = {
  "blog-001": [
    "Chicking continues to expand its footprint with a stronger focus on high-potential locations, sharper store formats, and launch campaigns that create immediate community traction.",
    "The latest milestone reflects a broader growth strategy built on operational discipline, franchise partner support, and customer-first experiences that scale well across regions.",
    "From store design to team readiness, the rollout plan combines local activation with brand consistency so each opening can build momentum quickly and sustain it.",
  ],
  "blog-002": [
    "The South America launch marks an important chapter for the brand, introducing the Chicking experience to a new customer base with strong interest in quality quick service dining.",
    "Training, onboarding, and market adaptation played a central role in preparing the team for launch, while preserving the flavor, service, and visual identity customers expect.",
    "As more regions come online, each opening strengthens the system and creates a repeatable model for future expansion in emerging and established markets alike.",
  ],
  "blog-003": [
    "The UK market offers a compelling mix of brand-aware customers, delivery-driven growth, and demand for reliable quick service restaurant concepts with international credibility.",
    "For prospective partners, the franchise model is supported by brand systems, launch guidance, menu innovation, and structured training that reduces ramp-up uncertainty.",
    "This opportunity is designed for operators who want a recognized concept with room to grow across multiple trade areas and formats.",
  ],
  "blog-004": [
    "The 21st UAE store opening highlights how consistent execution and targeted market selection can accelerate brand visibility without compromising the guest experience.",
    "Every opening is backed by operational planning, team development, and on-ground launch support so the location can start strong from day one.",
    "This milestone also reinforces the UAE's role as a strategic home market where new ideas can be tested and scaled across the wider network.",
  ],
  "blog-005": [
    "Priority markets are being assessed based on customer demand, franchise readiness, logistics infrastructure, and the ability to build long-term brand presence.",
    "Upcoming locations are expected to blend proven store formats with localized planning so each site aligns with its surrounding trade area and audience expectations.",
    "The near-term pipeline reflects a disciplined expansion strategy rather than a volume-first approach, helping preserve quality across future launches.",
  ],
  "blog-006": [
    "Successful store launches depend on more than location selection. They require coordinated operations, hiring, training, promotional planning, and local execution across several teams.",
    "The internal playbook helps standardize launch readiness, giving franchise partners a clearer path from pre-opening activity to stable day-to-day operations.",
    "That structure has become a meaningful advantage as the brand opens in more markets with different customer habits and business conditions.",
  ],
};

const commentThreadMap = {
  "blog-001": [
    {
      id: "c-001",
      author: "Maude Hall",
      age: "14 min",
      likes: 2,
      message: "I'm interested in starting a Chicking franchise in Kochi. Can you share the investment details?",
    },
    {
      id: "c-002",
      author: "Dianne Russell",
      age: "24 min",
      likes: 1,
      message: "What is the minimum space required to open a Chicking outlet?",
    },
    {
      id: "c-003",
      author: "Esther Howard",
      age: "26 min",
      likes: 12,
      message: "Can I start with a small town format or is it only for major cities?",
    },
  ],
  "blog-003": [
    {
      id: "c-004",
      author: "Wade Warren",
      age: "1 hr",
      likes: 4,
      message: "Is there a dedicated UK launch support team for new franchise partners?",
    },
    {
      id: "c-005",
      author: "Jenny Wilson",
      age: "2 hr",
      likes: 3,
      message: "Would this opportunity be suitable for operators who already manage another QSR brand?",
    },
  ],
  "blog-004": [
    {
      id: "c-006",
      author: "Kathryn Murphy",
      age: "42 min",
      likes: 5,
      message: "Loved seeing this milestone. Are there plans for more openings in Sharjah this year?",
    },
  ],
  "blog-006": [
    {
      id: "c-007",
      author: "Savannah Nguyen",
      age: "50 min",
      likes: 2,
      message: "The behind-the-scenes playbook would make a great webinar topic for partners.",
    },
  ],
};

const tagMap = {
  "blog-001": ["Store Opening", "Flagship", "Growth"],
  "blog-002": ["South America", "Launch", "Expansion"],
  "blog-003": ["UK", "Franchise", "Opportunity"],
  "blog-004": ["UAE", "Grand Opening", "Milestone"],
  "blog-005": ["Expansion", "Markets", "Pipeline"],
  "blog-006": ["Operations", "Launch", "Training"],
};

const fallbackContent = [
  "This post is ready for review inside the admin dashboard.",
  "Use the editor to refine the headline, summary, tags, and long-form body content before publishing.",
];

const dateLabelToInput = (dateLabel) => {
  if (!dateLabel || dateLabel === "---") {
    return "";
  }

  const [month, dayWithComma, year] = dateLabel.split(" ");
  const monthValue = monthLookup[month];

  if (!monthValue || !dayWithComma || !year) {
    return "";
  }

  const day = dayWithComma.replace(",", "").padStart(2, "0");

  return `${year}-${monthValue}-${day}`;
};

export const formatInputDate = (inputDate) => {
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

const slugifyTitle = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);

const createSeedPosts = () =>
  blogPosts.map((post, index) => {
    const publishDateValue = dateLabelToInput(post.date);

    return {
      ...post,
      content: blogContentMap[post.id] || fallbackContent,
      commentThread: commentThreadMap[post.id] || [],
      featuredVideo: post.isVideo ? post.url : "",
      publishDateValue,
      tags: tagMap[post.id] || [post.category],
      updatedAt: `2026-05-${String(20 - index).padStart(2, "0")}T10:30:00.000Z`,
    };
  });

export const seedAdminBlogPosts = createSeedPosts();

export const loadAdminBlogPosts = () => {
  if (typeof window === "undefined") {
    return seedAdminBlogPosts;
  }

  const storedPosts = window.localStorage.getItem(STORAGE_KEY);

  if (!storedPosts) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seedAdminBlogPosts));
    return seedAdminBlogPosts;
  }

  try {
    const parsedPosts = JSON.parse(storedPosts);

    return Array.isArray(parsedPosts) && parsedPosts.length ? parsedPosts : seedAdminBlogPosts;
  } catch {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seedAdminBlogPosts));
    return seedAdminBlogPosts;
  }
};

export const persistAdminBlogPosts = (posts) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
};

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
  authors: [...new Set(posts.map((post) => post.author))],
  categories: [...new Set(posts.map((post) => post.category))],
  months: [...new Set(posts.map((post) => getBlogMonthLabel(post.publishDateValue)).filter(Boolean))],
});

export const getEditorInitialValues = (post) => ({
  author: post?.author || "Robert Pattinson",
  category: post?.category || "New Store Openings",
  content: post?.content?.join("\n\n") || "",
  excerpt: post?.excerpt || "",
  featuredVideo: post?.featuredVideo || "",
  publishDate: post?.publishDateValue || "",
  readTime: post?.readTime || "5 min Read",
  tags: post?.tags || [],
  title: post?.title || "",
});

export const createBlogPayload = ({ existingPost, formValues, status }) => {
  const contentParagraphs = formValues.content
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
  const nextTitle = formValues.title.trim() || "Untitled Blog Post";
  const fallbackPublishDate =
    status === "Published" && !formValues.publishDate ? new Date().toISOString().slice(0, 10) : formValues.publishDate;
  const nextDate = formatInputDate(fallbackPublishDate);
  const nextId = existingPost?.id || `${slugifyTitle(nextTitle) || "blog-post"}-${Date.now().toString(36)}`;
  const nextStatus = status || existingPost?.status || "Draft";

  return {
    ...existingPost,
    author: formValues.author.trim() || existingPost?.author || "Robert Pattinson",
    authorRole: existingPost?.authorRole || "Super Admin",
    category: formValues.category,
    commentThread: existingPost?.commentThread || [],
    comments: existingPost?.comments || 0,
    content: contentParagraphs.length ? contentParagraphs : fallbackContent,
    date: nextDate,
    excerpt: formValues.excerpt.trim() || contentParagraphs[0] || "No excerpt added yet.",
    featuredVideo: formValues.featuredVideo.trim(),
    id: nextId,
    image: existingPost?.image || blogPosts[0].image,
    isVideo: Boolean(formValues.featuredVideo.trim()),
    publishDateValue: fallbackPublishDate,
    publishedAt: nextStatus === "Published" && nextDate !== "---" ? `${nextDate} 10:30 AM` : "---",
    readTime: formValues.readTime,
    status: nextStatus,
    tags: formValues.tags,
    title: nextTitle,
    updatedAt: new Date().toISOString(),
    url: formValues.featuredVideo.trim() || existingPost?.url || "https://www.chickingprofile.com/blog",
    views: existingPost?.views || 0,
  };
};

export const upsertBlogPost = (posts, nextPost) => {
  const existingIndex = posts.findIndex((post) => post.id === nextPost.id);

  if (existingIndex === -1) {
    return [nextPost, ...posts];
  }

  return posts.map((post) => (post.id === nextPost.id ? nextPost : post));
};

export const moveBlogPostToTrash = (posts, blogId) =>
  posts.map((post) =>
    post.id === blogId
      ? {
          ...post,
          publishedAt: "---",
          status: "Trash",
          updatedAt: new Date().toISOString(),
        }
      : post
  );

export const addCommentToBlogPost = (posts, blogId, message) =>
  posts.map((post) =>
    post.id === blogId
      ? {
          ...post,
          commentThread: [
            ...post.commentThread,
            {
              id: `comment-${Date.now().toString(36)}`,
              author: "Admin Reply",
              age: "Just now",
              likes: 0,
              message,
            },
          ],
          comments: post.comments + 1,
          updatedAt: new Date().toISOString(),
        }
      : post
  );

export const findBlogPost = (posts, blogId) => posts.find((post) => post.id === blogId);
