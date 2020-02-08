import React from 'react';
import logo from './logo.svg';
import './App.css';

class  App extends React.Component {

  constructor(props){

    super(props);
    this.state = {
      value: 'Learn React xD',
      compare: "" 
    };

    this._varGblobal="";

    console.log('constructor')
  }

  shouldComponentUpdate(nextProps,nextState){

    const {value, compare} = this.state;

    const should = nextState.value !== value || nextState.compare !== compare;

    console.log('shouldComponentUpdate',should)

    return should;


  }

  componentDidMount(){
    console.log('componentDidMount')
    setTimeout(()=>{

      this.setState({value: 'Learn React Now!'})

    },3000)

    setTimeout(()=>{

      this._varGblobal='please';
      console.log('orceUpdate');
      this.forceUpdate();

    },4000)

    setTimeout(()=>{

      console.log('setStat compare');
      this.setState({compare: ''} )

    },5000)
  }

  componentDidUpdate(){

    console.log('componentDidUpdate')
  }
 
 render(){ 
   console.log('render');//metodo principal para ser representado
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hola mundo xD</h1>
          <p>
            hola, esta es mi app en react
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            { `${this.state.value} ${this._varGblobal}`}
          </a>
        </header>
      </div>
    );
 }
}

export default App;
