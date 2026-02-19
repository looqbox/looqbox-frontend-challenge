import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '../components/common/MainLayout';
import { Home } from '../pages/Home';
import { Details } from '../pages/Details';

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Navigate to='/home' replace />} />
          <Route path='*' element={<Navigate to='/home' replace />} />

          <Route path='/home' element={<Home />} />
          <Route path='/pokemon/:name' element={<Details />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};
