import React, { useState, Fragment,useContext,useEffect } from 'react'
import { FirebaseContext } from '../Firebase'
import Logout from '../Logout/Logout'

const Welcome = (props) => {
    //il va nous generer notre objet firebase 
    const firebase= useContext(FirebaseContext);
    const [userSession, setUserSession] = useState(null);
    useEffect(()=>{
        //cette methode il va verifier si le user est connecter ou deconnecter 
       let listener= firebase.auth.onAuthStateChanged(user=>{
            //si nous avons un user on va appeler setUserSession
            //: si user n'existe pas
            user ? setUserSession(user) :props.history.push('/');

        })


        return()=>{
          listener()
        };
    },[])



    //si on est dans nul il nous affiche ce qu'il ya frgment
    return userSession === null ? (
        <Fragment>
            <div className="loader"></div>
            <p>Loading ...</p>
        </Fragment>
    ) : (
        <div className="quiz-bg">
            <div className='container '>
                Welcome
                <Logout />
            </div>
        </div>
    )

}
export default Welcome