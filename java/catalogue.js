
let bibliotheque = JSON.parse(localStorage.getItem("bibliotheque")) || [
    { code:12, titre:"Clean Code", auteur:"Robert C. Martin", annee:2008, disponible:true, prix:150 },
    { code:45, titre:"Eloquent JavaScript", auteur:"Marijn Haverbeke", annee:2018, disponible:true, prix:200 },
    { code:78, titre:"You Don’t Know JS", auteur:"Kyle Simpson", annee:2020, disponible:false, prix:250 }
  ];
  
  function afficherLivres(filtre = "") {
    const container = document.getElementById("liste-livres");
    container.innerHTML = "";
  
    const livresFiltres = bibliotheque.filter(livre =>
      livre.titre.toLowerCase().includes(filtre.toLowerCase())
    );
  
    livresFiltres.forEach(livre => {
      const card = document.createElement("p");
      card.className = "card";
      card.innerHTML = `
        <h3>${livre.titre}</h3>
        <p><strong>Auteur:</strong> ${livre.auteur}</p>
        <p><strong>Année:</strong> ${livre.annee}</p>
        <p><strong>Prix:</strong> ${livre.prix} dh</p>
        <p><strong>Disponible:</strong> ${livre.disponible ? "✅ Oui" : "❌ Non"}</p>
        <button onclick="supprimerLivre(${livre.code})">Supprimer</button>
      `;
      container.appendChild(card);
    });
  
  
    afficherStats();
  }
  
  function supprimerLivre(code) {
    bibliotheque = bibliotheque.filter(l => l.code !== code);
    localStorage.setItem("bibliotheque", JSON.stringify(bibliotheque));
    afficherLivres();
  }
  
  document.getElementById("recherche").addEventListener("input", (e) => {
    afficherLivres(e.target.value);
  
  });
  
  function afficherStats() {
    const statsEl = document.getElementById("stats");

  
    const total = bibliotheque.length;
    const dispo = bibliotheque.filter(l => l.disponible).length;
  
    statsEl.innerText = `📊 Total des livres: ${total} | Disponibles: ${dispo}`;
  }
  
  afficherLivres();