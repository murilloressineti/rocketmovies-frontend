import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  height: 14.4rem;

  display: flex;
  align-items: center;

  padding: 0 12.4rem;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const Form = styled.form`
  max-width: 34rem;
  margin: 3rem auto 0;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }

  input {
    height: 5rem;
  }

  @media (max-width: 768px) {
    max-width: 25rem;

    input {
    height: 5rem;
    font-size: 1.4rem;
  }

    button {
      height: 5rem;
    }
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -12.4rem auto 3.2rem;

  width: 18.6rem;
  height: 18.6rem;

  > img {
    border-radius: 50%;
    width: 100%;
    height: auto;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`;
