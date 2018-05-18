import React from 'react';
import axios from 'axios';
import './styles.css';

class Jokes extends React.Component {
  state = {
    jokes: [],
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.jokes.map(joke => (
            <li className="user" key={joke.id}>
              {jokes.setup}, {jokes.punchline}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  componentDidMount = event => {
    const token = localStorage.getItem('token');
    const authToken = `${token}`;
    const requestOptions = {
      headers: {
        Authorization: authToken,
      },
    };
    axios
      .get('http://localhost:5500/api/jokes', requestOptions)
      .then(response => {
        this.setState({ jokes: response.data });
      })
      .catch(err => {
        this.props.history.push('/login');
      })
  }
};

export default Jokes;