# Utilise une image officielle Node.js
FROM node:18

# Définir le dossier de travail dans le conteneur
WORKDIR /usr/src/app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install --production

# Copier le reste des fichiers de l’application
COPY . .

# Exposer le port (doit correspondre au docker-compose.yml)
EXPOSE 3000

# Lancer l’application
CMD ["npm", "start"]
