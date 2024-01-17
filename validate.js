function validateForm(){
  var email = document.getElementById("email").value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if (!emailRegex.test(email)){
      alert("Invalid email address");
      return;
}



  var dob = new Date(document.getElementById("dob").value);
  var currentDate = new Date();

var ageInMilliseconds = currentDate - dob;


var ageDate = new Date(ageInMilliseconds);
var years = ageDate.getUTCFullYear() - 1970;
  var months = ageDate.getUTCMonth();
  var days = ageDate.getUTCDate() - 1;

  var state = document.getElementById("state").value;
  var district = document.getElementById("district").value;

  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Name: " + document.getElementById("name").value + "<br>" +
      "Email: " + email + "<br>" +
      "Age: " + years + " years " + months + " months " + days + " days<br>" +
      "State: " + state + "<br>" +
      "District: " + district;

  resultDiv.style.display = "block";
}

  function populateDistricts(){
   var stateSelect = document.getElementById("state");
var districtSelect = document.getElementById("district");
var selectedState = stateSelect.value;
  districtSelect.innerHTML = '<option value="select">Select District</option>';



if (selectedState === "Kerala"){
      districtSelect.innerHTML += '<option value="Kozhikode">Kozhikode</option>';
      districtSelect.innerHTML += '<option value="Wayanad">Wayanad</option>';
      districtSelect.innerHTML += '<option value="Thrissur">Thrissur</option>';
  }else if(selectedState === "Karnataka"){
      districtSelect.innerHTML += '<option value="Bengaluru">Bengaluru</option>';

      districtSelect.innerHTML += '<option value="Edupi">Edupi</option>';
      districtSelect.innerHTML += '<option value="Kodagu">Kodagu</option>';
  }


}
