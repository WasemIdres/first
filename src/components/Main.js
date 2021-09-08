import React, { Component } from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json'
class Main extends Component {

    render() {
        let mystyle = {
            display:'grid',
            gridTemplateColumns:"auto auto auto auto auto auto",
            rowGap:"20px",
        };
        
        return (
            <div className="cr" style={mystyle}>
                {
                    data.map(item => {
                        return <HornedBeast
                            handleOpen={this.props.handleOpen}
                            title={item.title}
                            image_url={item.image_url}
                            description ={item.description}
                            keyword={item.keyword}
                            horns={item.horns}
                            img={item.image_url}
                        />
                    })
                }
            </div>)
    }
}
export default Main