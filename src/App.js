import { React, Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SelectedBeast from "./components/SelectedBeast"
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json'
import Form from "./components/Form";
import formstyle from "./components/formstyle.css";
import NewForm from "./components/NewForm";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      description: "",
      horns: 0,
      img: "",
      keyword: "",
      showUser: false,
      speciality: "",
      saver: "",
    }
  }
  handleClose = () => {
    this.setState({
      showModal: false
    })
  }
  handleOpen = (description, horns, img, keyword) => {
    this.setState({
      showModal: true,
      description: description,
      horns: horns,
      img: img,
      keyword: keyword
    })
  }
  handleSelect = (e) => {
    let speciality = e.target.value;
    this.setState({
      speciality: speciality,
    });
    // console.log(this.state.speciality);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('You clicked submit.');
    this.setState({
      showUser: true,
      saver: this.state.speciality,
    })
    console.log(this.state.showUser);
    console.log(this.state.speciality);
    console.log(this.state.saver);

  }
  filterArray = (arr) => {
    if (this.state.showUser === false) {
      return arr;
    }
    else if (this.state.speciality !== this.state.saver && this.state.saver !== "all") {
      return arr.filter(Element => {
        return Element.horns === parseInt(this.state.saver);
      })
    }
    else if (this.state.speciality === "all") {
      this.setState({
        showUser: false,
        saver: this.state.speciality,
      })
      return arr;
    }
    else if (this.state.speciality == "") {
      this.setState({
        showUser: false,
        saver: "all",
      })
      return arr;
    }
    else if (this.state.showUser === true) {
      return arr.filter(Element => {
        return Element.horns === parseInt(this.state.speciality);
      })

    }
  }

  render() {

    return (
      <>
        <Header />
        <div>
          {/* <Form
            handleSelect={this.handleSelect}
            handleSubmit={this.handleSubmit}
            speciality={this.state.speciality}
            showUser={this.state.showUser}
          /> */}
          <NewForm
          handleSelect={this.handleSelect}
          handleSubmit={this.handleSubmit}
          speciality={this.state.speciality}
          showUser={this.state.showUser}
          />
        </div>
        <div className="cr" >
          {
            this.filterArray(data).map(item => {
              return <Main
                handleOpen={this.handleOpen}
                title={item.title}
                image_url={item.image_url}
                description={item.description}
                keyword={item.keyword}
                img={item.image_url}
                horns={item.horns}
              />
            })
          }
        </div>
        <Footer />
        <SelectedBeast handleClose={this.handleClose}
          showModal={this.state.showModal}
          description={this.state.description}
          horns={this.state.horns}
          img={this.state.img}
          keyword={this.state.keyword} />

      </>
    )
  }
}
export default App