import { remark } from "remark";
import html from "remark-html";

const Remark = ({ markdownContent }: { markdownContent: string }) => {
  const processedContent = remark().use(html).processSync(markdownContent);
  const result = processedContent.toString();

  return (
    <div
      className="text-balance"
      dangerouslySetInnerHTML={{ __html: result }}
    />
  );
};

export default Remark;
