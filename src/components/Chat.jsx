import React from 'react';

export const Chat = () => {
  return (
    <div className="bg-gradient-to-tr from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-2xl shadow-lg w-80 text-center p-6">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="Profile Photo"
          className="w-24 h-24 mx-auto rounded-xl mb-4 object-cover"
        />

        <h2 className="text-xl font-bold">Monalisa Ashley</h2>
        <p className="text-gray-500 text-sm mb-4">UI/UX Designer</p>

        <div className="flex justify-center space-x-4 mb-4">
          {/* Social Icons */}
          {/* Aquí solo dejo un ejemplo. Puedes dejar todos los SVGs como están, solo asegúrate de usar className */}
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 1 0-11.5 9.95v-7.05h-2.2V12h2.2v-1.6c0-2.17 1.3-3.36 3.3-3.36.96 0 1.97.17 1.97.17v2.17h-1.11c-1.1 0-1.44.68-1.44 1.37V12h2.45l-.39 2.9h-2.06v7.05A10 10 0 0 0 22 12Z" />
            </svg>
          </a>
          {/* Agrega los demás íconos igual que este */}
        </div>

        <div className="text-left space-y-2 text-sm mb-6">
          <div className="flex items-center space-x-2">
            <span className="text-pink-500">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 18V8l8 6 8-6v10H4Z" />
              </svg>
            </span>
            <p>Example@Mail.com</p>
          </div>

          {/* Agrega los demás campos igual que este, con className en lugar de class */}
        </div>

        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full">
          ⬇️ Download CV
        </button>
      </div>
    </div>
  );
};
