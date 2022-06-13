import React, { useEffect, useState } from 'react'

const  Characters= () => {

    const [list,setList]=useState([])

    useEffect(()=>{
       fetch('https://rickandmortyapi.com/api/character') 
       .then(response=>response.json())
       .then(data=>setList(data.results))       
       .catch(error => console.log(error))
    },[])

    return ( 
        <div className="container">
            <div className="characters">
                {
                    list.map((item,index) => (                       
                        <div className="box" key={index}>
                            <img src={item.image} alt={item.name}/>
                            <div className="character">
                                <h3 className="name">{item.name}</h3>
                                <p className="specie">{item.species}</p>
                                <p className="status">{item.status}</p>
                            </div>
                        </div>            
                    ))
                }
            </div>
        </div>
     );
}
 
export default Characters;