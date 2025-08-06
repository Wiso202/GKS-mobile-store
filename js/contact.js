document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const whatsappNumber = '22998000000'; // Remplacer par le numéro de GKS

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nom = document.getElementById('nomContact').value;
        const email = document.getElementById('emailContact').value;
        const message = document.getElementById('messageContact').value;

        // Construire le message WhatsApp
        const whatsappMessage = `Bonjour GKS,
Je m'appelle ${nom}.
Mon email est : ${email || 'Non spécifié'}
Mon message est : ${message}

J'ai hâte de vous lire !`;

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

        // Ouvre le lien WhatsApp dans une nouvelle fenêtre
        window.open(whatsappUrl, '_blank');

        // Réinitialise le formulaire après l'envoi
        contactForm.reset();
    });
});