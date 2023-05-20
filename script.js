const firebaseConfig = {
    //   copy your firebase config informations
    apiKey: "AIzaSyAGYX46GfzYsfWIiNtMIM10ni1KYVDoooI",
  authDomain: "contact-form-3306f.firebaseapp.com",
  databaseURL: "https://contact-form-3306f-default-rtdb.firebaseio.com",
  projectId: "contact-form-3306f",
  storageBucket: "contact-form-3306f.appspot.com",
  messagingSenderId: "69194912137",
  appId: "1:69194912137:web:3bbbdc79fc20688af11158",
  measurementId: "G-W7J74DZCJM"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };