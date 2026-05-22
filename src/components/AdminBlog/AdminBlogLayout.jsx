import { FiChevronLeft, FiEdit3, FiFileText, FiLogOut, FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import loginImages from "../../assets/images/loginImages";
import { logoutAdmin, selectAuthAdmin } from "../../store/auth/authSlice.js";
import {
  AdminPage,
  BackLink,
  Content,
  HeaderActionButton,
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
  UserActions,
  UserAvatar,
  UserMeta,
  UserText,
} from "./AdminBlog.styles.js";

const navItems = [
  { icon: <FiFileText />, label: "All Post", to: "/admin/blogs" },
  { icon: <FiEdit3 />, label: "Add New Post", to: "/admin/blogs/new" },
];

const formatRoleLabel = (role = "") =>
  role
    .split("_")
    .filter(Boolean)
    .map((rolePart) => rolePart.charAt(0).toUpperCase() + rolePart.slice(1))
    .join(" ");

const getAvatarInitials = (name = "Admin") =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((namePart) => namePart.charAt(0).toUpperCase())
    .join("");

const AdminBlogLayout = ({
  backLabel,
  backTo,
  children,
  searchProps,
  title = "Blog Dashboard",
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const admin = useSelector(selectAuthAdmin);
  const adminName = admin?.name || "Admin";
  const adminRole = formatRoleLabel(admin?.role || "super_admin");

  const handleLogout = () => {
    dispatch(logoutAdmin());
    navigate("/admin-login", { replace: true });
  };

  return (
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
            <UserAvatar>{getAvatarInitials(adminName)}</UserAvatar>
            <UserActions>
              <UserText>
                <p>{adminName}</p>
                <span>{adminRole}</span>
              </UserText>
              <HeaderActionButton onClick={handleLogout} type="button">
                <FiLogOut /> Logout
              </HeaderActionButton>
            </UserActions>
          </UserMeta>
        </Header>
        <Content>{children}</Content>
      </Main>
    </AdminPage>
  );
};

export default AdminBlogLayout;
