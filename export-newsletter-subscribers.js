import { createClient } from "@sanity/client";
import fs from "fs";
import { parse } from "json2csv";

const client = createClient({
  projectId: "v32nzca8",
  dataset: "production",
  apiVersion: "2023-10-16",
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
});

async function exportSubscribers() {
  console.log("Fetching newsletter subscribers...");
  const subscribers = await client.fetch(
    `*[_type == "newsletter"]{email, subscribedAt}`
  );

  if (!subscribers.length) {
    console.log("No subscribers found");
    return;
  }

  //Convert JSON to csv

  const csv = parse(subscribers);

  //save file
  fs.writeFileSync("newsletter-subscribers.csv", csv);
  console.log(
    `Export complete! ${subscribers.length} subscribers exported to subscribers.csv`
  );
}

exportSubscribers().catch(console.error);
