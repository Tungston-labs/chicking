import { Link } from "react-router-dom";
import {
  FiChevronLeft,
  FiChevronRight,
  FiEdit2,
  FiEye,
  FiFilter,
  FiTrash2,
} from "react-icons/fi";
import {
  ActionGroup,
  AuthorCell,
  AuthorCellText,
  EmptyState,
  EmptyText,
  EmptyTitle,
  FilterButton,
  FilterControl,
  FilterRow,
  IconButton,
  MiniAvatar,
  MobileMeta,
  MobilePostCard,
  MobilePostGrid,
  MobilePostHeader,
  MobilePostList,
  PageChip,
  Pagination,
  PostExcerpt,
  PostTitle,
  StatusPill,
  Table,
  TableCheckbox,
  TableWrap,
  Tab,
  TabRow,
  TableCard,
  Toolbar,
} from "./AdminBlog.styles.js";

const statusOrder = ["All Posts", "Published", "Draft", "Trash"];

const AdminBlogTable = ({
  activeStatus,
  counts,
  currentPage,
  filters,
  onDelete,
  onFilterChange,
  onPageChange,
  onStatusChange,
  posts,
  totalPages,
  options,
}) => (
  <TableCard>
    <Toolbar>
      <TabRow>
        {statusOrder.map((label) => (
          <Tab key={label} $active={label === activeStatus} onClick={() => onStatusChange(label)} type="button">
            {label} <span>{label === "All Posts" ? counts.total : counts[label.toLowerCase()]}</span>
          </Tab>
        ))}
      </TabRow>
      <FilterRow>
        <FilterControl onChange={(event) => onFilterChange("category", event.target.value)} value={filters.category}>
          <option value="All Categories">Category</option>
          {options.categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </FilterControl>
        <FilterControl onChange={(event) => onFilterChange("author", event.target.value)} value={filters.author}>
          <option value="All Authors">Author</option>
          {options.authors.map((author) => (
            <option key={author} value={author}>
              {author}
            </option>
          ))}
        </FilterControl>
        <FilterControl onChange={(event) => onFilterChange("month", event.target.value)} value={filters.month}>
          <option value="All Time">This Month</option>
          {options.months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </FilterControl>
        <FilterButton onClick={() => onFilterChange("reset", "")} type="button">
          <FiFilter /> Filter
        </FilterButton>
      </FilterRow>
    </Toolbar>

    {!posts.length ? (
      <EmptyState>
        <EmptyTitle>No blog posts found</EmptyTitle>
        <EmptyText>Try a different search or filter combination to find the blog you need.</EmptyText>
      </EmptyState>
    ) : (
      <>
        <TableWrap>
          <Table>
            <thead>
              <tr>
                <th />
                <th>Blog Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Comments</th>
                <th>Published Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td>
                    <TableCheckbox type="checkbox" />
                  </td>
                  <td>
                    <PostTitle>
                      <strong>{post.title}</strong>
                    </PostTitle>
                  </td>
                  <td>
                    <AuthorCell>
                      <MiniAvatar>RP</MiniAvatar>
                      <AuthorCellText>
                        <strong>{post.author}</strong>
                        <span>{post.authorRole}</span>
                      </AuthorCellText>
                    </AuthorCell>
                  </td>
                  <td>{post.category}</td>
                  <td>{String(post.comments).padStart(2, "0")}</td>
                  <td>{post.publishedAt}</td>
                  <td>
                    <StatusPill $status={post.status}>{post.status}</StatusPill>
                  </td>
                  <td>
                    <ActionGroup>
                      <IconButton as={Link} title="View blog" to={`/admin/blogs/${post.id}`}>
                        <FiEye />
                      </IconButton>
                      <IconButton as={Link} title="Edit blog" to={`/admin/blogs/${post.id}/edit`}>
                        <FiEdit2 />
                      </IconButton>
                      <IconButton $variant="danger" onClick={() => onDelete(post.id)} title="Move to trash" type="button">
                        <FiTrash2 />
                      </IconButton>
                    </ActionGroup>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrap>

        <MobilePostList>
          {posts.map((post) => (
            <MobilePostCard key={post.id}>
              <MobilePostHeader>
                <PostTitle>
                  <strong>{post.title}</strong>
                  <PostExcerpt>{post.excerpt}</PostExcerpt>
                </PostTitle>
                <StatusPill $status={post.status}>{post.status}</StatusPill>
              </MobilePostHeader>
              <AuthorCell>
                <MiniAvatar>RP</MiniAvatar>
                <AuthorCellText>
                  <strong>{post.author}</strong>
                  <span>{post.authorRole}</span>
                </AuthorCellText>
              </AuthorCell>
              <MobilePostGrid>
                <MobileMeta>
                  <strong>Category</strong>
                  <span>{post.category}</span>
                </MobileMeta>
                <MobileMeta>
                  <strong>Comments</strong>
                  <span>{String(post.comments).padStart(2, "0")}</span>
                </MobileMeta>
                <MobileMeta>
                  <strong>Published</strong>
                  <span>{post.publishedAt}</span>
                </MobileMeta>
              </MobilePostGrid>
              <ActionGroup style={{ marginTop: "0.9rem" }}>
                <IconButton as={Link} to={`/admin/blogs/${post.id}`}>
                  <FiEye />
                </IconButton>
                <IconButton as={Link} to={`/admin/blogs/${post.id}/edit`}>
                  <FiEdit2 />
                </IconButton>
                <IconButton $variant="danger" onClick={() => onDelete(post.id)} type="button">
                  <FiTrash2 />
                </IconButton>
              </ActionGroup>
            </MobilePostCard>
          ))}
        </MobilePostList>
      </>
    )}

    {totalPages > 1 ? (
      <Pagination>
        <PageChip disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)} type="button">
          <FiChevronLeft />
        </PageChip>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <PageChip
            $active={pageNumber === currentPage}
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            type="button"
          >
            {pageNumber}
          </PageChip>
        ))}
        <PageChip disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)} type="button">
          <FiChevronRight />
        </PageChip>
      </Pagination>
    ) : null}
  </TableCard>
);

export default AdminBlogTable;
