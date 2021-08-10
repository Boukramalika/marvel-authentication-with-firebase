import React  from 'react'
import batmane from "../../images/batmane.png.crdownload"
//j'ai stylé mon composant ici 
const  centerH2= {
    textAlign:"center",
    marginTop:'50px'
}
const centerImg={
    display:"block",
    margin: "40px auto ",
    height:"50%",

}
const ErrorPage = ()=>{
    return(
        <div className="quiz-bg">
            <div className='container'>
            <h2 style={centerH2}> Oups, cette page n'existe pas!</h2>
            <img style={centerImg} src={batmane} alt ="Error page "/>
            </div>
        </div>
    )
}
export default ErrorPage