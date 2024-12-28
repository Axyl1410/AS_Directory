import { incView } from "@/sanity/lib/write-client";

const View = ({ id }: { id: string }) => {
  incView({ id });
  return null;
};

export default View;
