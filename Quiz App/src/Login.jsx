import React, { useState } from 'react'


function Login({ onLoginSuccess }) {
  const [mode, setMode] = useState("signup")
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = () => {
    if (!username || !password) {
      setMessage("Please Enter username and password")
      return;
    }

    sessionStorage.setItem("username", username)
    sessionStorage.setItem("password", password)
    setMessage("SignUp Successfully")
    setUsername("")
    setPassword("")
    setMode('login')
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = sessionStorage.getItem("username")
    const storedPass = sessionStorage.getItem("password")

    if (username === storedUser && password === storedPass) {
      setMessage(<span className='text-green-600'>Login Successfully, <b>{username}</b></span>);
      onLoginSuccess();
    }
    else {
      setMessage(<span className='text-red-600'>Invalid Username Or Password</span>);
    }
  };

  return (
    <>
      <div className='h-screen w-screen flex justify-center items-center bg-gray-200'>
        <div className='p-5 text-center items-center justify-center mx-auto w-sm rounded-xl bg-white border border-gray-400 shadow-2xl'>
          <h1 className='font-semibold text-2xl mb-6'>
            {mode === 'signup' ? "Sign Up" : "Login"}
          </h1>

          <form onSubmit={mode === 'signup' ? (e)=>{ e.preventDefault(); handleSignUp();} : handleLogin}>
            <input
              type="text"
              placeholder='Enter Username'
              className='border border-gray-300 p-3 w-full rounded-xl mb-4'
              value={username}
              onChange={(e) => { setUsername(e.target.value) }}
              required
            />

            <input
              type="password"
              placeholder='Enter Password'
              className='border border-gray-300 p-3 w-full rounded-xl mb-6'
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
            />

            <button
              type="submit" // important for form submission
              className='bg-blue-700 text-white font-semibold text-lg px-4 py-2 rounded-xl cursor-pointer hover:bg-blue-800 transition-all duration-200'
            >
              {mode === 'signup' ? "Sign Up" : "Login"}
            </button>
          </form>


          <p className='mt-4 text-md'>
            {mode === "signup" ? "Already have an account ?" : "Don't have an Account ?"}
            <span
              className='text-blue-600 cursor-pointer hover:underline ml-1'
              onClick={() => {
                setMode(mode === "signup" ? "login" : "signup")
                setMessage("")
                setUsername("")
                setPassword("")
              }}>
              {mode === "signup" ? "Login" : " Signup"}
            </span>
          </p>

          {
            message && (
              <p>{message}</p>
            )
          }

        </div>
      </div>
    </>
  )
}

export default Login