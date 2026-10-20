# Arthur Monteiro - Portfolio

A minimalist, high-performance personal portfolio and developer showcase built with React, Vite, and clean modular component architecture.

## Overview

This repository contains my personal portfolio website, designed to showcase my projects, professional background, and core technical skills as a front-end developer and computer science student. It features a clean dark interface, smooth navigation, scroll interactions, and is fully configured for production deployment.

## Stack & Technologies

- **Core:** React, Vite, JavaScript (ES6+)
- **Styling:** CSS3, Modular Architecture
- **Version Control:** Git & GitHub
- **Deployment:** Vercel (with custom SPA rewrite rules)

## Modular Architecture (`src/components/`)

- **Navbar.jsx:** Header navigation links and external profiles.
- **Hero.jsx:** Introduction, professional statement, and action triggers.
- **About.jsx:** Background overview (UNINOVE & computer science studies).
- **Experience.jsx:** Professional history detailing financial and administrative background.
- **Skills.jsx:** Grid showcasing core technical competencies.
- **Projects.jsx:** Featured projects showcase (starting with the *Minimal Design System*).
- **ScrollToTop.jsx:** Interactive scroll state helper button for smooth navigation.
- **Footer.jsx:** Copyright and location details.

## Project Structure

```text
├── index.html
├── package.json
├── vercel.json
├── style.css
└── src/
    ├── App.jsx
    ├── main.jsx
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Experience.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── ScrollToTop.jsx
        └── Footer.jsx