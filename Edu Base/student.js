import { db } from "./firebase.js";
import { collection, getDocs } from
"https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

const snapshot = await getDocs(collection(db, "students"));
let scores = [];

snapshot.forEach(doc => scores.push(100 - doc.data().weakAreas.length * 30));

new Chart(document.getElementById("progressChart"), {
  type: "line",
  data: {
    labels: scores.map((_, i) => "Test " + (i+1)),
    datasets: [{ data: scores }]
  }
});
