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
import GalleryPage from "./components/GalleryPage";

import Article1 from "./components/articles/Article1";
import Article2 from "./components/articles/Article2";
import Article3 from "./components/articles/Article3";
import Article4 from "./components/articles/Article4";
import Article5 from "./components/articles/Article5";
import Article6 from "./components/articles/Article6";
import Article7 from "./components/articles/Article7";
import Article8 from "./components/articles/Article8";
import Article9 from "./components/articles/Article9";
import Article11 from "./components/articles/Article11";
import Article12 from "./components/articles/Article12";
import Article13 from "./components/articles/Article13";
import Article14 from "./components/articles/Article14";
import Article15 from "./components/articles/Article15";
import Article16 from "./components/articles/Article16";
import Article17 from "./components/articles/Article17";
import Article18 from "./components/articles/Article18";
import Article19 from "./components/articles/Article19";
import Article20 from "./components/articles/Article20";
import Article21 from "./components/articles/Article21";
import Article22 from "./components/articles/Article22";
import Article23 from "./components/articles/Article23";
import Article24 from "./components/articles/Article24";
import Article25 from "./components/articles/Article25";
import Article26 from "./components/articles/Article26";
import Article27 from "./components/articles/Article27";
import Article28 from "./components/articles/Article28";
import Article29 from "./components/articles/Article29";














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
          <Route exact path="/article5" component={withRouter(Article5)} />
          <Route exact path="/article6" component={withRouter(Article6)} />
          <Route exact path="/article7" component={withRouter(Article7)} />
          <Route exact path="/article8" component={withRouter(Article8)} />
          <Route exact path="/article9" component={withRouter(Article9)} />
          <Route exact path="/article11" component={withRouter(Article11)} />
          <Route exact path="/article12" component={withRouter(Article12)} />
          <Route exact path="/article13" component={withRouter(Article13)} />
          <Route exact path="/article14" component={withRouter(Article14)} />
          <Route exact path="/article15" component={withRouter(Article15)} />
          <Route exact path="/article16" component={withRouter(Article16)} />
          <Route exact path="/article17" component={withRouter(Article17)} />
          <Route exact path="/article18" component={withRouter(Article18)} />
          <Route exact path="/article19" component={withRouter(Article19)} />
          <Route exact path="/article20" component={withRouter(Article20)} />
          <Route exact path="/article21" component={withRouter(Article21)} />
          <Route exact path="/article22" component={withRouter(Article22)} />
          <Route exact path="/article23" component={withRouter(Article23)} />
          <Route exact path="/article24" component={withRouter(Article24)} />
          <Route exact path="/article25" component={withRouter(Article25)} />
          <Route exact path="/article26" component={withRouter(Article26)} />
          <Route exact path="/article27" component={withRouter(Article27)} />
          <Route exact path="/article28" component={withRouter(Article28)} />
          <Route exact path="/article29" component={withRouter(Article29)} />
















          <Route exact path="/poems" component={withRouter(PoemsPage)} />
          <Route exact path="/poem1" component={withRouter(Poem1)} />

          <Route exact path="/gallery" component={withRouter(GalleryPage)} />
          <Route exact path="/about" component={withRouter(About)} />






          </Switch>
          <Bottom />
        </div>
      </Router>
    );
  }
}

export default App;
