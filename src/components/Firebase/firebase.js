import app from 'firebase/app';
//on a importer le fichier app de firebase 
import 'firebase/auth';
// on a configurer notre application dans firebase 
const config = {
    apiKey: "AIzaSyCo_ZMLKcuN5uY7zx3CoKVuFoq0IjHaHkY",
    authDomain: "marvel-quiz-99dc9.firebaseapp.com",
    projectId: "marvel-quiz-99dc9",
    storageBucket: "marvel-quiz-99dc9.appspot.com",
    messagingSenderId: "926147199914",
    appId: "1:926147199914:web:96e6c70c2376889a17e1d3"
  };
  class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }
    //methode inscription 

    signupUser=(email,password)=>
        this.auth.createUserWithEmailAndPassword(email,password)
    

        //methode connexion 

        loginUser=(email,password)=>
            this.auth.signInWithEmailAndPassword(email,password)
        

        // methode deconnexion 
        signoutUser=()=>
           this.auth.signOut ()
        

 
}
export default Firebase;