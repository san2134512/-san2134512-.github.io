const agencyData = {
    inicio: `
        <div class="hero-card neu-flat">
            <span class="tag">AGENCIA PREMIADA 2026</span>
            <h1>Diseño que se <span style="color:var(--accent)">siente</span>.</h1>
            <p>En Nébula Studio, no solo creamos visuales; esculpimos interfaces táctiles digitales basadas en la psicología de la profundidad y la suavidad.</p>
        </div>

        <div class="grid-services">
            <div class="card neu-flat">
                <div style="font-size: 2rem; margin-bottom:10px;">🎨</div>
                <h3>Estrategia Visual</h3>
                <p>Convertimos valores abstractos en sistemas visuales coherentes y orgánicos.</p>
            </div>
            <div class="card neu-flat">
                <div style="font-size: 2rem; margin-bottom:10px;">💻</div>
                <h3>Web Experiencial</h3>
                <p>Sitios web de alto rendimiento con animaciones fluidas y estados táctiles.</p>
            </div>
            <div class="card neu-flat">
                <div style="font-size: 2rem; margin-bottom:10px;">📱</div>
                <h3>App Design</h3>
                <p>Interfaces móviles diseñadas para la ergonomía del pulgar moderno.</p>
            </div>
        </div>

        <div class="testimonial-box neu-inset">
            <p>Nébula transformó nuestra plataforma aburrida en algo que los usuarios realmente disfrutan tocar y explorar. El diseño neumórfico es el futuro de la calma digital.</p>
            <strong style="display:block; margin-top:15px; color:var(--accent)">- Julian V., CEO de TechFlow</strong>
        </div>
    `,

    servicios: `
        <h2 style="text-align:center; margin-bottom:40px;">Nuestras Verticales</h2>
        <div class="neu-flat" style="padding:40px; margin-bottom:30px;">
            <div style="display:flex; gap:20px; align-items:center; margin-bottom:15px;">
                <div class="logo-neu" style="width:40px; height:40px; font-size:1rem;">01</div>
                <h3>Estética Retro-Futurista</h3>
            </div>
            <p>Especialistas en la fusión de efectos clásicos (CRT, glitch sutil) con interfaces Soft UI modernas. Ideal para marcas que buscan nostalgia técnica.</p>
        </div>
        <div class="neu-flat" style="padding:40px; margin-bottom:30px;">
            <div style="display:flex; gap:20px; align-items:center; margin-bottom:15px;">
                <div class="logo-neu" style="width:40px; height:40px; font-size:1rem;">02</div>
                <h3>Optimización de UX</h3>
            </div>
            <p>Auditorías completas de usabilidad para reducir la fricción cognitiva del usuario mediante jerarquías visuales basadas en sombras.</p>
        </div>
    `,

    proyectos: `
        <h2 style="text-align:center;">Casos de Estudio</h2>
        <div class="portfolio-grid">
            <div class="card neu-flat">
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600" class="project-img">
                <span class="tag">FINTECH</span>
                <h3>Nova Bank App</h3>
                <p>Rediseño total de banca móvil usando Soft UI para reducir el estrés financiero.</p>
            </div>
            <div class="card neu-flat">
                <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=600" class="project-img">
                <span class="tag">ECOMMERCE</span>
                <h3>Moda Zen</h3>
                <p>Tienda de ropa minimalista con navegación basada en gestos táctiles.</p>
            </div>
            <div class="card neu-flat">
                <img src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=600" class="project-img">
                <span class="tag">GAMING</span>
                <h3>Pixel Stream</h3>
                <p>Plataforma de streaming con estética CRT-SoftUI para entusiastas de lo retro.</p>
            </div>
        </div>
    `,

    equipo: `
        <h2 style="text-align:center; margin-bottom:40px;">Mentes Creativas</h2>
        <div class="grid-services">
            <div class="card neu-flat">
                <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" class="neu-avatar">
                <h3>Elena Ríos</h3>
                <p style="color:var(--accent); font-weight:700;">Directora de Arte</p>
                <p>Experta en teoría del color y semiótica visual.</p>
            </div>
            <div class="card neu-flat">
                <img src="https://i.pravatar.cc/150?u=a042581f4e29026704e" class="neu-avatar">
                <h3>Marcus Vane</h3>
                <p style="color:var(--accent); font-weight:700;">Lead Developer</p>
                <p>Arquitecto de interfaces fluidas y animaciones CSS.</p>
            </div>
        </div>
    `,

    contacto: `
        <div style="max-width: 600px; margin: 0 auto;" class="neu-flat card">
            <h2>Hablemos de tu idea</h2>
            <p style="margin-bottom:20px; font-size:0.9rem;">¿Listo para darle profundidad a tu producto digital?</p>
            <form id="neu-form">
                <input type="text" class="neu-input" placeholder="Tu nombre">
                <input type="email" class="neu-input" placeholder="Tu email">
                <select class="neu-input" style="appearance:none;">
                    <option>Tipo de proyecto</option>
                    <option>Web Design</option>
                    <option>Branding</option>
                    <option>Otro</option>
                </select>
                <textarea class="neu-input" rows="4" placeholder="Mensaje"></textarea>
                <button type="button" class="neu-button-main" onclick="confirmSend()">INICIAR PROYECTO</button>
            </form>
        </div>
    `
};

// (El resto de la lógica de navegación se mantiene igual que en el ejemplo anterior)

const contentArea = document.getElementById('app-content');
const buttons = document.querySelectorAll('.nav-btn');

function navigate(target) {
    // Actualizar botones
    buttons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.target === target);
    });

    // Animación de salida y entrada
    contentArea.style.opacity = 0;
    setTimeout(() => {
        contentArea.innerHTML = agencyData[target];
        contentArea.style.opacity = 1;
    }, 200);
}

buttons.forEach(btn => {
    btn.addEventListener('click', () => navigate(btn.dataset.target));
});

// Mensaje de confirmación interactivo
function confirmSend() {
    alert("¡Mensaje recibido! Nos pondremos en contacto pronto.");
}

// Inicialización
navigate('inicio');