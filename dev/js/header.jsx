import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap';


class Header extends React.Component {
  render() {
    return (
      <header className="primary-header-bs">
        <h1>Message in a bottle</h1>
        <h4>find something in the waves</h4>
      </header>
    );
  }
}

module.exports = Header;
