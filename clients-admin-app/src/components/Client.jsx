const Client = ({ client }) => {
  const { nombre, apellidos, empresa, medio, telefono, id } = client;
  return (
    <tr className="border-b" key={id}>
      <td className="p-3 space-x-2">
        <p className="text-xl text-gray-800">
          {nombre} {apellidos}
        </p>
      </td>
      <td className="p-3 space-y-2">
        <p className="text-xl text-gray-600">
          Empresa:{' '}
          <span className="text-gray-800 uppercase font-bold">{empresa}</span>
        </p>
        <p className="text-xl text-gray-600">
          Medio Contacto:{' '}
          <span className="text-gray-800 uppercase font-bold">{medio}</span>
        </p>
        <p className="text-xl text-gray-600">
          Teléfono:{' '}
          <span className="text-gray-800 uppercase font-bold">{telefono}</span>
        </p>
      </td>
      <td className="p-3 flex gap-3">
        <button
          type="button"
          className="bg-blue-300 text-white hover:text-blue-400 uppercase font-bold border-white py-2 px-4"
        >
          Editar
        </button>
        <button
          type="button"
          className="bg-red-300 text-white hover:text-red-400 uppercase font-bold border-white py-2 px-4"
        >
          Editar
        </button>
      </td>
    </tr>
  );
};

export default Client;
