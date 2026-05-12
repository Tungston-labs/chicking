import { Eyebrow, HeaderWrap, Text, Title } from "./SectionHeader.styles.js";

const SectionHeader = ({
  align = "center",
  description,
  eyebrow,
  eyebrowAsTitle = false,
  light = false,
  title,
}) => (
  <HeaderWrap $align={align}>
    {eyebrow && (
      <Eyebrow $asTitle={eyebrowAsTitle} $tone={light ? "light" : "dark"}>
        {eyebrow}
      </Eyebrow>
    )}
    {title && <Title>{title}</Title>}
    {description && (
      <Text $align={align} $tone={light ? "light" : "dark"}>
        {description}
      </Text>
    )}
  </HeaderWrap>
);

export default SectionHeader;
