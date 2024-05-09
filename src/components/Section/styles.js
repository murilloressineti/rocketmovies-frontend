import styled from "styled-components";

export const Container = styled.section`
  > h2 {
    margin-bottom: 2.4rem;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 2rem;
    font-weight: 400;
  }
`;
