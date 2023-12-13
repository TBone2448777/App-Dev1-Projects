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

async function fetchQuotes(topic, count){
   let url = `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`;
   const res = await fetch(url);
   const raw = await res.json();
   fillQuotes(raw);
}

// TODO: Modify to use Fetch API
function fillQuotes(jsonData) {
   let html = "";
   if (jsonData.error){
      html += jsonData.error;
   } else{
      html += "<ol>";
      jsonData.forEach(element=>{
         html += `<li>${element.quote} - ${element.source}</li>`;
      });
      html += "</ol>";
   }
   document.querySelector("#quotes").innerHTML = html;
}

