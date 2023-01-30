function ShowPSW() {
    var psw = document.getElementById("PSW_Input");

    if (psw.type === "password") {
        psw.type = "text";
    } else {
        psw.type = "password";
    }
}
