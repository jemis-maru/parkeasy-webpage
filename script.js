function toggleDrawer() {
    var drawer = document.getElementById("nav-list-div");
    console.log(drawer.className);
    drawer.classList.remove("nav-list-div");
    if (drawer.className === "navHide" || drawer.className === "") {
        drawer.classList.add("navShow");
        drawer.classList.remove("navHide");
    } else {
        drawer.classList.add("navHide");
        drawer.classList.remove("navShow");
    }
}