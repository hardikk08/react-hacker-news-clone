import styled from 'styled-components';

export const ListWrapper = styled.ul`
  background-color: ${({theme}) => theme.backgroundSecondary};
  border-radius: 4px;
  margin: 0 auto 20px auto;
  display: flex;
  flex-direction: column;
`;