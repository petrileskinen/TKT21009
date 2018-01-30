import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      huono: 0,
      neutraali: 0,
      hyva: 0,
      huono2: 0,
      neutraali2: 0,
      hyva2: 0,
      kokonaisuus:[]
    }
   
  }
  Huono = () => {
    this.setState({
      huono: this.state.huono + 1,
      huono2: this.state.huono2 -1,
      kokonaisuus: this.state.kokonaisuus.concat('b')
    })
  }

  Neutraali = () => {
    this.setState({
      neutraali: this.state.neutraali + 1,
      neutraali2: this.state.neutraali2 + 0,
      kokonaisuus: this.state.kokonaisuus.concat('n')
    })
  }
  Hyva = () => {
    this.setState({
      hyva: this.state.hyva + 1,
      hyva2: this.state.hyva2 +1,
      kokonaisuus: this.state.kokonaisuus.concat('g')
    })
  }

  render() {
    if (this.state.kokonaisuus.length === 0) {
    return (
      
      <div>
      <h1>Anna palautetta</h1>
      <button onClick={this.Huono}>
      
  Huono
</button>
<button onClick={this.Neutraali}>
Neutraali</button>
<button onClick={this.Hyva}>
Hyvä</button>
<h1>Statistiikka</h1>
<p>Ei palautteita</p>
      </div>
    )
    
    } 
    return(
    <div><h1>Anna palautetta</h1>
    <button onClick={this.Huono}>
    
Huono
</button>
<button onClick={this.Neutraali}>
Neutraali</button>
<button onClick={this.Hyva}>
Hyvä</button>
<h1>Statistiikka</h1>
<div>Huono: {this.state.huono}</div>
<div>Neutraali: {this.state.neutraali}</div>
<div>Hyvä: {this.state.hyva}</div>
<div>Keskiarvo:{(this.state.huono2+this.state.neutraali2+this.state.hyva2)/(this.state.huono+this.state.neutraali+this.state.hyva)}</div>
<div>Positiivisia:{this.state.hyva/(this.state.huono+this.state.neutraali+this.state.hyva)*100}%</div>
</div>

    ) 
  }
}
  


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
