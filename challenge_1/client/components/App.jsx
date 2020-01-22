import React from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import { IconContext } from "react-icons";

import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      keyword: '',
      list: [],
      pageCount: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.finder = this.finder.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: `/events?_limit=10`
    })
    .then((events) => {
      this.setState({
        list: events.data,
        pageCount: [events['headers']['x-total-count']]
      })
    });
  }

  handleChange(e) {
    e.preventDefault();
    const query = e.target.value;
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
      const queryResults = events.data;
      this.setState({
        list: queryResults.filter(event => event.description.toLowerCase().includes(query.toLowerCase())),
        keyword: query
      })
    });
  }

  handlePageClick(e) {
    const query = this.state.query;

    axios({
      method: 'get',
      url: `/events?_page=${e.selected + 1}&_limit=10&q=${query}`
    })
    .then((events) => {
      this.setState({
        list: events.data,
        pageCount: [events['headers']['x-total-count']]
      })
    })
    .catch((err) => {
        console.log(err)
    });
  }

  render() {
    return (
      <div>

        <div className="search">
          <IconContext.Provider value={{ color: "black", className: "fa-search" }}>
            <h1><FaSearch /></h1>
          </IconContext.Provider>
          <form onSubmit={(e) => this.finder(e)}>
            <input type="text" value={this.state.query} onChange={(e) => this.handleChange(e)} />
            <input type="submit" value="  " />
          </form>
        </div>

        <div className="list-container">
          <List list={this.state.list} query={this.state.query} />
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>

      </div>
    );
  }
  
}

export default App;