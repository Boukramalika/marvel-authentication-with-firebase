import React, { useRef, useEffect, useState, Fragment } from 'react'
import {Link } from 'react-router-dom'

const Landing = () => {
    const [btn, setBtn] = useState(false);

    const refWolverine = useRef(null);
    //pour afficher l'img avec les griffes
    useEffect(() => {
        refWolverine.current.classList.add("startingImg");
        //pour faire disparaitre les griffe au bou de 3seconde
        setTimeout(() => {
            refWolverine.current.classList.remove("startingImg");
            setBtn(true)
        }, 1000);
    }, [])
//quand je passe ma souris les griffe s'affiche 
    const setleftImg =()=>{
        refWolverine.current.classList.add("leftImg");
    }

    const setrightImg=()=>{
        refWolverine.current.classList.add("rightImg");
    }

    const clearImg=()=>{
        // le if il va verifier si on a une image qui s'appelle leftImg
       if(refWolverine.current.classList.contains("leftImg")){
           //si on a l'image on va l'effacé
           refWolverine.current.classList.remove("leftImg")

       }else if ( refWolverine.current.classList.contains("rightImg")){
        refWolverine.current.classList.remove("rightImg")
       }
    }
    //boutton 
    const displayBtn = btn && (
        <Fragment>
            {/* on a utiliser des Link a la place des boutons pour les redireger */}
            <div onMouseOver ={setleftImg}onMouseOut={clearImg} className="leftBox ">
                <Link className="btn-welcome" to='/signup'>Inscription</Link>
            </div>
            <div onMouseOver={setrightImg}onMouseOut={clearImg}  className="rightBox">
                <Link className="btn-welcome"to="/login">Connexion </Link>
            </div>
        </Fragment>
    )
    return (
        <main ref={refWolverine} className="welcomePage">
            {displayBtn}

        </main>
    )
}

export default Landing