function data() {
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c = document.getElementById("n3").value;
    var d = document.getElementById("n4").value;

    if (a == "" || b == "" || c == "" || d == "") {
        alert('All Fields Are Mandatory');
        return false;
    }
    else if (b.length < 10 || b.length > 10) {
        alert('Please enter valid number in Contacts');
        return false;
    }
    else if (isNaN(b)) {
        alert('Only numbers are allowed in contacts');
        return false;
    }
    else if (c!=d) {
        alert('Please Enter same password');
        return false;
    }
    else {
        true;
    }
}