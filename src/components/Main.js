import React, { Component } from 'react';
import HornedBeast from './HornedBeast';
import App from '../App';
class Main extends Component {

    render() {
console.log(this.props.data);
        
        return (

            <div className="cr">
              {
               this.props.filterArray(this.props.data).map(item => {
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
            </div>
              )
    }
}
export default Main