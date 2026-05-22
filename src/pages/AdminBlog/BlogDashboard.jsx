import { useEffect, useState } from "react";
import { FiEdit3, FiFileText, FiSend, FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import AdminBlogLayout from "../../components/AdminBlog/AdminBlogLayout.jsx";
import AdminBlogTable from "../../components/AdminBlog/AdminBlogTable.jsx";
import {
  buildBlogCounts,
  getBlogMonthLabel,
  getBlogFilterOptions,
} from "../../store/blog/blogUtils.js";
import {
  deleteBlogPost,
  fetchBlogsList,
  selectAdminBlogs,
  selectBlogListError,
  selectBlogListStatus,
  selectBlogMutationState,
} from "../../store/blog/blogSlice.js";
import {
  SectionHeading,
  StatCard,
  StatIcon,
  StatText,
  StatsGrid,
} from "../../components/AdminBlog/AdminBlog.styles.js";

const pageSize = 5;

const statusMap = {
  "All Posts": null,
  Draft: "Draft",
  Published: "Published",
  Trash: "Trash",
};

const BlogDashboard = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAdminBlogs);
  const listError = useSelector(selectBlogListError);
  const listStatus = useSelector(selectBlogListStatus);
  const { deleteError } = useSelector(selectBlogMutationState);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeStatus, setActiveStatus] = useState("All Posts");
  const [filters, setFilters] = useState({
    author: "All Authors",
    category: "All Categories",
    month: "All Time",
  });
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchBlogsList());
  }, [dispatch]);

  const counts = buildBlogCounts(posts);
  const filterOptions = getBlogFilterOptions(posts);
  const normalizedSearch = searchTerm.trim().toLowerCase();
  const visiblePosts = posts.filter((post) => {
    const matchesStatus = statusMap[activeStatus] ? post.status === statusMap[activeStatus] : true;
    const matchesCategory = filters.category === "All Categories" ? true : post.category === filters.category;
    const matchesAuthor = filters.author === "All Authors" ? true : post.author === filters.author;
    const matchesMonth = filters.month === "All Time" ? true : filters.month === getBlogMonthLabel(post.publishDateValue);
    const matchesSearch = normalizedSearch
      ? [post.title, post.excerpt, post.category, post.author].join(" ").toLowerCase().includes(normalizedSearch)
      : true;

    return matchesStatus && matchesCategory && matchesAuthor && matchesMonth && matchesSearch;
  });

  const totalPages = Math.max(1, Math.ceil(visiblePosts.length / pageSize));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const pageStart = (safeCurrentPage - 1) * pageSize;
  const paginatedPosts = visiblePosts.slice(pageStart, pageStart + pageSize);

  const statCards = [
    { icon: FiFileText, label: "Total Post", value: String(counts.total).padStart(2, "0") },
    { icon: FiEdit3, label: "Drafts", value: String(counts.draft).padStart(2, "0") },
    { icon: FiSend, label: "Published", value: String(counts.published).padStart(2, "0") },
    { icon: FiTrash2, label: "Trash", value: String(counts.trash).padStart(2, "0") },
  ];

  const handleFilterChange = (field, value) => {
    if (field === "reset") {
      setFilters({
        author: "All Authors",
        category: "All Categories",
        month: "All Time",
      });
      setCurrentPage(1);
      return;
    }

    setFilters((currentFilters) => ({
      ...currentFilters,
      [field]: value,
    }));
    setCurrentPage(1);
  };

  const handleDelete = (blogId) => {
    const shouldTrash = window.confirm("Move this blog post to trash?");

    if (!shouldTrash) {
      return;
    }

    dispatch(deleteBlogPost(blogId));
  };

  return (
    <AdminBlogLayout
      searchProps={{
        onChange: (event) => {
          setSearchTerm(event.target.value);
          setCurrentPage(1);
        },
        placeholder: "Search Here",
        value: searchTerm,
      }}
      title="Blog Dashboard"
    >
      <SectionHeading>
        <h2>All Posts</h2>
        <p>Manage, review, search, and open each blog post from one responsive dashboard.</p>
      </SectionHeading>
      <StatsGrid>
        {statCards.map(({ icon: Icon, label, value }) => (
          <StatCard key={label}>
            <StatIcon>
              <Icon />
            </StatIcon>
            <StatText>
              <strong>{value}</strong>
              <span>{label}</span>
            </StatText>
          </StatCard>
        ))}
      </StatsGrid>
      <AdminBlogTable
        activeStatus={activeStatus}
        counts={counts}
        currentPage={safeCurrentPage}
        error={listError || deleteError}
        filters={filters}
        isLoading={listStatus === "loading"}
        onDelete={handleDelete}
        onFilterChange={handleFilterChange}
        onPageChange={setCurrentPage}
        onStatusChange={(value) => {
          setActiveStatus(value);
          setCurrentPage(1);
        }}
        options={filterOptions}
        posts={paginatedPosts}
        totalPages={totalPages}
      />
    </AdminBlogLayout>
  );
};

export default BlogDashboard;
