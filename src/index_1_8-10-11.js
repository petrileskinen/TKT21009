import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      huono: 0,
      neutraali: 0,
      hyva: 0
    }
   
  }

  positiivisia= () => {
    return (((this.state.hyva)/(this.state.huono+this.state.neutraali+this.state.hyva))*100)+"%"
  }

  ka = () => {
    return (
      ((this.state.hyva-this.state.huono)/(this.state.huono+this.state.neutraali+this.state.hyva))
    )
  }
  aanesta = (arg) => {
    let apu =() => {
      let val=this.state[arg]+1;
      let oldState=this.state;
      oldState[arg]=val;
      this.setState(oldState)
    
    }
    apu=apu.bind(this)
    return apu
  }
  
  
  render(){
    const Statistiikka= ({teksti,luku}) => {
      return (
        <tr><td><b>{teksti}:</b></td><td>{luku}</td></tr>
      )
    }
    const Button = ({klikki,teksti}) => {
      return (<button onClick={klikki}>{teksti}</button>)
    }
    if(this.state.huono+this.state.neutraali+this.state.hyva>0){
      return (
        <div>
          <h1>Anna palautetta</h1>
          <Button klikki={this.aanesta('huono')} teksti="Huono"/>
          <Button klikki={this.aanesta('neutraali')} teksti="Neutraali"/>
          <Button klikki={this.aanesta('hyva')} teksti="Hyvä"/>
          <table>
          <thead>
          <tr><th><h1>Statistiikka</h1></th><th></th></tr></thead>
            <tbody>
              <Statistiikka teksti="Huono" luku={this.state.huono} />
              <Statistiikka teksti="Neutraali" luku={this.state.neutraali} />
              <Statistiikka teksti="Hyvä" luku={this.state.hyva} />
              <Statistiikka teksti="Keskiarvo" luku={this.ka()} />
              <Statistiikka teksti="Positiivisia" luku={this.positiivisia()} />
            </tbody>
          </table>
        </div>
      )} else {
        return (
          <div>
            <h1>Anna palautetta</h1>
            <Button klikki={this.aanesta('huono')} teksti="Huono"/>
            <Button klikki={this.aanesta('neutraali')} teksti="Neutraali"/>
            <Button klikki={this.aanesta('hyva')} teksti="Hyvä"/>
            <h1>Statistiikka</h1>
            <p>Ei arvosteluja.</p> 
          </div>
        )
    }
  }
}



ReactDOM.render(<App />, document.getElementById('root'));