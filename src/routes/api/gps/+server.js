/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request }) {
  try {
    const data = await request.json(); // FMC920 sends JSON

    console.log("Received GPS data:", data);

    // Here you could save to a database later
    return new Response(
      JSON.stringify({ status: "success", received: data }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Error receiving GPS data:", err);
    return new Response(
      JSON.stringify({ status: "error", message: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function GET() {
  return new Response(
    JSON.stringify({ message: "Send POST request with GPS data" }),
    { headers: { "Content-Type": "application/json" } }
  );
}
