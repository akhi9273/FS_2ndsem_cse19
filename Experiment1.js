
window.onload = function () {
    console.log("Welcome to My Website");
};
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", function () {
        alert("You clicked: " + this.textContent);
    });
});