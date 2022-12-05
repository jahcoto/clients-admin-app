import { getClient } from '../data/Clients.js';

export async function loader({ params }) {
  const client = await getClient(params.clientId);

  if (Object.values(client).length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'No hay resultados.',
    });
  }
  return client;
}

const UpdateClient = () => {
  return <div>UpdateClient:</div>;
};

export default UpdateClient;
