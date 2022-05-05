import { useState, useEffect } from "react";
import Header from "./componentes/Header";
import Formulario from "./componentes/Formulario";
import ListadoMascotas from "./componentes/ListadoMascotas";

function App() {
  // Snippet usf
  //setMascotas es el estado que contiene toda la lista de mascotas
  const [mascotas, setMascotas] = useState([]);

  //state para 1 (un) mascota para poder editarlos
  const [mascota, setMascota] = useState([]);

  //Almacenando en localstorage
  useEffect(() => {
    const obtenerLS = () => {
      const mascotasLS = JSON.parse(localStorage.getItem("mascotas")) ?? [];
      setMascotas(mascotasLS);
    };
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("mascotas", JSON.stringify(mascotas));
  }, [mascotas]);

  //funcion para eliminar
  const eliminarMascota = (id) => {
    //console.log('Eliminando mascota', id);
    const mascotasActualizadas = mascotas.filter(
      (mascota) => mascota.id !== id
    );
    //console.log(mascotasActualizadas);
    setMascotas(mascotasActualizadas);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario
          mascotas={mascotas}
          setMascotas={setMascotas}
          mascota={mascota}
          setMascota={setMascota}
        />
        <ListadoMascotas
          mascotas={mascotas}
          setMascota={setMascota}
          eliminarMascota={eliminarMascota}
        />
      </div>
    </div>
  );
}

export default App;
