const Mascota = ({ mascota, setMascota, eliminarMascota }) => {
  //console.log(mascota);

  //Aplicando distructuring
  const { nombre, propietario, email, alta, sintomas } = mascota;

  const handleEliminar = () => {
    const respuesta = confirm("¿Deseas eliminar esta mascota?");

    if (respuesta) {
      eliminarMascota(mascota.id);
    }
  };

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-lg">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre de la Mascota:{" "}
        <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de Alta: <span className="font-normal normal-case">{alta}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomsas: <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-500 hover:bg-indigo-600 text-white font-bold uppercase rounded-lg"
          onClick={() => setMascota(mascota)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-800 hover:bg-indigo-600 text-white font-bold uppercase rounded-lg"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Mascota;
