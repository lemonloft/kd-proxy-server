import React from 'react';
import styled from 'styled-components';
import { IoIosStar } from 'react-icons/io';

const Title = styled.div`
  font-weight: 800;
  font-size: 18px;
  text-align: left;
  color: #484848;
`

const Cost = styled.div`
  font-weight: 400;
  font-size: 14px;
  text-align: left;
  color: #484848;
`

const Rating = styled.div`
  font-weight: 800;
  font-size: 12px;
  text-align: left;
  color: #008489;
`

const NumComments = styled.div`
  font-weight: 200;
  font-size: 12px;
  text-align: left;
  color: #767676;
`

const Icon = styled(IoIosStar)`
  color: #008489;
`

const Image = styled.div`
  height: 300px;
  width: 225px;
  border: 1px
`

const Wrapper = styled.div`
  height: 420px;
  display: flex;
  flex-direction: column;
  padding: 10px !important;
`

const Activity = ({ activity }) => {
  return (
    <Wrapper>
      <div className="activity-item">
        <Image>
          <img src={activity.image_url} style={{ borderRadius: 5 }} height="300px" width="225px" className="activity-item-image" />
        </Image>
        <Title>
          <div className="activity-item-title">
            {activity.title}
          </div>
        </Title>
        <Cost>
          <div className="activity-item-cost">
            {`From $${activity.cost}/per person`}
          </div>
        </Cost>
        <Rating>
          <div className="activity-item-rating">
            {activity.rating}<Icon><IoIosStar /></Icon>
          </div>
        </Rating>
        <NumComments>
          <div className="activity-item-num-comments">
            {`(${activity.num_comments})`}
          </div>
        </NumComments>
      </div>
    </Wrapper>
  )
}

export default Activity;