import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  margin: 0 auto;
  justify-content: center;
  width: 970px;
  font-weight: 800;
  font-size: 24px;
  text-align: left;
  color: #484848;
  padding: 10px;
`

const ListingHeader = (props) => (
  <div>
    <Header>
      More homes you may like
    </Header>
  </div>
)

export default ListingHeader;