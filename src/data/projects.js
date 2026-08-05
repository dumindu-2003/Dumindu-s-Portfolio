import smartCampus from '../assets/images/projects/project-smart-campus.webp'
import sliitGo from '../assets/images/projects/project-sliit-go.webp'
import medicura from '../assets/images/projects/project-medicura.webp'
import trailstay from '../assets/images/projects/project-trailstay.webp'
import ticketilanka from '../assets/images/projects/project-ticketilanka.webp'
import wellnessTracker from '../assets/images/projects/project-wellnesstracker.webp'

export const projects = [
  {
    id: 1,
    title: 'Smart Campus Operations Hub',
    subtitle: 'Smart Campus',
    description:
      'University operations platform with asset booking, maintenance incident management, role-based access, and CI/CD via GitHub Actions.',
    tech: ['Spring Boot', 'React.js', 'REST API', 'GitHub Actions'],
    github: 'https://github.com/dumindu-2003/Smart-Campus',
    live: '#',
    year: '2026',
    image: smartCampus,
    gradient: 'from-cyan-500/30 via-violet-500/20 to-slate-900',
  },
  {
    id: 2,
    title: 'SLIIT GO',
    subtitle: 'Campus Ride Sharing',
    description:
      'PickMe/Uber-style campus ride-sharing app with real-time matching, dynamic bidding, and role-based access for drivers, passengers, and admin.',
    tech: ['React Native', 'Real-time', 'RBAC'],
    github: 'https://github.com/dumindu-2003',
    live: '#',
    year: '2026',
    image: sliitGo,
    gradient: 'from-violet-500/30 via-fuchsia-500/20 to-slate-900',
  },
  {
    id: 3,
    title: 'MediCura',
    subtitle: 'Online Medical Center',
    description:
      'Full-stack medical center management system for appointments and patient information with authentication, validation, and responsive UI.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    github: 'https://github.com/dumindu-2003',
    live: '#',
    year: '2025',
    image: medicura,
    gradient: 'from-emerald-500/30 via-cyan-500/20 to-slate-900',
  },
  {
    id: 4,
    title: 'TrailStay',
    subtitle: 'Travel & Camping App',
    description:
      'UI/UX engineering project for travelling and camping places — Figma prototypes with user-centered design and mobile-optimized layouts.',
    tech: ['Figma', 'Android Studio', 'UI/UX'],
    github: 'https://github.com/dumindu-2003',
    live: '#',
    year: '2025',
    image: trailstay,
    gradient: 'from-amber-500/30 via-orange-500/20 to-slate-900',
  },
  {
    id: 5,
    title: 'TicketiLanka',
    subtitle: 'Bus Ticket Reservation',
    description:
      'Java ticket booking system with seat selection and schedule management, built with OOP principles for modular, maintainable code.',
    tech: ['Java', 'OOP'],
    github: 'https://github.com/dumindu-2003',
    live: '#',
    year: '2025',
    image: ticketilanka,
    gradient: 'from-sky-500/30 via-blue-500/20 to-slate-900',
  },
  {
    id: 6,
    title: 'WellnessTracker',
    subtitle: 'Habit Tracker App',
    description:
      'Android habit-tracking application with data persistence, progress analytics, and a clean intuitive UI focused on performance.',
    tech: ['Kotlin', 'Android Studio'],
    github: 'https://github.com/dumindu-2003',
    live: '#',
    year: '2025',
    image: wellnessTracker,
    gradient: 'from-rose-500/30 via-violet-500/20 to-slate-900',
  },
]
