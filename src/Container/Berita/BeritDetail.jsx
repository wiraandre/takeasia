import axios from 'axios';

import React, { Component } from 'react';

class BeritDetail extends Component {
  state = {
    data: [],
    notLoading: false
  };

  componentDidMount() {
    axios
      .get(
        `https://id.techinasia.com/wp-json/techinasia/3.0/posts/${
          this.props.match.params.slug
        }`
      )
      .then(response => {
        console.log(response);
        this.setState({
          data: response.data,
          notLoading: true
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.notLoading ? (
          <div
            dangerouslySetInnerHTML={{
              __html: this.state.data.posts[0].content
            }}
          />
        ) : (
          <h1>zzzzzz</h1>
        )}
      </div>
    );
  }
}

export default BeritDetail;
