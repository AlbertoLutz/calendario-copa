function createGame(player1, hour, player2) {
  return `
    <li>
            <img src="./assets/${player1}.svg" alt="" />
            <strong>${hour}</strong>
            <img src="./assets/${player2}.svg" alt="" />
        </li>
    `;
}

function createCard(date, day, games) {
  return `
    <div class="card">
    <h2>${date} <span>${day}</span> </h2>
    <ul>
        ${games}       
    </ul>
</div>
    `;
}

document.querySelector("#app").innerHTML = `
<img src="./assets/logo.svg" alt="Logo">
</header>
<main class="cards">
${createCard("21/11", "segunda", createGame("brasil", "8:00", "camaroes"))}
${createCard("24/11", "quinta", createGame("hungria", "13:00", "argentina"))}
${createCard("02/12", "sexta", createGame("colombia", "20:00", "japao"))}
</main>
`;

{
  /* <li>
<img src="./assets/hungria.svg" alt="" />
<strong>16:00</strong>
<img src="./assets/argentina.svg" alt="" />
</li>
<li>
<img src="./assets/colombia.svg" alt="" />
<strong>16:00</strong>
<img src="./assets/japao.svg" alt="" />
</li> */
}
