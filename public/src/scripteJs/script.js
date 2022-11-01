
  // Import the functions you need from the SDKs you need
  import { initializeApp }  from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
  import { getFirestore, getDoc, setDoc, addDoc, getDocs, doc, updateDoc, collection } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";

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

// Initialize Firebase, Firestore & Auth
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();

// ===== Mouhamed Niang qui gère la page inscription
  if (location.href === "https://bakeli-tontine.web.app/inscription.html" ||
  location.href === "https://bakeli-tontine.firebaseapp.com/inscription.html" ||
  location.href === "http://127.0.0.1:5500/public/inscription.html"
  ) {
    var envoye = document.getElementById("envoyer");
  envoye.addEventListener('click',e=>{
  
    var nom = document.getElementById("nom");
    var prenom = document.getElementById("prenom");
    var datenaiss = document.getElementById("datenaiss");
    var profession =  document.getElementById("profession")
    var pass=  document.getElementById("pass")
    var confpass =  document.getElementById("confpass")
    var address = document.getElementById("address");
    var email =  document.getElementById("emailaddress")
    var tel = document.getElementById("telephone");
    var organisation = document.getElementById("organisation");
   
    
  
    var fnom = nom.value;
  var fprenom = prenom.value;
  var fdate = datenaiss.value;
  var faddress = address.value;
  var femail = email.value;
  var ftel = tel.value;
  var fprofession =  profession.value;
  var fpass = pass.value;
  var fconfpass = confpass.value;
  var forganisation = organisation.value;
  
  if(fpass == fconfpass){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, femail, fpass)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        
        addDoc(collection(db, "utilisateur"), {
          nom: fnom,
           prenom: fprenom,
          dateNaissance: fdate,
          address: faddress,
           email: femail,
          tel: ftel,
           organisation: forganisation,
          profession: fprofession,
        });
        alert("ajout avec succée !!!")
  
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  
  
    nom.value = "";
    prenom.value="";
      datenaiss.value="";
    address.value="";
    email.value="";
    tel.value = "";
    organisation.value="";
      profession.value="";
      confpass.value="";
      pass.value="";
    }
    else{
      alert("le mot de passe n'est pas conforme a la mot de passe de confirmation")
    }
  });
  }
// ===== Mouhamed Niang qui gère la page inscription


// =====Alpha Oumar Barry Qui gere la page connexion

if (location.href === "https://bakeli-tontine.web.app/connexion.html" ||
    location.href === "https://bakeli-tontine.firebaseapp.com/connexion.html" ||
    location.href === "http://127.0.0.1:5500/public/connexion.html") {
  const maConnexion = function connexion(e) {
    e.preventDefault();
  
    const email =document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    window.location.href="./user/dashboard.html";

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  
    alert(errorCode, errorMessage)
  });
  
  }
  
  const singIn = document.getElementById('connexion');
  
  singIn.addEventListener('click', maConnexion);
}
// =====Alpha Oumar Barry Qui gerait la page connexion


// ===== Mady SANKHON qui gère la page de paramètre
if (location.href === "https://bakeli-tontine.web.app/user/parametre.html" ||
location.href === "https://bakeli-tontine.firebaseapp.com/user/parametre.html" ||
location.href === "http://127.0.0.1:5500/public/user/parametre.html") {
  // user reference
    const userId = "zzzvQhSXfw0OKrnn7w7g";
    
    const userRef = doc(db, "utilisateur", userId);
  // All data user
      const docUser = await getDoc(userRef);
      const userData = docUser.data();
  // default values of user
      document.getElementById('nomUpdate').value = userData.nom;
      document.getElementById('prenomUpdate').value = userData.prenom;
      document.getElementById('telephoneUpdate').value = userData.tel;
      document.getElementById('emailUpdate').value = userData.email;
      document.getElementById('name-user').innerHTML = `${userData.prenom} ${userData.nom}`;
      console.log(userData);
  // Set the "capital" field of the city 'DC'
      document.getElementById('update').addEventListener('click', (e)=>{
          e.preventDefault();
              updateDoc(userRef, {
                  nom: document.getElementById('nomUpdate').value,
                  prenom: document.getElementById('prenomUpdate').value,
                  tel: document.getElementById('telephoneUpdate').value,
                  email: document.getElementById('emailUpdate').value
              })
              .then(()=> alert(`Modification réussie`))
              .then(()=> location.reload())
      })
}