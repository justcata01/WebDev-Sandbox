let users = ["admin"];
let passes = ["admin"];

let namePassed = false;
let passPassed = false;


function CheckLogin()
{
    var inputName = document.getElementById("uname").value;
    var inputPass = document.getElementById("upass").value;

    for(let i=0; i<users.length; i++){
        if(inputName == users[i]){namePassed = true;} else {namePassed = false;}
    }
    for(let i=0; i<passes.length; i++){
        if(inputPass == passes[i]){passPassed = true;} else {passPassed = false;}
    }

    if(namePassed == true && passPassed == true){
        Worked();
    }
    else{
        DidntWork();
    }
}

let accountX = 0;

function Register(){
    var inputName = document.getElementById("uname").value;
    var inputPass = document.getElementById("upass").value;
    users.push(inputName);
    passes.push(inputPass);

    document.getElementById("status").innerHTML = "Username and password registered";
    document.getElementById("status").style.backgroundColor = "yellow";

    var ul = document.getElementById("accountList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(inputName + " : " + inputPass + " (Account " + accountX.toString()+")")); //add account
    li.setAttribute("id", "Account: "+accountX.toString()); // added line
    accountX+=1;
    ul.appendChild(li);
    alert("Created account number: " + accountX);
}

function DidntWork()
{
    document.getElementById("status").innerHTML = "Wrong username or password";
    document.getElementById("status").style.backgroundColor = "lightcoral";
    document.getElementById("loginbutton").textContent = 'Retry';
    document.getElementById("loginbutton").setAttribute("onClick", "javascript: Clear();");
    
}

function Worked()
{
    document.getElementById("status").innerHTML = "Logged in succesfully";
    document.getElementById("status").style.backgroundColor = "lightgreen";
}

function Clear()
{
    document.getElementById("status").innerHTML = "";
    document.getElementById("status").style.backgroundColor = "black";
    document.getElementById("loginbutton").textContent = 'Login';
    document.getElementById("loginbutton").setAttribute("onClick", "javascript: CheckLogin();");
}