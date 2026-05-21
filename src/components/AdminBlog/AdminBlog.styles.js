import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const AdminPage = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 15.5rem minmax(0, 1fr);
  background: #efefef;

  @media (max-width: 63.9375rem) {
    grid-template-columns: 1fr;
  }
`;

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem 0;
  background: #891b1c;
  color: #ffffff;

  @media (max-width: 63.9375rem) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }

  @media (max-width: 36rem) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const SidebarBrand = styled.img`
  width: 4.3rem;
  margin: 0 auto;

  @media (max-width: 63.9375rem) {
    margin: 0;
  }
`;

export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;

  @media (max-width: 63.9375rem) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
`;

export const SidebarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 0.65rem;
  color: rgba(255, 255, 255, 0.86);
  font-size: 0.875rem;
  text-decoration: none;
  border-left: 0.16rem solid transparent;

  &.active {
    background: rgba(255, 255, 255, 0.06);
    border-left-color: #ffffff;
    color: #ffffff;
  }

  @media (max-width: 63.9375rem) {
    border-left: 0;
    border-bottom: 0.16rem solid transparent;

    &.active {
      border-bottom-color: #ffffff;
    }
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 1.25rem;
  background: #ffffff;
  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.06);

  @media (max-width: 63.9375rem) {
    flex-wrap: wrap;
  }

  @media (max-width: 36rem) {
    padding: 1rem;
  }
`;

export const HeaderMain = styled.div`
  min-width: 0;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 36rem) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.6rem;
  }
`;

export const HeaderLead = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: #292929;
  font-size: 0.82rem;
  font-weight: 600;
  text-decoration: none;
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  color: #222222;
  font-size: 1rem;
  font-weight: 700;
`;

export const SearchWrap = styled.label`
  position: relative;
  width: min(100%, 18rem);
  flex: 0 1 18rem;

  @media (max-width: 36rem) {
    width: 100%;
    flex-basis: auto;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 2.25rem;
  padding: 0.5rem 2.1rem 0.5rem 0.75rem;
  border: 0.0625rem solid #ebebeb;
  border-radius: 0.2rem;
  font-size: 0.75rem;
  outline: none;
  background: #ffffff;
`;

export const SearchIcon = styled.span`
  position: absolute;
  inset: 50% 0.65rem auto auto;
  color: #d95d31;
  font-size: 0.8rem;
  transform: translateY(-50%);
`;

export const UserMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-left: auto;

  @media (max-width: 36rem) {
    margin-left: 0;
  }
`;

export const UserAvatar = styled.div`
  width: 2rem;
  height: 2rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #ffe1c8;
  color: #891b1c;
  font-size: 0.75rem;
  font-weight: 700;
`;

export const UserText = styled.div`
  p {
    margin: 0;
    color: #232323;
    font-size: 0.72rem;
    font-weight: 600;
  }

  span {
    display: block;
    color: #8d8d8d;
    font-size: 0.62rem;
  }
`;

export const Content = styled.main`
  padding: 1rem;
`;

export const ContentCard = styled.section`
  background: #ffffff;
  border-radius: 0.4rem;
  box-shadow: 0 0.8rem 2rem rgba(0, 0, 0, 0.04);
`;

export const SectionHeading = styled.div`
  margin-bottom: 1rem;

  h2 {
    margin: 0;
    color: #222222;
    font-size: 1.45rem;
    font-weight: 700;
  }

  p {
    margin: 0.2rem 0 0;
    color: #8c8c8c;
    font-size: 0.78rem;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 63.9375rem) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 36rem) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled(ContentCard)`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 1rem;
`;

export const StatIcon = styled.div`
  width: 2.6rem;
  height: 2.6rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #f7f0e5;
  color: #282828;
  font-size: 1rem;
`;

export const StatText = styled.div`
  strong {
    display: block;
    color: #2c2c2c;
    font-size: 1.3rem;
    font-weight: 700;
  }

  span {
    color: #8d8d8d;
    font-size: 0.78rem;
  }
`;

