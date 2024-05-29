import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.5rem auto;
  grid-template-areas:
    "header"
    "content";

  .inputs {
    display: flex;
    justify-content: space-between;
    gap: 4rem;
    margin-bottom: 2rem;
  }

  .tags {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 2.4rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border: none;
    border-radius: 0.8rem;
    padding: 1.6rem;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    gap: 4rem;
    margin-top: 4rem;

    > button:nth-child(1) {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 1rem;
  }

  @media (max-width: 768px) {
    input, textarea {
      font-size: 1.4rem;
    }

    main {
      padding: 0 2rem;
    }
  }
`;

export const Form = styled.form`
  max-width: 110rem;
  margin: 4rem auto;

  > header {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    margin-bottom: 4rem;

    h1 {
      font-size: 3.6rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  @media (max-width: 768px) {
    h1{
      font-size: 1.4rem;
    }
  }
`;
