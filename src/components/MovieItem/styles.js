import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: ${({ theme, isNew }) =>
    isNew ? `.2rem dashed ${theme.COLORS.GRAY_300}` : "none"};
  border-radius: 1rem;
  padding-right: 1rem;

  > button {
    border: none;
    background: none;
    font-size: 2rem;
    color: ${({ theme, isNew }) =>
      isNew ? theme.COLORS.PINK : theme.COLORS.PINK};
  }

  > input {
    height: 5.6rem;

    padding: 1.6rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    width: 100%;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  &.new {
    background-color: transparent;
  }

  &.not-new {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }
`;
