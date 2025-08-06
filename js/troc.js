document.addEventListener('DOMContentLoaded', () => {
    const trocForm = document.getElementById('trocForm');
    const modeleSouhaiteInput = document.getElementById('modeleSouhaite');

    // Fonction pour récupérer les paramètres d'URL
    const getUrlParameter = (name) => {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    // Pré-remplir le champ "modeleSouhaite" si un paramètre "modele" est présent dans l'URL
    const modeleSouhaite = getUrlParameter('modele');
    if (modeleSouhaite) {
        modeleSouhaiteInput.value = modeleSouhaite;
    }

    // Gestion de la soumission du formulaire
    trocForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nom = document.getElementById('nom').value;
        const contact = document.getElementById('contact').value;
        const marqueTroc = document.getElementById('marqueTroc').value;
        const modeleTroc = document.getElementById('modeleTroc').value;
        const descriptionTroc = document.getElementById('descriptionTroc').value;

        // Message WhatsApp
        const message = `Bonjour, je suis ${nom} et je souhaite proposer un troc.
        
Mon téléphone :
Marque : ${marqueTroc || 'Non spécifié'}
Modèle : ${modeleTroc || 'Non spécifié'}
Description : ${descriptionTroc}
        
Je suis intéressé par le modèle : ${modeleSouhaiteInput.value || 'Non spécifié'}
        
Mon contact WhatsApp : ${contact}`;

        const encodedMessage = encodeURIComponent(message);
        
        // Numéro de téléphone WhatsApp de GKS
        const whatsappNumber = '22998000000'; // Remplacer par le numéro de GKS
        
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

        // Ouvre le lien WhatsApp dans une nouvelle fenêtre
        window.open(whatsappUrl, '_blank');
        
        // Réinitialise le formulaire après l'envoi
        trocForm.reset();
        
        // Pré-remplir à nouveau si l'utilisateur est arrivé avec un paramètre d'URL
        if (modeleSouhaite) {
            modeleSouhaiteInput.value = modeleSouhaite;
        }
    });
});