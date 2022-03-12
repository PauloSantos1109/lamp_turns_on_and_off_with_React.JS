import React, {Component} from 'react'
import './style.css'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      stateLamp: 'START',
      controle:null,
      desligado: require('./assents/img/desligada.png'),
      ligado: require('./assents/img/ligada.png'),
      quebrou: require('./assents/img/quebrada.png'),
    }

    this.controLamp = this.controLamp.bind(this);
    this.quebrarLamp = this.quebrarLamp.bind(this);
    this.overUp = this.overUp.bind(this);
    this.overDown = this.overDown.bind(this);

  }
  controLamp(){
    let state = this.state;

    if (state.controle === null || state.controle === state.desligado ) {
      state.controle = state.ligado;
      state.stateLamp = 'Desligar';
    }else{
      state.controle = state.desligado;
      state.stateLamp = 'Ligar';      
    }
    this.setState(state)
  }

  quebrarLamp(){
    let state = this.state;
    if (state.controle === 'ligado' || state.controle === state.desligado) {
      state.controle = state.quebrou;
      state.stateLamp = 'START';
      this.setState(state)
    }

  }
  overUp(){
    let state = this.state;

    if (state.controle === null || state.controle === state.desligado ) {
      state.controle = state.ligado;
      state.stateLamp = 'Desligar';
    }    
    this.setState(state)
  }

  overDown(){
    let state = this.state;

    if (state.controle === null || state.controle === state.ligado ) {
      state.controle = state.desligado;
      state.stateLamp = 'Ligar'; 
    }
    this.setState(state)
  }


  render(){
    return(
      <div className='container'>
        <h1 className="title">Lamp JS</h1>

        <div className='lamp'>
        <img src={this.state.controle} className='img' onDoubleClick={this.quebrarLamp} onMouseEnter={this.overUp} onMouseLeave={this.overDown}/>
        </div>

        <div className="btn">          
          <a className="states" onClick={this.controLamp}>{this.state.stateLamp}</a>          
        </div>

      </div>
    )
  }
}

export default App;