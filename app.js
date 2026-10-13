function placeOrder() {

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    if (name == "" || age == "" || age < 0) {
        document.getElementById("message").innerHTML =
            "Please enter a name and a valid age.";
    } else if (age <= 3) {
        document.getElementById("message").innerHTML =
            name + ", your ticket is free.";
    } else if (age <= 12) {
        document.getElementById("message").innerHTML =
            name + ", your ticket costs $10.";
    } else if (age <= 64) {
        document.getElementById("message").innerHTML =
            name + ", your ticket costs $20.";
    } else {
        document.getElementById("message").innerHTML =
            name + ", your ticket costs $12.";
    }
}