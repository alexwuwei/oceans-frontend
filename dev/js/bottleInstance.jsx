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
      bottleActive: false,
      replyActive: this.props.replyActive,
      replyFormActive: false,
      replyLocation: '',
      replyMessage: '',
    };

    // this.handleInputChange = this.handleInputChange.bind(this);
  }



  onBottleClick() {
    this.setState({
      bottleActive: true
    });
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

  handleCloseIcon() {
    this.setState({
      bottleActive: false
    });
  }

  render() {
    return (
      // <Grid>
      <section onClick={() => this.onBottleClick()} className={this.state.bottleActive ? "someclass" : "someotherclass" + "bottle-container-ly bottle-container-md floating"}>
        {this.state.bottleActive &&
          <section className={"bottle-message-container-bs bottle-message-container-ly " + this.state.bottleActive ? "message-expanded-md" : "message-collapsed-md"}>
            <Row >
              <Col xs={2} xsOffset={10} ><button type="button" onClick={() => this.handleCloseIcon()}>&times;</button></Col>
            </Row>

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
            {/* fix show hide for reply form. also fix reply form. */}
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
