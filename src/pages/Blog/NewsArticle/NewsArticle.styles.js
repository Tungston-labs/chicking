import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.section`
  padding: 40px 6rem;

  @media (max-width:1024px){
    padding:20px 3rem;
  }

  @media (max-width:768px){
    padding:40px 20px;
  }

  @media (max-width:570px){
    padding:30px 16px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 1.4rem;
  color: #891b1c;
  font-family: "Josefin Sans", sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
`;

export const Title = styled.h1`
  font-family: "Josefin Sans", sans-serif;
font-weight: 500;
font-style: Medium;
font-size: 32px;
line-height: 34px;
letter-spacing: 0%;


  @media (max-width:1024px){
    font-size:30px;
  }

  @media (max-width:768px){
    font-size:26px;
    line-height:1.5;
  }

  @media (max-width:570px){
    font-size:22px;
    line-height:1.4;
  }
`;

export const MetaRow = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:flex-end;
  margin-bottom:40px;

  p{
    color:#777;
    margin-bottom:15px;
  }

  @media(max-width:768px){
    flex-direction:column;
    align-items:flex-start;
    gap:20px;
  }
`;

export const AuthorWrap = styled.div`
display:flex;
align-items:center;
gap:12px;
`;

export const Avatar = styled.img`
width:55px;
height:55px;
border-radius:50%;
object-fit:cover;

@media(max-width:570px){
 width:45px;
 height:45px;
}
`;

export const AuthorInfo = styled.div``;

export const Name = styled.h4`
margin:0;
font-family: "Josefin Sans", sans-serif;
font-weight: 400;
font-style: Regular;
font-size: 18px;
line-height: 24px;
letter-spacing: 0%;


@media(max-width:570px){
font-size:18px;
}
`;

export const Role = styled.p`
margin:0;
color:#757575;
font-family: "Josefin Sans", sans-serif;
font-weight: 400;
font-style: Regular;
font-size: 16px;
line-height: 24px;
letter-spacing: 0%;

`;

export const Date = styled.div`
color:#757575;
font-weight: 400;
font-style: Regular;
font-size: 14px;
line-height: 24px;
letter-spacing: 0%;
font-family: "Josefin Sans", sans-serif;

@media(max-width:570px){
font-size:14px;
}
`;

export const BannerWrap = styled.div`
position:relative;
margin-bottom:40px;
`;

export const BannerImage = styled.img`
width:100%;
aspect-ratio:16 / 9;
object-fit:contain;
display:block;
background:#f7f2eb;
`;

export const PlayButton = styled.img`
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
width:90px;

@media(max-width:768px){
width:70px;
}

@media(max-width:570px){
width:50px;
}
`;

export const QuoteBox = styled.div`
border-left:4px solid #ddd;
padding-left:10px;
margin: 0 0 1.5rem;
word-break:break-word;
font-weight: 300;
font-style: Light;
font-size: 15px;
line-height: 24px;
letter-spacing: 0%;
font-family: "Josefin Sans", sans-serif;

@media(max-width:570px){
font-size:14px;
padding-left:15px;
}
`;

export const Excerpt = styled.p`
  margin: 0 0 1.5rem;
  color: #4b4b4b;
  font-family: "Josefin Sans", sans-serif;
  font-size: 18px;
  font-style: italic;
  line-height: 1.6;

  @media (max-width: 570px) {
    font-size: 16px;
  }
`;

export const Content = styled.div`
font-family: "Josefin Sans", sans-serif;
font-weight: 300;
font-style: Light;
font-size: 15px;
line-height: 24px;
letter-spacing: 0%;

  p {
    margin: 0 0 1rem;
  }

  p:last-child {
    margin-bottom: 0;
  }

  ul,
  ol {
    margin: 0 0 1rem 1.25rem;
    padding: 0;
  }

  img,
  video {
    width: 100%;
    max-height: 34rem;
    display: block;
    object-fit: contain;
    background: #f7f2eb;
    margin: 1rem 0;
  }

  a {
    color: #891b1c;
  }

@media(max-width:768px){
font-size:16px;
line-height:1.8;
}

@media(max-width:570px){
font-size:14px;
}
`;

export const CommentSection = styled.section`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #ece1d7;
`;

export const SectionTitle = styled.h2`
  margin: 0 0 1rem;
  color: #1f1f1f;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.25;
   margin-top: 1rem;
  @media (max-width: 570px) {
    font-size: 1.35rem;
  }
`;

export const CommentForm = styled.form`
  display: grid;
  gap: 1rem;
`;

export const CommentFormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FieldLabel = styled.label`
  display: block;
  margin-bottom: 0.45rem;
  color: #2f2f2f;
  font-family: "Josefin Sans", sans-serif;
  font-size: 0.92rem;
  font-weight: 600;
`;

const sharedFieldStyles = `
  width: 100%;
  border: 1px solid #ddcec0;
  border-radius: 0.75rem;
  background: #fffaf6;
  color: #232323;
  font-family: "Josefin Sans", sans-serif;
  font-size: 0.98rem;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    border-color: #891b1c;
    box-shadow: 0 0 0 3px rgba(137, 27, 28, 0.08);
  }
`;

export const CommentInput = styled.input`
  ${sharedFieldStyles}
  height: 3rem;
  padding: 0 1rem;
`;

export const CommentTextarea = styled.textarea`
  ${sharedFieldStyles}
  min-height: 9rem;
  padding: 0.9rem 1rem;
  resize: vertical;
`;

export const FormFeedback = styled.p`
  margin: 0;
  color: ${({ $variant }) => ($variant === "error" ? "#b42318" : "#1f7a45")};
  font-family: "Josefin Sans", sans-serif;
  font-size: 0.95rem;
`;

export const CommentFormButton = styled.button`
  width: fit-content;
  min-width: 10rem;
  padding: 0.85rem 1.3rem;
  border: 0;
  border-radius: 999px;
  background: #891b1c;
  color: #ffffff;
  font-family: "Josefin Sans", sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;

  &:disabled {
    cursor: wait;
    opacity: 0.75;
  }
`;

export const CommentList = styled.div`
  display: grid;
  gap: 1rem;
`;

export const CommentCard = styled.article`
  padding: 1.15rem 1.2rem;
  border: 1px solid #ece1d7;
  border-radius: 1rem;
  background: #fffaf6;
`;

export const CommentMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.65rem;

  strong {
    display: block;
    color: #1f1f1f;
    font-family: "Josefin Sans", sans-serif;
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const CommentDate = styled.span`
  display: block;
  margin-top: 0.15rem;
  color: #777;
  font-family: "Josefin Sans", sans-serif;
  font-size: 0.85rem;
`;

export const CommentMessage = styled.p`
  margin: 0;
  color: #383838;
  font-family: "Josefin Sans", sans-serif;
  font-size: 0.98rem;
  line-height: 1.7;
  white-space: pre-wrap;
`;

export const CommentReply = styled.div`
  margin-top: 1rem;
  padding: 0.9rem 1rem;
  border-left: 4px solid #891b1c;
  background: rgba(137, 27, 28, 0.05);

  strong {
    display: block;
    margin-bottom: 0.35rem;
    color: #891b1c;
    font-family: "Josefin Sans", sans-serif;
    font-size: 0.92rem;
    font-weight: 600;
  }

  p {
    margin: 0;
    color: #383838;
    font-family: "Josefin Sans", sans-serif;
    line-height: 1.65;
    white-space: pre-wrap;
  }
`;

export const EmptyComments = styled.p`
  margin: 0;
  color: #666;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1rem;
  line-height: 1.6;
`;
