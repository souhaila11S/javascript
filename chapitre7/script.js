let livres = ["L'Étranger", "Le Petit Prince", "Les Misérables"];
console.log("Tableau initial :", livres);


livres.push("Harry Potter");
console.log("Après push :", livres);

livres.pop();
console.log("Après pop :", livres);


livres[1] = "Le Comte de Monte-Cristo";
console.log("Après modification :", livres);


livres.unshift("1984");
console.log("Après unshift :", livres);


livres.shift();
console.log("Après shift :", livres);


livres.splice(1, 0, "Don Quichotte");
console.log("Après splice :", livres);

console.log("Boucle for :");
for (let i = 0; i < livres.length; i++) {
  console.log(i, livres[i]);
}


let produits = [
  { nom:"L'Étranger" , prix: 300 },
  { nom:"Le Petit Prince" , prix: 200 },
  { nom: "Les Misérables", prix: 340 },
];

console.log("Liste des produits :");
produits.forEach((p) => console.log(`${p.nom} → ${p.prix} DH`));
