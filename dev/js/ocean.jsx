import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import Bottle from './bottleInstance';
import MessageForm from './messageForm';

import axios from 'axios';


class Ocean extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //TODO: Add true example
      bottlesArray: [{ "message": "hi", "createdDate": "jul 20th", "replyActive": "true" }],
      bottlesNeeded: false,
      createBottleActive: false,
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

  createBottleHandler() {
    console.log('hello');
    this.setState({
      createBottleActive: !this.state.createBottleActive
    })
  }

  handleBottleSubmit(event) {
    console.log('A new bottle was submitted: ');
    event.preventDefault();
    axios.post('/bottles', this.state).then(res => console.log(res)).catch(err => console.log(err));
  }

  render() {
    return (
<Grid>
<Row>
        <Col xs={12}><h1>Message in a bottle</h1></Col>
      </Row>
       <Row>
       <Col xs={12}> <h4>find something in the waves</h4></Col>
     </Row>
     {this.state.bottlesArray.map((instance, index) => {
      return <Bottle key={index} message={instance.message} createdDate={instance.createdDate} replyActive={instance.replyActive} />
    })}
      <Row>
      <Col xs={12}><button type="button" onClick={() => this.createBottleHandler()}>Make a bottle</button></Col>
    </Row>
    {this.state.createBottleActive && 
    <MessageForm />
    }
</Grid>
      
      // <header className="primary-header-bs">
        
       
        
      // </header>

    );
  }
}

module.exports = Ocean;
