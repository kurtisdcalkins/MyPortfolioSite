let project = document.querySelector('#each-project');
let projects = document.querySelector('#projects');
let arrows = document.querySelectorAll('.triangle-down');

function viewProjects() {
    project.style.display = 'flex';
    arrows[0].hidden = true;
    arrows[1].hidden = true;
}

projects.onmouseover = viewProjects;
