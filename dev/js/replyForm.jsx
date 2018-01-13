import React from 'react';
import {Grid, Col, Row, } from 'react-bootstrap';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

class ReplyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reply: 'Write your reply here',
            location: 'Tell us where you are'
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value});
    }

    handleSubmit(event) {
        console.log('A reply was submitted: ');
        event.preventDefault();
        // TODO: Replace with new endpoint
        axios.post('/bottles', this.state).then(res => console.log(res)).catch(err => console.log(err));
      }

    render() {
        return (
<form>
        <FormGroup
          controlId="formBasicText"
        //   validationState={this.getValidationState()}
        >
          <ControlLabel>Write a reply: </ControlLabel>
          <FormControl
            type="textarea"
            value={this.state.reply}
            placeholder="Enter reply here"
            onChange={this.handleChange}
          />
           <ControlLabel>Where are you from? </ControlLabel>
          <FormControl
            type="text"
            value={this.state.location}
            placeholder="Enter location here"
            onChange={this.handleChange}
          />
          {/* <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock> */}
        </FormGroup>
      </form>

            // <form>
            //     <label>
            //         Write your reply:
            //         <input name="reply" type="textarea" onChange={this.handleChange}/>
            //     </label>
            //     <br/>
            //     <label>
            //         Tell us where you are (City or Country only) :
            //         <input name="location" type="text" onChange={this.handleChange}/>
            //     </label>
            // </form>
        );
    }
}

module.exports = ReplyForm;
