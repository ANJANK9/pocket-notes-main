import styled, { css } from "styled-components";

export const Icon = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
  color: white;
  ${({ $bgColor }) => css`
    background-color: ${$bgColor};
  `}
`;

export const IconButton = styled.button`
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 100%;
  border: 0;
  outline: none;

  ${({ $bgColor, $size, $color }) => css`
    background-color: ${$bgColor};
    color: ${$color};
    width: ${$size};
    height: ${$size};
  `}

  &:active {
    opacity: 0.7;
  }
`;
