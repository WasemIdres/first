import React, { Component } from 'react';
import formstyle from "./formstyle.css";
class Form extends Component {

    render() {
        return (
            <form className="form"
            onSubmit={this.props.handleSubmit}
            >
                 <select  onChange={(e)=>{this.props.handleSelect(e)}}
                >   
                    <option  value={"all"}>Number of Horns :</option>
                    <option  value={1}>horns : 1</option>
                    <option  value={2}>horns : 2</option>
                    <option  value={3}>horns : 3</option>
                    <option  value={100}>horns : 100</option>
                </select>
                {/* <Button variant="primary" type="submit">Filter Beasts by Horns</Button> */}
                <input type="submit" value={"Filter Beasts by Horns"}/>
            </form>
        )
    }

}
export default Form