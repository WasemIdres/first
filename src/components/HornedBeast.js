import React, { Component } from 'react'
class HornedBeas extends Component {
    constructor(props){ 
        super(props);
        this.state={
                stateFav:0,
        }}
         favTimes=()=>{
            this.setState({
                stateFav:this.state.stateFav+1
            })
        }
    
    render() {
        return (
            <>
                <h2>title: {this.props.title}</h2>
                <img onClick={this.favTimes} src = {this.props.image_url}  alt = 'HornedBeas' title = {this.props.title} style={{width: "500px"}}></img>
                <p>🧡💛💙 number of favorite : {this.state.stateFav}</p>  
                <p>description {this.props.description}  it has : {this.props.horns} horns</p>
                <p>keyword :{this.props.keyword}</p>
                <p>Number Of Horns : {this.props.horns}</p>
            </>
        )
    }
}
export default HornedBeas