import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import {getDatabase,ref, set,onChildAdded  } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
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



function getdata() {
    var refrence = ref(database,"quizapp/")
    onChildAdded(refrence,function (r) {
        console.log(r.val())
        questionobj.push(r.val())
        render()
        
    })
}
getdata()




let currentquestion = document.getElementById("currentquestion")
let totalquestion = document.getElementById("totalquestion")

let htmlQuestion= document.getElementById("Question")

let optionsall = document.getElementById("optionsall")
var index = 0

window.next=function () {
    index++
    render()
}




let count = 0 


window.check=function(a,b) {
    if (a==b) {
        count++
    }
    next()
    console.log(count)
}




let questionobj=[
    // {
        //     question:"what is your name",
        //     option:["wasif","khan","meo"],
    //     correct:"wasif"

    // },

    // {
    //     question:"what is  name",
    //     option:["wasif","khan","meo"],
    //     correct:"wasif"

    // },

    // {
    //     question:"what is bh name",
    //     option:["wasif","khan","meo"],
    //     correct:"wasif"

    // },

    
    // {
    //     question:"what is bh name",
    //     option:["wasif","khan","meo"],
    //     correct:"wasif"

    // }
]


function render() {
    currentquestion.innerHTML = index + 1
    totalquestion.innerHTML= questionobj.length
    var obj = questionobj[index]
    htmlQuestion.innerHTML = obj.questionText
    optionsall.innerHTML=""

    for (let i = 0; i <obj.option.length ; i++) {
        
        optionsall.innerHTML+=`
        <div class="col lg-6  col md-6 col sm-6 ">
        <div class=" text-center pt-5">
            <button class="btn btn-dark w-100 fs-3 p-2"  onclick="check('${obj.correctAnswe}','${obj.option[i]}')">${obj.option[i]}</button>
        </div>

        
    </div>
        `
        
    }
    

    
}
render()