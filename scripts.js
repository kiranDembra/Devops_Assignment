document.addEventListener("DOMContentLoaded", function() {
    const filterInput = document.getElementById("filter");
    const projectList = document.getElementById("project-list").getElementsByTagName("li");

    filterInput.addEventListener("input", function() {
        const filterValue = filterInput.value.toLowerCase();
        Array.from(projectList).forEach(function(project) {
            const technology = project.querySelector("p:nth-of-type(2)").textContent.toLowerCase();
            if (technology.includes(filterValue)) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    });
});
