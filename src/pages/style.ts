import styled from 'styled-components';

export const Container = styled.div`
  --bodyPaddingTop: 94px;
  padding-top: var(--bodyPaddingTop);

  @media (max-width: 800px) {
    padding-top: var(--bodyPaddingTop);
  }
`