export const TableCard = styled(ContentCard)`
  padding: 1rem;
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.9rem;

  @media (max-width: 63.9375rem) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const TabRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
`;

export const Tab = styled.button`
  padding: 0 0 0.45rem;
  border: 0;
  border-bottom: 0.125rem solid ${({ $active }) => ($active ? "#33b76f" : "transparent")};
  background: transparent;
  color: ${({ $active }) => ($active ? "#33b76f" : "#2a2a2a")};
  font-size: 0.82rem;
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
  cursor: pointer;

  span {
    margin-left: 0.35rem;
    color: #8d8d8d;
  }
`;

export const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.5rem;
`;

export const FilterButton = styled.button`
  height: 2.25rem;
  padding: 0 0.85rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  border: 0.0625rem solid #e6e6e6;
  border-radius: 0.35rem;
  background: #ffffff;
  color: #2b2b2b;
  font-size: 0.76rem;
  cursor: pointer;
`;

export const FilterControl = styled.select`
  min-width: 8.5rem;
  height: 2.25rem;
  padding: 0 0.75rem;
  border: 0.0625rem solid #e6e6e6;
  border-radius: 0.35rem;
  background: #ffffff;
  color: #2b2b2b;
  font-size: 0.76rem;
  outline: none;
`;

export const TableWrap = styled.div`
  overflow-x: auto;
  border: 0.125rem solid #2f98f3;
  border-radius: 0.45rem;

  @media (max-width: 48rem) {
    display: none;
  }
