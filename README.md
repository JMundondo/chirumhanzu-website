# Visit Chirumhanzu - Zimbabwe Tourism Website

A modern, responsive tourism website showcasing the cultural heritage, natural wonders, and authentic experiences of Chirumhanzu, Zimbabwe.

## 🌟 Features

- **Cultural Heritage Tours**: Explore Holy Cross Mission, Driefontein Wetlands, and more
- **Interactive Booking System**: Integrated Formspree booking with calendar and experience details
- **Responsive Design**: Optimized for all devices and screen sizes
- **SEO Optimized**: Proper meta tags, structured data, and performance optimization
- **Modern UI/UX**: Built with React, TypeScript, and Tailwind CSS

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd chirumanzu
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Routing**: React Router DOM
- **Forms**: Formspree integration
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── Hero.tsx        # Hero section
│   ├── BookingModal.tsx # Booking system
│   └── ...
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── About.tsx       # About page
│   ├── PlacesOfInterest.tsx # Places of interest
│   └── ...
└── main.tsx           # App entry point
```

## 🎯 Key Pages

- **Home**: Hero section, experiences, testimonials, culture
- **About**: Chirumhanzu history and heritage
- **Places of Interest**: 11 featured destinations
- **Virtual Tours & Museum**: Coming soon features
- **Shop**: Local products and souvenirs
- **Events**: Cultural events and activities
- **Contact**: Booking and inquiry forms

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_FORMSPREE_BOOKING_ID=your_booking_formspree_id
VITE_FORMSPREE_CONTACT_ID=your_contact_formspree_id
```

### Formspree Setup

1. Create forms at [Formspree.io](https://formspree.io)
2. Replace the form IDs in the BookingModal and ContactUs components
3. Test the forms to ensure they're working correctly

## 📱 Responsive Design

The website is fully responsive and optimized for:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure custom domain if needed

### Other Platforms

The project can be deployed to any static hosting platform:

- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Any VPS with nginx

## 📈 SEO Optimization

- Proper meta tags and descriptions
- Open Graph and Twitter Card support
- Semantic HTML structure
- Fast loading times
- Mobile-friendly design
- Structured data ready

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions about Chirumhanzu tourism:

- Email: visitchirumhanzu@gmail.com
- Phone: +263 718 594 447

## 🌍 About Chirumhanzu

Chirumhanzu is a district in Zimbabwe's Midlands Province, rich in cultural heritage, natural beauty, and authentic experiences. From the historic Holy Cross Mission to the pristine Driefontein Wetlands, discover the heart of Zimbabwe's cultural landscape.

---

Built with ❤️ for Chirumhanzu tourism
