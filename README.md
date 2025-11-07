# 🎤 21 Savage Fan Site

Why you trappin' so hard? Drop your hottest takes, upvote the realest opinions, and let the community decide what's 🔥 or 🗑️

A full-stack message board for 21 Savage fans to share thoughts, debate lyrics, and connect over their love for the Atlanta rap legend.

---

## 🔥 Features

- 🔐 **User Authentication** - Sign up and login with Passport.js (local strategy)
- 💬 **Message Board** - Post your thoughts about 21 Savage, his music, and the culture
- 👍 **Upvote System** - Show love to posts you vibe with
- 👎 **Downvote System** - Keep it real when you disagree
- 🗑️ **Delete Messages** - Remove posts you no longer want visible
- 🔒 **Protected Routes** - Only logged-in users can access the profile/message board
- 👤 **User Profiles** - View your account details and manage your account
- ⚡ **Real-time Updates** - Page refreshes after actions to show latest content
- 📊 **Vote Tracking** - See how many upvotes each message has

---

## 🧩 Tech Stack

| Tech | Description |
|------|--------------|
| 🟢 **Node.js + Express** | Server-side power behind user routes and logic |
| 💾 **MongoDB + Mongoose** | Stores users, journal entries, and user data |
| 🔐 **Passport.js** | Handles user authentication with local strategy |
| 🎨 **EJS Templates** | Dynamic rendering of pages and user data |
| 🧵 **HTML / CSS / JS** | Frontend styling |
| 🎭 **bcrypt-nodejs** | Password hashing for secure authentication |
| 🍪 **cookie-parser** | Parse cookies for session management | 
| 📦 **body-parser** | Parse incoming request bodies |

---

## ⚙️ Installation

1. Clone repo
2. run `npm install`

## Usage

1. run `node server.js`
2. Navigate to `localhost:8080`

---

## 📸 Screenshot

<p align="center">

<img width="1668" height="843" alt="21-savage-screenshot" src="https://github.com/user-attachments/assets/3e7155dc-f6b3-418f-bfcf-22eaba3851e0" />

</p>

---

## 💡 Future Enhancements

- 🎵 Integrate Spotify API to show 21 Savage's latest tracks
- 📝 Add message editing capability
- 👥 User profiles with avatars and bio
- ⏰ Timestamp for messages
- 🔒 Message ownership - only allow users to delete their own posts
- 📊 Admin dashboard for moderation
- 🔔 Real-time notifications using Socket.io
- 📸 Image upload for posts
- 🎤 Integration with Genius API for lyrics discussions

## 🙏 Credits
- Icons from Font Awesome
- Modified from Scotch.io's auth tutorial
