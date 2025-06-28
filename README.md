# G4-FREE-PROJECTS-BeninTaleMap 🗺️
  
**An Interactive Cultural Heritage Map of Benin**

BeninTaleMap is an innovative web application that provides an interactive 3D map experience showcasing the rich cultural heritage, myths, and historical information of Benin's major cities. This project was developed as part of the EPITECH curriculum by a team of students passionate about preserving and sharing Benin's cultural legacy.

## 🌟 Features

### Interactive 3D Map
- **3D Terrain Visualization**: Explore Benin with an immersive 3D map using MapTiler SDK
- **Interactive Markers**: Click on city markers to discover detailed information
- **Audio Narratives**: Listen to audio stories about each city's cultural heritage
- **Responsive Design**: Optimized for desktop and mobile devices

### Cultural Content
- **Historical Information**: Detailed presentations of each city's origins and history
- **Myths and Legends**: Traditional stories and cultural myths for each location
- **Religious Heritage**: Information about local religious practices and beliefs
- **Historical Figures**: Profiles of key historical personalities
- **Local Anecdotes**: Interesting facts and cultural anecdotes

### User Experience
- **Intuitive Navigation**: Easy-to-use interface with search functionality
- **Sidebar Information**: Detailed city information in an organized sidebar
- **Search Bar**: Quick search through cities and cultural content
- **Responsive Layout**: Seamless experience across different screen sizes

## 🏗️ Architecture

### Frontend (React.js)
- **React 19.1.0**: Modern React with latest features
- **MapTiler SDK**: 3D map visualization and interaction
- **React Router**: Client-side routing
- **Tailwind CSS**: Modern styling framework
- **React Icons**: Beautiful icon library

### Backend (Node.js/Express)
- **Express.js**: RESTful API server
- **MySQL Database**: Cultural data storage
- **CORS Support**: Cross-origin resource sharing
- **JSON Data Processing**: Structured cultural information

### Database Schema
- **Cities Table**: Stores city information, myths, religions, and historical data
- **Countries Table**: Reference data for geographical organization
- **JSON Fields**: Flexible storage for complex cultural data structures

## 🚀 Installation

### Prerequisites
- Node.js (v16 or higher)
- MySQL (v8.0 or higher)
- npm or yarn package manager

### Frontend Setup
```bash
# Navigate to the frontend directory
cd benintalemap

# Install dependencies
npm install

# Start the development server
npm start
```

The frontend will be available at `http://localhost:3000`

### Backend Setup
```bash
# Navigate to the server directory
cd server

# Install dependencies
npm install

# Set up your MySQL database
mysql -u your_username -p < data.sql

# Configure database connection in src/config/db.js
# Update the connection details with your MySQL credentials

# Start the server
node server.js
```

The backend API will be available at `http://localhost:8000`

### Environment Configuration
Create a `.env` file in the server directory:
```env
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=BeninTaleMap
PORT=8000
```

## 📖 Usage

1. **Home Page**: Learn about the project and meet the development team
2. **Interactive Map**: Click "Accéder à la carte" to explore the 3D map
3. **City Exploration**: Click on red markers to discover city information
4. **Audio Stories**: Listen to narrated cultural content for each city
5. **Search**: Use the search bar to quickly find specific cities
6. **Sidebar**: Access detailed information through the collapsible sidebar

## 🗺️ Available Cities

The application features 14 major Beninese cities:
- **Abomey** - Royal capital with rich historical heritage
- **Allada** - Ancient kingdom center
- **Bohicon** - Commercial hub
- **Cotonou** - Economic capital
- **Dassa-Zoume** - Cultural crossroads
- **Ketou** - Traditional kingdom
- **Natitingou** - Northern cultural center
- **Nikki** - Historical kingdom
- **Ouidah** - Coastal heritage site
- **Parakou** - Northern economic center
- **Porto-Novo** - Administrative capital
- **Savalou** - Cultural heritage site
- **Tchaourou** - Historical crossroads

## 👥 Team

This project was developed by a dedicated team of EPITECH students:

| Name | Role | Contribution |
|------|------|--------------|
| **Jessica MOUSSOUGAN** | Frontend Developer | React components, UI/UX implementation |
| **Joseph BEHANZIN** | Data Manager | Database design, data curation |
| **Nuri ABLOU** | UI/UX Designer | Visual design, user experience |
| **Ramdon OGOUYOMI** | Data Manager | Cultural data collection, validation |
| **Romaric DEGA** | API Developer | Backend development, API endpoints |
| **Tobi AGONGBONON** | Project Architecture | Audio content, storytelling features |

## 🛠️ Technical Stack

### Frontend Technologies
- **React 19.1.0** - UI framework
- **MapTiler SDK 3.3.0** - 3D mapping
- **React Router DOM 7.6.2** - Navigation
- **Tailwind CSS 3.4.17** - Styling
- **React Icons 5.5.0** - Iconography

### Backend Technologies
- **Node.js** - Runtime environment
- **Express.js 5.1.0** - Web framework
- **MySQL2 3.14.1** - Database driver
- **CORS 2.8.5** - Cross-origin support

### Development Tools
- **Create React App** - Frontend scaffolding
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS compatibility

## 📁 Project Structure

```
G4-FREE-PROJECTS-BeninTaleMap/
├── benintalemap/                 # Frontend React application
│   ├── public/                   # Static assets
│   │   ├── audio/               # City audio narratives
│   │   └── index.html           # Main HTML file
│   ├── src/                     # Source code
│   │   ├── components/          # React components
│   │   │   ├── Beninmap.js     # 3D map component
│   │   │   ├── Home.js         # Landing page
│   │   │   ├── Map_page.js     # Map page wrapper
│   │   │   ├── Sidebar.js      # Information sidebar
│   │   │   └── Searchbar.js    # Search functionality
│   │   └── App.js              # Main application
│   └── package.json            # Frontend dependencies
├── server/                      # Backend Node.js application
│   ├── src/config/             # Database configuration
│   ├── data.sql               # Database schema
│   ├── server.js              # Express server
│   └── package.json           # Backend dependencies
└── README.md                   # Project documentation
```

## 🔧 API Endpoints

### GET `/villes`
Returns all cities with their cultural information

### GET `/villes/:id`
Returns detailed information for a specific city

### GET `/debug/villes/:id`
Debug endpoint for raw database data

## 🎯 Future Enhancements

- **Multi-language Support**: French, English, and local languages
- **Mobile App**: Native mobile application
- **AR Integration**: Augmented reality features
- **Community Contributions**: User-generated content
- **Offline Mode**: Cached content for offline access
- **Advanced Search**: Filter by cultural themes and historical periods

## 📄 License

This project is developed as part of the EPITECH curriculum. All rights reserved.

## 🤝 Contributing

This is an academic project developed by EPITECH students. For questions or collaboration opportunities, please contact the development team.

## 📞 Contact

For more information about this project or to learn about Benin's cultural heritage, please reach out to the development team through EPITECH.

---

**Made with ❤️ by EPITECH Students for the preservation of Benin's cultural heritage**
