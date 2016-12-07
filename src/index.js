import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyA8CC51IwZXMpLUgN-LBELZ311A_1aD6iU";

class App extends Component
{
  constructor(props)
  {
    super(props);

    this.state =
    {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('Recommended');
  }

  videoSearch(term)
  {
    YTSearch({key: API_KEY, term: term}, (data) =>
    {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }

  render()
  {
    const videoSearchDebounced = _.debounce((term) => {this.videoSearch(term)}, 300);

    return(
      <div>
        <SearchBar onSearchTermChange={videoSearchDebounced} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('.container'));