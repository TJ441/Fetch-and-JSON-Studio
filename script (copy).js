fetch("https://handlers.education.launchcode.org/static/astronauts.json")
.then(function(response) {
  response.json().then(function(json) {

    let container = document.getElementById('container');
    container.innerHTML = `<p>Astronaut Count: ${json.length}</p>`

    function sortHours (astronauts) {
      let hoursArray = [];
      for (let i in astronauts) {
        hoursArray.push(json[i].hoursInSpace);
      }
      return hoursArray.sort((a, b) => b - a);
    }

    let sortedArray = sortHours(json);
      
    while (sortedArray.length > 0) {
      for (let i in json) {
        if (json[i].hoursInSpace === sortedArray[0]) {
        container.innerHTML += ` 
        <div class="astronaut">
            <div class="bio">
              <h3>${json[i].firstName} ${json[i].lastName}</h3>
              <ul>
                <li>Hours in space: ${json[i].hoursInSpace}</li>
                <li>Active: ${json[i].active}</li>
                <li>Skills: ${json[i].skills}</li>
              </ul>
            </div>
            <img class="avatar" src=${json[i].picture}>
          </div>
        `
        sortedArray.shift()
        };
      };
    };
  });
});