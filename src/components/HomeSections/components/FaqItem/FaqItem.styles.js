import styled from "styled-components";

export const FaqItemShell = styled.details`
  border-radius: 0.35rem;
  background: #fff8e9;
  border: 1px solid #f2dfbd;
  color: #272727;

  summary {
    min-height: 3.35rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0 1.1rem;
    cursor: pointer;
    font-weight: 600;
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  p {
    margin: 0;
    padding: 0 1.1rem 1.15rem;
    color: #666666;
    font-size: 0.92rem;
    line-height: 1.7;
  }

  svg:last-child {
    flex: 0 0 auto;
    color: #b01f24;
  }

  &[open] {
    background: #ffffff;
    box-shadow: 0 0.8rem 2rem rgba(60, 42, 22, 0.07);
  }
`;
