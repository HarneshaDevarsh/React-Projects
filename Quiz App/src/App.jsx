import React, { useState } from 'react';
import Login from './Login'; // assuming you have a Login component
import Quiz from './Quiz';   // assuming you have a Quiz component

function App() {
  const [isLogin, setIsLogin] = useState(false);

    const handleLoginSuccess = () => {
        setIsLogin(true); // Set the state to true after successful login
    };

    return (
        <div>
            {!isLogin ? (
                <Login onLoginSuccess = {handleLoginSuccess} />
            ) : (
                <Quiz />
            )}
        </div>
    );
}

export default App;
