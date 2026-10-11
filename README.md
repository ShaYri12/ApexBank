# 🏦 ApexBank - Modern Banking Dashboard

A modern, responsive banking dashboard application built with Next.js 14, React, and Tailwind CSS. ApexBank provides a comprehensive financial management interface with real-time analytics, transaction tracking, and investment monitoring.

![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

- **📊 Dashboard Analytics** - Comprehensive financial overview with visual analytics
- **💳 Card Management** - View and manage multiple credit/debit cards
- **💰 Balance Tracking** - Real-time account balance monitoring
- **📈 Investment Portfolio** - Track and manage your investments
- **💱 Exchange Rates** - Live currency exchange rate information
- **🧾 Transaction History** - Detailed transaction table with filtering
- **🎯 Credit Tracking** - Monitor credit usage and limits
- **🔔 Announcements** - Stay updated with new card offerings
- **📱 Responsive Design** - Fully optimized for mobile, tablet, and desktop
- **🎨 Modern UI** - Built with Radix UI components and shadcn/ui

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ApexBank
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🏗️ Project Structure

```
ApexBank/
├── app/
│   ├── components/          # React components
│   │   ├── Analytics.js     # Financial analytics charts
│   │   ├── Balance.js       # Account balance display
│   │   ├── Cards.js         # Card management (desktop)
│   │   ├── CardsSM.js       # Card management (mobile)
│   │   ├── Credit.js        # Credit tracking
│   │   ├── Discover.js      # Discovery section
│   │   ├── ExchangeRates.js # Currency exchange rates
│   │   ├── Header.js        # Main header
│   │   ├── Investments.js   # Investment portfolio
│   │   ├── NewCardsAnnouncement.js
│   │   ├── Profile.js       # User profile
│   │   ├── Sidebar.js       # Navigation sidebar
│   │   ├── SliderCards.js   # Card carousel
│   │   ├── SMHeader.js      # Mobile header
│   │   ├── Table.js         # Transaction table
│   │   └── TransactionSM.js # Mobile transactions
│   ├── globals.css          # Global styles
│   ├── layout.js            # Root layout
│   └── page.js              # Main dashboard page
├── components/
│   └── ui/                  # shadcn/ui components
│       ├── avatar.jsx
│       ├── badge.jsx
│       ├── button.jsx
│       ├── card.jsx
│       ├── dropdown-menu.jsx
│       ├── input.jsx
│       ├── pagination.jsx
│       ├── progress.jsx
│       ├── select.jsx
│       ├── separator.jsx
│       ├── sheet.jsx
│       ├── table.jsx
│       ├── tabs.jsx
│       └── tooltip.jsx
├── lib/
│   └── utils.js             # Utility functions
├── public/
│   └── assets/              # Images and icons
└── package.json
```

## 🛠️ Tech Stack

### Core
- **[Next.js 14.2.3](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://react.dev/)** - UI library
- **[Tailwind CSS 3.4.1](https://tailwindcss.com/)** - Utility-first CSS framework

### UI Components
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible component primitives
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component collection
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[React Icons](https://react-icons.github.io/react-icons/)** - Additional icons

### Utilities
- **[clsx](https://github.com/lukeed/clsx)** - Conditional className management
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind classes
- **[class-variance-authority](https://cva.style/)** - Component variant management
- **[tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)** - Animation utilities

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Styling

The project uses Tailwind CSS for styling with custom configurations. The design system includes:

- Custom color palette
- Responsive breakpoints
- Animation utilities
- Custom component styles via shadcn/ui

## 📱 Responsive Design

ApexBank is fully responsive with dedicated components for different screen sizes:

- **Desktop**: Full sidebar navigation, multi-column layouts
- **Tablet**: Optimized component sizing and spacing
- **Mobile**: Simplified navigation, touch-optimized UI, mobile-specific components (SMHeader, CardsSM, TransactionSM)

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy ApexBank is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

For more details, check the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

### Other Platforms

ApexBank can be deployed to any platform that supports Next.js:
- **Netlify** - Using the Next.js plugin
- **AWS Amplify** - With Next.js SSR support
- **Railway** - Container-based deployment
- **DigitalOcean** - App Platform with Next.js support

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

## 🐛 Issues & Support

For issues, questions, or suggestions, please open an issue in the repository.

---

Built with ❤️ using Next.js and modern web technologies
