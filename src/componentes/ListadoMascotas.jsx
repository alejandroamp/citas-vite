import Mascota from "./Mascota";

const ListadoMascotas = ({ mascotas, setMascota, eliminarMascota }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {mascotas && mascotas.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de Mascotas
          </h2>
          <p className="text-lg mt-5 text-center mb-10">
            Administra tus{" "}
            <span className="text-indigo-500 font-bold">Mascotas y Citas</span>
          </p>

          {mascotas.map((mascota) => (
            <Mascota
              key={mascota.id}
              mascota={mascota}
              setMascota={setMascota}
              eliminarMascota={eliminarMascota}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Mascotas</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Comienza agregando mascotas{" "}
            <span className="text-indigo-500 font-bold">
              y apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoMascotas;
