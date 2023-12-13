window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

function fetchQuotes(topic, count) {
   // TODO: Modify to use XMLHttpRequest
   let xhr = new XMLHttpRequest();
   xhr.addEventListener("load", responseReceivedHandler);
   xhr.responseType = "json";
   xhr.open("GET", `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`);
   xhr.send();
}

// TODO: Add responseReceivedHandler() here
function responseReceivedHandler(){
   if (!this.response.error){
      let html = "<ol>";
      this.response.forEach(element=>{
         console.log(this);
         html += `<li>${element.quote} - ${element.source}</li>`;
      });
      html += "</ol>";
      document.querySelector("#quotes").innerHTML = html;
   } else{
      document.querySelector("#quotes").innerHTML = "Topic 'friendship' not found";
   }
}