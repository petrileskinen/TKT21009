import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (
      <h1>{props.kurssi.nimi}</h1>
  )
}
const Sisalto = (props) => {
  return (
   
    props.kurssi.osat.map((osa)=><p>{osa.nimi} {osa.tehtavia}</p>)

  )
}
 const Yhteensa = (props) => {
 
    return (
      <p>yhteensä {props.kurssi.osat[0].tehtavia+props.kurssi.osat[1].tehtavia+props.kurssi.osat[2].tehtavia} tehtävää</p>
      
      
      
    )
  }


const App = () => {
    const kurssi = {
      nimi: 'Half Stack -sovelluskehitys',
      osat: [
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
    }


  

  return (
    
    <div>
       
       <Otsikko kurssi={kurssi} />
       <Sisalto kurssi={kurssi}/>
       <Yhteensa kurssi={kurssi} />
       
   
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
