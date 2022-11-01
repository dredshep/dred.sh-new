import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faDiagramProject,
  faSquareRss,
  faCalendarDays,
  faAddressBook,
  faArrowAltCircleDown,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function IconTextPair(props: {
  icon: IconProp;
  text: string;
  highlight?: boolean;
  iconClass?: string;
}) {
  return (
    <div
      className={
        "flex items-center gap-2 py-2 pl-2 pr-5 rounded-md select-none shrink-0 flex-nowrap whitespace-nowrap relative" +
        (props.highlight
          ? " bg-frontSecondary text-bgPrimary font-semibold"
          : " hover:bg-accent hover:text-frontPrimary cursor-pointer")
      }
    >
      {props.highlight && (
        // attach an faArrow floating to the left
        <FontAwesomeIcon
          icon={faAngleRight}
          className="absolute -left-5 text-frontSecondary transform"
        />
      )}
      <FontAwesomeIcon
        icon={props.icon}
        className={
          "text-sm w-9" + (props.iconClass ? ` ${props.iconClass}` : "")
        }
      />
      <div>{props.text}</div>
    </div>
  );
}

export default function LeftNavbar() {
  return (
    <div className="flex flex-col gap-3 text-lg rounded-2xl font-normal w-full text-frontPrimary">
      {/* nav menu with items Home, Projects, Blog, Schedule a call & Contact - highlight tab in use with shiny bg */}
      <IconTextPair icon={faHome} text="Home" highlight />
      <IconTextPair icon={faDiagramProject} text="Projects" iconClass="pb-px" />
      <IconTextPair icon={faSquareRss} text="Blog" iconClass="pb-px" />
      <IconTextPair
        icon={faCalendarDays}
        text="Schedule a call"
        iconClass="pb-0.5"
      />
      <IconTextPair icon={faAddressBook} text="Contact" iconClass="pb-px" />
    </div>
  );
}
