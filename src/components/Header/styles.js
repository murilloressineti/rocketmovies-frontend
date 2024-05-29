import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  height: 11.5rem;
  width: 100%;

  border-bottom: 0.1rem;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_500};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 12rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

export const Brand = styled(Link)`
  font-size: 2.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.PINK};
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0 6.4rem;
  flex-grow: 1;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
    border: 0.1rem solid ${({ theme }) => theme.COLORS.GRAY_500};

    @media (max-width: 768px) {
      width: 4.8rem;
      height: 4.8rem;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-right: 1rem;
    line-height: 2.4rem;

    @media (max-width: 768px) {
      strong {
        display: none;
      }
    }

    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    span:hover {
      filter: brightness(0.9);
      transition: filter 300ms;
      cursor: pointer;
    }

    strong {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;
