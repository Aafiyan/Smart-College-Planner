document.addEventListener("DOMContentLoaded", function () {
    console.log("College Registration Page Loaded!");

    document.getElementById("college-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let collegeName = document.getElementById("college-name").value;
        let adminEmail = document.getElementById("admin-email").value;
        let adminName = document.getElementById("admin-name").value;
        let contact = document.getElementById("contact").value;
        let location = document.getElementById("location").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirm-password").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        alert(`College ${collegeName} Registered Successfully!`);

        // Later, send this data to backend
    });
});
