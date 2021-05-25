import styled, { css } from "styled-components";

const flexStyles = css`
  display: flex;
  flex-direction: ${(p) => p.flexDirection};
  align-items: ${(p) => p.alignItems};
  justify-content: ${(p) => p.justifyContent};
`;

const StyledCard = styled.div`
  margin: ${(p) => p.margin};
  padding: ${(p) => p.padding};
  background: ${(p) => p.background};
  border: ${(p) => p.border};
  ${(p) => p.isFlex && flexStyles};
  border-radius: 0.75rem;
`;

const Card = ({
  children,
  isFlex,
  flexDirection,
  alignItems,
  justifyContent,
  margin = "0 0 1rem",
  padding = "1rem",
  background = "#100F10",
  border,
}) => {
  return (
    <StyledCard
      isFlex={isFlex}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      margin={margin}
      padding={padding}
      background={background}
      border={border}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
