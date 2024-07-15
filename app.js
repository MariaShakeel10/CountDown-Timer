function submit(event) {
    let userDate = parseInt(document.getElementById("date").value);
    let userMonth = parseInt(document.getElementById("month").value) - 1; // Months are zero-indexed in JavaScript
    let userYear = parseInt(document.getElementById("year").value);

    let today = new Date(userYear, userMonth, userDate);
    let today2 = new Date();

    // Calculations
    let diff = today.getTime() - today2.getTime();
    let remainDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    let remainHrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let remainMins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let remainSecs = Math.floor((diff % (1000 * 60)) / 1000);

    // Display
    document.getElementById("day").value = remainDays;
    document.getElementById("hour").value = remainHrs;
    document.getElementById("min").value = remainMins;
    document.getElementById("sec").value = remainSecs;
}
setInterval(submit,1000)