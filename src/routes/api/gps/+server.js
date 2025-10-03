/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
  return new Response(
    JSON.stringify({
      id: 1,
      courier_id: "TEST123",
      latitude: 42.0683,
      longitude: 19.5188,
      speed: 45
    }),
    { headers: { "Content-Type": "application/json" } }
  );
}
