import React, { Component } from 'react';
import firebase from "./firebase";
import Home from './components/Home';
import CssBaseline from '@mui/material/CssBaseline';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      blogs:[],
      loading:true
    };
    this.db=firebase.firestore().collection("blogs");
  }

  componentDidMount() {
    this.db
        .onSnapshot((snapshot)=>{
           
            const blogs=[];
            snapshot.forEach((doc)=>{
              blogs.push(doc.data());
            })

            this.setState({
                blogs:blogs,
                loading:false
            });
       
        });
  }
  
 
  render() {
    return (
      <div>
        <CssBaseline />
        <Home />
      </div>
    );
  }
}

export default App;