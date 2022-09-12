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
import ArticlesPage from "./components/ArticlesPage";
import PoemsPage from "./components/PoemsPage";
import BooksPage from "./components/BooksPage";
import PhotosPage from "./components/PhotosPage";
import VideosPage from "./components/VideosPage";
import Article1 from "./components/articles/Article1";
import Article2 from "./components/articles/Article2";
import Article3 from "./components/articles/Article3";
import Article4 from "./components/articles/Article4";



import Poem1 from "./components/poems/Poem1";
import About from "./components/About";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
    };
    this.db = firebase.firestore().collection("users");
  }

  componentDidMount() {
    this.db.onSnapshot((snapshot) => {
      const users = [];
      snapshot.forEach((doc) => {
        users.push(doc.data());
      });

      this.setState({
        users: users,
        loading: false,
      });
    });
  }

  render() {
    // console.log(this.state.users);
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
          <Route exact path="/" component={withRouter(Home)} />
          <Route exact path="/contact" component={withRouter(ContactPage)} />
          <Route exact path="/articles" component={withRouter(ArticlesPage)} />
          <Route exact path="/article1" component={withRouter(Article1)} />
          <Route exact path="/article2" component={withRouter(Article2)} />
          <Route exact path="/article3" component={withRouter(Article3)} />
          <Route exact path="/article4" component={withRouter(Article4)} />




          <Route exact path="/poems" component={withRouter(PoemsPage)} />
          <Route exact path="/poem1" component={withRouter(Poem1)} />

          <Route exact path="/booknotes" component={withRouter(BooksPage)} />
          <Route exact path="/photos" component={withRouter(PhotosPage)} />
          <Route exact path="/videos" component={withRouter(VideosPage)} />
          <Route exact path="/about" component={withRouter(About)} />






          </Switch>
          <Bottom />
        </div>
      </Router>
    );
  }
}

export default App;
