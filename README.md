<h1 align="center">🧑‍💻 CareerConnect – Job Seeker Platform</h1>

<p align="center">
  <strong>A modern job seeker platform to connect users with meaningful career opportunities.</strong>
</p>

---

## 🌟 Features

- 👤 Create and manage professional profiles  
- 🏷️ Add and edit technical or soft skills  
- 📄 Upload resumes in PDF format  
- 💼 Browse or post jobs  
- 💡 View career advice and guidance  
- 🔐 Authentication-based access (Login / Signup)  

> This project is built with modern frontend technologies and designed to serve as a **portfolio-quality showcase**.

---

## 🛠 Tech Stack

- ⚛️ **React** – Functional components with hooks  
- 📦 **Redux Toolkit** – Global state management  
- 🧠 **TypeScript** – Type safety and scalability  
- 🎨 **Tailwind CSS** – Utility-first responsive styling  
- 🌐 **React Icons** – Accessible and scalable icons  

---

## 📅 Frontend Development Plan (4 Days)

---

### ✅ Day 1: Project Setup & Authentication Pages

#### 🔧 Project Initialization
- Setup project using **Vite + React + TypeScript**
- Configure:
  - **Tailwind CSS**
  - **React Router DOM**
  - **Redux Toolkit**

#### 🧭 Layout & Routing
- Create a responsive `Navbar`
- Set up routing for: `Home`, `Login`, `Signup`, `Dashboard`
- Use route-level layout with `Outlet` for nested pages

#### 🔐 Login & Signup UI
- Build responsive forms using Tailwind CSS
- Add form state handling and basic validation

---

### ✅ Day 2: Profile Page, Skills, and Resume Upload

#### 🧑 Profile UI with Redux State
- Editable fields: `Name`, `Email`, `Bio`
- Use TypeScript interfaces and Redux Toolkit

#### 🏷️ Skills Tag System
- Dynamic tag input system using `useState`
- Store and update skills in Redux store

#### 📄 Resume Upload Feature
- Upload PDF file only
- Display file name using React Icons
- Validate file type and handle basic UI

---

### ✅ Day 3: Job Posting Form + Career Advice Section

#### 📝 Job Posting Form
- Input fields: `Title`, `Company`, `Salary`, `Description`
- Save jobs in Redux
- Display posted jobs in dashboard

#### 💡 Career Advice Cards
- Responsive grid of tip cards
- Styled with Tailwind and React Icons
- Use mock data for content

#### ✅ Form Validation & Feedback
- Tailwind-based validation styling
- Show success/error messages using icons

---

### ✅ Day 4: Dashboard, Final UI Polish & Testing

#### 📊 Dashboard Integration
- Show profile summary, resume info, posted jobs
- Use conditional rendering (e.g., “No jobs posted yet”)

#### 📱 Responsive Design & UI Enhancements
- Mobile and tablet support
- Add transitions, hover states, and animations using Tailwind CSS

#### 🧹 Final Cleanup & Testing
- Test all user flows:
  - Login → Profile → Post Job → Dashboard
- Refactor folder structure:
  - `/components`, `/pages`, `/redux`
- Remove unused code and prepare for deployment

---

## 🚀 Getting Started

### 🔧 Run Backend

```bash
cd backend
npm install
npm start

### 🔧 Run Frontend

```bash
cd frontend
npm install
npm run dev
