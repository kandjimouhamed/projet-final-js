
alert('dfrethr')
// alert('dfrethr')
console.log('ok');
    
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
    import { getFirestore, addDoc, getDocs, setDoc, doc, collection} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
      
        const firebaseConfig = {
              apiKey: "AIzaSyDMdM55m1t8SCUyy8UoQuR4LX-HraDY3EM",
              authDomain: "bakeli-tontine.firebaseapp.com",
              projectId: "bakeli-tontine",
              storageBucket: "bakeli-tontine.appspot.com",
              messagingSenderId: "309665317631",
              appId: "1:309665317631:web:4a097fe3f5785040bf42ca"
          };


        // Initialize Firebase

        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
      
    const email = document.getElementById('email');
    const password = document.getElementById('password');
        // const inscription = document.getElementById('formInscription');
        const connection = document.getElementById('formConnection');
        console.log(connection);

    const utilisateur = await getDocs(collection(db, "utilisateur"));
    let tabUser = [];
    utilisateur.forEach((doc)=>{
                tabUser.push({...doc.data(), id:doc.id});
        })
        console.log(tabUser);

    connection.addEventListener('submit', (e)=>{
        e.preventDefault()
        
                       tabUser.map(element=>{
                      // console.log(element);
                      if(element.email === email.value && element.password === password.value){
                        console.log('ok');
                        //  return document.getElementById('ecran').innerHTML = `Vous Etes Connectes`
                        sessionStorage.setItem('Prenom', element.prenom)
                        sessionStorage.setItem('Nom', element.nom)
                         return window.location.href ='./dashboard.html'
                      }else{
                        
                      }

                    })
                
               
                
           
    })

   
  