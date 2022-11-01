 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
 import { getFirestore, getDocs, collection,doc,updateDoc } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";

 // Your web app's Firebase configuration
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
const db = getFirestore(app)



const ele = []
const querySnapshot = await getDocs(collection(db, "membres"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  let docData = doc.data();
  //console.log(docData); 
  ele.push({id:doc.id,...docData})
});
const archiver = ele.filter(ets => ets.isArchiver === true)
var getMembers = document.getElementById("members")
console.log(archiver);
archiver.map(item => {
    
    return  getMembers.innerHTML +=`
                                    <tr>
                                        <td>${item.name} ${item.prenom}</td>
                                        <td>${item.date}</td>
                                        <td><button class="btn " id=${item.id} style= 'color: green;'><i class="bi bi-archive-fill"></i></button></td>

                                    <tr/>`
})

const btnArchiver = document.querySelectorAll("button")
//console.log(btnArchiver);
btnArchiver.forEach(btn => {
    btn.addEventListener('click', (e)=> {
         e.preventDefault();
         const menbreId = btn.id;
        // let findData = tab.find(el => el.id === btn.id)
         let ref = doc(db,'membres', menbreId)
         updateDoc(ref,  {
           isArchiver: false
         })
         .then(alert("Membre désarchivé avec succés !!!"))
         .then(()=>location.reload())
    })
    
})
document.getElementById("numberOfMembers").innerHTML = archiver.length + " Membres archivés"