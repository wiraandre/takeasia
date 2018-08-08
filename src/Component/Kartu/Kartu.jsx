import React, { Component } from 'react';
import axios from 'axios';
import KartuSingular from '../Kartu/KartuSingular/KartusSingular';

export default class Kartu extends Component {
  state = {
    datax: [],
    loader: false
  };
  componentDidMount() {
    axios
      .get(
        'https://id.techinasia.com/wp-json/techinasia/3.0/posts?page=1&per_page=15'
      )
      .then(response => {
        console.log(response);
        this.setState({
          datax: response.data,
          loader: true
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.loader ? (
          <KartuSingular data={this.state.datax} />
        ) : (
          <h1>loading...........</h1>
        )}
      </div>
    );
  }
}
