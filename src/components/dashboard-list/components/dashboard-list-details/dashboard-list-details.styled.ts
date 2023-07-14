import styled from 'styled-components';

export const DetailsWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: left;
  padding: ${({ theme: { spacing } }) => `0 0 ${spacing.space_8} 65px`};

  img {
    max-width: 300px;
    max-height: 450px;
    border-radius: 15px;
  }

  p:first-child {
    font-weight: bold;
  }
`;

export const StyledMovieDetails = styled.div`
  display: flex;
  text-align: left;
  justify-content: center;
  flex-direction: column;
  padding: 20px;

  div {
    margin-bottom: 20px;
  }

  p:first-child {
    padding-right: 5px;
  }
`;
