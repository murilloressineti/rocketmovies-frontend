import styled from "styled-components";

export const Container = styled.span`
  font-size: 1.2rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.8rem;
  margin-right: 0.8rem;

  color: ${({ theme }) => theme.COLORS.TAGS_COLOR};
  background: ${({ theme }) => theme.COLORS.TAGS};
`;
