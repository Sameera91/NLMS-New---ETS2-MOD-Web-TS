import React from 'react';
import LoginForm from '../components/authentication/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;