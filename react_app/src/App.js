import React, {Component} from 'react'
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      msg:'Hello Component.',
      count:0
    }
    //let timerを消しても動く．
    //setIntervalの引数は(関数，ミリ秒)だが，関数の宣言にアロー関数を用いている
    let timer = setInterval(()=>{
      this.setState({
        count:this.state.count + 1,
        msg:"[count:" + this.state.count + "]"
      })
    }, 1000)
  }

  render(){ 
    return <div>
      <h1 className='bg-primary text-white display-4'>React</h1>
      <div className='container'>
        <p className='subtitle'>Count number.</p>
        <p className='alert alert-warning'>{this.state.msg}</p>
        <p className='alert alert-dark'>{this.props.msg}</p>
      </div>
    </div>
  }
}

export default App;
