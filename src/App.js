import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  

  
  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

 
  handleSubmit = (event) => {
    alert('Lisätty nimi: ' + this.state.value);
    event.preventDefault()
    const name = {
      content: this.state.value,
      
    }
  
  }
  
  render() {
  
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            nimi: <input value={this.state.nimi} onChange={this.handleChange}/>
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        
        <h2>Numerot</h2>
        ...
        <div>
  debuggaus: {this.state.nimi}

</div>
      </div>
    )
  }
}

export default App