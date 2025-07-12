# StackIt – Minimal Q&A Platform
Walkthrough : https://drive.google.com/file/d/1LaiUyEkytYGw0_fBK1YzJsofXU_jumKD/view?usp=sharing
**StackIt** is a local-first React Q&A app inspired by Brainly. It features:

- 🔐 Login/Register with localStorage auth
- 🌙 Dark/Light theme toggle
- 🤖 OpenAI AI Assistant chatbot
- 📝 Rich-text question editor
- 🗳️ Voting system
- 📦 Works fully offline

## Run it locally:

```bash
npm install
npm start

# 🧠 StackIt – Minimal Q&A Platform

StackIt is a **lightweight, Brainly-inspired Q&A platform** built with React, designed for collaborative learning and offline-first use. It allows users to ask questions, post answers, vote, and interact through a rich, intuitive interface – complete with a built-in AI chatbot powered by OpenAI.

---

## 🚀 Features

✨ Simple, clean UI with **Dark & Light Mode**  
🔐 Local **Login/Register** system (no backend)  
📝 **Rich text editor** for questions/answers  
🏷️ Tagging system with multi-select  
📬 Real-time **notification system**  
📢 **Admin** role for moderation  
📊 Voting system for answers  
🤖 **AI Assistant chatbot** powered by OpenAI  
📦 Works completely **offline using localStorage**

---

## 🖼️ App Preview

![StackIt UI]

---

## 🛠️ Tech Stack

- ⚛️ React
- 🧠 OpenAI API (via `.env`)
- 🧭 React Router
- 💾 localStorage (for auth + content)
- 💡 Lucide Icons
- 🧱 Tailwind CSS (optional/custom CSS)

---

## 📂 Project Structure

src/
├── components/
│ ├── Header.js
│ ├── Auth/
│ │ ├── LoginModal.js
│ │ └── RegisterModal.js
│ ├── Chatbot/
│ │ └── Chatbot.js
├── pages/
│ └── Home.js
├── data/
│ └── questions.js
├── App.js
└── index.js

yaml
Copy
Edit

---

## 🔧 Setup Instructions

1. **Clone the repo**

```bash
git clone https://github.com/Sohamlkulk1122/odoo-stackit.git
cd odoo-stackit
Install dependencies

bash
Copy
Edit
npm install
Add your OpenAI key

Create a .env file in the root:

env
Copy
Edit
REACT_APP_OPENAI_KEY=your-openai-key-here
⚠️ Never share or commit this key publicly.

Run the app

bash
Copy
Edit
npm start
🔒 Roles & Permissions
Role	Permissions
Guest	View all content
User	Ask/answer questions, vote
Admin	Moderate content, ban users, broadcast alerts

📣 Future Improvements
Comment threads

Question filters (newest, most-voted)

Admin dashboard UI

PWA offline support

GitHub Pages deployment

If the app is not working you can test it out the demo-version of Stalk-it using Stalk-it.html



