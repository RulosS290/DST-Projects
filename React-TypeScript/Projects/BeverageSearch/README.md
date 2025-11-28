# 🍹 Beverage Search App

🖥️ **Live Demo:** [Beverage Search](https://beveragesearch-dst.netlify.app/)

---

## 📘 Overview

**Beverage Search** is a web application built with **React** and **TypeScript** that allows users to search for drinks and cocktails using the public API *TheCocktailDB*.
It also includes an optional **AI-powered feature** that generates personalized cocktail recipes and provides historical or contextual information about each drink.

This project was created to practice:

* Strongly typed React development with TypeScript
* Global state management using Zustand
* API response validation with Zod
* API consumption with Axios
* AI integration through OpenRouter
* Clean architecture with reusable React components
* Styling using TailwindCSS

---

## 🎯 Main Objectives

* Allow users to search for beverages by name.
* Display detailed information for each drink (ingredients, instructions, image).
* Validate all API responses using Zod.
* Manage global state efficiently using Zustand.
* Provide an optional AI feature to generate custom bartender-style recipes.
* Apply best practices for building React + TypeScript projects.
* Practice utility-based styling with TailwindCSS.

---

## 🧱 Features

* 🔍 **Drink search** by name.
* 🍸 **Detailed view** of each cocktail.
* ✔️ **Zod validation** for all API responses.
* 🧠 **Zustand global state**, no prop drilling.
* ⚠️ **Clear and friendly error handling**.
* 🎨 **TailwindCSS styling**, fast and utility-based.
* 🤖 **Optional AI Mode**:

  * Generates custom cocktail recipes.
  * Provides history or interesting facts.
  * Responds in the style of an experienced bartender.

---

## 🤖 AI Usage (Optional Feature)

The project includes an optional **AI module** powered by **OpenRouter**, which processes user prompts and generates customized cocktail recipes.

This feature allows the app to:

* Create cocktails based on user instructions.
* Add historical or fun facts about the drink.
* Respond using a professional bartender persona.

The app works perfectly **without AI**.

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
            system: 'You are a bartender with several years of experience. After giving the recipe, add a bit of history about the cocktail.',
            temperature: 0
        })

        return result.textStream
    }
}
```

### 🔑 Environment Variable Required

To enable AI functionality, create a `.env` file:

```
VITE_OPENROUTER_KEY=your_api_key_here
```

If the API key is missing, the AI module will be disabled automatically.

---

## 🛠️ Technologies Used

* **React 19**
* **TypeScript**
* **Vite**
* **Axios**
* **Zustand**
* **Zod**
* **TailwindCSS**
* **OpenRouter (optional AI)**

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/RulosS290/DST-Projects.git
cd DST-Projects/React-TypeScript/Projects/BeverageSearch
npm install
npm run dev
```

The application will run at:

👉 **[http://localhost:5173](http://localhost:5173)**

---

## 📂 Project Structure

```
src/
 ├── components/       # Reusable UI components (list, card, details, etc.)
 ├── stores/           # Global state using Zustand
 ├── types/            # TypeScript types
 ├── utils/            # Zod validators
 ├── Layout/           # Layout components
 ├── Views/            # Screens / pages
 ├── services/         # External API & AI (OpenRouter) services
 └── App.tsx           # Root component
```

---

## 🔗 API Source

Drink data provided by:

**TheCocktailDB API**
[https://www.thecocktaildb.com/api.php](https://www.thecocktaildb.com/api.php)

### 🔗 AI Provider

AI recipe generation is powered by:

**OpenRouter**
[https://openrouter.ai/](https://openrouter.ai/)

---

## 👨‍💻 Author

**Daniel Torres**
[GitHub](https://github.com/RulosS290)
