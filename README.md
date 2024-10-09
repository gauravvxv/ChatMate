# ChatMate

ChatMate is a real-time chat application that allows users to connect and communicate instantly. Users can create an account, log in, and start chatting with other users in real-time.

## Features

- **Real-time Messaging**: Send and receive messages instantly with live updates.
- **User Authentication**: Secure sign-up and login system using JWT tokens.
- **Responsive Design**: Fully responsive layout for mobile, tablet, and desktop.
- **Scroll for Messages**: Automatically scrolls to the latest messages and supports a scrollbar for message overflow.
- **Search Conversations**: Easily search for chats by a user's full name.
- **Online Status**: See if the user you are chatting with is currently online.
- **Notifications**: Get notified with a sound alert when you receive a new message.

  ## Login page

  ![Screenshot 2024-10-07 155837](https://github.com/user-attachments/assets/60b92c5a-f895-4785-bcf3-67e8ad35a83e)

  ## Signup page

  ![Screenshot 2024-10-07 155826](https://github.com/user-attachments/assets/fdadc6d0-1390-4bf8-9534-8fc9aefebf2e)

  ## Home page

  ![Screenshot 2024-10-07 160942](https://github.com/user-attachments/assets/72906863-8ea2-40ee-bf10-aa97ccfcccd6)

 ## Chat

 ![Screenshot 2024-10-07 160842](https://github.com/user-attachments/assets/b345253f-9cbb-479c-90a5-d6072effea41)


## Tech Stack

- **Frontend**: HTML, CSS, Tailwind-CSS, Daisy-UI, React, React-Hot-Toast, React-Icons.
- **Backend**: Node.js, Express.js, MongoDB
- **WebSocket**: Socket.io for real-time communication

  ## API Endpoints

- **POST** `/api/auth/signup` - Register a new user
- **POST** `/api/auth/login` - Login user
- **GET** `/api/messages/:Id` - Retrieve messages from a conversation
- **POST** `/api/messages/send/:Id` - Send a new message
