import { useLoaderData } from 'react-router-dom';
import Client from '../components/client';

import { getClients } from '../data/Clients';

export function loader() {
  const clientes = getClients();
  return clientes;
}

const Index = () => {
  const clientes = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administrador de Clientes</p>

      {clientes.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Cliente</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente, index) => (
              <Client key={index} cliente={cliente} />
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay clientes para mostrar.</p>
      )}
    </>
  );
};

export default Index;
