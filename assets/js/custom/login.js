function validateFrom() {
    var npm = document.myform.npm.value;
    var password = document.myform.password.value;

    if (npm == null || npm == "") {
        alert("Npm belum diisi");
        return false;
    } else if (password.length<6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
}