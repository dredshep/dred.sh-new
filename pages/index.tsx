// React stuff
import React from "react";
// font-awesome stuff
import {
  faArrowRight,
  faDiagramProject,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// components
import LeftNavbar from "../components/LeftNavbar";
import RamIcon from "../components/svg/RamIcon";
import Ram2Icon from "../components/svg/Ram2Icon";
import Link from "next/link";
import RightAppBar from "../components/RightAppBar";
import ContactBar from "../components/ContactBar";

function ProjectPlaceholder({ title }: { title: string }) {
  return (
    <div className="bg-bgPrimary rounded-2xl flex flex-col justify-center items-center">
      <div className="text-2xl font-bold my-4">{title}</div>
      {/* image placeholder */}
      <div className="bg-frontSecondary rounded-lg aspect-video w-full flex items-center justify-center">
        <FontAwesomeIcon
          icon={faDiagramProject}
          className="w-20 text-bgPrimary"
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-bgSecondary text-frontSecondary min-h-screen flex flex-col gap-5 overflow-x-hidden">
      {/* logo */}
      <div className="w-full text-accent font-title text-4xl bg-bgPrimary py-5 px-10 ml-px font-bold flex justify-center">
        {/* ram icon from /ram.svg */}
        <div className="flex gap-2 max-w-7xl w-full">
          <RamIcon className="fill-accent w-10" />
          <div>dredshep</div>
          <Ram2Icon className="fill-accent w-10 ml-1" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="font-title text-4xl text-center flex gap-5 max-w-7xl w-full">
          {/* left navbar */}
          <div className="flex flex-col gap-5 items-center">
            <LeftNavbar />
            <ContactBar />
          </div>
          {/* content */}
          <div className="flex flex-col justify-between items-center gap-5 w-full">
            {/* Big 400px tall box */}
            <div className="bg-bgPrimary w-full h-52 rounded-2xl flex flex-col justify-center items-center">
              <div className="text-4xl font-bold ">dredshep</div>
              <div className="text-2xl font-bold ">Full Stack Developer</div>
            </div>
            {/* a few project boxes with secondary background and rounded-lg */}
            <div className="grid grid-cols-2 gap-5 w-full items-stretch">
              {/* left box */}
              <ProjectPlaceholder title="Project Highlight 1" />
              {/* right box */}
              <ProjectPlaceholder title="Project Highlight 2" />
              <ProjectPlaceholder title="Project Highlight 3" />
              <ProjectPlaceholder title="Project Highlight 4" />
              <ProjectPlaceholder title="Project Highlight 5" />
              <ProjectPlaceholder title="Project Highlight 6" />
            </div>
          </div>
          {/* right app bar */}
          <RightAppBar />
          {/* <SimpleCalculator /> */}
        </div>
      </div>
    </div>
  );
}
