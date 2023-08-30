const ClientForm = ({ client }) => {
  return (
    <>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="nombre">
          Nombre:
        </label>
        <input
          id="nombre"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Nombre del Cliente"
          name="nombre"
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="apellidos">
          Apellidos:
        </label>
        <input
          id="apellidos"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Apellidos del Cliente"
          name="apellidos"
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="empresa">
          Empresa:
        </label>
        <input
          id="empresa"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Empresa del Cliente"
          name="empresa"
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-800" htmlFor="medio">
          Medio Contacto:
        </label>
        <input
          id="medio"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Medio Contacto del Cliente"
          name="medio"
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-800" htmlFor="telefono">
          Teléfono:
        </label>
        <input
          id="telefono"
          type="tel"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Teléfono del Cliente"
          name="telefono"
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-800" htmlFor="notas">
          Notas:
        </label>
        <textarea
          as="textarea"
          id="notas"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
          placeholder="Notas del Cliente"
          name="notas"
        />
      </div>
    </>
  );
};

export default ClientForm;
