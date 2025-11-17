
let bibliotheque = JSON.parse(localStorage.getItem("bibliotheque")) || [
    { code:12, titre:"Clean Code", auteur:"Robert C. Martin", annee:2008, disponible:true, prix:150 },
    { code:45, titre:"Eloquent JavaScript", auteur:"Marijn Haverbeke", annee:2018, disponible:true, prix:200 },
    { code:78, titre:"You Don’t Know JS", auteur:"Kyle Simpson", annee:2020, disponible:false, prix:250 }
];
function sauvegarder() {
    localStorage.setItem("bibliotheque", JSON.stringify(bibliotheque));
}

function afficherLivres(filtre = "") {
    const container = document.getElementById("liste-livres");
    container.innerHTML = "";

    const livresFiltres = bibliotheque.filter(livre =>
        livre.titre.toLowerCase().includes(filtre.toLowerCase())
    );

    livresFiltres.forEach(livre => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>${livre.titre}</h3>
            <p><strong>Auteur:</strong> ${livre.auteur}</p>
            <p><strong>Année:</strong> ${livre.annee}</p>
            <p><strong>Prix:</strong> ${livre.prix} dh</p>
            <p><strong>Statut:</strong> ${livre.disponible ? "🟢 Disponible" : "🔴 Réservé"}</p>
            ${livre.disponible ? `<button class="reserver">Réserver</button>` : ""}
            <button class="supprimer">Supprimer</button>
        `;

        if (livre.disponible) {
            card.querySelector(".reserver").addEventListener("click", () => {
                livre.disponible = false;
                sauvegarder();
                afficherLivres(filtre);
            });
        }

        card.querySelector(".supprimer").addEventListener("click", () => {
            supprimerLivre(livre.code);
        });

        container.appendChild(card);
    });

    afficherStats();
}
function supprimerLivre(code) {
    bibliotheque = bibliotheque.filter(l => l.code !== code);
    sauvegarder();
    afficherLivres();
}
document.getElementById("recherche").addEventListener("input", (e) => {
    afficherLivres(e.target.value);
});

let ordreAZ = true;
document.getElementById("btn-trier").addEventListener("click", () => {
    if (ordreAZ) {
        bibliotheque.sort((a, b) => a.titre.localeCompare(b.titre));
        document.getElementById("btn-trier").textContent = "Trier Z → A";
    } else {
        bibliotheque.sort((a, b) => b.titre.localeCompare(a.titre));
        document.getElementById("btn-trier").textContent = "Trier A → Z";
    }
    ordreAZ = !ordreAZ;
    sauvegarder();
    afficherLivres();
});

function afficherStats() {
    const statsEl = document.getElementById("stats");

    if (bibliotheque.length === 0) {
        statsEl.innerText = "📊 Aucun livre pour le moment.";
        return;
    }

    const total = bibliotheque.length;
    const dispo = bibliotheque.filter(l => l.disponible).length;

    const plusCher = bibliotheque.reduce((max, l) =>
        l.prix > max.prix ? l : max
    );

    statsEl.innerHTML = `
        📊 Total: ${total} | Disponibles: ${dispo}<br>
        💰 Livre le plus cher: <strong>${plusCher.titre}</strong> (${plusCher.prix} dh)
    `;
}
afficherLivres();

