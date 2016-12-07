import React from 'react';

class SearchBar extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {term:''};

    this.onInputChange = this.onInputChange.bind(this);
  }
  render()
  {
    return(
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange={this.onInputChange} />
      </div>
    );
  }

  onInputChange(event)
  {

    this.setState({term: event.target.value});
    this.props.onSearchTermChange(event.target.value);
  }
}

export default SearchBar;