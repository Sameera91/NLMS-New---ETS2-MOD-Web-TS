import React from 'react';
import RegisterForm from '../components/authentication/RegisterForm';

const RegisterPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;