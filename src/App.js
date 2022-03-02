import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import TOC from './components/TOC'
import Subject from './components/Subject'
import ReadContent from './components/ReadContent'
import Control from './components/Control'
import CreateContent from './components/CreateContent'

class App extends Component {
 constructor(props)
 {
   super(props);
   this.max_contente_id = 3;
   this.state = {
    mode : 'create',
    selected_content_id : 0,
    subject:{title:'WEB', sub:'web is good'},
    welcome : {title : 'Welcome', desc : 'Hello, React!!'},
    contents:[
      {id:1 , title:'HTML', desc :'HTML is for information'},
      {id:2 , title:'CSS', desc :'Css if for dessign'},
      {id:3 , title :'JavaScript', desc:'JavaScript is for inters' }
    ]
   }
 }

  render(){
    var _title, _desc , _article = null;

    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }else if(this.state.mode === 'read'){
        var i =0;
        while(i < this.state.contents.length){
          var data = this.state.contents[i];
          if(data.id === this.state.selected_content_id){
            _title = data.title;
            _desc = data.desc;
            break;
          }
          i=i+1;
        }
        _article = <ReadContent title={_title} desc={_desc}></ReadContent>

    }else if(this.state.mode === 'create'){
         _article = <CreateContent onSubmit={function(_title , _desc){
  
          this.max_contente_id = this.max_contente_id + 1;
     
          var _contents = this.state.contents.concat(
            {id : this.max_contente_id, title:_title, desc:_desc}
          )
          this.setState({
            contents : _contents
          });
        }.bind(this)}></CreateContent> 
    }
      
     


    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
          />

        <TOC onChangePage={function(id){
          this.setState({
            mode : 'read',
            selected_content_id:Number(id)
          });
        }.bind(this)}
        data={this.state.contents}/>
       
        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          });
        }.bind(this)}> </Control>

        {_article}
      </div>
    );
  }
}
export default App;
