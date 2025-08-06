import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();


const register = (name, email, password) => {
  const newUser = { name, email, password, isAdmin: true }; // make admin
  localStorage.setItem('registeredUser', JSON.stringify(newUser));
  return true;
};


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('authUser');
    return saved ? JSON.parse(saved) : null;
  });

  const login = (email, password) => {
    const savedUser = JSON.parse(localStorage.getItem('registeredUser'));
    if (savedUser && savedUser.email === email && savedUser.password === password) {
      setUser(savedUser);
      localStorage.setItem('authUser', JSON.stringify(savedUser));
      return true;
    }
    return false;
  };

  const register = (name, email, password) => {
    const newUser = { name, email, password };
    localStorage.setItem('registeredUser', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
