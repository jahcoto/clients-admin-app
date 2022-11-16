import { useNavigate, Form } from 'react-router-dom';

export function action({ request }) {
  console.log(request);
}

import ClientForm from '../components/ClientForm';
const NewClient = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Registra un nuevo cliente.</p>
      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1"
          onClick={() => navigate('/')}
        >
          Regresar
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10">
        <p className="align-center">Formulario</p>
        <Form method="post">
          <ClientForm />

          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 uppercase font-bold text-white text-lg cursor-pointer"
            value="Registrar Cliente"
          />
        </Form>
      </div>
    </>
  );
};

export default NewClient;
