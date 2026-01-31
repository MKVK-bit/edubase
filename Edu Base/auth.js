import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

window.login = function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(!email || !password) {
        alert("Please enter email and password!");
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            // Optionally save email or name to localStorage for certificate
            localStorage.setItem("studentName", email.split('@')[0]);
            window.location.href = "dashboard.html";
        })
        .catch(err => alert(err.message));
};
