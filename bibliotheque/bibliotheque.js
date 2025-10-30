let bibliotheque = JSON.parse(localStorage.getItem("bibliotheque")) || [
    { code: 12, titre: "Clean Code", auteur: "Robert C. Martin", annee: 2008, disponible: true, prix: 150 },
    { code: 45, titre: "Eloquent JavaScript", auteur: "Marijn Haverbeke", annee: 2018, disponible: true, prix: 200 },
  ];
  
  function sauvegarderBibliotheque() {
    localStorage.setItem("bibliotheque", JSON.stringify(bibliotheque));
  }
  