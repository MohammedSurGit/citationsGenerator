const citationText = document.querySelector('#citation');
const btnGenerer = document.querySelector('#btnGenerer');

const citations = {
    "Sénèque" : `"La vie n’est pas d’attendre que l’orage passe, mais d’apprendre à danser sous la pluie."`, 
    "Eleanor Roosevelt" : `"L'avenir appartient à ceux qui croient à la beauté de leurs rêves."`,
    "Robert Louis Stevenson" : `"Ce n'est pas ce que nous faisons, mais ce que nous devenons qui importe."`, 
    "Thich Nhat Hanh" : `"Il n'y a pas de chemin vers le bonheur. Le bonheur est le chemin."`,
    "Steve Jobs" : `"La seule façon de faire un excellent travail est d'aimer ce que vous faites."`,
    "Henry Ford" : `"L'échec n'est qu'une opportunité de recommencer de manière plus intelligente."`
}

const tableauCitations = Object.entries(citations);

btnGenerer.addEventListener('click', () => {
    citationAleatoir = tableauCitations[Math.floor(Math.random() * tableauCitations.length)];
    citationText.innerHTML = `${citationAleatoir[0]} - ${citationAleatoir[1]}`;
});