# 🍹 Beverage Search App

🖥️ **Live Demo:** [Beverage Search](https://beveragesearch-dst.netlify.app/)

---

## 📘 Overview

**Beverage Search** es una aplicación web construida con **React** y **TypeScript** que permite a los usuarios buscar bebidas y cócteles utilizando la API pública de *TheCocktailDB*.
Además, cuenta con una funcionalidad opcional basada en **IA generativa** para crear recetas personalizadas y ofrecer contexto histórico de los cócteles.

Este proyecto fue desarrollado para practicar:

* React fuertemente tipado con TypeScript
* Manejo global de estado usando Zustand
* Validación de respuestas API con Zod
* Consumo de APIs con Axios
* Integración de IA mediante OpenRouter
* Arquitectura limpia con componentes reutilizables

---

## 🎯 Main Objectives

* Permitir la búsqueda de bebidas por nombre.
* Mostrar la información completa de cada bebida (ingredientes, instrucciones, imagen).
* Validar todas las respuestas del API con Zod.
* Centralizar el estado global de forma simple con Zustand.
* Añadir una función opcional de IA para generar recetas personalizadas tipo bartender.
* Practicar buenas prácticas de organización en proyectos React + TS.

---

## 🧱 Features

* 🔍 **Búsqueda de bebidas** por nombre.
* 🍸 **Vista detallada** de cada cóctel.
* ✔️ **Validación Zod** de todas las respuestas del API.
* 🧠 **Zustand global state**, sin prop drilling.
* ⚠️ **Manejo de errores claro y amigable**.
* 🎨 **CSS puro** para una UI ligera y rápida.
* 🤖 **Modo IA opcional**:

  * Genera recetas personalizadas con descripciones.
  * Ofrece historia del cóctel.
  * Responde como un bartender profesional.

---

## 🤖 AI Usage (Optional Feature)

Este proyecto incluye un módulo opcional basado en **IA generativa**, que utiliza OpenRouter para procesar prompts y generar recetas personalizadas.

La funcionalidad permite:

* Crear cócteles a partir de instrucciones del usuario.
* Incluir historia o curiosidades del cóctel.
* Seguir un estilo de bartender profesional y experimentado.

La aplicación funciona perfectamente **sin IA**.
La IA solo se activa si la API key está configurada.

### 🔧 Implementation Example

```ts
import { createOpenRouter } from '@openrouter/ai-sdk-provider'
import { streamText } from 'ai'

const openRouter = createOpenRouter({
    apiKey: import.meta.env.VITE_OPENROUTER_KEY
})

export default {
    async generateRecipe(prompt: string){
        const result = streamText({
            model: openRouter('meta-llama/llama-3.3-70b-instruct:free'),
            prompt,
            system: 'Eres un bartender que tiene varios años de experiencia, además de proporcionar algo de historia del coctel después de servirlo',
            temperature: 0
        })

        return result.textStream
    }
}
```

### 🔑 Environment Variable Required

Para habilitar la IA, crea un archivo `.env` con:

```
VITE_OPENROUTER_KEY=your_api_key_here
```

Si la API key no está presente, la app deshabilita automáticamente la generación con IA.

---

## 🛠️ Technologies Used

* **React 19**
* **TypeScript**
* **Vite**
* **Axios**
* **Zustand**
* **Zod**
* **Pure CSS**
* **OpenRouter (IA opcional)**

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/RulosS290/DST-Projects.git
cd DST-Projects/React-TypeScript/Projects/BeverageSearch
npm install
npm run dev
```

La aplicación correrá en:

👉 **[http://localhost:5173](http://localhost:5173)**

---

## 📂 Project Structure

```
src/
 ├── components/       # Componentes reutilizables (lista, card, detalle, etc.)
 ├── store/            # Global state con Zustand
 ├── types/            # Tipados TS
 ├── schemas/          # Validadores Zod
 ├── data/             # Datos estáticos o listas
 ├── services/         # Comunicación con API externas y AI (OpenRouter)
 └── App.tsx           # Root component
```

---

## 🔗 API Source

Datos de bebidas obtenidos desde:

**TheCocktailDB API**
[https://www.thecocktaildb.com/api.php](https://www.thecocktaildb.com/api.php)

### 🔗 AI Provider

La generación de recetas con IA utiliza:

**OpenRouter**
[https://openrouter.ai/](https://openrouter.ai/)

---

## 👨‍💻 Author

**Daniel Torres**
[GitHub](https://github.com/RulosS290)
