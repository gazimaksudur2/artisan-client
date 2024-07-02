# Artisan Haven

### Project Overview
Artisan Haven is a textile art and craft gallery where users can explore a variety of arts and crafts. The platform offers user registration and authentication, allowing users to contribute their own creations to the gallery.

---

### Server Side Project Details
- **Server side git repo:** [Server Side Repository](https://github.com/gazimaksudur2/artisan-server)
- **Live server site URL:** [Artisan_Haven Server](https://artisan-heaven-server.vercel.app/)
---

## 🌟 Features

1. **Art and Craft Gallery:** Users can view a diverse range of textile arts and crafts.
2. **User Authentication:** Users can register with their credentials or sign in using Google or GitHub accounts.
3. **Craft Submission:** Registered users can add new crafts to the gallery.
4. **Craft Management:** Users can edit, update, or delete their own crafts.
5. **Category-Based Display:** Crafts are organized into categories, providing an enhanced browsing experience.

---

## Getting Started

### Prerequisites
- Node.js installed on your machine

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/gazimaksudur2/artisan-client.git
   cd artisan-client

2. Install Dependencies:
   ```bash
   npm install

3. Set Up Firebase Authentication
   Create a .env file in the root directory of the project.
   Add the following environment variables to the .env file, replacing placeholders (your_api_key, your_auth_domain, etc.) with your Firebase project's actual configuration:
   ```bash
   VITE_APIKEY=your_api_key
   VITE_AUTHDOMAIN=your_authdomain
   VITE_PROJECTID=your_projectID
   VITE_STORAGEBUCKET=your_storagebucket
   VITE_MESSAGINGSENDERID=your_messageingsenderID
   VITE_APPID=your_appID
   
4. Running the Project:
   ```bash
   npm run dev

5. open your localhost on your browser:
   ```bash
   http://localhost:5173/
