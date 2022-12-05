export async function getClients() {
  const res = await fetch(import.meta.env.VITE_API_URL);
  const result = await res.json();
  return result;
}

export async function getClient(id) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
  const result = await res.json();
  return result;
}

export async function addClient(client) {
  try {
    const res = await fetch(import.meta.env.VITE_API_URL, {
      method: 'POST',
      body: JSON.stringify(client),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    await res.json();
  } catch (error) {
    console.log(client);
  }
}
