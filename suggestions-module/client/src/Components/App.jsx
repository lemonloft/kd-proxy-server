import React from 'react';
import { ajax } from 'jquery';
import ActivityHeader from './Activities/ActivityHeader.jsx';
import ActivityCarousel from './Activities/ActivityCarousel.jsx';
import ListingHeader from './Listings/ListingHeader.jsx';
import ListingCarousel from './Listings/ListingCarousel.jsx';
import GlobalStyle from './globalStyle.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
      listings: []
    };

    this.scrollRight = this.scrollRight.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
  }

  componentDidMount() {
    ajax({
      method: 'get',
      url: '/suggestions/activities',
      success: (data) => {
        this.setState({
          activities: data
        })
      }
    });

    ajax({
      method: 'get',
      url: '/suggestions/listings',
      success: (data) => {
        this.setState({
          listings: data
        })
      }
    });
  }

  scrollRight() {

  }

  scrollLeft() {

  }

  render() {
    return (
      <div>
        <ListingHeader />
        <ListingCarousel listings={this.state.listings} scrollRight={this.scrollRight} scrollLeft={this.scrollLeft} />
        <ActivityHeader />
        <ActivityCarousel activities={this.state.activities} scrollRight={this.scrollRight} scrollLeft={this.scrollLeft} />
        <GlobalStyle />
      </div>
    )
  }
}

export default App;