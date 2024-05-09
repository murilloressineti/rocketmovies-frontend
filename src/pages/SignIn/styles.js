import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 13.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  text-align: left;

  > h1 {
    font-size: 4.8rem;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 2.4rem;
    text-align: left;
    margin-top: 4.8rem;
    margin-bottom: 4.8rem;
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  > a {
    margin-top: 4.2rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    text-align: center;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
