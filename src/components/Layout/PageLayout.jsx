import Navbar from "../Navbar/index.jsx";
import {
  LayoutMain,
  PageBody,
  PageShell,
  SectionContent,
} from "./PageLayout.styles.js";

const PageLayout = ({ children }) => {
  return (
    <PageShell>
      <Navbar />
      <LayoutMain>{children}</LayoutMain>
    </PageShell>
  );
};

export const PageSection = ({
  children,
  background = "#ffffff",
  fullBleed = false,
  spacing,
}) => {
  return (
    <PageBody
      $background={background}
      $fullBleed={fullBleed}
      $spacing={spacing}
    >
      {fullBleed ? children : <SectionContent>{children}</SectionContent>}
    </PageBody>
  );
};

export default PageLayout;
