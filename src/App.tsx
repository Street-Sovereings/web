import { useState, useEffect } from "react";

import Navbar from "./components/navbar";
import { GetData } from "./class/injector";

export default function App() {
  const [auth, setAuth] = useState<string | undefined>(undefined);
  useEffect(() => {
    setAuth(GetData.GetInjectorCookie());
  }, []);
  
  
  if (auth) {
    return (
      <>
      <Navbar/>
      <h1>hi</h1>
      <h1>test </h1>
      </>
    ) 
  } else {
    return (
      <>
      <h1>Please. auth first</h1>
      </>
    )
  }

}