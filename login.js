function validateForm() {
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;

    if (username == "") {
        return false;
    }

    if (password == "") {
        return false;
    }

    return true;
}

function submit() {
    alert("Do you wish to SUBMIT the form.")
    goBack();
}
function cancel() {
    alert("Do you wish to CANCEL.")
    window.open('index.html');
}

function goBack() {
    window.open('index.html');
}