import { FiChevronLeft, FiEdit3, FiFileText, FiSearch } from "react-icons/fi";
import loginImages from "../../assets/images/loginImages";
import {
  AdminPage,
  BackLink,
  Content,
  Header,
  HeaderLead,
  HeaderMain,
  HeaderTitle,
  Main,
  SearchIcon,
  SearchInput,
  SearchWrap,
  Sidebar,
  SidebarBrand,
  SidebarLink,
  SidebarNav,
  UserAvatar,
  UserMeta,
  UserText,
} from "./AdminBlog.styles.js";

const navItems = [
  { icon: <FiFileText />, label: "All Post", to: "/admin/blogs" },
  { icon: <FiEdit3 />, label: "Add New Post", to: "/admin/blogs/new" },
];

const AdminBlogLayout = ({
  backLabel,
  backTo,
  children,
  searchProps,
  title = "Blog Dashboard",
}) => (
  <AdminPage>
    <Sidebar>
      <SidebarBrand src={loginImages.loginlogo} alt="Chicking" />
      <SidebarNav>
        {navItems.map(({ icon, label, to }) => (
          <SidebarLink key={to} to={to}>
            {icon}
            <span>{label}</span>
          </SidebarLink>
        ))}
      </SidebarNav>
    </Sidebar>
    <Main>
      <Header>
        <HeaderMain>
          <HeaderLead>
            {backTo ? (
              <BackLink to={backTo}>
                <FiChevronLeft />
                <span>{backLabel || "Back to dashboard"}</span>
              </BackLink>
            ) : null}
            {title ? <HeaderTitle>{title}</HeaderTitle> : null}
          </HeaderLead>
          {searchProps ? (
            <SearchWrap>
              <SearchInput
                onChange={searchProps.onChange}
                placeholder={searchProps.placeholder || "Search Here"}
                type="search"
                value={searchProps.value}
              />
              <SearchIcon>
                <FiSearch />
              </SearchIcon>
            </SearchWrap>
          ) : null}
        </HeaderMain>
        <UserMeta>
          <UserAvatar>RP</UserAvatar>
          <UserText>
            <p>Robert Pattinson</p>
            <span>Super Admin</span>
          </UserText>
        </UserMeta>
      </Header>
      <Content>{children}</Content>
    </Main>
  </AdminPage>
);

export default AdminBlogLayout;
