import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);

  console.log(contacts)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('chat-app-user'));
    if (!user) {
      navigate('/login');
    } else {
      setCurrentUser(user);
    }
  }, [navigate]);


  useEffect(() => {
    if (currentUser) {
      getContacts();
    }
  }, [currentUser]);

  async function getContacts() {
    try {
      const res = await axios.get(`/auth/all-user/${currentUser._id}`);
      const result = res.data;
      if (result.success) {
        setContacts(result.data);
      }
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
    }
  }

  return <div>{/* Render your chat UI here */}</div>;
};

export default Chat;
