# Annapurna - Healthy Recipe Variations 🍛

> *Named after the Hindu goddess of food and nourishment*

Annapurna is a comprehensive application that helps users discover healthier variations of their favorite Indian recipes while respecting culinary traditions and promoting nutritional awareness. The app addresses common nutritional deficiencies in the Indian population through intelligent ingredient substitutions and recipe modifications.

## 🌟 Features

### Core Functionality
- **Recipe Upload & Analysis**: Upload your own recipes or select from our curated collection
- **Smart Health Variants**: Generate multiple healthy variations focusing on:
  - High protein content
  - Fiber-rich alternatives
  - Iron-boosting modifications
  - Calcium enhancement
  - Vitamin D fortification
  - Low-sodium options
- **Before & After Comparison**: Clear nutritional comparisons showing health benefits
- **AI-Powered Suggestions**: Intelligent ingredient substitutions using LLM integration

### Cultural Sensitivity
- **Food Heritage Education**: Learn about the evolution of Indian cuisine
- **Respectful Messaging**: Positioning changes as evolution, not replacement
- **Regional Adaptations**: Ingredient suggestions based on local availability
- **Seasonal Considerations**: Recommendations that account for seasonal produce

### Technical Features
- **Modern React Frontend**: Built with React 19, TypeScript, and Vite
- **Robust Backend**: Express.js with Prisma ORM and Redis caching
- **AI Integration**: Google Generative AI and Groq SDK for intelligent suggestions
- **Google OAuth**: Secure user authentication
- **Responsive Design**: Mobile-first approach with Framer Motion animations

## 🏗️ Architecture

```
annapurna/
├── frontend/          # React TypeScript frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── store/     # Zustand state management
│   │   └── utils/
│   └── package.json
├── backend/           # Express.js API server
│   ├── src/
│   │   ├── api/       # Vercel serverless functions
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── db/
│   │   │   └── prisma/
│   │   │       └── schema.prisma
│   │   ├── services/
│   │   └── index.ts   # Main server entry point
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB database
- Redis instance
- Google Cloud Console project (for OAuth and AI services)

### Environment Variables

Create `.env` files in both frontend and backend directories:

**Backend (.env)**
```env
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/annapurna"
REDIS_URL="redis://localhost:6379"
JWT_SECRET="your-jwt-secret"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GEMINI_API_KEY="your-gemini-api-key"
GROQ_API_KEY="your-groq-api-key"
PORT=8000
```

**Frontend (src/config)**
```
API_URL="http://localhost:8000",
GOOGLE_CLIENT_ID="your-google-client-id"
```

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/annapurna.git
cd annapurna
```

2. **Install Backend Dependencies**
```bash
cd backend
npm install
```

3. **Setup Database**
```bash
npx prisma db push --schema=./src/db/prisma/schema.prisma
npx prisma generate --schema=./src/db/prisma/schema.prisma
```

4. **Install Frontend Dependencies**
```bash
cd ../frontend
npm install
```

### Running the Application

#### Local Development

1. **Start Backend Server (Local)**
```bash
cd backend
npx tsc
node dist/index.js
```

**Note**: For local development, uncomment the following lines in `src/index.ts`:
```typescript
app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`)
})
```

2. **Start Frontend Development Server**
```bash
cd frontend
npm run dev
```

The application will be available at `http://localhost:5173`

#### Production Setup

**Frontend**: Deployed on Vercel
**Backend**: Uses serverless functions in the `src/api/` directory for production deployment

The backend is configured with CORS to allow requests from:
- `http://localhost:5173` (local development)
- `https://annapurna-ai.vercel.app` (production)

## 📊 Nutritional Focus Areas

Our health variants target common deficiencies in the Indian population:

### 🥛 **Calcium Deficiency**
- **Prevalence**: 70-80% of Indian population
- **Solutions**: Incorporate sesame seeds, ragi, green leafy vegetables
- **Traditional Swaps**: Replace refined flour with ragi flour in rotis

### 🩸 **Iron Deficiency**
- **Prevalence**: 50-60% (especially women and children)
- **Solutions**: Add jaggery, spinach, methi, dry fruits
- **Traditional Swaps**: Use cast iron cookware, combine with vitamin C sources

### 🥩 **Protein Deficiency**
- **Prevalence**: 80% of Indian population
- **Solutions**: Include lentils, paneer, sprouts, quinoa
- **Traditional Swaps**: Add protein-rich legumes to vegetable dishes

### 🌾 **Fiber Deficiency**
- **Solutions**: Incorporate whole grains, vegetables, fruits
- **Traditional Swaps**: Replace white rice with brown rice or millets

## 🎯 Key Technologies

### Frontend Stack
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast build tool and development server
- **Zustand** - Lightweight state management
- **React Hook Form + Zod** - Form handling and validation
- **Framer Motion** - Smooth animations and transitions
- **React Router DOM** - Client-side routing
- **Lucide React** - Beautiful icons
- **Sass** - Enhanced CSS with variables and nesting

### Backend Stack
- **Express.js** - Web application framework
- **Prisma** - Modern database toolkit
- **Redis** - Caching and session management
- **Google Generative AI** - Recipe analysis and suggestions
- **Groq SDK** - Fast inference for AI models
- **JWT** - Secure authentication
- **TypeScript** - Type-safe backend development

## 🌍 Cultural Approach

### Messaging Philosophy
- **Evolution, Not Revolution**: Emphasize how Indian cuisine has always evolved
- **Historical Context**: Highlight foreign origins of beloved ingredients
- **Respectful Innovation**: Frame changes as continuing culinary tradition

### Educational Content
- **Tomatoes**: From South America (16th century)
- **Potatoes**: From South America (Portuguese traders)
- **Chillies**: From Central America (Portuguese/Spanish traders)
- **Paneer**: From Middle Eastern/Persian influence
- **Soya**: From China and East Asia

## 🔧 Development Scripts

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Backend
```bash
npm run build    # Compile TypeScript
npm run dev      # Start development server (if configured)
npm run start    # Start production server
```

## 🚀 Deployment

### Frontend (Vercel)
```bash
cd frontend
npm run build
# Deploy dist/ folder to Vercel
```

### Backend (Vercel Serverless)
- Backend is deployed as serverless functions on Vercel
- API endpoints are located in `src/api/` directory
- Environment variables are configured in Vercel dashboard

### Alternative Backend Deployment (Railway/Heroku)
For traditional server deployment:
```bash
cd backend
npm run build
# Uncomment app.listen() in src/index.ts
# Deploy with environment variables
```

## 🛠️ Local Development Tips

1. **Backend Configuration**: The backend is set up for both local development and serverless deployment
2. **CORS Settings**: Pre-configured for both local and production URLs
3. **Database Schema**: Located at `src/db/prisma/schema.prisma`
4. **Environment Setup**: Make sure to set the correct `PORT` in your `.env` file for local development

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Inspired by traditional Indian cooking wisdom
- Nutritional data from Indian Council of Medical Research (ICMR)
- Cultural sensitivity guidance from food historians
- AI capabilities powered by Google Gemini and Groq

## 📧 Contact

For questions or support, please reach out to kiranduttta234@gmail.com

---

<!-- /recipe/686b35c1f7a0f9ba3f79ae6a -->

*"Annam Brahma" - Food is divine. Let's make it healthier while honoring our culinary heritage.* 🙏
