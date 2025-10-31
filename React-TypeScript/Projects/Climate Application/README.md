# 🌦️ Climate Application

A web application built with **React + TypeScript + Vite** that allows users to check the **current weather** of any city in the world.
By entering a city name and selecting a country, the app displays real-time data such as the current temperature, general weather condition, and min/max temperatures — all powered by the **OpenWeatherMap API**.

---

🖥️ **Live demo:** [Climate Application](https://climateapplication-dst.netlify.app/)

---

## 🚀 Technologies Used

* ⚛️ **React 19** — Component-based UI library
* 💙 **TypeScript** — Strong typing for safer and scalable code
* ⚡ **Vite** — Next-generation frontend tooling
* 🎨 **CSS Modules** — Scoped, reusable styles per component
* 🧩 **Valibot** — Lightweight runtime validation library
* 🌍 **OpenWeather API** — Real-time weather data source

---

## 📦 Installation & Local Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/RulosS290/DST-Projects.git
   cd DST-Projects/React-TypeScript/Projects/Climate\ Application
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env.local` file**
   (in the project root) and add your OpenWeather API key:

   ```bash
   VITE_API_KEY=your_openweather_api_key
   ```

   👉 You can get a free API key at [OpenWeatherMap](https://openweathermap.org/api).

4. **Run the app in development mode**

   ```bash
   npm run dev
   ```

5. **Build for production**

   ```bash
   npm run build
   ```

---

## 🌐 API Used

This project uses the **Current Weather Data API** from OpenWeatherMap.

### 🔗 Base URL

```bash
https://api.openweathermap.org/data/2.5/weather?q={city},{countryCode}&appid={API_KEY}&units=metric&lang=en
```

### 🧭 Example request

```bash
https://api.openweathermap.org/data/2.5/weather?q=London,GB&appid=abc123def456&units=metric&lang=en
```

#### ⚙️ Parameters

| Parameter | Description                                          | Example        |
| --------- | ---------------------------------------------------- | -------------- |
| `q`       | City name and ISO 3166 country code                  | `London,GB`    |
| `appid`   | Your personal API key                                | `abc123def456` |
| `units`   | Temperature units (`metric`, `imperial`, `standard`) | `metric`       |
| `lang`    | Response language                                    | `en`           |

---

### 🧠 Key Features

✅ Search by city and country
✅ Input validation before fetching data
✅ Error handling for invalid city or API errors
✅ Thematic background image
✅ Clean, responsive design
✅ Real-time weather information
✅ Fully typed with TypeScript

---

## 🧩 Project Structure

```
src/
 ├─ components/       → Main UI components (Form, Weather, Alert, etc.)
 ├─ data/             → Country list (countries.ts)
 ├─ hooks/            → Custom React hooks
 ├─ types/            → TypeScript type definitions
 ├─ utils/            → Utility and API functions
 ├─ App.tsx           → Root component
 ├─ main.tsx          → Entry point
 └─ index.css         → Global styles
```

---

### 💡 Environment Variables

| Variable       | Description         | Example              |
| -------------- | ------------------- | -------------------- |
| `VITE_API_KEY` | OpenWeather API key | `123abc456def789ghi` |

