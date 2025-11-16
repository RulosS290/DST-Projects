# 💱 Crypto Price Tracker – React + TypeScript

🖥️ **Live demo:** [Crypto Tracker](https://cryptoapp-dst.netlify.app/)

---

## 📘 Overview

**Crypto Price Tracker** is a web application built with **React** and **TypeScript** that allows users to consult real-time cryptocurrency prices.
This project was developed to practice:

* Typed state management in React
* API data fetching with Axios
* Global state management using Zustand
* Response validation with Zod
* Structuring a clean React application with reusable components

---

## 🎯 Main Objectives

* Provide a simple UI to select a currency and a cryptocurrency.
* Fetch and display updated pricing information.
* Use **Zustand** to handle global state cleanly.
* Use **Zod** to validate and type API responses.
* Strengthen TypeScript usage throughout the project.

---

## 🧱 Features

* Select a **fiat currency** (USD, EUR, MXN, etc.).
* Choose from the **top 20 cryptocurrencies** by market cap.
* Fetch real-time price, change percentage, and market data.
* Fully typed API responses thanks to Zod schemas.
* User-friendly error handling and validation messages.
* Clean, fast UI styled with **pure CSS**.

---

## 🛠️ Technologies Used

* **React 19**
* **TypeScript**
* **Vite**
* **Zustand** – State management
* **Axios** – API consumption
* **Zod** – Schema validation
* **CSS (pure CSS)** – Styling

---

## 🚀 How to Run Locally

Clone the repository and install dependencies:

```bash
git clone https://github.com/RulosS290/DST-Projects.git
cd DST-Projects/React-TypeScript/Projects/Cripto
npm install
npm run dev
```

The app will run at:

👉 **[http://localhost:5173](http://localhost:5173)**

---

## 📂 Project Structure

```bash
src/
 ├── components/        # Reusable UI components
 ├── data/              # Currency list and constants
 ├── store/             # Zustand global state
 ├── types/             # TypeScript type definitions
 ├── schemas/           # Zod validators for API responses
 ├── styles.css         # Global pure CSS stylesheet
 └── App.tsx            # Main application file
```

---

## 🔗 API Source

Live cryptocurrency data is fetched from:

**CryptoCompare API** → [https://min-api.cryptocompare.com](https://min-api.cryptocompare.com)

---

## 👨‍💻 Author

**Daniel Torres**
[GitHub](https://github.com/RulosS290)
