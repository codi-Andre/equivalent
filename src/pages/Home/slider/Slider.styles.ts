import styled from 'styled-components'

export const SliderContainer = styled.div`
  flex: 1;
  overflow: hidden;

  [class^='number-slide'],
  [class*=' number-slide'] {
    background: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: #fff;
    font-weight: 500;
    height: 100vh;
  }

  .number-slide1 {
    background: rgb(64, 175, 255);
    background: linear-gradient(
      128deg,
      rgba(64, 175, 255, 1) 0%,
      rgba(63, 97, 255, 1) 100%
    );
  }

  .number-slide2 {
    background: rgb(255, 75, 64);
    background: linear-gradient(
      128deg,
      rgba(255, 154, 63, 1) 0%,
      rgba(255, 75, 64, 1) 100%
    );
  }

  .number-slide3 {
    background: rgb(182, 255, 64);
    background: linear-gradient(
      128deg,
      rgba(182, 255, 64, 1) 0%,
      rgba(63, 255, 71, 1) 100%
    );
    background: linear-gradient(
      128deg,
      rgba(189, 255, 83, 1) 0%,
      rgba(43, 250, 82, 1) 100%
    );
  }

  .number-slide4 {
    background: rgb(64, 255, 242);
    background: linear-gradient(
      128deg,
      rgba(64, 255, 242, 1) 0%,
      rgba(63, 188, 255, 1) 100%
    );
  }

  .number-slide5 {
    background: rgb(255, 64, 156);
    background: linear-gradient(
      128deg,
      rgba(255, 64, 156, 1) 0%,
      rgba(255, 63, 63, 1) 100%
    );
  }

  .number-slide6 {
    background: rgb(64, 76, 255);
    background: linear-gradient(
      128deg,
      rgba(64, 76, 255, 1) 0%,
      rgba(174, 63, 255, 1) 100%
    );
  }

  .navigation-wrapper {
    position: relative;
  }

  .dots {
    display: flex;
    padding: 10px 0;
    justify-content: center;
    position: absolute;
    bottom: 0.25rem;
    left: 0.25rem;
    right: 0.25rem;
    /* padding: 2rem, */
  }

  .dot {
    border: none;
    width: 10px;
    height: 10px;
    background: #c5c5c5;
    border-radius: 50%;
    margin: 0 5px;
    padding: 5px;
    cursor: pointer;
  }

  .dot:focus {
    outline: none;
  }

  .dot.active {
    background: ${({ theme }) => theme.colors.accent};
  }

  .arrow {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    fill: #fff;
    cursor: pointer;
  }

  .arrow--left {
    left: 5px;
  }

  .arrow--right {
    left: auto;
    right: 5px;
  }

  .arrow--disabled {
    fill: rgba(255, 255, 255, 0.5);
  }
`
