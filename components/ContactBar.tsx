import {
  faGithub,
  faDiscord,
  faTelegram,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAt,
  faLink,
  faPaperPlane,
  faTShirt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import classNames from "classnames";

export default function ContactBar() {
  return (
    <div className="bg-bgPrimary rounded-xl flex items-start flex-col hover:brightness-110 transition-all duration-200 ease-in-out relative h-[280px]">
      <div
        className={classNames(
          "absolute top-0 left-0 opacity-30 z-10 w-full h-full"
        )}
      >
        <Image
          width={300}
          // set height element to whatever the height of the parent element is
          height={1000}
          src="/assets/images/social.png"
          className={classNames(
            "w-full h-full object-cover transform opacity-40 saturate-100 z-10",
            "object-center"
          )}
          alt="techy background"
        />
      </div>
      <h1 className="whitespace-nowrap font-semibold mt-9 mb-2 text-2xl px-8 select-none">
        Get in touch
      </h1>
      <div className="flex flex-col justify-center h-full z-20">
        <a target="_blank" href="https://t.me/dredshep" rel="noreferrer">
          <div className="pb-2 pt-2 text-frontSecondary hover:bg-accent hover:brightness-90 hover:text-text duration-300 ease-out font-title text-lg flex items-center px-8 hover:text-frontPrimary">
            <div className="text-2xl mr-6">
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="h-[22px] ml-px"
                // className="h-6"
              />
            </div>
            <div>dredshep</div>
          </div>
        </a>
        <a target="_blank" href="https://github.com/dredshep" rel="noreferrer">
          <div className="pb-2 pt-2 text-frontSecondary hover:bg-accent hover:brightness-90 hover:text-text duration-300 ease-out font-title text-lg flex items-center px-8 hover:text-frontPrimary">
            <div className="text-2xl mr-6">
              <FontAwesomeIcon icon={faGithub} className="h-6" />
            </div>
            <div>dredshep</div>
          </div>
        </a>
        <a
          target="_blank"
          href="https://discordapp.com/users/dredshep#6588"
          rel="noreferrer"
        >
          <div className="pb-2 pt-2 text-frontSecondary hover:bg-accent hover:brightness-90 hover:text-text duration-300 ease-out font-title text-lg flex items-center px-8 hover:text-frontPrimary">
            <div className="text-2xl mr-6">
              <FontAwesomeIcon icon={faDiscord} className="h-6 -ml-1" />
            </div>
            <div style={{ marginLeft: "-3px" }}>dredshep#6588</div>
          </div>
        </a>
        <a target="_blank" href="mailto:dred@dred.sh" rel="noreferrer">
          <div className="pb-2 mb-3 pt-2 text-frontSecondary hover:bg-accent hover:brightness-90 hover:text-text duration-300 ease-out font-title text-lg flex items-center px-8 hover:text-frontPrimary">
            <div className="text-2xl mr-6">
              <FontAwesomeIcon icon={faAt} className="h-6" />
            </div>
            <div style={{ marginLeft: "-1px" }}>dred@dred.sh</div>
          </div>
        </a>
      </div>
      {/* <a target="_blank" href="https://lawdesign.art" rel="noreferrer">
        <div className="pb-2 mb-5 pt-2 bg-secondary text-bg hover:bg-accent hover:brightness-90 hover:text-text duration-200 font-title text-lg flex items-center">
          <div className="text-2xl mr-6">
            <FontAwesomeIcon icon={faLink} className="h-6" />
          </div>
          <div style={{ marginLeft: "-1px" }}>Latest creation</div>
        </div>
      </a> */}
    </div>
  );
}
