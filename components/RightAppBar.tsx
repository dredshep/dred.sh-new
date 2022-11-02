import ProjectsBar from "./ProjectsBar";
import SkillsBar from "./SkillsBar";
import classNames from "classnames";
import Image from "next/image";

export default function RightAppBar() {
  return (
    <div className="flex flex-col bg-bgPrimary px-[42px] rounded-2xl w-[calc(292px)] shrink-0 relative overflow-hidden hover:brightness-110 transition-all duration-150 ease-out h-[568px]">
      {/* the following image is very wide; we need it to be taller than it is wide. it is also horizontal, we need it to be vertical
			so we need to rotate it 90 degrees clockwise, and then we need to translate it to the left by 50% of its height, and then we need to translate it down by 50% of its width*/}

      <div
        className={classNames(
          "absolute top-0 left-0 opacity-30 z-10 w-full h-full"
        )}
      >
        <Image
          width={300}
          // set height element to whatever the height of the parent element is
          height={1000}
          src="/assets/images/techy.png"
          className={classNames(
            "w-full h-full object-cover transform opacity-25 saturate-100 z-10 rotate-180",
            "object-cover"
          )}
          alt="techy background"
        />
      </div>
      {/* another similar one but with a top to bottom gradient, z-20 */}
      <div
        className={classNames(
          "absolute top-0 left-0 opacity-90 z-20 w-full h-full",
          "bg-gradient-to-b from-bgPrimary to-transparent"
          // "bg-gradient-to-b from-bgPrimary to-transparent"
        )}
      />
      <div className="w-full h-full flex shrink-0 flex-1 z-20 brightness-125 opacity-75 pb-4 pt-6">
        <SkillsBar />
      </div>
    </div>
    // </div>
  );
}
