import { db } from "./firebase-config.js"; 
import { collection, addDoc } from "firebase/firestore";

// Get form and listen for submit event
document.getElementById("college-registration-form").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent page reload

    // Get input values
    const collegeName = document.getElementById("college-name").value;
    const adminName = document.getElementById("admin-name").value;
    const adminEmail = document.getElementById("admin-email").value;
    const collegeLocation = document.getElementById("college-location").value;

    try {
        // Store data in Firestore
        await addDoc(collection(db, "colleges"), {
            name: collegeName,
            adminName: adminName,
            adminEmail: adminEmail,
            location: collegeLocation
        });

        alert("College registered successfully!");
    } catch (error) {
        console.error("Error registering college:", error);
        alert("Failed to register college.");
    }
});
