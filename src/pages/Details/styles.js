import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.5rem auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 6.4rem 0;

    overflow-y: auto;

    margin: 0 auto;
    padding-right: 1.6rem;
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

    main {
      padding: 4rem 2rem;
    }
  }
`;

export const Content = styled.div`
  max-width: 110rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > header {
    > button:first-child {
      align-self: start;
    }

    > h1 {
      margin-top: 3rem;
      margin-bottom: 3rem;

      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 3.6rem;
      font-weight: 500;

      display: flex;
    }

    div {
      height: 5.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  > .subtitle {
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: 1.2rem;

    > span {
      font-family: "Roboto", sans-serif;
    }

    > img {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      border: 0.1rem solid ${({ theme }) => theme.COLORS.GRAY_500};
      margin-right: -1.2rem;
    }

    > svg {
      margin-right: -1.2rem;
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 2rem;
    }
  }

  > .tags {
    margin: 4rem 0;

    span:hover {
      filter: brightness(0.9);
      transition: filter 300ms;
    }
  }

  > .text {
    font-size: 1.6rem;
    text-align: justify;

    p {
      margin-bottom: 4rem;
      white-space: pre-line;
    }

    textarea {
      width: 110rem;
      height: 27.5rem;
    }
  }

  > button {
    margin-top: 3rem;
  }

  .buttons {
    div {
      display: flex;
      flex-direction: row;
      gap: 4rem;
    }
  }

  @media (max-width: 768px) {
    max-width: 80vw;

    textarea {
      max-width: 80vw;
    }
  }
`;
