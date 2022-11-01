import {
  faDiagramProject,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import classnames from "classnames";

function GenericProjectSquare() {
  return (
    <div className="bg-frontSecondary rounded-lg aspect-video w-full flex items-center justify-center">
      <FontAwesomeIcon
        icon={faDiagramProject}
        className="w-20 text-bgPrimary"
      />
    </div>
  );
}

export default function ProjectsBar() {
  return (
    // <div className="flex flex-col gap-20">
    <div className="w-full h-full flex flex-col justify-between">
      {/* just a box to take the rest of the space, also primary, size full */}
      {/* <div className="bg-bgPrimary w-full h-full rounded-2xl p-4 text-2xl"> */}
      {/* <div> */}
      <div className="pb-4">Projects</div>
      {/* 2x 4:3 squares with secondary background and rounded-lg */}
      <div className="flex flex-col justify-between">
        <div className="flex gap-5 flex-col h-full">
          <GenericProjectSquare />
          <GenericProjectSquare />
          <GenericProjectSquare />
          <GenericProjectSquare />
        </div>
      </div>
      {/* </div> */}
      <Link
        href="/projects"
        className={classnames(
          // text
          "text-base font-semibold",
          // flex
          "gap-4 flex items-center self-end place-self-end justify-self-end",
          // interaction
          "select-none hover:brightness-125 hover:gap-6 transition-all duration-500 ease-out"
        )}
      >
        <div>More projects</div>
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}
