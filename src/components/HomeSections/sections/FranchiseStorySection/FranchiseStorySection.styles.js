import styled from "styled-components";
import { HomeSection } from "../../components/SectionFrame/SectionFrame.styles.js";

export const StoryBand = styled(HomeSection)`
  overflow: hidden;
  background:
    linear-gradient(rgba(137, 27, 28, 0.95), rgba(137, 27, 28, 0.95)),
    url("/images/mapbackground.svg") center / 72rem auto no-repeat;
`;

export const StoryLayout = styled.div`
  display: grid;
  grid-template-columns: 0.72fr 1.2fr 0.72fr;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const StorySideImage = styled.img`
  width: 100%;
  min-height: 18rem;
  border-radius: 0.5rem;
  object-fit: cover;
  opacity: 0.66;

  @media (max-width: 980px) {
    display: none;
  }
`;

export const StoryCard = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.4rem;
  align-items: center;
  padding: 1.7rem;
  border-radius: 0.55rem;
  background: #ffffff;
  box-shadow: 0 1.4rem 4rem rgba(0, 0, 0, 0.24);

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const StoryFlag = styled.span`
  display: inline-flex;
  width: 2.35rem;
  height: 1.55rem;
  margin-bottom: 1rem;
  border-radius: 0.18rem;
  overflow: hidden;

  &::before {
    content: "";
    flex: 1;
    background: #00732f;
  }

  &::after {
    content: "";
    flex: 1;
    background: #ffffff;
    border-left: 0.78rem solid #d71920;
  }
`;

export const StoryImage = styled.img`
  width: 100%;
  aspect-ratio: 1.2;
  border-radius: 0.35rem;
  object-fit: cover;
`;

export const StoryTitle = styled.h3`
  margin: 0;
  color: #171717;
  font-size: 1.08rem;
  line-height: 1.45;
`;

export const StoryText = styled.p`
  margin: 0.7rem 0 0;
  color: #666666;
  font-size: 0.9rem;
  line-height: 1.7;
`;
