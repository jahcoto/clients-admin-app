import { useNavigate, Form, useActionData } from 'react-router-dom';

import Error from '../components/Error';

export async function action({ request }) {
  const formData = await request.formData();

  const datos = Object.fromEntries(formData);

  //Validacion
  const errores = [];
  if (Object.values(datos).includes('')) {
    console.log(datos.email);
    if (datos.nombre.includes('')) {
      errores.push('El campo nombre es requerido');
    } else if (datos.empresa === '') {
      errores.push('El campo empresa es requerido');
    } else if (datos.email === '') {
      errores.push('El campo email es requerido');
    } else if (datos.telefono) {
      errores.push('El campo telefono es requerido');
    }
  }

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])",
  );
  const email = formData.get('email');
  if (!regex.test(email)) {
    errores.push('El email no es valido!!!');
  }

  //Retornar datos
  if (Object.keys(errores)) {
    return errores;
  }
}

import ClientForm from '../components/ClientForm';
const NewClient = () => {
  const navigate = useNavigate();

  const errores = useActionData();
  console.log(errores);

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
        <p className="text-center">Formulario</p>
        {errores
          ? ClientForm.length &&
            errores.map((error, index) => <Error key={index}>{error}</Error>)
          : null}
        <Form method="post" noValidate>
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
