import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [avisos, setAvisos] = useState([]);
  const [eventos, setEventos] = useState([]);

  function addAviso(aviso) {
    setAvisos((prev) => [...prev, aviso]);
  }

  function addEvento(evento) {
    setEventos((prev) => [...prev, evento]);
  }

  return (
    <AppContext.Provider value={{ avisos, eventos, addAviso, addEvento }}>
      {children}
    </AppContext.Provider>
  );
}
