// Get the modal
const modal1 = document.getElementById("myModal");

// Get the button that opens the modal
const btn1 = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function () {
  modal1.style.display = "block";

};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal1.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }



};
function validateform(){  
    var firstname=document.myform.firstname.value;
    var lastname=document.myform.lastname.value; 
    var place=document.myform.place.value;
    
      
    if (firstname==null || firstname==""){  
      alert("firstname can't be blank");  
      return false;  
    }
    else if (lastname==null || lastname==""){  
        alert("lastname can't be blank");  
        return false; 
       }
     else if (place==null || place==""){  
      alert("place can't be blank");  
      return false; 
     }
     
    else{  
      alert("success");  
      return false;  
      }  
    }  

    const users = [
        {
         firstname:"Christeena",
          lastname:"Abraham",
          place:"Kannur"
        },
        {
          firstname:"Teena",
          lastname:"Kiran",
          place:"Kollam"
        },
        {
          firstname:"Joel",
          lastname:"Devasia",
          place:"Kannur"
        },
        
      ]

      //display Details

users.map((item) => {

    //debugger;

    const box1 = document.createElement("div");
    box1.className = "User-box";
    box1.id = "table";
    const para2 = document.createElement("p");
    para2.innerHTML = item.firstname;
    const para3 = document.createElement("p");
    para3.innerHTML = item.lastname;
    const para4 = document.createElement("p");
    para4.innerHTML = item.place;
    const image =document.createElement("img");
    image.



    document.getElementById("flex-container").appendChild(box1);
    box1.appendChild(para2);
    box1.appendChild(para3);
    box1.appendChild(para4);
})
      
      users.push('Sruthi','Saneesh','Kannur');
      console.log(users);
      

    //   function insert() {
    //     if (inputname.value || inputemail.value || inputplace.value != "") {
    //     firstname.push(inputfirstname.value);
    //     lastname.push(inputlastname.value);
    //     place.push(inputplace.value)
    //     console.log(firstname );
    //     console.log(lastname );
    //     console.log(place );
    //     inputfirstname.value = "";
    //     inputelastname.value = "";
    //     inputplace.value = "";
    //     results.innerHTML = "";
    //      }
    //     }