`;

export const Table = styled.table`
  width: 100%;
  min-width: 62rem;
  border-collapse: collapse;

  th,
  td {
    padding: 1rem 0.9rem;
    border-bottom: 0.0625rem solid #f1f1f1;
    text-align: left;
    vertical-align: top;
  }

  th {
    color: #1d1d1d;
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  td {
    color: #2a2a2a;
    font-size: 0.78rem;
  }

  tbody tr:last-child td {
    border-bottom: 0;
  }
`;

export const TableCheckbox = styled.input`
  margin: 0;
`;

export const AuthorCell = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
`;

export const MiniAvatar = styled(UserAvatar)`
  width: 1.9rem;
  height: 1.9rem;
  font-size: 0.66rem;
`;

export const AuthorCellText = styled.div`
  strong {
    display: block;
    font-size: 0.78rem;
    font-weight: 600;
  }

  span {
    display: block;
    color: #979797;
    font-size: 0.64rem;
  }
`;

export const PostTitle = styled.div`
  max-width: 15.5rem;

  strong {
    display: -webkit-box;
    overflow: hidden;
    font-size: 0.82rem;
    font-weight: 600;
    line-height: 1.45;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
`;

export const PostExcerpt = styled.span`
  display: block;
  margin-top: 0.2rem;
  color: #8f8f8f;
  font-size: 0.68rem;
  line-height: 1.5;
`;

export const StatusPill = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 4.5rem;
  padding: 0.35rem 0.65rem;
  border-radius: 999rem;
  background: ${({ $status }) =>
    $status === "Published"
      ? "rgba(51, 183, 111, 0.12)"
      : $status === "Draft"
        ? "rgba(255, 173, 72, 0.14)"
        : "rgba(255, 97, 97, 0.14)"};
  color: ${({ $status }) =>
    $status === "Published" ? "#33b76f" : $status === "Draft" ? "#ff9d3c" : "#ff6161"};
  font-size: 0.68rem;
  font-weight: 600;
`;

export const ActionGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

export const IconButton = styled.button`
  width: 2rem;
  height: 2rem;
  display: inline-grid;
  place-items: center;
  border: 0.0625rem solid #ececec;
  border-radius: 50%;
  background: #ffffff;
  color: ${({ $variant }) => ($variant === "danger" ? "#ff7d5b" : "#626262")};
  cursor: pointer;
  text-decoration: none;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.35rem;
  margin-top: 0.75rem;
`;

export const PageChip = styled.button`
  min-width: 1.75rem;
  height: 1.75rem;
  border: 0;
  border-radius: 0.3rem;
  background: ${({ $active }) => ($active ? "#891b1c" : "#f2f2f2")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#444444")};
  font-size: 0.72rem;
  cursor: pointer;
`;

export const MobilePostList = styled.div`
  display: none;

  @media (max-width: 48rem) {
    display: grid;
    gap: 0.85rem;
  }
`;

export const MobilePostCard = styled(ContentCard)`
  padding: 1rem;
  border: 0.0625rem solid #ededed;
`;

export const MobilePostHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.8rem;
`;

export const MobilePostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  margin-top: 0.9rem;

  @media (max-width: 30rem) {
    grid-template-columns: 1fr;
  }
`;

export const MobileMeta = styled.div`
  strong {
    display: block;
    margin-bottom: 0.2rem;
    color: #5e5e5e;
    font-size: 0.68rem;
    text-transform: uppercase;
  }

  span {
    color: #242424;
    font-size: 0.76rem;
    line-height: 1.45;
  }
`;

export const EditorGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 18rem;
  gap: 1rem;

  @media (max-width: 63.9375rem) {
    grid-template-columns: 1fr;
  }
`;

export const EditorCard = styled(ContentCard)`
  padding: 1rem;
`;

export const SettingsCard = styled(ContentCard)`
  padding: 1rem;
`;

export const CardHeading = styled.div`
  margin-bottom: 1rem;

  h3 {
    margin: 0;
    color: #1d1d1d;
    font-size: 1rem;
  }

  p {
    margin: 0.2rem 0 0;
    color: #8c8c8c;
    font-size: 0.72rem;
  }
`;

export const SettingsTitle = styled.h3`
  margin: 0 0 0.2rem;
  color: #1d1d1d;
  font-size: 1rem;
`;

export const SettingsNote = styled.p`
  margin: 0 0 1rem;
  color: #8c8c8c;
  font-size: 0.72rem;
`;

export const Field = styled.div`
  margin-bottom: 0.85rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.35rem;
  color: #2b2b2b;
  font-size: 0.72rem;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  padding: 0.6rem 0.75rem;
  border: 0.0625rem solid #ececec;
  border-radius: 0.25rem;
  background: #ffffff;
  font-size: 0.76rem;
  outline: none;
`;

export const Select = styled.select`
  width: 100%;
  height: 2.5rem;
  padding: 0.6rem 0.75rem;
  border: 0.0625rem solid #ececec;
  border-radius: 0.25rem;
  background: #ffffff;
  font-size: 0.76rem;
  outline: none;
`;

export const EditorSurface = styled.div`
  border: 0.0625rem solid #ececec;
  border-radius: 0.25rem;
  overflow: hidden;
  background: rgba(245, 243, 243, 0.4);
`;

export const EditorToolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.7rem;
  border-bottom: 0.0625rem solid #ececec;
  background: #ffffff;
`;

export const Tool = styled.button`
  border: 0;
  background: transparent;
  color: #575757;
  font-size: 0.85rem;
  cursor: pointer;
`;

export const EditorArea = styled.textarea`
  width: 100%;
  min-height: 20rem;
  padding: 1rem;
  border: 0;
  resize: vertical;
  background: rgba(245, 243, 243, 0.4);
  color: #2a2a2a;
  font-size: 0.82rem;
  line-height: 1.7;
  outline: none;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.6rem;
  margin-top: 0.9rem;

  @media (max-width: 36rem) {
    flex-direction: column;
  }
`;

export const SecondaryButton = styled.button`
  height: 2.45rem;
  padding: 0 0.95rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  border: 0.0625rem solid #b9b9b9;
  border-radius: 0.25rem;
  background: #ffffff;
  color: #212121;
  font-size: 0.74rem;
  font-weight: 600;
  cursor: pointer;
`;

export const PrimaryButton = styled.button`
  height: 2.45rem;
  padding: 0 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  border: 0;
  border-radius: 0.25rem;
  background: #891b1c;
  color: #ffffff;
  font-size: 0.74rem;
  font-weight: 600;
  cursor: pointer;
`;

export const TagRow = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  @media (max-width: 36rem) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 0.65rem;
`;

export const TagChip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.35rem 0.6rem;
  border-radius: 999rem;
  background: #f4f5f7;
  color: #393939;
  font-size: 0.7rem;

  button {
    border: 0;
    padding: 0;
    background: transparent;
    color: inherit;
    cursor: pointer;
  }
`;

export const AddTagButton = styled.button`
  min-width: 4.2rem;
  height: 2.5rem;
  border: 0.0625rem solid #ececec;
  border-radius: 0.25rem;
  background: #ffffff;
  color: #2c2c2c;
  font-size: 0.7rem;
  cursor: pointer;
`;

export const UploadBox = styled.div`
  min-height: 9rem;
  display: grid;
  place-items: center;
  gap: 0.35rem;
  padding: 1rem;
  border: 0.0625rem solid #ececec;
  border-radius: 0.25rem;
  background: #ffffff;
  color: #4a4a4a;
  text-align: center;
  font-size: 0.72rem;
  line-height: 1.5;
`;

export const Divider = styled.hr`
  margin: 1rem 0;
  border: 0;
  border-top: 0.0625rem solid #efefef;
`;

export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 22rem;
  gap: 1rem;

  @media (max-width: 75rem) {
    grid-template-columns: 1fr;
  }
`;

export const DetailsCard = styled(ContentCard)`
  padding: 1rem;
`;

export const MetaRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
  margin-bottom: 1rem;

  @media (max-width: 48rem) {
    grid-template-columns: 1fr;
  }
`;

export const MetaCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 0.9rem;
  border: 0.0625rem solid #efefef;
  border-radius: 0.35rem;
`;

export const MetaText = styled.div`
  strong {
    display: block;
    color: #727272;
    font-size: 0.68rem;
  }

  span {
    display: block;
    color: #1d1d1d;
    font-size: 0.76rem;
    line-height: 1.45;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  height: clamp(14rem, 32vw, 22rem);
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

export const ContentArticle = styled.article`
  h2 {
    margin: 0 0 1rem;
    color: #1d1d1d;
    font-size: 1.15rem;
    line-height: 1.5;
  }

  p {
    margin: 0 0 1rem;
    color: #4d4d4d;
    font-size: 0.82rem;
    line-height: 1.8;
  }
`;

export const CommentPanel = styled(ContentCard)`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 1rem;
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1rem;

  h3 {
    margin: 0;
    color: #1d1d1d;
    font-size: 1rem;
  }
`;

export const CommentList = styled.div`
  display: grid;
  gap: 0.85rem;
  margin-bottom: 1rem;
`;

export const CommentItem = styled.div`
  display: flex;
  gap: 0.7rem;
  align-items: flex-start;
`;

export const CommentAuthor = styled.div`
  strong {
    display: inline-block;
    margin-right: 0.35rem;
    color: #1d1d1d;
    font-size: 0.78rem;
  }

  span {
    color: #9b9b9b;
    font-size: 0.65rem;
  }
`;

export const CommentBody = styled.p`
  margin: 0.2rem 0 0;
  color: #4c4c4c;
  font-size: 0.74rem;
  line-height: 1.6;
`;

export const CommentFooter = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 0.35rem;
  color: #8d8d8d;
  font-size: 0.65rem;
`;

export const CommentComposer = styled.div`
  margin-top: auto;
  padding-top: 1rem;
  border-top: 0.0625rem solid #efefef;
`;

export const CommentInput = styled.textarea`
  width: 100%;
  min-height: 5.5rem;
  padding: 0.8rem;
  border: 0.0625rem solid #ececec;
  border-radius: 0.35rem;
  resize: vertical;
  font-size: 0.76rem;
  outline: none;
`;

export const EmptyState = styled(ContentCard)`
  padding: 2rem 1.25rem;
  text-align: center;
`;

export const EmptyTitle = styled.h2`
  margin: 0 0 0.35rem;
  color: #1d1d1d;
  font-size: 1.1rem;
`;

export const EmptyText = styled.p`
  margin: 0;
  color: #838383;
  font-size: 0.82rem;
  line-height: 1.6;
`;

export const HeaderLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
