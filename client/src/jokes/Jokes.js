import React from 'react';
import axios from 'axios';
//import './styles.css';
import { Card, CardBody, CardHeader, CardText } from "reactstrap";

class Jokes extends React.Component {
  state = {
    jokes: [],
  };
  componentDidMount() {
    const token = localStorage.getItem('token');
    const authToken = `${token}`;
    const requestOptions = {
      headers: {
        Authorization: authToken,
      },
    };

    axios
      .get('http://localhost:5000/api/jokes', requestOptions)
      .then(response => {
        this.setState({ jokes: response.data });
      })
      .catch(err => {
        this.props.history.push('/login');
      })
  };
  render() {
    return (
      <Card>
        {this.state.jokes.map(joke => {
          return (
            <CardBody key={joke.id} >
              <CardHeader>{joke.setup}</CardHeader>
              <CardText>{joke.punchline}</CardText>
            </CardBody>
          );
        })}
      </Card>
    );
  }
};

export default Jokes;