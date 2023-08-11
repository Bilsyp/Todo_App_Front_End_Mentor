import { useToggle } from "@uidotdev/usehooks";
import { useState } from "react";

import { theme } from "../utils";
import Buttons from "./Buttons";

const Nav = () => {
  const [dark, setDark] = useState(false);

  return (
    <nav className='nav my-4 flex items-center justify-between w-[90%] md:w-[84%] lg:w-[40%] mx-auto'>
      <div className='brand'>
        <h1 className=' font-semibold tracking-[0.80rem] text-[1.6rem]'>
          TODO
        </h1>
      </div>
      <div>
        <Buttons setDark={setDark} dark={dark} />
      </div>
    </nav>
  );
};

export default Nav;
