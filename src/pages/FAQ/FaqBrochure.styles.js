import styled from "styled-components";

export const BrochureSection = styled.section`
  background: #ffffff;
  padding: 3rem 1.25rem 4.5rem;
`;

export const BrochureShell = styled.div`
  width: min(100%, 72rem);
  margin: 0 auto;
`;

export const BrochureToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 640px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const PageCount = styled.p`
  margin: 0;
  color: #4c4c4c;
  font-size: 0.95rem;
  font-weight: 500;
`;

export const Pager = styled.div`
  display: flex;
  gap: 0.6rem;
`;

export const PagerButton = styled.button`
  min-height: 2.5rem;
  padding: 0 1rem;
  border: 1px solid ${({ disabled }) => (disabled ? "#d4d4d4" : "#891b1c")};
  border-radius: 0.25rem;
  background: ${({ disabled }) => (disabled ? "#f3f3f3" : "#891b1c")};
  color: ${({ disabled }) => (disabled ? "#8a8a8a" : "#ffffff")};
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const BrochureFrame = styled.div`
  overflow-x: auto;
  border: 1px solid #8c8c8c;
  background: #ffffff;
`;

export const BrochureTable = styled.table`
  width: 100%;
  min-width: 44rem;
  border-collapse: collapse;
  table-layout: fixed;
  color: #111111;
  font-family: "Times New Roman", Times, serif;
`;

export const BrochureCell = styled.td`
  width: 50%;
  padding: ${({ $type }) => ($type === "title" ? "0.38rem 0.7rem" : "0.32rem 0.7rem")};
  border-right: 1px solid #8c8c8c;
  border-bottom: 1px solid #8c8c8c;
  color: ${({ $type }) =>
    $type === "section" ? "#0070c0" : $type === "question" || $type === "title" ? "#d40000" : "#111111"};
  font-size: ${({ $type }) => ($type === "title" ? "0.98rem" : "0.94rem")};
  font-weight: ${({ $type }) =>
    $type === "section" || $type === "question" || $type === "title" ? "700" : "400"};
  line-height: 1.35;
  text-align: ${({ $align }) => $align || "left"};
  vertical-align: top;

  &:last-child {
    border-right: 0;
  }
`;

export const Disclaimer = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 4rem;
  padding: 0 0.75rem;
  color: #111111;
  font-family: "Times New Roman", Times, serif;
  font-size: 0.95rem;
  font-style: italic;
  line-height: 1.45;

  p {
    margin: 0;
  }
`;

