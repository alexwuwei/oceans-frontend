import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import axios from 'axios';


class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Write your message here',
      email: '',
      location: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
    console.log(this.state);
  }

  handleSubmit(event) {
    console.log('An essay was submitted: ');
    event.preventDefault();
    axios.post('/bottles', this.state).then(res => console.log(res)).catch(err => console.log(err));
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
      <section className="form-container-ly form-container-md">
        <form className="message-form-ly message-form-md message-form-bs">
          <Row className="field-container-md">
            <Col xs={12}>
              <label className="input-label-ly input-label-md">
                Write your message:
                      {/*<input name="message" type="textarea" rows="6" onChange={this.handleInputChange} className="message-field-ly message-field-md"/>*/}
                <textarea name="message" type="textarea" rows="6" cols="40" onChange={this.handleInputChange} className="message-field-ly message-field-md field-ly"></textarea>
              </label>
            </Col>
          </Row>
          <br />


          <label className="input-label-ly input-label-md">
            Email:
                  <input name="email" type="email" value={this.state.numberOfGuests} onChange={this.handleInputChange} className="email-field-ly field-ly email-field-md" />
          </label>
          <label className="input-label-ly input-label-md">
            Location:
                  <input name="location" type="text" onChange={this.handleInputChange} className="location-field-ly location-field-md field-ly" />
          </label>
          <input type="button" value="submit" onClick={this.handleSubmit} />
        </form>
      </section>
      // </Grid>
    );
  }
}

module.exports = MessageForm;
