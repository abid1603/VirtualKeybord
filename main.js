
var text="";
let onoff = 1;
function capsLock(event){
    onoff++;
    if(onoff%2==0){
      document.getElementById("capslock").classList.add("activated");
    }else{
      document.getElementById("capslock").classList.remove("activated");
    }

}

function newline(event){
  text = text + "\n";
}

function backspace(event){
  
text = text.slice(0, -1);
document.getElementById("textArea").value = text;

}

function setValue(event){

    if(onoff%2==0){
        text = text+event.target.value;
    document.getElementById("textArea").value = text;
    }else{
      let text1=event.target.value;
        text = text+text1.toLowerCase();

    document.getElementById("textArea").value = text;
    }
    
    
}