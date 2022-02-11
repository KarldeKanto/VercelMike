const btnNew = document.getElementById("btnNew");
btnNew.addEventListener("click",fetchCreatePlayer);

async function fetchCreatePlayer() {
 
	const nameData = document.getElementById("txtName").value;
	const surnameData = document.getElementById("txtSurname").value;
	const ageData = document.getElementById("txtAge").value;
  const teamData = document.getElementById("txtTeam").value;
  const positionData = document.getElementById("txtPosition").value;
  console.log(nameData + " " + surnameData + " " + ageData + " " + teamData + " " + positionData);
  const newPlayer = {name: nameData, surname: surnameData, age: ageData, team: teamData, position: positionData};
	
    const response = await fetch(
      "https://mikepls.herokuapp.com/Players",
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
        const span = document.getElementById('playerSpan');
        let player = data;
        span.innerHTML = `${player._id} ${player.name} ${player.surname} ${player.age} ${player.team} ${player.position}`; 
        
      })
      .catch((error) => console.log(error));
  }
