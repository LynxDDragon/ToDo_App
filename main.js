// main.js

fetch('./tasks.json')
    .then((res) => res.json())
    .then((data) => {
        populateHTML(data.tasks)
        displayPeople(data)
    })

function populateHTML(tasks) {
    let taskEl = document.getElementById('tasks')
    for (let task of tasks) {
        taskEl.innerHTML += `
            <div class="card mb-3">
                <div class="card-body">
                    <h2 class="card-title">${task.list}</h2>
                    <p class="card-text">${task.jobs.job1}, ${task.jobs.job2}, ${task.jobs.job3}</p>
                </div>
            </div>
        `
    }

    let featuredTaskEl = document.getElementById('featured-task')
    featuredTaskEl.innerHTML = `
        <h2>${tasks[0].list}</h2>
        <h4>Jobs</h4>

        <ul>
    `
    for (let job in tasks[0].jobs) {
        featuredTaskEl.innerHTML += `
            <li>${tasks[0].jobs[job]}</li>
        `
    }
}

let taskEl

function displayPeople(data) {
    let peopleHTML = ''

    displayFeaturedPerson(data[2])

    for (let person of data) {
        taskHTML += ''

        displayFeaturedPerson(data[2])

        for (let chore of data) 
            taskHTML += `
            <div class="card mb-2">
                <div class="card-body">
                    <h2 class="card-text">${chore.list}</h2>
                </div>
            `

        taskEl.innerHTML = taskeHTML

        let taskEls = document.querySelectorAll('#task .card')

        for (let i = 0; i < taskEls.length; i++) {
            taskEls[i].addEventListener('click', (event) => {
                let taskInfo = data[i]
                displayFeaturedPerson(taskInfo)
            })
        }
    }
}

function displayFeaturedPerson(chore) {
    let featuredPersonEl = document.getElementById('featured-task')
    let jobsHTML = ''

    for (let job in task.jobs) {
        jobsHTML += `
        <li>${job}: ${task.jobs[job]}</li>
        `
    }

    let taskHTML = `
    <h2>${task.list}</h2>
    <p>Title:${task.list}</p>
    <h3>Skills:</h3>
    <ul>
        ${jobsHTML}
    </ul>
    `
}



// Index into object in JS
// 1) Kind of like Python dictionaries: myObject[myKey]
// 2) Kind of like Python objects: my_object.my_property
// in JS: myObject.myKey