import styled, { keyframes } from 'styled-components';

const rotate = keyframes` 
    0% {
    transform: rotate(0deg);
    transform: rotate(0deg);
    }
    100% {
    transform: rotate(360deg);
    transform: rotate(360deg);
    } 
`;

// Todo: add sizes
const Spinner = styled.div`
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(0, 0, 0, 0.2);
  border-right: 1.1em solid rgba(0, 0, 0, 0.2);
  border-bottom: 1.1em solid rgba(0, 0, 0, 0.2);
  border-left: 1.1em solid #000000;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  animation: ${rotate} 1.1s infinite linear;
  border-radius: 50%;
  width: 10em;
  height: 10em;

  :after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
`;
export default Spinner;
