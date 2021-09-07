import React, { Component } from 'react'
import {
    Modal,
    Button
} from "react-bootstrap";
class ModelDe extends Component {
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                    {this.props.keyword}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <img src={this.props.img} className="img-fluid" ></img>
                Description : {this.props.description}
                <br />
                Number Of Horns : {this.props.horns}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ModelDe
