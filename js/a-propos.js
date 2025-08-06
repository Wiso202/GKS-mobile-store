document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner les éléments à animer si nécessaire
    const histoireImage = document.querySelector('.animate__fadeInLeft');
    const histoireTexte = document.querySelector('.animate__fadeInRight');
    const missionValeursTitre = document.querySelector('.animate__fadeInDown');
    const missionBox = document.querySelector('.animate__zoomIn');
    const valeursBox = document.querySelector('.animate__zoomIn.animate__delay-1s');

    // Options d'observer (pour déclencher l'animation quand l'élément est visible)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Déclencher quand 50% de l'élément est visible
    };

    const apparitionCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated');
                // Ajouter des classes d'animation spécifiques si nécessaire
                if (entry.target === histoireImage) entry.target.classList.add('animate__fadeInLeft');
                if (entry.target === histoireTexte) entry.target.classList.add('animate__fadeInRight');
                if (entry.target === missionValeursTitre) entry.target.classList.add('animate__fadeInDown');
                if (entry.target === missionBox) entry.target.classList.add('animate__zoomIn');
                if (entry.target === valeursBox) entry.target.classList.add('animate__zoomIn');

                observer.unobserve(entry.target); // Une seule animation par élément
            }
        });
    };

    const observer = new IntersectionObserver(apparitionCallback, observerOptions);

    // Observer les éléments
    if (histoireImage) observer.observe(histoireImage);
    if (histoireTexte) observer.observe(histoireTexte);
    if (missionValeursTitre) observer.observe(missionValeursTitre);
    if (missionBox) observer.observe(missionBox);
    if (valeursBox) observer.observe(valeursBox);

    // Suggestions de fonctionnalités futures :
    // 1. Carrousel de photos de l'équipe
    // 2. Section "Témoignages" avec un système de défilement
    // 3. Une ligne du temps interactive de l'histoire de GKS
    // 4. Effets de parallaxe subtils lors du défilement
});