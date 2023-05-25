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
    var email = getElementVal("email");
    var age=getElementVal("age")
    var phone=getElementVal("phone")
    var gender=getElementVal("gender")
    var year=getElementVal("year")
    var branch=getElementVal("branch")
    var section=getElementVal("section")
    var vaccine=getElementVal("vaccine")
    var dose1taken=getElementVal("dose1taken")
    var dose1type=getElementVal("dose1type")
    var dose1side=getElementVal("dose1sideeff")
    var covidafdose1=getElementVal("covidafdose1")
    var dose2taken=getElementVal("dose2taken")
    var dose2side=getElementVal("dose2sideeff")
    var covidafdose2=getElementVal("covidafdose2")
    var booster = getElementVal("booster");
  
    saveMessages(name, email, age, phone, gender, year, branch, section, vaccine, dose1taken, dose1type, dose1side, covidafdose1, dose2taken, dose2side, covidafdose2, booster);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, email, age, phone, gender, year, branch, section, vaccine, dose1taken, dose1type, dose1side, covidafdose1, dose2taken, dose2side, covidafdose2, booster) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      email:email, 
      age:age, 
      phone:phone, 
      gender:gender, 
      year:year, 
      branch:branch, 
      section:section, 
      vaccine:vaccine, 
      dose1taken:dose1taken, 
      dose1type:dose1type, 
      dose1side:dose1side, 
      covidafdose1:covidafdose1, 
      dose2taken:dose2taken, 
      dose2side:dose2side, 
      covidafdose2:covidafdose2, 
      booster:booster
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

  function enableBrand(answer){
    console.log(answer.value);
    if(answer.value=="Yes"){
        document.getElementById('carbrand').classList.remove('form-hide');
        
    }
    else{
        document.getElementById('carbrand').classList.add('form-hide'); 
    }
};

function enableBrand1(answer){
  console.log(answer.value);
  if(answer.value=="Yes"){
      document.getElementById('carbrand1').classList.remove('form-hide1');
      
  }
  else{
      document.getElementById('carbrand1').classList.add('form-hide1'); 
  }
};