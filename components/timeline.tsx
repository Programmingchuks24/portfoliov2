"use client"
import { motion } from "framer-motion";

const TimelineItem = ({ item, index }: { item: any; index: number }) => {
  return (
    <div className="relative">
      {/* The Dot Animation */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="absolute -left-[41px] top-1 flex items-center justify-center z-10"
      >
        <div className="bg-white p-1 rounded-full">
          <div
            className={`size-3 rounded-full border-2 ${
              index === 0
                ? "bg-[#3e4cff] border-[#3e4cff]"
                : "bg-gray-300 border-gray-100"
            }`}
          />
        </div>
      </motion.div>

      {/* The Card Animation */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm mb-20 last:mb-0 "
      >
        <div className="flex flex-col justify-between md:flex-row-reverse">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block bg-[#3e4cff]/10 w-fit px-3 place-self-center rounded-full">
            {item.date}
          </span>

          <h3 className="text-2xl font-bold text-gray-900 flex flex-wrap items-center gap-3">
            {item.title}
          </h3>
        </div>

        <p className="text-[#3e4cff] font-medium mb-4">{item.company}</p>

        <ul className="space-y-3 text-gray-500">
          {item.points.map((point: string, i: number) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2.5 size-1.5 shrink-0 bg-gray-300 rotate-45" />
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export const Timeline = () => {
  const experiences = [
  { 
    title: "Full-stack Developer", 
    company: "Freelance", 
    date: "2019 - Present", // Add this field
    points: [
      "Specializing in React Native and Next.js development",
      "Delivering high-performance full-stack applications"
    ] 
  },
  { 
    title: "University Final Project", 
    company: "University", 
    date: "2025 - 2026",
    points: [
      "Developed a mobile app with React Native, Supabase, and Socket.io",
      "Managed full lifecycle from UI/UX design to backend integration"
    ] 
  },
];

  return (
    <div className=" py-10 px-6 md:px-0 md:w-full">
      <div className="relative border-l-2 border-gray-100 ml-3 pl-8 flex flex-col gap-16">
        {/* Animated Line Overlay */}
        <motion.div
          className="absolute left-0 top-0 w-[2px] bg-[#3e4cff] origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          style={{ height: "100%", left: "-2px" }}
        />
        {experiences.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            index={index}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </div>
  );
};