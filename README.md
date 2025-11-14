# Pallets Premium - Landing Page Edwin

Landing page personalizada para Edwin - Pallets Premium - Venta de ropa americana premium.

## 👤 Vendedor
**Edwin** - WhatsApp: [+52 1 664 319 1946](https://wa.me/+5216643191946)

## 🚀 Características

- ✅ Diseño responsivo (móvil, tablet, desktop)
- ✅ Colores corporativos exactos (#FFC107)
- ✅ Slider de testimonios interactivo
- ✅ Integración con WhatsApp
- ✅ Animaciones suaves al hacer scroll
- ✅ Optimizada para conversión

## 📁 Estructura del Proyecto

```
PalletsLanding/
│
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos CSS
├── js/
│   └── script.js       # Funcionalidad JavaScript
├── assets/
│   ├── images/         # Imágenes del sitio
│   └── fonts/          # Fuentes personalizadas
└── README.md           # Este archivo
```

## 🎨 Colores Utilizados

- **Amarillo Principal**: #FFC107
- **Negro**: #000000
- **Blanco**: #FFFFFF

## 🖥️ Visualizar en Localhost

### Opción 1: Live Server (Visual Studio Code)
1. Instala la extensión "Live Server" en VSCode
2. Click derecho en `index.html`
3. Selecciona "Open with Live Server"
4. Se abrirá en `http://localhost:5500`

### Opción 2: Python Simple Server
```bash
# Python 3
python -m http.server 8000

# Luego abre: http://localhost:8000
```

### Opción 3: Node.js http-server
```bash
# Instalar globalmente
npm install -g http-server

# Ejecutar en el directorio del proyecto
http-server -p 8080

# Luego abre: http://localhost:8080
```

### Opción 4: PHP
```bash
php -S localhost:8000

# Luego abre: http://localhost:8000
```

## 📱 Responsive Design

La landing page está optimizada para:
- 📱 Móviles (< 480px)
- 📱 Tablets (< 768px)
- 💻 Desktop (> 768px)

## ⚙️ Configuración de WhatsApp

✅ **Ya configurado para Edwin**
- Número WhatsApp: `+52 1 664 319 1946`
- Todos los botones redirigen correctamente al número de Edwin
- Mensaje automático personalizado incluido

Para cambiar el número de WhatsApp, edita el archivo `js/script.js`:

```javascript
// Línea 45
const phoneNumber = '5216643191946'; // Número actual de Edwin
```

## 🖼️ Agregar Imágenes Reales

Reemplaza los placeholders en la carpeta `assets/images/` con tus imágenes:

1. `store.jpg` - Imagen de la tienda
2. `products-box.jpg` - Caja con productos
3. `shelves.jpg` - Estantes con ropa
4. `person-working.jpg` - Persona trabajando
5. `products-white.jpg` - Productos premium
6. `warehouse.jpg` - Almacén
7. `testimonial-1.jpg` - Foto del cliente

## 🔧 Personalización

### Cambiar Colores
Edita las variables CSS en `css/styles.css`:
```css
:root {
    --primary-yellow: #FFC107;
    --black: #000000;
    --white: #ffffff;
}
```

### Agregar Más Testimonios
Duplica el bloque `.testimonial` en `index.html` y actualiza el JavaScript.

## 📦 Deployment

### GitHub Pages
```bash
git add .
git commit -m "Initial commit"
git push origin main
```
Luego activa GitHub Pages en Settings → Pages

### Netlify
1. Arrastra la carpeta del proyecto a netlify.com
2. Listo, tendrás tu URL en segundos

### Vercel
```bash
npm i -g vercel
vercel
```

## 📞 Contacto

Para más información sobre Pallets Premium:
- **WhatsApp Edwin:** [+52 1 664 319 1946](https://wa.me/+5216643191946)
- **Email:** info@palletspremium.com

## 📄 Licencia

© 2024 Pallets Premium. Todos los derechos reservados.

---

Desarrollado por **IAGGDEV** con 20+ años de experiencia en desarrollo web.

