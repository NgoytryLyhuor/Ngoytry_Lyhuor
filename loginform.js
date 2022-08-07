//-----------username & password compare
function login()
{
    var password = document.getElementById("password");
    var user = document.getElementById("user");
    if((user.value == "grouptwo123@gmail.com") && (password.value == "grouptwo123") )
    {
        document.getElementById("user").value = 'grouptwo123@gmail.com';
        document.getElementById("password").value = 'grouptwo123';
        document.getElementById("user").style.border="3px solid #0dff36";
        document.getElementById("password").style.border="3px solid #0dff36";
        window.open("./afterlogin.html");
        window.close("./loginform.html");
    }
    else if((user.value == "grouptwo123@gmail.com") && (password.value != "grouptwo123"))
    {
        document.getElementById("user").value = 'grouptwo123@gmail.com';
        document.getElementById("password").value = '';
        document.getElementById("password").style.border="3px solid #ff0000";
        document.getElementById("user").style.border="3px solid #0dff36";
    }
    else if((user.value != "grouptwo123@gmail.com") && (password.value == "grouptwo123"))
    {
        document.getElementById("user").value = '';
        document.getElementById("password").value = 'grouptwo123';
        document.getElementById("password").style.border="3px solid #0dff36";
        document.getElementById("user").style.border="3px solid #ff0000";
    }
    else 
    {
        document.getElementById("user").value = '';
        document.getElementById("password").value = '';
        document.getElementById("user").style.border="3px solid #ff0000";
        document.getElementById("password").style.border="3px solid #ff0000";
    }
}
//--------- to project
function back()
{
    window.open("./Project.html");
    window.close("./loginform.html");
}