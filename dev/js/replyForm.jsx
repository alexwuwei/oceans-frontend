import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap';

class ReplyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reply: 'Write your reply here',
            location: 'Tell us where you are'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value});
    }

    handleSubmit(event) {
    console.log('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

    render() {
        return (
            <form>
                <label>
                    Write a reply:
                    <input name="reply" type="textarea" onChange={this.handleInputChange}/>
                </label>
                <br/>
                <label>
                    Location:
                    <input name="location" type="text" onChange={this.handleInputChange}/>
                </label>
            </form>
        );
    }
}

module.exports = ReplyForm;
