# 🚀 Pablo Queiroz — Portfolio

Personal portfolio website built to showcase my work, skills, and approach as a **Full Stack Web Developer**.

This project reflects how I design and structure real-world applications, focusing on clean UI, scalability, and maintainable code.

---

## ✨ Live Demo

🔗 **[View Portfolio](https://pabloqueiroz.netlify.app/)**

---

## 🧠 About

This portfolio is more than a visual presentation.  
It was built to demonstrate how I think about **architecture**, **UX**, and **code organization**.

Key goals of the project:

- Clean and modern interface
- Data-driven UI using JSON
- Scalable and maintainable structure
- Fully responsive design
- Easy to extend with new projects

---

## 🛠️ Tech Stack

- React
- TypeScript
- Vite
- CSS Modules
- EmailJS
- React Icons

---

## 📂 Project Structure

public/
├─ favicon/
├─ gifs/
├─ logos/
├─ profile/
└─ vite.svg

src/
├─ assets/ # SVGs and static imports
├─ components/ # Reusable UI components
│ ├─ About
│ ├─ ContactMe
│ ├─ Footer
│ ├─ Header
│ ├─ Hero
│ ├─ NavItem
│ ├─ Projects
│ └─ Skills
├─ pages/ # Application pages / routes
│ ├─ Contact
│ ├─ Home
│ └─ Projects
├─ data/ # JSON-driven content
│ └─ projects.json
├─ styles/ # Global styles
│ ├─ global.css
│ ├─ reset.css
│ └─ variables.css
├─ types/ # TypeScript types
│ └─ Project.ts
├─ App.tsx
└─ main.tsx

---

## 🖼️ Projects

The Projects section is one of the core features of the portfolio.

It includes:

- Horizontal carousel with navigation buttons
- One project per view for focused UX
- Dynamic rendering from a JSON file
- Project cards displaying:
  - Demo GIF
  - Project logo
  - Short description
  - Tech stack
  - GitHub repository link
  - Live demo link (when available)

---

## 📬 Contact

The **Hire Me / Contact** section features a fully functional contact form powered by **EmailJS**, allowing messages to be sent directly without a backend.

Features:

- Name, email, and message fields
- Client-side validation
- Conversation-focused UX copy
- Secure configuration via environment variables

---

VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

###📌 Future Improvements

Project filtering by technology

Autoplay carousel with pause on hover

Skeleton loaders for images and GIFs

Internationalization (EN / PT)

CMS or API integration

##👤 Author

Pablo Queiroz
Full Stack Web Developer

GitHub: https://github.com/pablovqueiroz

LinkedIn: https://www.linkedin.com/in/pablo-queiroz/

📄 License

This project is open source and available under the MIT License.
