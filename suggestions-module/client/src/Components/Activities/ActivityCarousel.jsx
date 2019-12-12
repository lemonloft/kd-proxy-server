import React from 'react';
import Activity from './Activity.jsx';
import styled from 'styled-components';
import ArrowLeft from '../ArrowLeft.jsx';
import ArrowRight from '../ArrowRight.jsx';

const Container = styled.div`
  height: 420px;
  width: 990px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  justify-content: flex-start;
  ::-webkit-scrollbar {
    display: none;
 }
 z-index: 1;
`

const ArrowLeftWrapper = styled.div`
  position: absolute;
  bottom: 110px;
  left: 150px;
`

const ArrowRightWrapper = styled.div`
  position: absolute;
  bottom: 110px;
  right: 150px;
`

const ActivityCarousel = ({ activities, scrollRight, scrollLeft }) => {
  return (
    <div className="activity-carousel">
      <ArrowLeftWrapper>
        <ArrowLeft scrollLeft={scrollLeft} />
      </ArrowLeftWrapper>
      <Container>
        {activities.slice(2, 12).map((activity) => {
          return <Activity activity={activity} />
        })}
      </Container>
      <ArrowRightWrapper>
        <ArrowRight scrollRight={scrollRight} />
      </ArrowRightWrapper>
    </div>
  )
}

export default ActivityCarousel;