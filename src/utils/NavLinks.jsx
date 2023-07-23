import React from "react";
import { Store } from "../store/context/AppContext";
// import { NavLink } from "react-router-dom";

const NavLinks = ({marginTop}) => {
  const { data, tasks, changeLink } = Store();
  let isActive = "";
  for (let item in tasks) {
    if (tasks[item]) {
      isActive = item;
    }
  }

  return (
    <article>
      <p className={`mx-8 ${marginTop} text-[14px] font-semibold tracking-widest text-[#828fa3]`}>
        ALL BOARD({data?.length})
      </p>
      {data.map((item, index) => {
        return (
          <div
            className={
              isActive === item.name
                ? "mt-5 flex h-[60px] w-64 items-center rounded-r-[30px]   bg-[#635fc7] px-8  py-4 text-white no-underline "
                : "mt-5 flex items-center px-8"
        
            }
            onClick={() => changeLink(item.name)}
            key={index}>
            <div>
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
                  fill="#828FA3"
                />
              </svg>
            </div>
            <p className="ml-3 text-sm font-bold tracking-widest">
              {item.name}
            </p>
          </div>
        );
      })}
    </article>
  );
};

export default NavLinks;
