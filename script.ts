export default {
  async fetch(request: Request) {
    return new Response("Hello from Bunny Edge 🐰", {
      headers: { "content-type": "text/plain" },
    });
  },
};
