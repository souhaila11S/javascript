
let bibliotheque = JSON.parse(localStorage.getItem("bibliotheque")) || [
    { code:12, titre:"Clean Code", auteur:"Robert C. Martin", annee:2008, disponible:true, prix:150 },
    { code:45, titre:"Eloquent JavaScript", auteur:"Marijn Haverbeke", annee:2018, disponible:true, prix:200 },
    { code:78, titre:"You Don’t Know JS", auteur:"Kyle Simpson", annee:2020, disponible:false, prix:250 }
  ];
  
  document.getElementById("form-livre").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const nouveauLivre = {
      code: Number(document.getElementById("code").value),
      titre: document.getElementById("titre").value,
      auteur: document.getElementById("auteur").value,
      annee: Number(document.getElementById("annee").value),
      prix: Number(document.getElementById("prix").value),
      disponible: document.getElementById("disponible").value === "true"
    };
  
    bibliotheque.push(nouveauLivre);
    localStorage.setItem("bibliotheque", JSON.stringify(bibliotheque));
  
    alert("✅ Livre ajouté avec succès !");
    this.reset();
  });
