import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="top-[106px] z-10 flex w-[300px] flex-col gap-4 lg:sticky lg:h-[calc(100vh-106px)]">
      {[
        {
          title: "Getting Started",
          children: [
            {
              title: "Introduction",
              link: "/",
            },
          ],
        },
      ].map((section) => (
        <details key={section.title} open>
          <summary className="cursor-pointer font-semibold">
            {section.title}
          </summary>
          {section.children.map((child) => (
            <Link key={child.link} href={child.link}>
              <p className="mt-2 w-fit rounded-md bg-linkShade p-2 text-sm text-link dark:bg-nav-dark">
                {child.title}
              </p>
            </Link>
          ))}
        </details>
      ))}
    </div>
  );
};

export default Sidebar;
