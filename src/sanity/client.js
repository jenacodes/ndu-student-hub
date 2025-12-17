// src/sanity/client.js
import { createClient } from "next-sanity";
import { dataset, projectId, apiVersion } from "./env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // `false` if you want fresh data always
});
