import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
    "header"
    "title"
    "content";

  > main {
    grid-area: content;
    padding: 6.4rem 0;
    margin: 0 auto;

    overflow-y: scroll;
  }

  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 1rem;
  }

  @media (max-width: 768px) {
    input {
      font-size: 1.4rem;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 12.5rem;

  @media (max-width: 768px) {
    padding: 2rem 2.5rem;
    font-size: 1.4rem;

    button {
      width: 20rem;
    }
  }
`;

export const Content = styled.div`
  max-width: 110rem;
  margin: 0 auto;

  > button:first-child {
    margin-top: -5rem;
  }

  span {
    margin-right: 0.8;
  }

  span:hover {
    filter: brightness(0.9);
    transition: filter 300ms;
  }

  @media (max-width: 768px) {
    width: 90vw;
  }
`;
