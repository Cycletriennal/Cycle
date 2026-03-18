# 📱 Cycle Triennal — Guide d'installation PWA

## Structure du projet

```
cycle-triennal-pwa/
├── index.html          ← L'application complète
├── manifest.json       ← Configuration PWA (nom, couleurs, icônes)
├── service-worker.js   ← Cache hors-ligne
├── icons/              ← Icônes pour iPhone/Android
│   ├── icon-72.png
│   ├── icon-96.png
│   ├── icon-128.png
│   ├── icon-144.png
│   ├── icon-152.png
│   ├── icon-180.png     ← Icône principale iPhone
│   ├── icon-192.png
│   └── icon-512.png
└── README.md           ← Ce guide
```

---

## 🚀 Déploiement sur GitHub Pages (gratuit, permanent)

### Étape 1 — Créer un compte GitHub
Si tu n'en as pas : https://github.com/signup (gratuit)

### Étape 2 — Créer un nouveau dépôt
1. Va sur https://github.com/new
2. Nom du dépôt : `cycle-triennal`
3. Coche **Public** (obligatoire pour GitHub Pages gratuit)
4. Clique **Create repository**

### Étape 3 — Uploader les fichiers
Sur la page de ton dépôt vide :
1. Clique **uploading an existing file**
2. Glisse-dépose **tous les fichiers et dossiers** du dossier `cycle-triennal-pwa/`
   - `index.html`
   - `manifest.json`
   - `service-worker.js`
   - Le dossier `icons/` avec ses 8 fichiers PNG
3. En bas, clique **Commit changes**

### Étape 4 — Activer GitHub Pages
1. Dans ton dépôt, clique **Settings** (onglet en haut)
2. Menu gauche → **Pages**
3. Source : **Deploy from a branch**
4. Branch : `main` / `(root)`
5. Clique **Save**

⏳ Attends 1-2 minutes, puis ton app est accessible à :
```
https://TON_PSEUDO_GITHUB.github.io/cycle-triennal/
```

---

## 📲 Installer l'app sur ton iPhone

1. Ouvre **Safari** sur ton iPhone (pas Chrome, pas Firefox — Safari uniquement pour l'installation)
2. Va sur l'URL de ton app : `https://TON_PSEUDO.github.io/cycle-triennal/`
3. Appuie sur le bouton **Partager** (carré avec flèche vers le haut) en bas de l'écran
4. Fais défiler et appuie sur **"Sur l'écran d'accueil"**
5. Nomme l'app **Cycle Triennal** → **Ajouter**

✅ L'app apparaît maintenant sur ton écran d'accueil comme une vraie application, en plein écran, sans barre Safari.

---

## 🎨 Personnaliser les icônes

Les icônes fournies sont des placeholders (étoile de David dorée sur fond bordeaux).
Pour les remplacer par tes propres icônes :

1. Crée une image carrée de **1024×1024 px** au format PNG
2. Génère toutes les tailles sur : https://www.pwabuilder.com/imageGenerator
3. Remplace les fichiers dans le dossier `icons/` sur GitHub
4. L'app se mettra à jour automatiquement sur ton téléphone

---

## 🔄 Mettre à jour l'app

Pour modifier l'application (corriger un bug, ajouter une rubrique...) :
1. Va sur ton dépôt GitHub
2. Clique sur `index.html` → icône crayon ✏️
3. Fais tes modifications → **Commit changes**
4. Sur ton iPhone, ouvre l'app et tire vers le bas pour rafraîchir

Le cache se met à jour automatiquement en arrière-plan.

---

## 🌐 Alternative : Netlify (encore plus simple)

Si GitHub te semble complexe, Netlify permet un déploiement par simple glisser-déposer :

1. Va sur https://app.netlify.com (crée un compte gratuit)
2. Sur le tableau de bord, **glisse le dossier `cycle-triennal-pwa/`** directement dans la page
3. Netlify génère instantanément une URL du type : `https://xxxxx.netlify.app`
4. Tu peux renommer le site dans les paramètres pour avoir une URL plus propre

---

## ❓ Questions fréquentes

**L'app fonctionne-t-elle hors-ligne ?**
L'interface se charge hors-ligne grâce au service worker, mais les textes (Sefaria, traductions) nécessitent une connexion Internet.

**Peut-on l'installer sur Android aussi ?**
Oui ! Sur Android avec Chrome : menu ⋮ → "Ajouter à l'écran d'accueil".

**L'URL restera-t-elle active ?**
Oui, GitHub Pages est gratuit à vie pour les dépôts publics.
