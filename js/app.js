document.addEventListener('DOMContentLoaded', () => {

    // Notre "base de données" de produits
    const produits = [
        {
            id: 1,
            marque: 'iPhone',
            modele: 'iPhone 15 Pro Max',
            conditionType: 'Neuf',
            prix: '1 200 000 FCFA',
            batterie: '100%',
            etatNote: 10,
            memoire: '256 Go',
            couleur: 'Titane naturel',
            image: 'img/15promax.jfif',
            probleme: 'Aucun',
            offreSpeciale: true
        },
        {
            id: 2,
            marque: 'Samsung',
            modele: 'Galaxy S24 Ultra',
            conditionType: 'Occasion',
            prix: '950 000 FCFA',
            batterie: '95%',
            etatNote: 9.5,
            memoire: '512 Go',
            couleur: 'Gris titane',
            image: 'img/samsungs24.jfif',
            probleme: 'Aucun',
            offreSpeciale: false
        },
        {
            id: 3,
            marque: 'iPhone',
            modele: 'iPhone 13',
            conditionType: 'Reconditionné',
            prix: '450 000 FCFA',
            batterie: '85%',
            etatNote: 8,
            memoire: '128 Go',
            couleur: 'Bleu',
            image: 'img/iphone13.jfif',
            probleme: 'Micro-rayures sur l\'écran',
            offreSpeciale: false
        },
        {
            id: 4,
            marque: 'Samsung',
            modele: 'Galaxy Z Flip5',
            conditionType: 'Occasion',
            prix: '600 000 FCFA',
            batterie: '90%',
            etatNote: 9,
            memoire: '256 Go',
            couleur: 'Lavande',
            image: 'img/Galaxy Z Flip5.jfif',
            probleme: 'Aucun',
            offreSpeciale: true
        },
        {
            id: 5,
            marque: 'Samsung',
            modele: 'Galaxy A54',
            conditionType: 'Neuf',
            prix: '180 000 FCFA',
            batterie: '100%',
            etatNote: 10,
            memoire: '128 Go',
            couleur: 'Noir',
            image: 'img/Galaxy A54.jfif',
            probleme: 'Aucun',
            offreSpeciale: false
        },
        {
            id: 6,
            marque: 'iPhone',
            modele: 'iPhone 11',
            conditionType: 'Occasion',
            prix: '250 000 FCFA',
            batterie: '82%',
            etatNote: 7.5,
            memoire: '64 Go',
            couleur: 'Noir',
            image: 'img/IpHONE 11.jfif',
            probleme: 'Petite fissure à l\'arrière',
            offreSpeciale: true
        }
    ];

    // Fonction pour afficher les produits dans la vitrine
    const afficherProduitsVitrine = () => {
        const conteneurProduits = document.getElementById('produits-vitrine');
        if (!conteneurProduits) return;

        produits.forEach(produit => {
            const offreSpecialeBadge = produit.offreSpeciale ? `<span class="badge bg-warning text-dark position-absolute top-0 start-0 m-2">Offre Spéciale</span>` : '';
            
            // Les trois boutons sont maintenant toujours présents pour chaque produit
            // Exemple pour le code de génération de la carte produit
const boutonsActions = `
    <div class="d-flex justify-content-between mt-3">
        <a href="https://api.whatsapp.com/send?phone=2290190821260&text=Bonjour,%20je%20souhaite%20acheter%20le%20${produit.modele}." target="_blank" class="btn btn-primary btn-sm flex-fill me-2">Acheter</a>
        <a href="troc.html?modele=${encodeURIComponent(produit.modele)}" class="btn btn-secondary btn-sm flex-fill me-2">Troc</a>
        <button type="button" class="btn btn-outline-secondary btn-sm flex-fill" data-bs-toggle="modal" data-bs-target="#detailsModal" data-id="${produit.id}">Détail</button>
    </div>
`;
            
            const carteHtml = `
                <div class="col">
                    <div class="card product-card h-100 animate__animated animate__fadeIn">
                        ${offreSpecialeBadge}
                        <img src="${produit.image}" class="card-img-top" alt="${produit.modele}">
                        <div class="card-body d-flex flex-column">
                            <div>
                                <h5 class="card-title">${produit.modele}</h5>
                                <p class="card-text">${produit.caracteristiques}</p>
                                <p class="card-text"><small class="text-muted">État : ${produit.etatNote}/10</small></p>
                                <h4 class="text-success fw-bold">${produit.prix}</h4>
                            </div>
                            <div>
                                ${boutonsActions}
                            </div>
                        </div>
                    </div>
                </div>
            `;
            conteneurProduits.innerHTML += carteHtml;
        });

        // Gérer le modal de détails
        const detailsModal = document.getElementById('detailsModal');
        detailsModal.addEventListener('show.bs.modal', event => {
            const button = event.relatedTarget;
            const productId = button.getAttribute('data-id');
            const produit = produits.find(p => p.id == productId);

            const modalTitle = detailsModal.querySelector('.modal-title');
            const modalBody = detailsModal.querySelector('.modal-body');

            modalTitle.textContent = `${produit.marque} ${produit.modele}`;
            modalBody.innerHTML = `
                <img src="${produit.image}" class="img-fluid mb-3" alt="${produit.modele}">
                <p><strong>Type de condition :</strong> ${produit.conditionType}</p>
                <p><strong>Prix :</strong> ${produit.prix}</p>
                <p><strong>Niveau de la batterie :</strong> ${produit.batterie}</p>
                <p><strong>État sur 10 :</strong> ${produit.etatNote}/10</p>
                <p><strong>Mémoire interne :</strong> ${produit.memoire}</p>
                <p><strong>Couleur :</strong> ${produit.couleur}</p>
                <p><strong>Problème(s) :</strong> ${produit.probleme}</p>
            `;
        });
    };

    afficherProduitsVitrine();
});