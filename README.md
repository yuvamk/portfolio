# Modern Portfolio - Setup Instructions

## Prerequisites
- Node.js (v16 or higher)
- npm (comes with Node.js)

## Setup Steps

1. Create a new directory and initialize the project:
```bash
mkdir portfolio
cd portfolio
npm create vite@latest . -- --template react-ts
```

2. Install the required dependencies:
```bash
npm install framer-motion @emailjs/browser lucide-react react-scroll
```

3. Copy all the provided source files into your project:
   - Replace the contents of `src/` with the provided files
   - Update `index.html`, `package.json`, and other configuration files

4. Set up EmailJS for the contact form:
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a new service and email template
   - Replace the placeholders in `ContactForm.tsx`:
     ```typescript
     'YOUR_SERVICE_ID' -> your EmailJS service ID
     'YOUR_TEMPLATE_ID' -> your EmailJS template ID
     'YOUR_PUBLIC_KEY' -> your EmailJS public key
     ```

5. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Build for Production

To create a production build:
```bash
npm run build
```

The built files will be in the `dist/` directory.