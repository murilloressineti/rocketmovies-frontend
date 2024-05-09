import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  svg {
    margin-left: 1rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 2rem;
    transition: transform 0.3s ease;
  }

  svg:first-child {
    margin-left: 2rem;
  }

  svg:hover {
    filter: brightness(0.9);
    transform: translateY(-0.5rem);
  }
`;
