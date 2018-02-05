import React from 'react'
import ReactDOM from 'react-dom'

const Sisalto = (props) => {
  const laske = [10,7,14,12]


  return (
    <div>
       {props.osat.map((osa)=><div key={osa.id}>{osa.nimi} {osa.tehtavia}</div>)}
       Yhteensä: {laske.reduce(reducer)}
    </div>
  )
 
}

const Kurssi = (props) => {
  return (
    <div>
      <h1>{props.kurssi.nimi}</h1>
      <Sisalto osat={props.kurssi.osat} />
      <div>
        
      </div>
    </div>
  )
}

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10,
        id: 1
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7,
        id: 2
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14,
        id: 3
      },
      {
        nimi: 'Tukiopetus',
        tehtavia: 12,
        id: 4
      }
    ]
  }
  return (
    <div>
      <Kurssi kurssi={kurssi} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)