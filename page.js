document.addEventListener("DOMContentLoaded", function() {
    // Get references to the buttons and sections
    const btnSection1 = document.getElementById("btnSection1");
    const btnSection2 = document.getElementById("btnSection2");
    const section1 = document.getElementById("section1");
    const section2 = document.getElementById("section2");

    // Add click event listeners to the buttons
    btnSection1.addEventListener("click", function() {
        section1.scrollIntoView({ behavior: "smooth" });
    });

    btnSection2.addEventListener("click", function() {
        section2.scrollIntoView({ behavior: "smooth" });
    });
});
