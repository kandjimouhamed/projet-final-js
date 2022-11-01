
  // Import the functions you need from the SDKs you need
  import { initializeApp }  from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
  import { getFirestore, getDoc, doc, updateDoc,addDoc,collection } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";
  import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDMdM55m1t8SCUyy8UoQuR4LX-HraDY3EM",
    authDomain: "bakeli-tontine.firebaseapp.com",
    projectId: "bakeli-tontine",
    storageBucket: "bakeli-tontine.appspot.com",
    messagingSenderId: "309665317631",
    appId: "1:309665317631:web:4a097fe3f5785040bf42ca" 
  };

// Initialize Firebase & firestore
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
var envoye =         document.getElementById("envoyer");
var membre =         document.getElementById("membre");
var date_debuit =    document.getElementById("date-debuit");
var date_fin =       document.getElementById("date-fin");
var montant_total =  document.getElementById("montant-total");
var status =         document.getElementById("status");
function InsererDonnee(){
    addDoc(collection(db, "Cotisation"),{
        membre: membre.value,
        date_debuit: date_debuit.value,
        date_fin: date_fin.value,
        montant_total: montant_total.value,
        status: status.value,
    }).then(() =>{
        alert("les donnes sont bien enrregistrer ")
    }).catch((error)=>{
        alert('les donnees ne sont pas enrregistrer' + error)
    })    
  }
  envoye.addEventListener(('click'),InsererDonnee)

