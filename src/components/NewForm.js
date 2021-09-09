import React, { Component } from 'react'
import formstyle from "./formstyle.css";
import {
    Col,
    Form,
    FloatingLabel,
    Button
} from 'react-bootstrap';
class NewForm extends Component {
    render() {
        return (
            <form className="form"
                onSubmit={this.props.handleSubmit}
            >
                <Col md className="DropDownMenu">
                    <FloatingLabel controlId="floatingSelect" label="Filter by the number of horns">
                        <Form.Select onChange={(e) => { this.props.handleSelect(e) }}
                        >
                            <option value={"all"}>Number of Horns :</option>
                            <option value={1}>horns : 1</option>
                            <option value={2}>horns : 2</option>
                            <option value={3}>horns : 3</option>
                            <option value={100}>horns : 100</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Button as="input" type="submit" value="Click Me To Filter" />{' '}
            </form>
        )
    }
}

export default NewForm
