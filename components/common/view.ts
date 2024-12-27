import { writeClient } from "@/sanity/lib/write-client";

const View = ({ id }: { id: string }) => {
  const addFetch = async () => {
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

  addFetch();
};

export default View;
