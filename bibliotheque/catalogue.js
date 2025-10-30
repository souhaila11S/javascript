function afficherLivres() {
    const divListe = document.getElementById("liste-livres");
    divListe.innerHTML = "";
  
    bibliotheque.forEach(livre => {
      const carte = document.createElement("div");
      carte.className = "carte";
      carte.innerHTML = `
        <h3>${livre.titre}</h3>
        <p><b>Auteur:</b> ${livre.auteur}</p>
        <p><b>Année:</b> ${livre.annee}</p>
        <p><b>Prix:</b> ${livre.prix} DH</p>
        <p><b>Disponible:</b> ${livre.disponible ? "Oui ✅" : "Non ❌"}</p>
        <button onclick="supprimerLivre(${livre.code})">Supprimer</button>
      `;
      divListe.appendChild(carte);
    });
  
    afficherStats();
  }
  
  function supprimerLivre(code) {
    bibliotheque = bibliotheque.filter(l => l.code !== code);
    sauvegarderBibliotheque();
    afficherLivres();
  }
  
  function nombreTotal() {
    return bibliotheque.length;
  }
  
  function nombreDisponibles() {
    return bibliotheque.filter(l => l.disponible).length;
  }
  
  function afficherStats() {
    const footer = document.getElementById("stats");
    footer.textContent = `📚 Total livres : ${nombreTotal()} | ✅ Disponibles : ${nombreDisponibles()}`;
  }
  
  afficherLivres();
  