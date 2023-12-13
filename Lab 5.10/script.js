window.addEventListener('load', () => {
    selection = true;
    Array.from(document.getElementsByClassName("spot")).forEach(element=>{
        element.addEventListener("click", () => {
            if (element.innerHTML == ""){
                if (selection){
                    element.innerHTML = `<span class="x">X</span>`;
                    selection = false;
                } else{
                    element.innerHTML = `<span class="o">O</span>`;
                    selection = true;
                }
            }
        });
    });
    document.getElementById("reset").addEventListener("click", () => {
        Array.from(document.getElementsByClassName("spot")).forEach(element=>{
            element.innerHTML = ``;
            selection = true;
        });
    })
});