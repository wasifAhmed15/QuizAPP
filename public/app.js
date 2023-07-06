
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import {getDatabase,ref, set,push  } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKwbByxNsL2GTl59A6AjzEqrjxFycJ0J8",
  authDomain: "firstdb-c1b70.firebaseapp.com",
  databaseURL: "https://firstdb-c1b70-default-rtdb.firebaseio.com",
  projectId: "firstdb-c1b70",
  storageBucket: "firstdb-c1b70.appspot.com",
  messagingSenderId: "747123491253",
  appId: "1:747123491253:web:8f202d009b2e0666ddd9fc",
  measurementId: "G-SE84D2T8XK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase()

let questionText = document.getElementById("questionText")
let optionparent = document.getElementById("optionparent")
let options = document.getElementById("options")
let correct= document.getElementById("correct")

var option=[]

var correctAnswe


function render() {

    optionparent.innerHTML=""

    for(var i=0; i<option.length; i++){
        optionparent.innerHTML +=`<li   onclick="setCoreectAnswer('${option[i]}')"  class="p-3 bg-light rounded shadow my-2  ">${option[i]}</li>`
    }
}



window.Addoption = function(){
    option.push(options.value)
    console.log(option)
    render()

}

window.setCoreectAnswer=function(a){
    correctAnswe = a

    correct.innerHTML= correctAnswe

}

window.submit = function(){

    var id = push(ref(database,"quizapp/")).key

    var obj = {
        questionText:questionText.value,
        option:option,
        correctAnswe:correctAnswe,
        id:id
    }
    console.log(obj)




    var  reference = ref(database,`quizapp/${obj.id}/`)
    set(reference,obj)
} 