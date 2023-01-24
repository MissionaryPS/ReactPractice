import React, {Component} from 'react'
import './App.css';

const theme = {
  light:{
    style:{
      backgroundColor:"#f0f9ff",
      color:"#00f"
    },
    head:"bg-primary text-white display-4 mb-4",
    alert:"alert alert-primary my-3",
    text:"text-primary m-3",
    foot:"py-4"
  },
  dark:{
    style:{
      backgroundColor:"#336",
      color:"#eef"
    },
    head:"bg-secondary text-white display-4 mb-4",
    alert:"alert alert-dark my-3",
    text:"text-light m-3",
    foot:"py-4"
  }
}

const ThemeContext = React.createContext(theme.light)

class App extends Component {
  static contextType = ThemeContext

  constructor(props){
    super(props)
    this.state = {
      theme:theme.light
    }

    this.toggleTheme = () =>{
      this.setState(state =>({
        theme:
          state.theme===theme.dark
          ?theme.light
          :theme.dark
      }))
    }
  }


  render(){ 
    return <div style = {this.context.style}>
      <h1 className={this.context.head}>React</h1>
      <div className='container'>
        <ThemeContext.Provider value={this.state.theme}>
        <Title value='Content page'/>
        <Message value='This is Content sample.'/>
          <Message value='これはテーマのサンプルです．'/>
        </ThemeContext.Provider>
        <button onClick={this.toggleTheme}>change theme</button>
        <div className={this.context.foot}></div>
      </div>
    </div>
  }
}


class Title extends Component{
  static contextType = ThemeContext

  render(){
    return <div className={this.context.alert}>
      <h2>{this.props.value}</h2>
    </div>
  }
}


class Message extends Component{
  static contextType = ThemeContext

  render(){
    return <div style={this.context.style}>
      <p className={this.context.text}>{this.props.value}</p>
    </div>
  }
}

export default App;
