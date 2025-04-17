import { Plus } from "@phosphor-icons/react";
import type { IconProps } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { useState } from "react";
import type React from "react";

interface ServiceCardProps {
  title: string;
  icon: React.ReactElement<IconProps>;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, imageUrl }) => {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className="group relative w-full h-80 rounded-lg overflow-hidden"
    >
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <motion.div className="cursor-pointer absolute bottom-2 left-2 right-2 px-4 py-3 rounded-lg backdrop-blur-md bg-black/30 flex justify-between items-center group-hover:flex">
        <div>
          <h3 className="text-sm font-semibold text-white ">{title}</h3>
          {/* <p className="text-xs text-white">Single rooms</p> */}
        </div>
        <button
          type="button"
          className="w-7 h-7 flex items-center justify-center rounded-md bg-black/20"
        >
          <Plus size={22} weight="thin" className="text-white" />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
