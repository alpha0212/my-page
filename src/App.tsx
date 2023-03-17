import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages';
import { Navbar } from './components';

export const App: React.FC = () => {
  return (
    <>
      <Navbar
        Logo="DEV-JUN"
        Project="PROJECT"
        ProjectGo="project"
        Contact="CONTACT"
        ContactGo="contact"
        NavbarShowAndHide={true}
      />
      <Routes>
        <Route index element={<MainPage />} />
      </Routes>
    </>
  );
};
