import styled from "styled-components";

type Props = {
  isShow: boolean
}

export const Wrapper = styled.nav<Props>`
  position: fixed;
  top: 0;
  left: 0;
  height: 70px;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ isShow }) => isShow ? '#141414' : 'transparent'};
  border-bottom: 2px solid var(--primary);
  z-index: 100;
  transition: .2s ease;

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
