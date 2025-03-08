// Obtener elementos del DOM
const verDetallesButton = document.getElementById('verDetalles');
const volverButton = document.getElementById('volver');
const tarjeta = document.querySelector('.tarjeta');
//elementos que fueron agregados para realizar el comportamiento deseado
const caraFrontal = document.querySelector('.frontal');
const caraPosterior = document.querySelector('.posterior');
// Función para voltear la tarjeta
verDetallesButton.addEventListener('click', () => {
    //acciones agregadas para obtener el efecto del giro de la tarjeta 
    caraFrontal.style.transform = 'rotateY(180deg)'; // Voltear la tarjeta
    caraPosterior.style.transform = 'rotateY(0deg)';
});
// Función para volver a la cara frontal
volverButton.addEventListener('click', () => {
    //acciones agregadas para obtener el efecto del giro de la tarjeta 
    caraFrontal.style.transform = 'rotateY(0deg)'; // Voltear la tarjeta
    caraPosterior.style.transform = 'rotateY(180deg)';
});