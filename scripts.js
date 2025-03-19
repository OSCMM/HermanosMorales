// Función para el menú móvil
function toggleMenu() {
    const menuList = document.getElementById('menuList');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    menuList.classList.toggle('active');
    menuBtn.classList.toggle('active');
    
    // Cambiar el ícono del botón cuando se activa/desactiva
    if (menuList.classList.contains('active')) {
        menuBtn.innerHTML = '✕'; // Cambiar a X cuando menú está abierto
    } else {
        menuBtn.innerHTML = '☰'; // Volver a hamburguesa cuando está cerrado
    }
}

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        const menuList = document.getElementById('menuList');
        const menuBtn = document.querySelector('.mobile-menu-btn');
        
        menuList.classList.remove('active');
        menuBtn.classList.remove('active');
        menuBtn.innerHTML = '☰';
    });
});

// Función para filtrar la galería
function filterGallery(category) {
    // Actualizar botones activos
    document.querySelectorAll('.gallery-tab').forEach(tab => {
        if (tab.textContent.toLowerCase() === category || 
            (tab.textContent.toLowerCase() === 'todos' && category === 'todos')) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    
    // Filtrar elementos
    document.querySelectorAll('.gallery-item').forEach(item => {
        if (category === 'todos' || item.getAttribute('data-category').toLowerCase() === category.toLowerCase()) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Inicializar la galería mostrando todos los elementos al cargar
document.addEventListener('DOMContentLoaded', function() {
    filterGallery('todos');
    
    // Fix para bug de categoría "Confecciones"
    document.querySelectorAll('.gallery-item').forEach(item => {
        const category = item.getAttribute('data-category');
        if (category) {
            item.setAttribute('data-category', category.toLowerCase());
        }
    });
});