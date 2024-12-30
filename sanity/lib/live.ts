import { client } from "@/sanity/lib/client";
import { defineLive } from "next-sanity";
import "server-only";

// export the sanityFetch helper and the SanityLive component
export const { sanityFetch, SanityLive } = defineLive({
  client,
  browserToken: process.env.SANITY_BROWSER_TOKEN,
  serverToken: process.env.SANITY_WRITE_TOKEN,
});
