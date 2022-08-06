let editableInput = document.querySelector('.editable'),
placeholder = document.querySelector(".placeholder"),
bottomButton = document.querySelector(".content button"),
counter = document.querySelector('.counter'),
readonlyInput = document.querySelector(".readonly")
// console.log(counter)
// console.log(bottomButton)
let currentLength = 0;
let maxLength = 100;
let lengthOfSpan;
// console.log(placeholder)

editableInput.addEventListener("keyup", (e)=> {
   currentLength =  e.target.innerText.length; // length of current text of input 
   if(currentLength) {
    placeholder.style.display = 'none';
    bottomButton.classList.add('active');
    counter.style.display = 'block';
    lengthOfSpan = maxLength - currentLength;
    counter.innerText = lengthOfSpan;

   } else {
    placeholder.style.display = 'block'
    bottomButton.classList.remove('active')
    counter.style.display = 'none'
   }


   // Valide of string
   let text;
   if(currentLength > maxLength) {
    
    let overText = e.target.innerText.substr(maxLength);
    overText = `<span class="highlight">${overText}</span>`;
     text =  e.target.innerText.substr(0, maxLength) + overText;
    readonlyInput.style.zIndex = '1';
    counter.style.color = "red"
   } else {
    readonlyInput.style.zIndex ='-1';
    counter.style.color = 'black'
   
   }
   readonlyInput.innerHTML = text
 
});



