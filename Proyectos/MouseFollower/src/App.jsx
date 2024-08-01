import { useEffect, useState } from "react";

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("Efecto", { enabled });

    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log("HandleMove: ", { clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    // Limpiar el event listener al desmontar el componente o cuando enabled cambie
    return () => window.removeEventListener("pointermove", handleMove);
    //desde la consola del navegador podemos utilziar getEventListener(window) -> vemos cuantos eventos tenemos suscritos(y revisar si los hemos limpiado o no)
  }, [enabled]);

  return (
    <main>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0,0,0,0.5)",
          border: "1px solid #fff",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: position.x - 25,
          top: position.y - 25,
          width: 50,
          height: 50,
        }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </main>
  );
}

export default App;
