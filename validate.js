function validateForm(){
    var email = document.getElementById("email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!emailRegex.test(email)){
      alert("Invalid email address");
      return;
    }
        var dob = new Date(document.getElementById("dob").value);
        
        var currentDate = new Date();
          var age = currentDate.getFullYear() - dob.getFullYear();
        var months = currentDate.getMonth() - dob.getMonth();
     var days = currentDate.getDate() - dob.getDate();

 if(months < 0 || (months === 0 && days < 0)){
      age--;
    }
    var state = document.getElementById("state").value;
var district = document.getElementById("district").value;

    
       var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Name: " + document.getElementById("name").value + "<br>" +
                          "Email: " + email + "<br>" +
                          "Age: " + age + " years " + months + " months " + days + " days<br>" +
                          "State: " + state + "<br>" +
                          "District: " + district;

    resultDiv.style.display = "block";
  }

    function populateDistricts(){
     var stateSelect = document.getElementById("state");
 var districtSelect = document.getElementById("district");
    var selectedState = stateSelect.value;
    districtSelect.innerHTML = '<option value="select">Select District</option>';

    
    if(selectedState === "Kerala"){
      districtSelect.innerHTML += '<option value="Kozhikode">Kozhikode</option>';
districtSelect.innerHTML += '<option value="Wayanad">Wayanad</option>';
        districtSelect.innerHTML += '<option value="Thrissur">Thrissur</option>';
    }else if(selectedState === "Karnataka"){
      
  districtSelect.innerHTML += '<option value="Bengaluru">Bengaluru</option>';
      
districtSelect.innerHTML += '<option value="Edupi">Edupi</option>';
      districtSelect.innerHTML += '<option value="Kodagu">Kodagu</option>';
}



  }