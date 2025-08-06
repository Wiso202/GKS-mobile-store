document.addEventListener('DOMContentLoaded', () => {
    const addProductForm = document.getElementById('addProductForm');
    const statusMessage = document.getElementById('statusMessage');

    addProductForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const newProduct = {
            marque: document.getElementById('marque').value,
            modele: document.getElementById('modele').value,
            conditionType: document.getElementById('conditionType').value,
            prix: document.getElementById('prix').value,
            batterie: document.getElementById('batterie').value,
            etatNote: document.getElementById('etatNote').value,
            memoire: document.getElementById('memoire').value,
            couleur: document.getElementById('couleur').value,
            probleme: document.getElementById('probleme').value,
            offreSpeciale: document.getElementById('offreSpeciale').checked,
            image: document.getElementById('image').value
        };

        // Simule l'envoi des données à un backend
        console.log("Nouveau produit à ajouter :", newProduct);

        // Affiche un message de succès
        statusMessage.classList.remove('d-none');
        statusMessage.innerHTML = `
            <div class="alert alert-success animate__animated animate__zoomIn" role="alert">
                ✅ Le produit "${newProduct.modele}" a été ajouté avec succès (simulé) !
            </div>
        `;
        
        addProductForm.reset();

        setTimeout(() => {
            statusMessage.classList.add('d-none');
        }, 5000);
    });
});