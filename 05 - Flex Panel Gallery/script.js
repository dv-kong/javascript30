var panel = document.querySelectorAll(".panel")

// panel.addEventListener("click", togglePanel() {

// var panelFirstChild = document.querySelector(".panel").children;
var panelChilds = document.querySelector(".panel").children;


// var x = document.getElementById("myDIV").lastChild.nodeName;

// var panelLastChild = document.querySelector(".panel").lastChild;
// var panelLastChild = document.querySelector(".panel").lastChild;

panel.forEach((element) => {
    element.addEventListener("click", () => {

        element.classList.toggle("toggled")
            // element.firstChild.classList.toggle("firstChildToggle")
            // element.classList.toggle("firstChildToggle")
            // element.classList.toggle("firstChildToggle")
            // element.classList.toggle("firstChildToggle")
            // element.classList.toggle("firstChildToggle")
            // panelFirstChild.classList.toggle("lastChildToggle")

        panelChilds[0].classList.toggle("firstChildToggle")
            // panelChilds[0].classList.toggle("firstChildToggle")
            // panelChilds[0].classList.toggle("panel p:first-child")

        panelChilds[2].classList.toggle("lastChildToggle")
            // panelChilds[2].classList.toggle("lastChildToggle")
            // panelChilds[2].classList.toggle("panel p:last-child")
            // panelFirstChild.classList.toggle("firstChildToggle")


    });
});
// })

// var target = document.querySelector('span:first-of-type');
// target.style.color = 'red';