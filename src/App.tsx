import React from 'react';
import './App.css';
import { API_URL } from './constants';
import { IUsersResponse } from './interface';
import { apiCall } from './services';

interface IAppState {
  usersData: IUsersResponse[];
}

class App extends React.Component<{}, IAppState>{
  constructor(props: {}) {
    super(props);
    this.state = {
      usersData: [],
    }
  }

  componentDidMount() {
    apiCall(API_URL.users)
      .then((data: any) => {
        this.setState({usersData: data})
        console.log("test 1")
      })
      .catch(err => {
        console.log("err: ", err);
      })
      .finally(() => {
        console.log("users fetching done...");
      })
      console.log("test 2");
  }

  renderUsers = () => {
    const { usersData } = this.state;

    return usersData.map((users) => {
      //loop
      return (
        <div key={users.id}>
          <h5>{users.email}</h5>
          <p>{users.name}: <span>{users.id}</span></p>
        </div>
      )
    })
  }

  render() {
    return (
      <div className='app-wrapper'>
        {this.renderUsers()}
      </div>
    );
  }
}

export default App;
