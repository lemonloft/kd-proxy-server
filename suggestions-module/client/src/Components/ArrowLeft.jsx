import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import styled from 'styled-components';

const Button = styled.button`
  z-index: 3;
  background-color: Transparent;
  border: none;
  outline: none;
  cursor: pointer;
  overflow: hidden;   
`

const Arrow = styled(IoIosArrowBack)`
  height: 30px;
  width: 30px;
  fill: rgb(118, 118, 118);
  z-index: 2;
`

const ArrowLeft = ({ scrollLeft }) => {
  return (
      <Button className="scroll-left-handler" onClick={scrollLeft}>
        <Arrow><IoIosArrowBack /></Arrow>
      </Button>
  )
}

export default ArrowLeft;