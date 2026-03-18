// writeClient.js — server-side only.
import { createClient } from "next-sanity";
import { dataset, projectId, apiVersion } from "./env";

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});
