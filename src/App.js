import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import TOC from './components/TOC'
import Subject from './components/Subject'
import Content from './components/Content'



class App extends Component {
 constructor(props)
 {
   super(props);
   this.state = {
    subject:{title:'PKH', sub:'web is good'},
    contents:[
      {id:1 , title:'HTML', desc :'HTML is for information'},
      {id:2 , title:'CSS', dsec :'Css if for dessign'},
      {id:3 , title :'JavaScript', dsec:'JavaScript is for inters' }
    ]
   }
 }

  render(){
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}/>
        <TOC data={this.state.contents}/>
        <Content/>
      </div>
    );
  }
}
export default App;
