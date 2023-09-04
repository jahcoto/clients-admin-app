import { useLoaderData } from 'react-router-dom';
import { getClients } from '../api/clients';
import Client from '../components/Client';

export function loader() {
  const clients = getClients();

  return clients;
}

const Clients = () => {
  const clients = useLoaderData();

  console.log(clients);

  return (
    <div>
      <h1 className="font-bold text-2xl text-blue-400">Clientes</h1>
      <p className="mt-3">Administrador de clientes!!!</p>

      {clients.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-400 text-white">
            <tr>
              <th className="p-2">Cliente</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-gray-200 text-blue-400">
            {clients.map((client) => {
              return <Client client={client} key={client.id} />;
            })}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">No hay clientes para mostrar</p>
      )}
    </div>
  );
};

export default Clients;
