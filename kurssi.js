import React from 'react';

const Sisalto = (props) => {
    return (
      <div>
         {props.osat.map((osa)=><div key={osa.id}>{osa.nimi} {osa.tehtavia}</div>)}
         <div>Yhteensä: {props.osat.reduce((summa,osa)=>summa+osa.tehtavia,0)}</div>
      </div>
    )
   
  }
  
 
const Kurssi = (props) => {
    return (
      <div>
        <h1 id={props.kurssi.id}>{props.kurssi.nimi} </h1>
        <Sisalto osat={props.kurssi.osat} />
        <div>
          
        </div>
      </div>
    )
  }

export default Kurssi;