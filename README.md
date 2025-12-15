# Emotion-Adaptive Content System

An interactive web application that adapts visual content based on detected user emotions. The system demonstrates how emotion signals (from text and facial expressions) can be used to dynamically modify UI behavior, improving emotional awareness in digital conversations.

---

## 🚀 Project Overview

In most chat-based systems, emotions are often lost because text does not convey facial expressions or tone. This project addresses that gap by:

* Analyzing **user text input** for sentiment
* (Planned) Analyzing **facial expressions** using webcam input
* Dynamically adapting UI elements such as **text color, theme, and feedback** based on detected emotion

Currently, the repository contains the **frontend implementation**, while the **backend is designed and documented for future integration**.

---

## 🧩 Architecture (Planned)

```
Frontend (React + Vite)
        |
        | REST API
        v
Backend (Node.js / Python – Planned)
        |
        v
ML Models (Emotion & Sentiment Analysis)
```

---

## 🖥️ Frontend (Implemented)

### Tech Stack

* React
* Vite
* TypeScript
* Tailwind CSS
* shadcn/ui

### Features

* User input interface
* Emotion-based UI changes (simulated)
* Modular component structure
* Responsive design

### Running the Frontend Locally

```bash
git clone https://github.com/SURYAS1306/Emotion_Project.git
cd Emotion_Project
npm install
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## ⚙️ Backend (Planned / Conceptual)

> ⚠️ Note: Backend is **not yet implemented** in this repository. This section describes the intended design.

### Proposed Tech Stack

* Node.js (Express) **or** Python (FastAPI)
* REST APIs
* WebSocket support (for real-time emotion updates)
* ML Libraries: TensorFlow / PyTorch / OpenCV

### Planned Responsibilities

* Receive text input from frontend
* Process sentiment analysis
* Capture webcam frames (with user permission)
* Perform facial emotion recognition
* Return emotion metadata to frontend

### Example API Design (Planned)

```
POST /api/emotion/text
POST /api/emotion/facial
GET  /api/emotion/status
```

---

## 🧠 Emotion Detection Logic (Concept)

| Input Type | Technique Used               |
| ---------- | ---------------------------- |
| Text       | NLP sentiment analysis       |
| Face       | CNN-based emotion classifier |

Detected emotions include:

* Happy
* Sad
* Angry
* Neutral
* Stressed

---

## 🎨 UI Adaptation Examples

| Emotion | UI Behavior                  |
| ------- | ---------------------------- |
| Happy   | Bright colors, positive tone |
| Sad     | Muted colors, softer UI      |
| Angry   | Warm tones, alert indicators |
| Neutral | Default theme                |

---

## 🔮 Future Enhancements

* Full backend integration
* Real-time webcam emotion tracking
* Emotion history & analytics dashboard
* Accessibility-based UI adaptations
* Deployment with Docker

---

## 📚 Use Cases

* Emotion-aware chat applications
* Mental health monitoring tools
* E-learning platforms
* User experience research

---

## 👨‍💻 Author

**Surya Srinivasan**
B.Tech Computer Science Engineering
VIT Vellore

---

## 📜 License

This project is for academic and learning purposes.
