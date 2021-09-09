// import React, { Component } from 'react';
// import formstyle from "./formstyle.css";
// import { Col, Form, FloatingLabel } from 'react-bootstrap';
// class Form extends Component {

//     render() {
//         return (
//             <form className="form"
//             onSubmit={this.props.handleSubmit}
//             >
//                  <Col md>
//                     <FloatingLabel controlId="floatingInputGrid" label="Search beasts by title">
//                         <Form.Control type="text" placeholder="search" onChange={(e) => { this.props.handleTitleSearch(e) }} />
//                     </FloatingLabel>
//                 </Col>
//                 <Col md>
//                 <FloatingLabel controlId="floatingSelect" label="Filter by the number of horns">
//                  <Form.Select  onChange={(e)=>{this.props.handleSelect(e)}}
//                 >   
//                     <option  value={"all"}>Number of Horns :</option>
//                     <option  value={1}>horns : 1</option>
//                     <option  value={2}>horns : 2</option>
//                     <option  value={3}>horns : 3</option>
//                     <option  value={100}>horns : 100</option>
//                 </Form.Select>
//                 </FloatingLabel>
//                 </Col>
//                 <input type="submit" value={"Filter Beasts by Horns"}/>
//             </form>
//         )
//     }

// }
// export default Form