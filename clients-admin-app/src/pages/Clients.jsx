import { useLoaderData } from 'react-router-dom';
import Client from '../components/Client';

export function loader() {
  const clients = [
    {
      id: 1,
      nombre: 'Juan',
      apellidos: 'De la Torre',
      telefono: 102013313,
      email: 'juan@juan.com',
      empresa: 'Codigo Con Juan',
    },
    {
      id: 2,
      nombre: 'Karen',
      apellidos: 'Gomez Bolaños',
      telefono: 138198313,
      email: 'karen@juan.com',
      empresa: 'Codigo Con Juan',
    },
    {
      id: 3,
      nombre: 'Josue',
      apellidos: 'Quiros',
      telefono: 31983913,
      email: 'josue@juan.com',
      empresa: 'Codigo Con Juan',
    },
    {
      id: 4,
      nombre: 'Miguel',
      apellidos: 'Mendez Contreras',
      telefono: 319381983,
      email: 'miguel@juan.com',
      empresa: 'Codigo Con Juan',
    },
    {
      id: 5,
      nombre: 'Pedro',
      apellidos: 'Salas Fonseca',
      telefono: 1398198938,
      email: 'pedro@juan.com',
      empresa: 'Codigo Con Juan',
    },
  ];

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
