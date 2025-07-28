# 🧠 AI Note Rewriter

A smart and minimal full-stack web app that helps users rewrite their notes into better, clearer sentences using AI. Built with the MEN stack (MongoDB, Express, Node.js) and integrated with AI APIs (OpenAI/HuggingFace).

---

## 🚀 Features

- ✍️ Rewrite boring or unclear sentences with AI
- 🧠 AI-powered backend using HuggingFace or Gemini (can be switched to OpenAI)
- 💾 Stores both original and rewritten notes in MongoDB
- 🧪 Built from scratch by a beginner developer as a hands-on learning project
- 🌱 Ready for expansion (login, history, editing, etc.)

---

## 🛠 Tech Stack

- **Frontend:** HTML, CSS, JavaScript (vanilla)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **AI Model:** Currently using HuggingFace (can be swapped with Gemini or OpenAI)

---

## 📁 Folder Structure

/ai-note
├── app.js
├── backend/
│ ├── db.js
│ ├── models/
│ ├── routes/
│ └── .env (ignored)
├── public/
│ ├── index.html
│ └── script.js
├── .gitignore
├── README.md

yaml
Copy
Edit

---

## 📦 Installation

```bash
git clone https://github.com/your-username/ai-note-rewriter
cd ai-note-rewriter
npm install
🔑 Create a .env file inside backend/ with your API keys:

ini
Copy
Edit
MONGO_URI=your_mongo_connection_string
HF_API_KEY=your_huggingface_key
🧪 How to Run
bash
Copy
Edit
# Run the app
npx nodemon app.js
Then open your browser and go to:

arduino
Copy
Edit
http://localhost:5000
Use Postman or frontend to send a POST request to:

bash
Copy
Edit
/api/notes/rewrite
💡 Future Plans
Add user login/signup

Show history of rewritten notes

Add download/export to PDF

Connect to OpenAI or Gemini for smarter AI

