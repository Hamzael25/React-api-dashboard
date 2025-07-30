# 🔴 Pokédex React

**Pokédex React** est une application web interactive pour explorer les Pokémon :
- ⚛️ Développé avec **React 19**
- ⚡ Basé sur **Vite 7** pour un environnement de développement rapide avec **HMR**

L’objectif ? Lister tous les Pokémon, rechercher par nom et afficher des **fiches détaillées** avec leurs caractéristiques (taille, poids, types, capacités, sprite officiel, etc.).

---

## ⚡ Aperçu rapide

| Fonctionnalité              | Détail                                                                 |
|------------------------------|-------------------------------------------------------------------------|
| 📜 Liste complète            | Page **Pokedex** listant tous les Pokémon via l’API publique `pokedex.mimo.dev` |
| 🔍 Recherche en temps réel   | Page **Search** avec filtre dynamique sur le nom des Pokémon            |
| 🖼️ Cartes cliquables         | Composant `PokemonCard` cliquable pour accéder à la page de détail       |
| ℹ️ Page détail Pokémon       | Route `/pokemon?name=...` affichant sprite, types, poids, taille, etc.   |
| ⚛️ Hooks React               | `useState`, `useEffect`, `useLocation` pour gérer données et navigation  |
| 🎨 CSS simple                | Design rétro avec police **Press Start 2P**, styles customisés           |

---

## 🚀 Lancer le projet en local

### 📦 Prérequis

[Node.js](https://nodejs.org/) ≥ 16.x *(inclut npm ≥ 8.x)*

### 🧪 Étapes

#### 1. Cloner le repo
```bash
git clone https://github.com/Hamzael25/Pokedex_React.git
cd Pokedex_React
```

#### 2. Installer les dépendances et lancer le serveur de dev
```bash
npm install
npm run dev
