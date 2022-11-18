
export async function getClients() {
    const url = 'http://localhost:3000/clientes'
    const res = await fetch(import.meta.env.VITE_API_URL)
    console.log(import.meta.env.VITE_API_URL)
    const result = await res.json()

    console.log(result)
}