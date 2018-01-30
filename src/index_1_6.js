import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      huono: 0,
      neutraali: 0,
      hyva: 0
    }
   
  }

  render() {
    return (
      <div>
      <h1>Anna palautetta</h1>
        <button onClick={() => this.setState({ huono: this.state.huono + 1 })}>
      
  Huono
</button>
<button onClick={() => this.setState({ neutraali: this.state.neutraali + 1 })}>
Neutraali</button>
<button onClick={() => this.setState({ hyva: this.state.hyva + 1 })}>
Hyvä</button>
<h1>Statistiikka</h1>
<div>Huono: {this.state.huono}</div>
<div>Neutraali: {this.state.neutraali}</div>
<div>Neutraali: {this.state.hyva}</div>

      </div>
    )
  }
}
  


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
