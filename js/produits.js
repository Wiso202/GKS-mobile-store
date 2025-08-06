document.addEventListener('DOMContentLoaded', () => {

    const produits = [
        {
            id: 1, marque: 'iPhone', modele: 'iPhone 15 Pro Max', conditionType: 'Neuf', prix: '1 200 000 FCFA', batterie: '100%', etatNote: 10, memoire: '256 Go', couleur: 'Titane naturel', image: 'img/15promax.jfif', probleme: 'Aucun', offreSpeciale: true
        },
        {
            id: 2, marque: 'Samsung', modele: 'Galaxy S24 Ultra', conditionType: 'Occasion', prix: '950 000 FCFA', batterie: '95%', etatNote: 9.5, memoire: '512 Go', couleur: 'Gris titane', image: 'img/samsungs24.jfif', probleme: 'Aucun', offreSpeciale: false
        },
        {
            id: 3, marque: 'iPhone', modele: 'iPhone 13', conditionType: 'Reconditionné', prix: '450 000 FCFA', batterie: '85%', etatNote: 8, memoire: '128 Go', couleur: 'Bleu', image: 'img/iphone13.jfif', probleme: 'Micro-rayures sur l\'écran', offreSpeciale: false
        },
        {
            id: 4, marque: 'Samsung', modele: 'Galaxy Z Flip5', conditionType: 'Occasion', prix: '600 000 FCFA', batterie: '90%', etatNote: 9, memoire: '256 Go', couleur: 'Lavande', image: 'img/Galaxy Z flip5.jfif', probleme: 'Aucun', offreSpeciale: true
        },
        {
            id: 5, marque: 'Samsung', modele: 'Galaxy A54', conditionType: 'Neuf', prix: '180 000 FCFA', batterie: '100%', etatNote: 10, memoire: '128 Go', couleur: 'Noir', image: 'img/Galaxy A54.jfif', probleme: 'Aucun', offreSpeciale: false
        },
        {
            id: 6, marque: 'iPhone', modele: 'iPhone 11', conditionType: 'Occasion', prix: '250 000 FCFA', batterie: '82%', etatNote: 7.5, memoire: '64 Go', couleur: 'Noir', image: 'img/iPhone 11.jfif', probleme: 'Petite fissure à l\'arrière', offreSpeciale: true
        },
        {
            id: 7, marque: 'iPhone', modele: 'iPhone 14 Pro', conditionType: 'Occasion', prix: '800 000 FCFA', batterie: '92%', etatNote: 9, memoire: '256 Go', couleur: 'Violet foncé', image: 'img/iPhone 14 Pro.jfif', probleme: 'Aucun', offreSpeciale: false
        },
        {
            id: 8, marque: 'Samsung', modele: 'Galaxy A34', conditionType: 'Neuf', prix: '150 000 FCFA', batterie: '100%', etatNote: 10, memoire: '128 Go', couleur: 'Vert lime', image: 'img/Galaxy A34.jfif', probleme: 'Aucun', offreSpeciale: true
        },
        {
            id: 9, marque: 'iPhone', modele: 'iPhone SE', conditionType: 'Reconditionné', prix: '120 000 FCFA', batterie: '80%', etatNote: 7, memoire: '64 Go', couleur: 'Rouge', image: 'img/iPhone SE.jfif', probleme: 'Quelques traces d\'usure', offreSpeciale: false
        },
        {
            id: 10, marque: 'Samsung', modele: 'Galaxy S22', conditionType: 'Occasion', prix: '500 000 FCFA', batterie: '88%', etatNote: 8.5, memoire: '256 Go', couleur: 'Blanc', image: 'img/Galaxy S22.jfif', probleme: 'Écran remplacé', offreSpeciale: false
        },
        {
            id: 11, marque: 'iPhone', modele: 'iPhone XR', conditionType: 'Occasion', prix: '200 000 FCFA', batterie: '84%', etatNote: 7.8, memoire: '128 Go', couleur: 'Jaune', image: 'img/iPhone XR.jfif', probleme: 'Rayures sur la coque', offreSpeciale: false
        },
        {
            id: 12, marque: 'Samsung', modele: 'Galaxy Note 20 Ultra', conditionType: 'Reconditionné', prix: '400 000 FCFA', batterie: '91%', etatNote: 8.8, memoire: '256 Go', couleur: 'Bronze mystique', image: 'img/Galaxy Note 20 Ultra.jfif', probleme: 'S-Pen manquant', offreSpeciale: true
        }
    ];

    const conteneurProduits = document.getElementById('liste-produits');
    const paginationContainer = document.getElementById('pagination-container');
    const filterButtons = document.querySelectorAll('.btn-filter');
    const searchInput = document.getElementById('searchInput');

    let produitsFiltres = [...produits];
    const produitsParPage = 6;

    // Fonction pour afficher les produits pour une page donnée
    const afficherProduits = (pageNumber) => {
        conteneurProduits.innerHTML = '';
        const debutIndex = (pageNumber - 1) * produitsParPage;
        const finIndex = pageNumber * produitsParPage;
        const produitsAPage = produitsFiltres.slice(debutIndex, finIndex);

        produitsAPage.forEach(produit => {
            const offreSpecialeBadge = produit.offreSpeciale ? `<span class="badge bg-warning text-dark position-absolute top-0 start-0 m-2 animate__animated animate__pulse animate__infinite">Offre Spéciale</span>` : '';
            
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
    };

    // Fonction pour créer la pagination
    const creerPagination = (produits) => {
        paginationContainer.innerHTML = '';
        const totalPages = Math.ceil(produits.length / produitsParPage);

        for (let i = 1; i <= totalPages; i++) {
            const pageItem = document.createElement('li');
            pageItem.classList.add('page-item');
            if (i === 1) pageItem.classList.add('active');
            
            const pageLink = document.createElement('a');
            pageLink.classList.add('page-link', 'animate__animated', 'animate__fadeIn');
            pageLink.href = '#';
            pageLink.textContent = i;
            pageLink.dataset.page = i;

            pageItem.appendChild(pageLink);
            paginationContainer.appendChild(pageItem);
        }
        
        // Ajouter les écouteurs d'événements à la pagination
        paginationContainer.querySelectorAll('.page-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = parseInt(e.target.dataset.page);
                afficherProduits(page);
                paginationContainer.querySelector('.page-item.active').classList.remove('active');
                e.target.closest('.page-item').classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    };

    // Gestion des filtres
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const filterValue = e.target.dataset.filter;
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            if (filterValue === 'all') {
                produitsFiltres = produits;
            } else {
                produitsFiltres = produits.filter(p => p.marque === filterValue);
            }
            afficherProduits(1);
            creerPagination(produitsFiltres);
        });
    });

    // Gestion de la recherche
    searchInput.addEventListener('keyup', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        produitsFiltres = produits.filter(p => 
            p.modele.toLowerCase().includes(searchTerm) || 
            p.marque.toLowerCase().includes(searchTerm) ||
            p.couleur.toLowerCase().includes(searchTerm)
        );
        afficherProduits(1);
        creerPagination(produitsFiltres);
    });

    // Gestion du modal de détails
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

    // Initialisation au chargement de la page
    afficherProduits(1);
    creerPagination(produits);
});