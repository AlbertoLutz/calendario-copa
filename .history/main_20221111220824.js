function createCard(date, day) {
  return `
    <div class="card">
    <h2>${date} <span>${day}</span> </h2>
    <ul>
        <li>
            <img src="./assets/brasil.svg" alt="" />
            <strong>16:00</strong>
            <img src="./assets/servia.svg" alt="" />
        </li>
       
    </ul>
</div>
    `;
}

document.querySelector("#app").innerHTML = `
<img src="./assets/logo.svg" alt="Logo">
</header>
<main class="cards">
${createCard()}
${createCard()}
${createCard()}
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