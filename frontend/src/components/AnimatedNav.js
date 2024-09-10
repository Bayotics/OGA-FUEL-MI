
import React, { useEffect, useState } from "react";
import {FiChevronDown,} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { LuFuel } from "react-icons/lu";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { GiGasStove } from "react-icons/gi";
import { MdOutlinePropaneTank } from "react-icons/md";
import { Link } from "react-router-dom";







const AnimatedNav = () => {
  return (
    <div className="flex w-[50%] justify-start text-neutral-200 pl-6 md:justify-center">
      <Tabs />
    </div>
  );
};

const Tabs = () => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-2"
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({ children, tab, handleSetSelected, selected }) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-0 rounded-full px-3 transition-colors ${
        selected === tab
          ? " text-black"
          : "text-black font-medium hover:text-[#1a2eeb] hover:font-bold"
      }`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

const Content = ({ selected, dir }) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden" key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
    />
  );
};

const Company = () => {
  return (
    <div>
      <div className="flex gap-4">
        <div>
          <Link to = '/aboutus'>
            <h3 className="mb-2 text-sm font-medium">About Us</h3>
            <button className="mb-1 block text-xs text-neutral-400">
              About Fuel me
            </button>
            <button className="block text-xs text-neutral-400 mt-2">
              Our team
            </button>
            <button className="mb-1 block text-xs text-neutral-400 mt-2">
              Reviews
            </button>
          </Link>
        </div>
        <div>
          <Link to= '/services'>
            <h3 className="mb-2 text-sm font-medium">Services</h3>
            <button className="mb-1 block text-xs text-neutral-400">
              Why Us?
            </button>
            <button className="block text-xs text-neutral-400 mt-2">
              How Fuel me works
            </button>
          </Link>
        </div>
        <div>
          <Link to='career'>
            <h3 className="mb-2 text-sm font-medium">Careers</h3>
            <button className="mb-1 block text-xs text-left text-neutral-400">
              Explore our job <br/> openings
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Fuels = () => {
  return (
      <div className="grid grid-cols-4 gap-4 divide-x divide-neutral-700">
        <Link to= '/fuel'>
          <button
            className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
          >
            <LuFuel className="mb-2 text-xl text-indigo-300" />
            <span className="text-xs">Petrol</span>
          </button>
        </Link>
        <Link to= '/diesel'>
          <button
            className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
          >
            <BsFuelPumpDiesel className="mb-2 text-xl text-indigo-300" />
            <span className="text-xs">Diesel</span>
          </button>
        </Link>
        <Link to= '/cng'>
          <button
            className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
          >
            <MdOutlinePropaneTank className="mb-2 text-xl text-indigo-300" />
            <span className="text-xs">CNG</span>
          </button>
        </Link>
        <Link to= '/lpg'>
          <button
            className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
          >
            <GiGasStove className="mb-2 text-xl text-indigo-300" />
            <span className="text-xs">LPG</span>
          </button>
        </Link>
      </div>
    
  );
};
const Support = () => {
  return (
    <div>
      <div className="px-1 py-1 flex justify-center gap-8">
        <div>
          <Link to = "/contactus">
            <h4 className="mb-0.5 text-sm font-medium cursor-pointer">Contact Us</h4>
          </Link>
        </div>
        <div>
          <Link to = "/policy">
            <h4 className="mb-0.5 text-sm font-medium cursor-pointer">Privacy Policy</h4>
          </Link>
        </div>
        <div>
          <Link to = '/faqs'>
            <h4 className="mb-0.5 text-sm font-medium cursor-pointer">FAQs</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

const TABS = [
  {
    title: "Fuels",
    Component: Fuels,
  },
  {
    title: "Company", //about us, services +1 more
    Component: Company,
  },
  {
    title: "Support", // FaQs, Contact us
    Component: Support,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));

export default AnimatedNav