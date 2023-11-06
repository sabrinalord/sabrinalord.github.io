
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
    let experienceItem = document.createElement('li');

    experienceItem.innerHTML = `
	                    
							<div class="bullet-container">
                                <i class="fa fa-circle"></i>
                              ${experience.year}
							</div>
                            <article class="job-panel">
                                <h4>${experience.date}</h4>
                                <h3>${experience.role}</h3>
                                <p>${experience.description}</p>
                                <p>${experience.additional}</p>
                                <p>Tools used: ${experience.tools}</p>
                            </article>
					
    `
    experienceItem.classList.add('experience-list-item')
   document.getElementById("experience-list").appendChild(experienceItem) 

}

