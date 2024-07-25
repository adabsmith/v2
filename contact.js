// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAiSIHXfnIW7YUT_naG-TPXd_mz62I9T34",
    authDomain: "bansari-web.firebaseapp.com",
    databaseURL: "https://bansari-web-default-rtdb.firebaseio.com",
    projectId: "bansari-web",
    storageBucket: "bansari-web.appspot.com",
    messagingSenderId: "492105757418",
    appId: "1:492105757418:web:2664be4416625bc4fe9d93",
    measurementId: "G-T2J9T9KCFZ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference to the database
  const contactFormDB = firebase.database().ref("contactForm");
  
  // Event listener for form submission
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Save message to Firebase
    saveMessage(name, email, message);
  
    // Show alert
    document.querySelector(".alert").style.display = "block";
  
    // Hide alert after 3 seconds
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    // Clear form
    document.getElementById("contactForm").reset();
  }
  
  function saveMessage(name, email, message) {
    const newContactFormRef = contactFormDB.push();
    newContactFormRef.set({
      name: name,
      email: email,
      message: message
    });
  }
  