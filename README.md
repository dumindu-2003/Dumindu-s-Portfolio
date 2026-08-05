# Dumindu Akhila Liyanaarachchi — Portfolio

Premium developer portfolio built with React (Vite), Tailwind CSS, and Framer Motion.

## Live Demo

Coming soon.

## Features

- Dark glassmorphism UI with cyan / violet accents
- Animated Hero, counters, skills, projects, timelines
- Responsive across desktop, tablet, and mobile
- Contact form with EmailJS (mailto fallback)
- Lazy-loaded sections for performance

## Tech Stack

- React.js (Vite)
- Tailwind CSS v4
- Framer Motion
- React Router
- React Icons
- React Type Animation
- EmailJS

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Contact Form

The contact form sends messages to your Gmail via [FormSubmit](https://formsubmit.co) (no API keys needed).

**First time only:** After the first form submission, FormSubmit emails `dumindu.akhila2003@gmail.com` — open that email and click **Confirm activation**. After that, messages arrive normally.

Optional EmailJS (override FormSubmit):

1. Copy `.env.example` to `.env`
2. Add your EmailJS service ID, template ID, and public key
3. Restart the dev server

Template variables: `from_name`, `from_email`, `subject`, `message`

## CV Download

Place your CV PDF at:

```
public/Dumindu_Akhila_CV.pdf
```

## Author

**Dumindu Akhila Liyanaarachchi**

- Email: dumindu.akhila2003@gmail.com
- Phone: +94 70 409 7264
- LinkedIn: https://www.linkedin.com/in/dumindu-liyanaarachchi-bb8911385
