import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Stats from './Stats';
class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader toggle={this.props.toggle}>JobID: {this.props.user.jobId}</ModalHeader>
          <ModalBody>
            <div className="container">
              <div>  JobID: {this.props.user.jobId}</div>
              <div>  LightID: {this.props.user.deviceID}</div>
              <div>  Location: {this.props.user.location}</div>
              <div>  Timestamp: {this.props.user.timestamp}</div>
              <div className="mb-3">  Main Power: {this.props.user.status}</div>
            </div>
            <Stats info={this.props.user} history={this.props.history}/>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.onConfirm}>Job Complete</Button>{' '}
            <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
    );
  }
}

export default ModalExample;
