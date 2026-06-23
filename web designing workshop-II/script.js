function calculate() {
    let total = 0;

    let marks1 = Number(document.getElementById("mark1").value);
    let marks2 = Number(document.getElementById("mark2").value);
    let marks3 = Number(document.getElementById("mark3").value);
    let marks4 = Number(document.getElementById("mark4").value);
    let marks5 = Number(document.getElementById("mark5").value);

    total = marks1 + marks2 + marks3 + marks4 + marks5;
    let percentage = total / 5;

    document.getElementById("result").innerHTML =
        "<h3>Total Marks: " + total + "</h3>" +
        "<h3>Percentage: " + percentage + "%</h3>";
}