import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import classNames from "classnames";

export function TagSquare({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={classNames(
        "text-base font-normal bg-bgSecondary px-2 py-1 rounded-md text-frontSecondaryOnSecondary hover:text-frontPrimary hover:bg-accent hover:brightness-90 select-none cursor-pointer transition-colors duration-300 ease-out",
        className
      )}
    >
      {children}
    </div>
  );
}

export default function SkillsBar() {
  return (
    <div className="flex flex-col h-full items-start">
      {/* <div className="text-xl font-bold pb-3">Skills</div> */}
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-2">
          <div className="text-xl font-semibold">Languages</div>
          <div className="flex flex-row flex-wrap gap-2">
            <TagSquare>TypeScript</TagSquare>
            <TagSquare>JavaScript</TagSquare>
            <TagSquare>HTML</TagSquare>
            <TagSquare>CSS</TagSquare>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-xl font-semibold">Frameworks</div>
          <div className="flex flex-row flex-wrap gap-2">
            <TagSquare>React</TagSquare>
            <TagSquare>Next.js</TagSquare>
            <TagSquare>TailwindCSS</TagSquare>
            <TagSquare>Node.js</TagSquare>
            <TagSquare>Deno</TagSquare>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-xl font-semibold">Databases</div>
          <div className="flex flex-row flex-wrap gap-2">
            <TagSquare>MongoDB</TagSquare>
            <TagSquare>PostgreSQL</TagSquare>
            <TagSquare>SQLite3</TagSquare>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-xl font-semibold">Tools</div>
          <div className="flex flex-row flex-wrap gap-2">
            <TagSquare>Git</TagSquare>
            <TagSquare>GitHub</TagSquare>
            <TagSquare>VSCode</TagSquare>
            <TagSquare>Figma</TagSquare>
            <TagSquare>Jira</TagSquare>
          </div>
        </div>
        <Link
          href="/projects"
          className={classNames(
            // text
            "text-base font-semibold",
            // flex
            "gap-4 flex items-center self-end place-self-end justify-self-end",
            // interaction
            "select-none hover:brightness-125 hover:gap-6 transition-all duration-500 ease-out"
          )}
        >
          <div>Detailed stack</div>
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </div>
  );
}
