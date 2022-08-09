function openDivision(event, divisionName) {
    let i, division, tablinks;
    division = document.getElementsByClassName('division');
    for (i = 0; i < division.length; i++) {
      division[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", " ");
    }
    document.getElementById(divisionName).style.display = 'inherit';
    document.getElementById(divisionName).style.transitionDelay = '0.6s';
    event.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
