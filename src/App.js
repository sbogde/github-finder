import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  static propType = {
    searchUsers: PropTypes.func.isRequired,
  };

  async componentDidMount() {
    this.setState({
      loading: true,
    });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET_ID}`
    );
    this.setState(
      {
        users: res.data,
      },
      () => {
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 1000);
      }
    );
  }

  searchUsers = async (text) => {
    // console.log(`text = ${text}`);
    this.setState({
      loading: true,
    });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET_ID}`
    );
    this.setState(
      {
        users: res.data.items,
      },
      () => {
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 500);
      }
    );
  };

  clearUsers = () => {
    this.setState({
      users: [],
      loading: false,
    });
  };

  render() {
    const { users, loading } = this.state;
    return (
      <div className='App'>
        <Navbar title='Github Finder' icon='fab fa-github' />
        <div className='container'>
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
