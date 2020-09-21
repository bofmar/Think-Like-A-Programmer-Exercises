const container = document.querySelector(".container");

for(let i = 0; i < 8; i++){
    let output = ""
    for(let y = 0; y < 16; y++){
        if(i === 0 || i === 7){
            if(y === 0 || y === 15){
                output += "#";
            }
            else{
                output += " ";
            }
        }
        else if(i === 1 || i === 6){
            if(y > 0 && y < 3 || y > 12 && y< 15){
                output += "#";
            } 
            else{
                output += " ";
            }
        }
        else if(i === 2 || i === 5){
            if(y > 1 && y < 5 || y > 10 && y <14){
                output += "#";
            }
            else{
                output += " ";
            }
        }
        else{
            if(y > 2 && y < 13){
                output +="#";
            }
            else{
                output +=" ";
            }
        }
    }
    let newdiv = document.createElement("div");
    newdiv.textContent = output;

    container.appendChild(newdiv);
}