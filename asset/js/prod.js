const adresseInput = document.getElementById("adresse");
const btnRecherche = document.getElementById("chAdresse");

// Événement au clic sur le bouton
btnRecherche.addEventListener("click", async () => {
    const adresse = adresseInput.value.trim();
    const nomEntreprise = document.getElementById("nomEntreprise").value.trim();
    const specialite = document.getElementById("specialite").value.trim();
    if (!adresse) {
        alert("Veuillez entrer une adresse !");
        return;
    }
    if (!nomEntreprise) {
        alert("Veuillez indiquer le nom de vôtre entreprise !");
        return;
    }
    if (!specialite) {
        alert("Veuillez indiquer vôtre spécialité !");
        return;
    }

    btnRecherche.disabled = true;
    btnRecherche.textContent = "Recherche...";

    try {
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(adresse)}&limit=1`;
        const response = await fetch(url, { headers: { 'User-Agent': 'BackToTheLocal/1.0' } });

        if (!response.ok) throw new Error(`Erreur HTTP: ${response.status}`);

        const data = await response.json();
        if (data.length === 0) {
            alert("Adresse non trouvée ! Essayez d'être plus précis.");
            return;
        }
        

        const { lat, lon, display_name } = data[0];
        const latitude = parseFloat(lat);
        const longitude = parseFloat(lon);

        localStorage.setItem("producteur_lat", latitude);
        localStorage.setItem("producteur_lon", longitude);
        localStorage.setItem("producteur_nom", nomEntreprise);
        localStorage.setItem("producteur_produits", specialite);

        
        alert("Votre position a été enregistrée");




        console.log("Coordonnées GPS:", latitude, longitude);
        // let marker = L.marker([lat, -lon]).addTo(map);

    } catch (error) {
        console.error("Erreur lors de la recherche:", error);
        alert("Une erreur est survenue. Veuillez réessayer.");
    } finally {
        btnRecherche.disabled = false;
    }
});


