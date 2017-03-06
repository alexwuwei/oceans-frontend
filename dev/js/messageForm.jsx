import React from 'react';

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
                    Write a message:
                    <input name="message" type="textarea" onChange={this.handleInputChange}/>
                </label>
                <br/>
                <label>
                    Email:
                    <input name="email" type="email" value={this.state.numberOfGuests} onChange={this.handleInputChange}/>
                </label>
                <label>
                    Location:
                    <input name="location" type="text" onChange={this.handleInputChange}/>
                </label>
            </form>
        );
    }
}

module.exports = MessageForm;
