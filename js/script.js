/* ==========================================================================
   CONTROL DEL MENÚ MÓVIL (Hamburguesa)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    // Verifica que los elementos existan antes de añadir el evento
    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', () => {
            // Activa o desactiva la clase 'active' definida en el CSS
            navMenu.classList.toggle('active');
            
            // Opcional: añade una clase al botón para animar las rayitas
            mobileMenu.classList.toggle('is-open');
        });
    }
});