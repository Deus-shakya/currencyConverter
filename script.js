let options = document.querySelectorAll(".dropdown select")

for(option of options){
  
  for(code in countryList){
    
    let newOption= document.createElement("option")
    newOption.value= code
    newOption.innerText= code
    option.append(newOption)
  }
}

