function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
return parent.appendChild(el);
}

async function fetchPlayers() {
  const response = await fetch(
    "https://mikepls.herokuapp.com/",
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

      const ul = document.getElementById('players');

      let Players = data;
      
      for(let player of Players){
          let li = createNode('li');
          let span = createNode('span');
    let a = createNode('a');
    a.setAttribute('href', "show.html?id=" + player._id);
    a.innerText = player._id;	

          span.innerHTML = `${player.name} ${player.surname} ${player.age} ${player.team} ${player.position}`;  

          append(li, span);

    append(li, a);

          append(ul, li);
      }
      
    })
    .catch((error) => console.log(error));
}

fetchPlayers();