//---------------INSTRUCTIONS-------------------------
//-------Save the reference to text-field into a variable.-----------
let input = document.querySelector(".input");

//-------------Save the reference to unordered or ordered list into a variable----------
let ul = document.querySelector("ul");

//------------------Save the reference to new-item button into a variable.-----------
let btn = document.querySelector("button");

//-----------------Save the reference to paragraph for feedback-------------
let feedback = document.querySelector(".feedback");


//-----------------Start function addItem.----------------
function addItem(){
    
    //----------------Create list item and store output in a variable.-------
    let li = document.createElement("li");
    
    //------------Check if user entered the value in input text-field.--------
    if(input.value && input.value != " "){
        
        //---Use textContent property on created list-item & inputed value is added to the list li
        li.textContent = input.value;
        
        //------------append/add element list item to the unordered list-------------
        ul.appendChild(li);
        
        //------------------clear a feedback message---------
        feedback.textContent = " ";
        
        //------------clear the input-text value field------------
        input.value  = " ";
        
        //------Put the cursor back to text-field ----------------
        input.focus();
    }

    else{
        
        //---------Print the message nothing entered in the paragraph "feedback"--------------
        feedback.textContent = "Nothing entered !";
    }
}

//-------------End function addItem.----------

//---------------Register your function addItem for click event on button----------
btn.addEventListener("click",addItem);