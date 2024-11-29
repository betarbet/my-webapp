# My Web App

## Beskrivning
Denna webbapplikation är en enkel bloggplattform där användare kan läsa inlägg som lagras i en MySQL-databas. Applikationen består av tre komponenter:
1. **Frontend**: Byggd med Nginx och visar en lista över blogginlägg i en stilren design.
2. **Backend**: En Node.js-applikation som hanterar API-förfrågningar och ansluter till databasen.
3. **Databas**: En MySQL-databas som lagrar blogginlägg.

## Funktionalitet
- Backend erbjuder ett API för att hämta data från databasen.
- Frontend visar de hämtade inläggen i en responsiv design.
- MySQL-databasen lagrar data i en tabell som heter `posts`.

---

## Teknisk lösning
- **Backend**: Node.js med Express och MySQL2.
- **Frontend**: Nginx som webbserver.
- **Databas**: MySQL.
- **Docker**: Alla tre komponenter körs i separata containrar.
- **Docker Compose**: Används för att konfigurera och starta containrarna tillsammans.

---

## Installation och körning

### Förutsättningar
- [Docker](https://www.docker.com/products/docker-desktop) och [Docker Compose](https://docs.docker.com/compose/install/) installerat.

### Steg-för-steg-guide
1. **Kloning av projektet**:
   ```bash
   git clone https://github.com/<ditt-användarnamn>/my-webapp.git
   cd my-webapp
