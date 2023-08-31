import { useNavigate, Form, useActionData } from 'react-router-dom';

import ClientForm from '../components/ClientForm';
import Error from '../components/Error';

export async function action({ request }) {
  const formData = await request.formData();

  const datos = Object.fromEntries(formData);

  const errors = [];
  if (Object.values(datos).includes('')) {
    errors.push('Todos los campos son obligatorios!!!');
  }

  //Return errors
  if (Object.keys(errors).length) {
    return errors;
  }
  return '';
}

const NewClient = () => {
  const navigate = useNavigate();
  const errors = useActionData();

  console.log(errors);
  return (
    <div className="bg-gray-100 h-screen">
      <h1 className="font-bold text-2xl text-blue-400">Nuevo Cliente</h1>
      <p className="mt-3">Todos los campos son requeridos!!!</p>
      <div className="flex justify-end">
        <button
          className="bg-blue-300 text-white px-3 py-1 font-bold uppercase border-blue-700 border-solid border-2 cursor-pointer"
          onClick={() => navigate('/')}
        >
          Regresar
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto mt-5 px-10 py-5">
        <p className="text-base font-black text-blue-300">
          Formulario Nuevo Cliente
        </p>

        {errors?.length &&
          errors.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form method="POST" noValidate>
          <ClientForm />
          <input
            type="submit"
            className="mt-5 w-full bg-blue-300 p-3 font-bold uppercase text-white text-lg cursor-pointer"
            value="Registrar Cliente"
          />
        </Form>
      </div>
    </div>
  );
};

export default NewClient;
