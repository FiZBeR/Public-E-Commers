import React from "react";
import Form from "../hooks/Form";
import fondoLogin from '../../../../public/fondoLogin.png'

const Auth = () => {
  return (
    <main className="flex-grow flex items-center justify-center p-4 lg:p-0">
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row h-full min-h-[calc(100vh-80px)] overflow-hidden rounded-xl lg:rounded-none bg-white dark:bg-[#221019] shadow-sm lg:shadow-none border border-[#f4f0f2] lg:border-none dark:border-[#331d25]">
        <div
          className="relative hidden lg:block lg:w-1/2 xl:w-7/12 h-64 lg:h-auto bg-cover bg-center overflow-hidden"
          data-alt="Dreamy field of wildflowers in soft sunlight with pink and purple hues"
          style={{ backgroundImage: `url(${fondoLogin})`}}
        >
          <div className="absolute inset-0 bg-linaer-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-10 left-10 p-6 text-white max-w-lg">
            <p className="text-lg font-medium mb-2 opacity-90">
              Summer Collection 2024
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Bloom where you are planted.
            </h1>
          </div>
        </div>
        <Form />
      </div>
    </main>
  );
};

export default Auth;


