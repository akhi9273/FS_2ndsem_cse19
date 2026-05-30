
window.onload = function () {
    console.log("Welcome to My Website");
};
document.querySelectorAll(".navbar a").forEach(link => {
        alert("You clicked: " + this.textContent);
    });
});