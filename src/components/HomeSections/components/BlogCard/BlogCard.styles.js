import styled from "styled-components";

export const Card = styled.article`
  min-height: 39.5rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #dddddd;
  background: #ffffff;

  @media (min-width: 600px) and (max-width: 1000px) {
    flex: 1 0 17.5rem;
    min-width: 17.5rem;
    min-height: 34rem;
    scroll-snap-align: start;
  }
`;

export const MediaLink = styled.a`
  position: relative;
  display: block;
  aspect-ratio: 1.23;
  overflow: hidden;
  background: #f7f2eb;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  @media (min-width: 600px) and (max-width: 1000px) {
    aspect-ratio: 1.18;
  }
`;

export const PlayButton = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 5.2rem;
  height: 5.2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  background: #ff1e1e;
  color: #ffffff;
  font-size: 2rem;
  box-shadow: 0 0.8rem 1.8rem rgba(0, 0, 0, 0.16);
`;

export const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.2rem 0;

  @media (min-width: 600px) and (max-width: 1000px) {
    padding: 0.9rem 1rem 0;
  }
`;

export const AuthorRow = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.65rem;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Avatar = styled.img`
  width: 2.35rem;
  height: 2.35rem;
  border-radius: 999rem;
  object-fit: cover;
`;

export const AuthorName = styled.p`
  margin: 0;
  color: #1d1d1d;
  font-size: 0.86rem;
  font-weight: 500;
`;

export const MetaLine = styled.p`
  margin: 0.12rem 0 0;
  color: #9a9a9a;
  font-size: 0.72rem;
`;

export const Title = styled.h3`
  margin: 0;
  color: #111111;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 700;

  @media (min-width: 600px) and (max-width: 1000px) {
    font-size: 0.95rem;
  }
`;

export const Text = styled.p`
  margin: 0.75rem 0 0;
  color: #555555;
  font-size: 0.84rem;
  line-height: 1.65;

  @media (min-width: 600px) and (max-width: 1000px) {
    font-size: 0.9rem;
    line-height: 1.55;
  }
`;

export const Stats = styled.div`
  min-height: 3.6rem;
  display: flex;
  align-items: center;
  gap: 1.3rem;
  margin: auto -1.2rem 0;
  padding: 0 1.2rem;
  border-top: 1px solid #e6e6e6;
  color: #151515;
  font-size: 0.82rem;

  span:last-child {
    margin-left: auto;
    color: #b01f24;
  }

  @media (min-width: 600px) and (max-width: 1000px) {
    min-height: 3.15rem;
    margin: auto -1rem 0;
    padding: 0 1rem;
  }
`;
