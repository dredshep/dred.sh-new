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
            {/* 2 boxes side by side, 500px tall each */}
            <div className="flex flex-row  h-96 gap-5 w-full items-stretch">
              {/* left box */}
              <div className="bg-bgPrimary flex-1 rounded-2xl flex flex-col justify-center items-center">
                <div className="text-2xl font-bold ">
                  Skills
                  <br />
                  overview
                </div>
              </div>
              {/* right box */}
              <div className="bg-bgPrimary flex-1 rounded-2xl flex flex-col justify-center items-center">
                <div className="text-2xl font-bold ">
                  Contact
                  <br /> summary
                </div>
              </div>
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
