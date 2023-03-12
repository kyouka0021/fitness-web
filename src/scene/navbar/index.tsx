import logo from "@/assets/logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useEffect, useRef, useState } from "react";
import ActionButton from "@/shared/ActionButton";
import MenuMobile from "./Menu";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flex = "flex justify-between items-center";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <nav>
      <div className={`${flex} fixed top-0 z-30 w-full py-5`}>
        <div className={`${flex} mx-auto w-5/6 `}>
          <div className={`${flex} w-full gap-16`}>
            {/* left side */}
            <picture>
              <img src={logo} alt="logo" />
            </picture>
            {/* right side */}
            {isAboveMediumScreens ? (
              <div className={`${flex} w-full`}>
                <div className={`${flex} gap-8 text-sm`}>
                  <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="Contact us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                </div>
                <div className={`${flex} gap-8`}>
                  <p>Sign in</p>
                  <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                </div>
              </div>
            ) : (
              <MenuMobile selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
