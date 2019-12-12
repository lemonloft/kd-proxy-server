import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';

const Button = styled.button`
  z-index: 3;
  background-color: Transparent;
  border: none;
  outline: none;
  cursor: pointer;
  overflow: hidden;   
`

const Arrow = styled(IoIosArrowForward)`
  height: 30px;
  width: 30px;
  fill: rgb(118, 118, 118);
  z-index: 2;
`

const ArrowRight = ({ scrollRight }) => {
  return (
      <Button className="scroll-right-handler" onClick={scrollRight}>
        <Arrow><IoIosArrowForward /></Arrow>
      </Button>
  )
}

export default ArrowRight;