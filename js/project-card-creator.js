
fetch('../JSON/projects.json')
.then(function (response) {
    return response.json();
})
.then(function (projectsData) {
    loopThroughProjects(projectsData);
})
.catch(function (err) {
    console.log(err);
});


const loopThroughProjects = (projectsData) => {
    for (var i = 0; i < projectsData.length; i++) {
      addProjectCardToPage(projectsData[i])
    }
}


const addProjectCardToPage = (project) => {
    let projectCard = document.createElement('div');

    projectCard.innerHTML = `
        <article class = "project-card small-card" id ="project-card${project.id}">
            <a href="${project.siteLink}"  target="_blank">
                <div role="img" aria-label = "${project.imageDescription}" class = "project-img-container"></div>
            </a>
            <div class="project-info-container">
                <h3 class="project-title">${project.title}</h3>
                <div class="project-details">
                    <p>${project.description}</p>
                    <div class = "project-icons-container">
                        <a role="button" class = "project-link" href="${project.codeLink}" target="_blank">
                        <img alt ="Github" class = "project-icon" src="images/icons/github.png">
                        Code
                        </a>
                        <a role="button"  class = "project-link" href="${project.siteLink}"  target="_blank">
                        Live
                        </a>
                    </div>
                </div>
            </div>
        </article>
    `
   document.getElementById("project-container").appendChild(projectCard) 

}

