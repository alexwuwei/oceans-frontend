import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import Bottle from './bottleInstance';

import axios from 'axios';


class Ocean extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        //TODO: Add true example
        bottlesArray: [{"message":"hi","createdDate":"jul 20th", "replyActive":"true"}],
        bottlesNeeded: false
      };

      // this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {
    // TODO: bring this back once endpoint is set.
    // axios.get('/bottles').then((res) => {
    //   this.setState({
    //     bottlesArray: res.bottlesArray,
    //     bottlesNeeded: false
    //   })
    // }).catch(err => console.log(err));
  }

  getMessages() {

  }

  createBottles() {

  }

  render() {
    return (

      // <header className="primary-header-bs">
      <header className="primary-header-bs">
        <h1>Message in a bottle</h1>
        <h4>find something in the waves</h4>
        {this.state.bottlesArray.map((instance, index) => {
          return <Bottle key={index} message={instance.message} createdDate={instance.createdDate} replyActive={instance.replyActive}/>
        })}
      </header>
      // </header>
    );
  }
}

module.exports = Ocean;
