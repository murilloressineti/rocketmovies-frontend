import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.PINK_OPACITY};
  padding: 3.2rem;
  margin-bottom: 2.4rem;

  min-width: 110rem;

  border: none;
  border-radius: 1.6rem;

  @media (max-width: 768px) {
    min-width: 90vw;
    }

  h1 {
    text-align: left;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2.4rem;
    margin-bottom: 1.5rem;

    svg {
      margin-left: 0.5rem;
      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    svg:first-child {
      margin-left: 0;
    }
  }

  p {
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    margin-bottom: 3rem;
    white-space: pre-line;
  }

  footer {
    text-align: left;
    span {
      background: ${({ theme }) => theme.COLORS.GRAY_600};
    }
  }
`;
