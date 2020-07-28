import styled from "styled-components";

export const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 94px;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--black);
  border-bottom: 2px solid var(--primary);
  z-index: 100;

  @media (max-width: 800px) {
    height: 40px;
    justify-content: center;
  }
`;

export const Logo = styled.img`
  max-width: 168px;

  @media (max-width: 800px) {
    max-width: 105px;
  }
`;
