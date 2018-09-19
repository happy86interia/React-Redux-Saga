import styled from 'styled-components';

export const ProductsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;

  > h3 {
    width: 100%;
    margin-top: 1em;
  }

  .productWrapper {
    flex-grow: 1;
    width: 22vw;
    height: 80vh;
    margin-right: 2vw;

    > div {
      display: flex;
      align-items: center;
      align-content: center;

      img {
        width: 80%;
        height: auto;
      }

      .colorSwitcherWrapper {
        display: flex;
      }
    }
  }
`;
