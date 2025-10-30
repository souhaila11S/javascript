const form = document.getElementById("form-ajout");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nouveauLivre = {
    code: Number(document.getElementById("code").value),
    titre: document.getElementById("titre").value,
    auteur: document.getElementById("auteur").value,
    annee: Number(document.getElementById("annee").value),
    disponible: document.getElementById("disponible").checked,
    prix: Number(document.getElementById("prix").value)
  };

  bibliotheque.push(nouveauLivre);
  sauvegarderBibliotheque();

  alert("📘 Livre ajouté avec succès !");
  form.reset();
});
