import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (
      <h1>{props.kurssi}</h1>
  )
}
const Sisalto = (props) => {
  return (
   
    props.osat.map((osa)=><p>{osa.nimi} {osa.tehtavia}</p>)

  )
}
 const Yhteensa = (props) => {
 
    return (
      <p>yhteensä {props.osat[0].tehtavia + props.osat[1].tehtavia + props.osat[2].tehtavia} tehtävää</p>
      
      
    )
  }


const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osat = [
    {
      nimi: 'Reactin perusteet',
      tehtavia: 10
    },
    {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia: 7
    },
    {
      nimi: 'Komponenttien tila',
      tehtavia: 14
    }
  ]


  

  return (
    
    <div>
       
       <Otsikko kurssi={kurssi} />
       <Sisalto osat={osat}/>
       <Yhteensa osat={osat} />
       
       
   
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
