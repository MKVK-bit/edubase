import { db } from "./firebase.js";
import { collection, getDocs } from
"https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

const list = document.getElementById("list");
const snapshot = await getDocs(collection(db, "students"));

snapshot.forEach(doc => {
  const li = document.createElement("li");
  li.textContent = doc.data().name + " → Weak: " + doc.data().weakAreas.join(",");
  list.appendChild(li);
});
