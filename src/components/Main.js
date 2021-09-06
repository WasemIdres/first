import React, { Component } from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json'
class Main extends Component {
    constructor(props){ 
        super(props);
        this.state={
                start:data,
        }
        }
    
    render(){
       
        return (
                <>
                    {
                        data.map(item=>{
                            return <HornedBeast title={item.title} image_url={item.image_url} 
                              description ={item.description}keyword = {item.keyword} horns={item.horns}/>
                        })
                    }
                </> )
                }
            }        
export default Main