"use client";

import { LuLoader2 } from "react-icons/lu";

const Error = () => {
 return (
  <div className="w-full h-full bg-neutral-900 flex items-center justify-center">
   <LuLoader2 className="animate-spin w-12 h-12 text-green-500"/>
  </div>
 );
};

export default Error;
