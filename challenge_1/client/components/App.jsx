import React from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import { FaEgg } from 'react-icons/fa';
import { IconContext } from "react-icons";

import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      keyword: '',
      list: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.finder = this.finder.bind(this);
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: `/events?_limit=10`,
    })
    .then((events) => {
      console.log('list in Mount ', events);
      this.setState({
        list: events.data
      })
    });
  }

  handleChange(e) {
    e.preventDefault();
    const query = e.target.value;
    console.log('query ', query);
    this.setState({ query });
  }

  finder(e) {
    e.preventDefault();
    const query = this.state.query;

    axios({
      method: 'get',
      url: `/events?_limit=10&q=${query}`,
    })
    .then((events) => {
      console.log('list in finder ', events);
      const queryResults = events.data;
      this.setState({
        list: queryResults.filter(event => event.description.toLowerCase().includes(query.toLowerCase())),
        keyword: query
      })
    });
  }
  
  render() {
    return (
      <div>
        <div className="search">
          <IconContext.Provider value={{ color: "white", className: "fa-search" }}>
            <h1><FaSearch /></h1>
          </IconContext.Provider>
          <form onSubmit={(e) => this.finder(e)}>
            <input type="text" value={this.state.query} onChange={(e) => this.handleChange(e)} />
            <input type="submit" value="  " />
          </form>
        </div>

        <List list={this.state.list} query={this.state.query} />
      </div>
    );
  }
  
}

export default App;

// GET /events?q=word