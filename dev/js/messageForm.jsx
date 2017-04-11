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
        console.log(this.state);
    }

    handleSubmit(event) {
    console.log('An essay was submitted: ');
    event.preventDefault();
  }

    render() {
        return (
          <section className="form-container-ly form-container-md">
            <form className="message-form-ly message-form-md message-form-bs">
              <div className="field-container-md">
                <label className="message-label-ly message-label-md">
                  Write your message:
                  {/*<input name="message" type="textarea" rows="6" onChange={this.handleInputChange} className="message-field-ly message-field-md"/>*/}
                  <textarea name="message" type="textarea" rows="6" cols="40" onChange={this.handleInputChange} className="message-field-ly message-field-md"></textarea>
              </label>
            </div>
              <br/>


              <label className="email-label-ly email-label-md">
                Email:
                <input name="email" type="email" value={this.state.numberOfGuests} onChange={this.handleInputChange} className="email-field-ly email-field-md"/>
              </label>
              <label className="location-label-ly location-label-md">
                Location:
                <input name="location" type="text" onChange={this.handleInputChange} className="location-field-ly location-field-md"/>
              </label>
              <input type="button" value="submit" onClick={this.handleSubmit}/>
            </form>
          </section>
        );
    }
}

module.exports = MessageForm;
