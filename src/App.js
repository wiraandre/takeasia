import React, { Component } from 'react';
import './App.css';
import Berita from './Container/Berita/Berita';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BeritaDetail from './Container/BeritaDetail/BeritaDetail';
import Head from '../src/Component/Header/Header';
import BeritDetail from './Container/Berita/BeritDetail';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Head} />
        </Switch>

        <Switch>
          <Route path="/" exact={true} component={Berita} />
          <Route path="/:slug" component={BeritDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;

/* 
class Berita extends Component {
  render(){
    return(
      
    )
  }
}

class BeritaDetail extends Component {
  render(){
    return(
      <div dangerouslySetInnerHTML={{ __html: this.props.data.content }}>

      </div>
    )
  }
} */
{
  /* <div
    style={{
      marginBottom: "56px",
      padding: "16px"
    }}>
    
    
    {this.state.isLoading && <h1 align="center">Loading ...</h1>}
    {!this.state.isLoading && !this.state.isDetailMode && this.state.data.posts.map((post)=>{
      
      return(
        <Berita 
          title={post.title}
          image={post.featured_image.source}
          handleClick={()=>{this.handleDetailClick(post)}}
        />
      )
    })}
    
    {this.state.isDetailMode &&
        <BeritaDetail
        data={this.state.dataDetail}
        />
      }
      
  </div>
  
   */
}
/* state = {
                  value: 0,
                  isLoading: true,
                  data: {},
                  isDetailMode: false,
                  dataDetail: {}
                };
                
                handleChange = (event, value) => {
                  this.setState({ value });
                };
                
                handleDetailClick = (post) => {
                  this.setState({
                    isDetailMode: true,
                    dataDetail: post
                  })
                }
                
                 */
