// ========== Variables Globales ==========
let currentTestimonialIndex = 0;

// ========== Funciones de Testimonios ==========
function changeTestimonial(direction) {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    
    // Ocultar testimonio actual
    testimonials[currentTestimonialIndex].classList.remove('active');
    dots[currentTestimonialIndex].classList.remove('active');
    
    // Calcular nuevo índice
    currentTestimonialIndex += direction;
    
    // Loop circular
    if (currentTestimonialIndex >= testimonials.length) {
        currentTestimonialIndex = 0;
    } else if (currentTestimonialIndex < 0) {
        currentTestimonialIndex = testimonials.length - 1;
    }
    
    // Mostrar nuevo testimonio
    testimonials[currentTestimonialIndex].classList.add('active');
    dots[currentTestimonialIndex].classList.add('active');
}

function currentTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    
    // Ocultar todos
    testimonials.forEach(t => t.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    
    // Mostrar el seleccionado
    currentTestimonialIndex = index;
    testimonials[currentTestimonialIndex].classList.add('active');
    dots[currentTestimonialIndex].classList.add('active');
}

// ========== Funciones de WhatsApp ==========
function contactWhatsApp() {
    // Número de WhatsApp de Edwin
    const phoneNumber = '5216643191946'; // Formato: código país + número (sin +, espacios ni guiones)
    const message = encodeURIComponent('¡Hola! Me interesa obtener más información sobre Pallets Premium. Quiero hablar con Edwin.');
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
}

function joinWhatsAppGroup() {
    // Reemplaza con el link real del grupo de WhatsApp
    const groupURL = 'https://chat.whatsapp.com/XXXXXXXXXXXXX';
    window.open(groupURL, '_blank');
}

// ========== Scroll Suave ==========
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll para todos los enlaces internos
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Auto-rotación de testimonios cada 5 segundos (opcional)
    // Descomenta las siguientes líneas si quieres auto-rotación
    /*
    setInterval(() => {
        changeTestimonial(1);
    }, 5000);
    */
});

// ========== Animación de entrada al hacer scroll ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar secciones para animación
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// ========== Soporte para teclado en slider ==========
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        changeTestimonial(-1);
    } else if (e.key === 'ArrowRight') {
        changeTestimonial(1);
    }
});

// ========== Prevenir carga de imágenes rotas ==========
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.log('Error cargando imagen:', this.src);
        });
    });
});

console.log('Pallets Premium - Landing Page cargada correctamente ✓');
