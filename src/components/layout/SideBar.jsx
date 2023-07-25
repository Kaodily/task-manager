import React from "react";
import { Store } from "../../store/context/AppContext";
import logolight from "../../assets/logo-light.svg";
import logodark from "../../assets/logo-dark.svg";
import NavLinks from "../../utils/NavLinks";
import Settings from "../../utils/Settings";
const SideBar = () => {
  const { theme, openModal } = Store();

  return (
    <section className="nav_desktop fixed  top-0 hidden h-full w-80 pt-6  md:block ">
      <aside className="">
        <img
          className="ml-8"
          src={theme ? logodark : logolight}
          alt="company logo"
        />
        <NavLinks marginTop={"my-12"} />
        <div className="mt-5 flex items-center px-8">
          <div>
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
                fill="#635fc7"
              />
            </svg>
          </div>
          <p
            data-modal="newboard"
            onClick={openModal}
            className="text-4 ml-3 font-semibold tracking-widest text-[#635fc7]">
            + Create New Board
          </p>
        </div>
        <Settings />
      </aside>
    </section>
  );
};

export default SideBar;
