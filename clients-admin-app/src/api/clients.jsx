export async function getClients() {
  const res = await fetch(import.meta.env.VITE_API_URL);
  const result = await res.json();

  return result;
}
