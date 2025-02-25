import { app } from "./firebase-config.js"; // Import Firebase app
import { getFirestore, collection, addDoc } from "firebase/firestore"; 

// Initialize Firestore
const db = getFirestore(app);

// Select form and listen for submit event
document.getElementById("college-registration-form").addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Get form values
    const collegeName = document.getElementById("college-name").value;
    const adminEmail = document.getElementById("admin-email").value;
    const adminName = document.getElementById("admin-name").value;
    const contact = document.getElementById("contact").value;
    const location = document.getElementById("location").value;

    try {
        // Store data in Firestore
        await addDoc(collection(db, "colleges"), {
            collegeName,
            adminEmail,
            adminName,
            contact,
            location,
            timestamp: new Date() // Store registration time
        });

        alert("College registered successfully!");
        document.getElementById("college-registration-form").reset(); // Clear form

    } catch (error) {
        console.error("Error registering college:", error);
        alert("Failed to register college. Try again.");
    }
});
