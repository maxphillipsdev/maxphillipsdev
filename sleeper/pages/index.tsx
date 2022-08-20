import type { NextPage } from "next";
import Image from "next/image";

import { motion } from "framer-motion";

interface Props {
  desktopRef: React.RefObject<HTMLElement>;
}

const Home = ({ desktopRef }: Props) => {
  return (
    <>
      <motion.div
        drag
        style={{ width: 300 }}
        dragConstraints={desktopRef}
        dragMomentum={true}
        className="window"
      >
        <div className="title-bar">
          <div className="title-bar-text">A Window With Stuff In It</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          <Image src={"/images/logo.gif"} width={300} height={300} />
        </div>
      </motion.div>
    </>
  );
};

export default Home;
