function createCard() {
  return `
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
<div class="card">
    <h2>24/11 <span>quinta</span> </h2>
    ${createCard()}
</main>
`;
