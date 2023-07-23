import styled from 'styled-components'

export const SliderContainer = styled.aside`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  [class^='number-slide'],
  [class*=' number-slide'] {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
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
