import React, { Component } from "react";
import firebase from "./firebase";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Bottom from "./components/Bottom";
import ContactPage from "./components/ContactPage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      loading: true,
    };
    this.db = firebase.firestore().collection("blogs");
  }

  componentDidMount() {
    this.db.onSnapshot((snapshot) => {
      const blogs = [];
      snapshot.forEach((doc) => {
        blogs.push(doc.data());
      });

      this.setState({
        blogs: blogs,
        loading: false,
      });
    });
  }

  render() {
    console.log(this.state.blogs);
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
          <Route exact path="/" component={withRouter(Home)} />
          <Route exact path="/contact" component={withRouter(ContactPage)} />
          </Switch>
          <Bottom />
        </div>
      </Router>
    );
  }
}

export default App;
