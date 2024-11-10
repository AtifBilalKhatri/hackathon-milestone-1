let form = document.getElementById("form");
let main = document.getElementById("main");
let formdiv = document.getElementById("formdiv")
let createcv = document.getElementById("Createcv");
createcv.addEventListener("click", function (event) {
    event.preventDefault();
    formdiv.style.display="block"
    // form.style.display = "block";
    main.style.display = "none";
    createcv.style.display="none";
    
});

    let submit = document.getElementById("submitbtn");

submit.addEventListener("click", (event) => {
    event.preventDefault();

    formdiv.style.display = "none";
    main.style.display = "block";
    // createcv.textContent="Edit Resume"
    // createcv.style.display="block";
    


let name = document.getElementById("name").value;
let occupation = document.getElementById("occupation").value;
let number = document.getElementById("number").value;
let email = document.getElementById("email").value;
let education = document.getElementById("education").value;
let about  = document.getElementById("about").value;
let goals = document.getElementById("goals").value;
let skills = document.getElementById("skills").value;
let experience = document.getElementById("experience").value;



document.getElementById("header-name").textContent =  name ;
document.getElementById("input-name").textContent = `Name : ${name}`  
document.getElementById("input-occupation").textContent =  `Occupation : ${occupation}` ;
document.getElementById("input-number").textContent =  `Number : ${number}` ;
document.getElementById("input-email").textContent = `Emaill : ${email}`;
document.getElementById("input-goals").textContent =  goals ;
document.getElementById("input-about").textContent = about  ;

// education

let educationArray = education.split(",").map((item)=>item.trim())
let educationUi = document.getElementById("educationUi");
educationUi.innerHTML="";
educationArray.forEach(element => {
 let li = document.createElement("li");
 li.textContent = element;
 educationUi.appendChild(li);
});

// skills

let skillsArray = skills.split(",").map((item)=>item.trim())
let skillsUi = document.getElementById("skillsUi");
skillsUi.innerHTML="";
skillsArray.forEach(element => {
 let li = document.createElement("li");
 li.textContent = element;
 skillsUi.appendChild(li);
});


let expArray = experience.split(",").map((item)=>item.trim())
let expUi = document.getElementById("expUi");
expUi.innerHTML="";
expArray.forEach(element=>{
    let li = document.createElement("li");
    li.textContent=element;
    expUi.appendChild(li);
})

// form.reset()

});