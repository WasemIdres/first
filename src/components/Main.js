import React, { Component } from 'react';
import HornedBeast from './HornedBeast';
import App from '../App';
class Main extends Component {

    render() {

        
        return (
            <div>
                    <HornedBeast
                    handleOpen={this.props.handleOpen}
                    title={this.props.title}
                    image_url={this.props.image_url}
                    description ={this.props.description}
                    keyword={this.props.keyword}
                    horns={this.props.horns}
                    img={this.props.image_url}
                    />        
            </div>
            )
    }
}
export default Main