window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   cel = document.getElementById("cInput");
   fah = document.getElementById("fInput");
   weather = document.getElementById("weatherImage");
   err = document.getElementById("errorMessage");
   document.getElementById("convertButton").addEventListener("click", ()=>{
      if (cel.value){
         if (isNaN(parseFloat(cel.value))){
            err.innerHTML = cel.value + " is not a number";
         } else{
            err.innerHTML = "";
            nFah = convertCtoF(parseFloat(cel.value));
            fah.value = nFah;
            updateImage(fah.value);
         }
      } else if (fah.value){
         if (isNaN(parseFloat(fah.value))){
            err.innerHTML = fah.value + " is not a number";
         } else{
            err.innerHTML = "";
            nCel = convertFtoC(parseFloat(fah.value));
            cel.value = nCel;
            updateImage(fah.value);
         }
      }
   });
   cel.addEventListener("input", ()=>{
      fah.value = "";
   });
   fah.addEventListener("input", ()=>{
      cel.value = "";
   });
}

function convertCtoF(degreesCelsius) {
   return (degreesCelsius * (9/5)) + 32;
}

function convertFtoC(degreesFahrenheit) {
   return (degreesFahrenheit - 32) * (5/9);
}

function updateImage(fah){
   if (fah > 50){
      weather.src = "warm.png";
   } else if (fah >= 32){
      weather.src = "cool.png";
   } else{
      weather.src = "cold.png";
   }
}