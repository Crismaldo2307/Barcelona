# Renta y Turismo BCN

Aplicación web creada con React, Vite y TailwindCSS para analizar el impacto del turismo en el precio de la vivienda en Barcelona entre 2010 y 2025.

## Requisitos previos

- Node.js 18 o superior
- npm 9 o superior

## Instalación

```bash
npm install
```

## Ejecutar en desarrollo

```bash
npm run dev
```

El servidor quedará disponible en `http://localhost:5173`.

## Construir para producción

```bash
npm run build
```

Para previsualizar la build localmente:

```bash
npm run preview
```

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con tu clave de OpenAI para habilitar el chatbot:

```
VITE_OPENAI_API_KEY=tu_clave
o
VITE_OPENAI_MODEL=gpt-4o-mini
```

## Despliegue

### Vercel
1. Crea un nuevo proyecto en [Vercel](https://vercel.com) y conecta el repositorio de GitHub.
2. Configura el comando de build `npm run build` y el directorio de salida `dist`.
3. Añade las variables de entorno definidas en el archivo `.env`.
4. Despliega y comparte la URL generada.

### GitHub Pages
1. Asegúrate de tener instalado `gh-pages` de manera global o como dependencia de desarrollo.
2. Ejecuta `npm run build` y publica la carpeta `dist` en la rama `gh-pages` (puedes usar GitHub Actions o la acción manual de GitHub Pages).
3. En la configuración del repositorio, habilita GitHub Pages apuntando a la rama `gh-pages` y la carpeta `/`.

## Estructura principal

```
├── public
│   └── favicon.svg
├── src
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── components
│   │   ├── AboutProject.jsx
│   │   ├── ChatIA.jsx
│   │   ├── DataAnalysis.jsx
│   │   ├── FormularioContacto.jsx
│   │   ├── Footer.jsx
│   │   └── Hero.jsx
│   └── data
│       └── metrics.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## GitHub

1. Inicializa el repositorio:
   ```bash
   git init
   git add .
   git commit -m "feat: initialize renta turismo app"
   ```
2. Crea el repositorio remoto `renta-turismo-bcn` en GitHub.
3. Conecta el remoto y sube el código:
   ```bash
   git remote add origin git@github.com:<tu-usuario>/renta-turismo-bcn.git
   git branch -M main
   git push -u origin main
   ```

## Licencia

Proyecto educativo. Puedes adaptar y reutilizar el contenido citando la fuente.
