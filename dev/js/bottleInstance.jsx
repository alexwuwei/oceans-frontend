import React from 'react';
import { Grid, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';

import ReplyForm from './replyForm';



class bottleInstance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createdDate: this.props.createdDate,
      message: this.props.message,
      location: '',
      active: false,
      replyActive: this.props.replyActive,
      replyFormActive: false,
      replyLocation: '',
      replyMessage: '',
    };

    // this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    console.log('An essay was submitted: ');
    event.preventDefault();
    axios.post('/bottles', this.state).then(res => console.log(res)).catch(err => console.log(err));
  }

  onButtonClick() {
    this.setState({
      active: !this.state.active
    })
  }

  onReplyButtonClick() {
    this.setState({
      replyFormActive: !this.state.replyFormActive
    })
  }

  generateReplyRequest() {
    const messageRequest = {

      message: this.state.message
    }

    return messageRequest;

  }

  render() {
    return (
      // <Grid>
      <section className="bottle-container-ly bottle-container-md floating" onClick={() => this.onButtonClick()}>
        {this.state.active &&
          <section className={"bottle-message-container-bs bottle-message-container-ly " + this.state.active ? "message-expanded-md" : "message-collapsed-md"}>
            <Row >
              <Col xs={4}>{this.props.createdDate}</Col>
            </Row>
            <Row>
              <Col xs={12}>{this.props.message}</Col>
            </Row>
            {!this.state.replyActive && 
            <Row>
              <Col xs={12} className="no-reply-blurb-bs">This user has chosen not to receive replies</Col>
            </Row>
            }
            {this.state.replyActive && 
            <Row>
              <Col xs={12}>This user has elected to receive replies. Your replies are anonymous.</Col>
            <Col xs={12} className="reply-button-container-ly">
            <Button onClick={() => this.onReplyButtonClick()}>Reply to this message</Button>
            </Col>
            
          </Row>
            }
            {this.state.replyFormActive &&
              <ReplyForm />
            }
          </section>

        }
      </section>
      // </Grid>
    );
  }
}

module.exports = bottleInstance;
