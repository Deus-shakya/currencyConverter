const api = "https://v6.exchangerate-api.com/v6/0b2c94015ff32fce2aedc4c7/pair/USD/NPR"




let options = document.querySelectorAll(".input-group select")

for(option of options){
  
  for(code in countryList){
    
    let newOption= document.createElement("option")
    newOption.value= code
    newOption.innerText= code
    option.append(newOption)
  }
}

