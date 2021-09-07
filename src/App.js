import { React, Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SelectedBeast from "./components/SelectedBeast"
import 'bootstrap/dist/css/bootstrap.min.css';


class  App extends Component{
    constructor(props){
      super(props);
      this.state={
          showModal:false,
          description:"",
          horns:0,
          img:"",
          keyword:""
      }
  }
    handleClose=()=>{
      this.setState({
        showModal:false
      })
    }
    handleOpen=(description, horns ,img ,keyword )=>{
      this.setState({
        showModal:true,
        description:description,
        horns:horns,
        img:img,
        keyword:keyword
      })
    }
  render(){
    return(
    <>
      <Header/>
      <Main handleOpen={this.handleOpen}/>
      <Footer/>
      <SelectedBeast handleClose={this.handleClose} 
                showModal={this.state.showModal} 
                description={this.state.description} 
                horns={this.state.horns}
                img={this.state.img}
                keyword={this.state.keyword}   />
    </>
    )
  }
}
export default App