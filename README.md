# 🌌 Rick and Morty Explorer

Rick and Morty Explorer is a web application developed with React and Vite. It provides a responsive interface with different demonstration pages, including a Bootstrap grid layout, login and account recovery forms, React props examples, and an interactive character explorer based on the Rick and Morty universe.

The project follows a modular architecture, organizing components by features to make the application easier to maintain and extend.

## 🚀 Features

* **Modular Architecture:** Components are organized into separate folders according to their functionality.
* **Client-Side Routing:** React Router allows navigation between the different sections without reloading the page.
* **Responsive Design:** The application adapts to different screen sizes and devices.
* **Bootstrap Integration:** Bootstrap is used for responsive layouts and interface components.
* **Login Page:** Includes a demonstration login form.
* **Account Recovery:** Includes a demonstration account recovery form.
* **React Props:** Shows examples of how components receive and use properties.
* **Rick and Morty Explorer:** Allows users to explore characters and navigate through paginated results using the Rick and Morty API.
* **Progressive Web App (PWA):** Includes PWA configuration through Vite.

## 🛠️ Tech Stack

* **Frontend:** React, React Router, Bootstrap, CSS.
* **Build Tool:** Vite.
* **HTTP Requests:** Axios.
* **API:** Rick and Morty API.
* **Code Quality:** Oxlint.
* **PWA:** vite-plugin-pwa.

## 📦 Installation

To get started with the project, follow these steps:

1. Clone or download the repository.
2. Open a terminal inside the project folder (`t1_react`).
3. Install the dependencies:

```bash
npm install
```

## 💻 Usage

To run the application, follow these steps:

1. Start the development server:

```bash
npm run dev
```

2. Open the local URL displayed in the terminal.
3. Navigate through the different sections of the application.

To generate the production build, run:

```bash
npm run build
```

To preview the production version, run:

```bash
npm run preview
```

## 📂 Project Structure

```text
t1_react/
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── features/
│   │   ├── auth/
│   │   │   └── components/
│   │   │       ├── Login.jsx
│   │   │       └── Recover.jsx
│   │   │
│   │   └── landing/
│   │       └── components/
│   │           ├── Header.jsx
│   │           ├── Main.jsx
│   │           ├── Footer.jsx
│   │           ├── Props.jsx
│   │           └── Rickandmorty.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## 🌐 Application Routes

| Route | Description |
|---|---|
| `/` | Main page with Bootstrap grid examples. |
| `/Login` | Demonstration login form. |
| `/Recover` | Demonstration account recovery form. |
| `/Props` | React components and props examples. |
| `/randm` | Rick and Morty character explorer. |

**Note:** Login and account recovery are demonstration forms. Authentication and real account recovery services are not configured.

## 🔗 API

The character explorer uses the public [Rick and Morty API](https://rickandmortyapi.com/) to retrieve character information.

An internet connection is required to load the character data.

## 📸 Screenshots

Screenshots of the application can be added here to show its main pages and features.

## 📝 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server. |
| `npm run build` | Generates the production build. |
| `npm run preview` | Previews the production build. |
| `npm run lint` | Runs Oxlint to check the code. |

## 💖 Acknowledgments

* [React](https://react.dev/)
* [Vite](https://vite.dev/)
* [Bootstrap](https://getbootstrap.com/)
* [Rick and Morty API](https://rickandmortyapi.com/)