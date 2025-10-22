
const map = L.map('map').setView([43.6045, 1.4442], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// --- Récupération des infos du producteur depuis le localStorage ---
const lat = parseFloat(localStorage.getItem("producteur_lat"));
const lon = parseFloat(localStorage.getItem("producteur_lon"));
const nomProducteur = localStorage.getItem("producteur_nom");
const specialite = localStorage.getItem("producteur_produits");

console.log(nomProducteur, specialite);

// --- Vérification et affichage du marqueur ---
if (!isNaN(lat) && !isNaN(lon)) {
  // Création du contenu du popup
  const popupContent = `
    <div>
      <h3 style="margin:0;">${nomProducteur}</h3>
      <p style="margin:4px 0;"><strong>Spécialité :</strong> ${specialite}</p>
    </div>
  `;


  const marker = L.marker([lat, lon]).addTo(map);
  marker.bindPopup(popupContent).openPopup();
  map.setView([lat, lon], 13);
} else {
  console.log("Aucune donnée de producteur trouvée dans le localStorage.");
}
  

console.log(localStorage);
