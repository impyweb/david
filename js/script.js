/* ==========================================================================
   LÓGICA GLOBAL DE OAXARAW
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    /* --- 1. CONTROL DEL MENÚ MÓVIL (Hamburguesa) --- */
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', () => {
            // Activa o desactiva la clase 'active' en el nav
            navMenu.classList.toggle('active');
            
            // Animación opcional para las rayitas del botón
            mobileMenu.classList.toggle('is-open');
        });
    }

    /* --- 2. LIGHTBOX (Visor de imágenes para Galería) --- */
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-content');
    const gridImages = document.querySelectorAll('.grid-item img');

    // Solo ejecutamos si el lightbox existe en el HTML actual
    if (lightbox && lightboxImg) {
        
        // Al hacer clic en una imagen de la cuadrícula
        gridImages.forEach(img => {
            img.addEventListener('click', () => {
                lightbox.classList.add('active');
                lightboxImg.src = img.src; // Inyecta la ruta de la imagen
                lightboxImg.alt = img.alt;
                
                // Bloqueamos el scroll de la página de fondo
                document.body.style.overflow = 'hidden';
            });
        });

        // Cerrar el visor
        lightbox.addEventListener('click', (event) => {
            // Si el usuario hace clic en el fondo oscuro (fuera de la foto) o en la X
            if (event.target !== lightboxImg) {
                lightbox.classList.remove('active');
                // Devolvemos el scroll normal a la página
                document.body.style.overflow = 'auto';
            }
        });

        // Soporte para cerrar con la tecla Escape
        document.addEventListener('keydown', (event) => {
            if (event.key === "Escape" && lightbox.classList.contains('active')) {
                lightbox.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
});