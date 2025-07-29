import React, { useEffect, useState } from "react";
import { auth } from '../firebase/init';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  function registerUser() {
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then(({ user }) => {
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function loginUser() {
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(({ user }) => {
        console.log(user);
        console.log("worked");
      })
      .catch((error) => {
        console.log(error);
        console.log("failed");
      });
  }


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className="pt-20 bg-[#f4ebd0] min-h-screen">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h2>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              isLogin ? loginUser() : registerUser();
            }}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#b68d40] focus:ring-[#b68d40]"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#b68d40] focus:ring-[#b68d40]"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#b68d40] hover:bg-[#d6ad60] text-white font-semibold py-2 px-4 rounded-md transition-colors"
            >
              {isLogin ? "Sign In" : "Register"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#b68d40] hover:text-[#d6ad60] font-medium"
            >
              {isLogin
                ? "Don't have an account? Register"
                : "Already have an account? Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
