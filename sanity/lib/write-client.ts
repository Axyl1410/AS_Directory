import "server-only";

import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId, token } from "../env";

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
});

if (!writeClient.config().token) {
  throw new Error("Write token not found.");
}

export const incView = async ({ id }: { id: string }) => {
  await writeClient
    .patch(id)
    .inc({ view: 1 })
    .commit()
    .then(() => {
      console.log("Update successful");
    })
    .catch((err) => {
      console.error("Oh no, the update failed: ", err.message);
    });
};
