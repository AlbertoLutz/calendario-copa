function createGame() {
  return `
    <li>
            <img src="./assets/brasil.svg" alt="" />
            <strong>16:00</strong>
            <img src="./assets/servia.svg" alt="" />
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
${createCard("21/11", "segunda", createGame())}
}
${createCard("24/11", "quinta", createGame())}
${createCard("02/12", "sexta", createGame())}
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
