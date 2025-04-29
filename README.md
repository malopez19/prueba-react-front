# 🛒 Gestión de Productos – Prueba Técnica React

¡Hola! 👋🏼  
Este proyecto es una pequeña aplicación hecha con **React** donde se pueden crear, visualizar, filtrar y eliminar productos. La idea fue enfocarse en una buena estructura, experiencia de usuario, accesibilidad y mantener el código limpio y fácil de entender.

---

## 🚀 Funcionalidades principales

✅ Agregar productos con nombre, descripción y cantidad  
✅ Visualizarlos en formato de tarjeta  
✅ Eliminar productos individuales  
✅ Filtrar por nombre  
✅ Ordenar por cantidad, código, fecha de creación o nombre  
✅ Datos persistentes con `localStorage`  
✅ Notificaciones al agregar o eliminar  
✅ Accesibilidad básica (etiquetas ARIA, navegación con teclado, mensajes claros)

---

## 🛠️ Tecnologías utilizadas

| Herramienta | ¿Por qué la elegí? |
|-------------|--------------------|
| **React.js** + **Vite** | Vite es mucho más rápido que CRA, y React es el estándar hoy en día para interfaces modernas. |
| **TailwindCSS** | Me ayudó a trabajar el diseño de forma rápida y consistente, sin tener que escribir CSS personalizado para cada cosa. |
| **Zustand** | Una solución liviana para manejar estado global sin la complejidad de Redux. Fácil de implementar y de leer. |
| **react-hot-toast** | Ideal para mostrar notificaciones simples que mejoran mucho la experiencia de usuario. |

---

## ⚙️ Cómo manejé el estado

Utilicé **Zustand** para manejar los productos globalmente, incluyendo la lógica para crear y eliminar.  
Agregué también `persist` para guardar los productos en `localStorage` de forma automática, así que aunque cierres el navegador, los datos quedan guardados.

El objetivo fue evitar herramientas pesadas y mantenerlo **simple, limpio y funcional**.

---

## 🎨 Estilos y diseño

Trabajé toda la interfaz con **TailwindCSS**, lo cual me permitió:

- Usar clases utilitarias claras y concisas.
- Asegurar diseño responsivo sin esfuerzo extra.
- Mantener consistencia visual sin tener que crear muchos archivos de estilo.

---

## 👨‍🦽 Accesibilidad

Intenté aplicar buenas prácticas básicas:

- Uso de `aria-label` y `aria-invalid` en los formularios.
- Etiquetas `label` asociadas correctamente a inputs (`htmlFor` + `id`).
- Uso de `role="alert"` para mensajes de error.
- Estilos de `focus-visible` para que el usuario que navega con teclado sepa siempre dónde está.

---

## 🧩 Organización del proyecto

El proyecto está dividido de forma modular:

## ▶️ Instalación y ejecución

1. Cloná el repositorio:

```bash
git clone https://github.com/tu-usuario/gestion-productos-react.git
cd gestion-productos-react

2. instala dependencias:
```bash
npm install

3. Inicia el proyecto en modo desarrollo::

```bash
npm run dev

3. Abre el navegador:

```bash
http://localhost:5173
# prueba-react-front
