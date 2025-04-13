import styled from 'styled-components';

const BackgroundImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: auto;
  opacity: 0.3;
  z-index: -1;
`;

export default BackgroundImage;