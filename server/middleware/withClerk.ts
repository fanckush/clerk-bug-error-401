import { ClerkExpressWithAuth } from "@clerk/clerk-sdk-node";

export default defineEventHandler(async (event) => {
  const x = ClerkExpressWithAuth();
  try {
    const middle = await fromNodeMiddleware(x)(event);
    console.log("middle", middle);
  } catch (e) {
    console.log("error", e);
  }
});
