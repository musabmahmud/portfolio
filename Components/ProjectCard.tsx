import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../type";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animates";

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail:null|number;
  setShowDetail:(id:null|number) => void;
}> = ({
  project: {
    id,
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
  showDetail,
  setShowDetail,
}) => {
  return (
    <div>
      {
        showDetail === id ?
        <div className="absolute grid sm:grid-cols-2 bg-white left-0 z-10 h-auto w-full gap-x-6 px-4 py-6 shadow rounded">
        <motion.div 
            variants={fadeInUp}
            initial="initial"
            animate="animate" className="border-4 border-green-500 p-2">
          <Image
          src={image_path}
          alt={name} 
          className="cursor-pointer"
          width={300}
          height={300}
          priority
          layout='responsive'
        />
        </motion.div>
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={fadeInUp} className="my-5 text-2xl font-bold text-green-500">{name}</motion.h2>
          <motion.h3 variants={fadeInUp}>{description}</motion.h3>
          <motion.div
          variants={fadeInUp}
          >
            <a href={github_url} className="flex my-2"><AiFillGithub className="text-green-500" size={30}/> <span className="ml-2 text-xl uppercase">Github</span></a>
            <a href={deployed_url} className="flex my-2"><AiFillProject className="text-green-500" size={30}/> <span className="ml-2 text-xl uppercase">Project</span></a>
          </motion.div>
          <motion.div variants={fadeInUp} className="flex flex-wrap mt-5 space-x-2 text-sm"><span className="font-bold">Technologies: </span>
            {
              key_techs.map(tech => <span key={tech} className="bg-gray-50 px-2 mb-2">
                {tech}
              </span>)
            }
          </motion.div>
        </motion.div>
        <button onClick={() => setShowDetail(null)} className="absolute top-4 right-4 focus:outline-none p-1 z-20 bg-slate-50"><MdClose size={30}/></button>
        </div>
        : 
        <div onClick={() => setShowDetail(id)}>
          <Image
            src={image_path}
            alt={name} 
            className="cursor-pointer"
            width={300}
            height={300}
            priority
            layout='responsive'
          />
          <p className="my-2 text-center">{name}</p>
        </div>
      }
    </div>
  );
};

export default ProjectCard;