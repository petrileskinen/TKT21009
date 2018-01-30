import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (
      <h1>{props.kurssi}</h1>
  )
}
const Sisalto = (props) => {
  return (
      <p>{props.osa} {props.tehtavia}</p>
  )
}
 const Yhteensa = (props) => {
    return (
        <p>yhteensä {props.yhteensa} tehtävää</p>
    )
  }


const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = {
    nimi: 'Reactin perusteet',
    tehtavia: 10
  }
  const osa2 = {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
  }
  const osa3 = {
    nimi: 'Komponenttien tila',
    tehtavia: 14
  }
 
  return (
    <div>
       
       <Otsikko kurssi={kurssi} />
       <Sisalto osa={osa1['nimi']} tehtavia={osa1['tehtavia']}/>
       <Sisalto osa={osa2['nimi']} tehtavia={osa2['tehtavia']}/>
       <Sisalto osa={osa3['nimi']} tehtavia={osa3['tehtavia']}/>
       <Yhteensa yhteensa={osa1['tehtavia']+osa2['tehtavia']+osa3['tehtavia']}/>
       
   
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
