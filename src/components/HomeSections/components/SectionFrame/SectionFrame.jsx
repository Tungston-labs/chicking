import { HomeSection, SectionInner } from "./SectionFrame.styles.js";

const SectionFrame = ({ children, compact = false, ...sectionProps }) => (
  <HomeSection $compact={compact} {...sectionProps}>
    <SectionInner>{children}</SectionInner>
  </HomeSection>
);

export default SectionFrame;
export { HomeSection, SectionInner };
