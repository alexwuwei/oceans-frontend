import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import axios from 'axios';


class bottleInstance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            createdDate: this.props.createdDate,          
            message: this.props.message,
            location: ''
        };

        // this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(event) {
    console.log('An essay was submitted: ');
    event.preventDefault();
    axios.post('/bottles', this.state).then(res => console.log(res)).catch(err => console.log(err));
  }

  onButtonClick(e) {

  }

  generateRequest() {
    const messageRequest = {
      message: this.state.message
    }

    return messageRequest;

  }

    render() {
        return (
          // <Grid>
            <section className="bottle-container-ly bottle-container-md floating">
            <Row>
              <Col xs={4}>{this.props.createdDate}</Col>
            </Row>
            <Row>
              <Col xs={12}>{this.props.message}</Col>
            </Row>

            </section>
          // </Grid>
        );
    }
}

module.exports = bottleInstance;
