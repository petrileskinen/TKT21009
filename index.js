import React from 'react'
import ReactDOM from 'react-dom'
import Kurssi from './kurssi'

const App = () => {
  const kurssit = [
    {
      nimi: 'Half Stack -sovelluskehitys',
      id: 1,
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
    },
    {
      nimi: 'Node.js',
      id: 2,
      osat: [
        {
          nimi: 'Routing',
          tehtavia: 3,
          id: 1
        },
        {
          nimi: 'Middlewaret',
          tehtavia: 7,
          id: 2
        },
        {
          nimi: 'Tukiopetus',
          tehtavia: 4,
          id: 3
        }
      ]
    }
  ]

  const kurssiLista = () => kurssit.map((k)=><Kurssi kurssi={k} />)
  return (
    <div>
            {kurssiLista()}
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)