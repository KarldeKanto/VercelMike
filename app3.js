const btnDelete = document.getElementById("btnDelete");
btnDelete.addEventListener("click",fetchDeletePlayer);

const btnEdit = document.getElementById("btnEdit");
btnEdit.addEventListener("click",fetchEditPlayer);

async function fetchDeletePlayer() {
	const idData = document.getElementById("txtId").value;
	const nameData = document.getElementById("txtName").value;
	const surnameData = document.getElementById("txtSurname").value;
	const ageData = document.getElementById("txtAge").value;
  const teamData = document.getElementById("txtTeam").value;
  const positionData = document.getElementById("txtPosition").value;

	console.log(nameData + " " + surnameData + " " + ageData + " " + teamData + " " + positionData);
	const newPlayer = {name: nameData, surname: surnameData, age: ageData, team: teamData ,position: positionData};
	
    const response = await fetch(
      "https://mikepls.herokuapp.com/Players/" + idData + "?_method=DELETE",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
		    body: JSON.stringify(newPlayer)
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Player Dead");
        window.location.href = "index.html";
      })
      .catch((error) => console.log(error));
  }

async function fetchEditPlayer() {
  const idData = document.getElementById("txtId").value;
	const nameData = document.getElementById("txtName").value;
	const surnameData = document.getElementById("txtSurname").value;
	const ageData = document.getElementById("txtAge").value;
  const teamData = document.getElementById("txtTeam").value;
  const positionData = document.getElementById("txtPosition").value;

	console.log(nameData + " " + surnameData + " " + ageData + " " + teamData + " " + positionData);
	const newPlayer = {name: nameData, surname: surnameData, age: ageData, team: teamData ,position: positionData};
	
    const response = await fetch(
      "https://mikepls.herokuapp.com/Players/" + idData + "?_method=PUT",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
		body: JSON.stringify(newPlayer)
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Player Edit with success")
        window.location.href = "index.html";
      })
      .catch((error) => console.log(error));
  }

async function fetchPlayer(id) {
    const response = await fetch(
      "https://mikepls.herokuapp.com/Players/" + id,
      {		
        method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json"		  
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
	    let player = data;
	
	 try {
		 
		 document.getElementById("txtId").value = id;
		 
		 if (player != null){
      document.getElementById("txtName").value = player.name;
      document.getElementById("txtSurname").value = player.surname;
      document.getElementById("txtAge").value = player.age;
      document.getElementById("txtTeam").value = player.team;
      document.getElementById("txtPosition").value = player.position;
		 }
	  
	}
	catch (e) {
	   console.log(e);
	}

      })
      .catch((error) => console.log(error));
  }



function getParameterByName(name, url = window.location.href) {

  console.log(url);
  name = name.replace(/[\[\]]/g, '\\$&');  
  console.log(name);

  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
  results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));

}

console.log(getParameterByName('id'));
fetchPlayer(getParameterByName('id'));
