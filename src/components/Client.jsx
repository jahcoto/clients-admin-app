import { useNavigate } from 'react-router-dom';

const Client = ({ cliente }) => {
  const Navigate = useNavigate();
  const { nombre, empresa, email, telefono, id } = cliente;
  const url = `/clients/${id}/edit`;
  return (
    <tr className="border-b space-y-2">
      <td className="p-6">
        <p className="text-2xl text-gray-800">{nombre}</p>
        <p>{empresa}</p>
      </td>
      <td className="p-6">
        <p className="text-gray-600">
          Email:
          <span className="text-gray-800 uppercase font-bold">{email}</span>
        </p>
        <p className="text-gray-600">
          Teléfono:
          <span className="text-gray-800 uppercase font-bold">{telefono}</span>
        </p>
      </td>
      <td className="p-6 flex gap-3">
        <button
          className="text-blue-600 hover:text-blue-800 uppercase font-bold text-xs"
          type="button"
          onClick={() => Navigate(`/clients/${id}/edit`)}
        >
          Editar
        </button>
        <button
          className="text-red-600 hover:text-red-800 uppercase font-bold text-xs"
          type="button"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Client;
