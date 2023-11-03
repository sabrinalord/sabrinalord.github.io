
fetch('../JSON/experience.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    loopThroughData(data);
})
.catch(function (err) {
    console.log(err);
});


const loopThroughData = (data) => {
    for (var i = 0; i < data.length; i++) {
      addExperienceCardToPage(data[i])
    }
}


const addExperienceCardToPage = (experience) => {
    let experienceCard = document.createElement('div');

    experienceCard.innerHTML = `
                    <article class="job-panel">
                    <h4>${experience.date}</h4>
                    <h3>${experience.role}</h3>
                    <p>${experience.description}</p>
                    <p>${experience.additional}</p>
                    <p>Tools used: ${experience.tools}</p>
                </article>
    `
   document.getElementById("experience-container").appendChild(experienceCard) 

}

