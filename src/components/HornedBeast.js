import React, { Component } from 'react';
import {
    Card,
    Button,
    Col,
} from 'react-bootstrap';
class HornedBeas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateFav: 0,
        }
    }
    favTimes = () => {
        this.setState({
            stateFav: this.state.stateFav + 1
        })
    }


    render() {
        return (
             <div className="row" >
                {/* <h2>title: {this.props.title}</h2>
                <img onClick={this.favTimes} src = {this.props.image_url}  alt = 'HornedBeas' title = {this.props.title} style={{width: "500px"}}></img>
                <p>🧡💛💙 number of favorite : {this.state.stateFav}</p>   */}
                {/* <p>description {this.props.description}  it has : {this.props.horns} horns</p>
                <p>keyword :{this.props.keyword}</p>
                <p>Number Of Horns : {this.props.horns}</p> */}
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img
                            variant="top"
                            onClick={this.favTimes}
                            src={this.props.image_url}
                            style={{width: "285px"},{height:"250px"}}
                            alt='HornedBeas'
                            title={this.props.title}
                        />
                        <Card.Body>
                            <Card.Title>{this.props.keyword}</Card.Title>
                            <Card.Text>
                                {this.props.title}
                                <br />
                                🧡💛💙 number of favorite : {this.state.stateFav}
                            </Card.Text>
                            <Button
                                onClick={this.props.start}
                                variant="primary"
                            >
                                See description
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                </div>
        )
    }
}
export default HornedBeas