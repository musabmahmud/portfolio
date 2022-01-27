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
        <div className="absolute left-0 z-10 grid w-full h-auto px-4 py-6 bg-white rounded shadow-lg sm:grid-cols-2 gap-x-6">
        <motion.div 
            variants={fadeInUp}
            initial="initial"
            animate="animate" className="p-2 border-4 border-green-500">
          <Image
          src={image_path}
          alt={name}
          width={350}
          height={220}
          priority
          layout='responsive'
          className="m-auto"
        />
        </motion.div>
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={fadeInUp} className="my-2 text-2xl font-bold text-green-500">{name}</motion.h2>
          <motion.h3 variants={fadeInUp}>{description}</motion.h3>
          <motion.div
          variants={fadeInUp}
          >
            <a href={deployed_url} target="_blank" rel="noreferrer" className="flex my-2"><AiFillProject className="text-green-500" size={24}/> <span className="ml-2 text-xl uppercase hover:text-green-500">Live preview</span></a>
            <a href={github_url} target="_blank" rel="noreferrer" className="flex my-2"><AiFillGithub className="text-green-500" size={24}/> <span className="ml-2 text-xl uppercase hover:text-green-500">Code view</span></a>
          </motion.div>
          <motion.div variants={fadeInUp} className="flex flex-wrap mt-2 space-x-2 text-sm"><span className="font-bold">Technologies: </span>
            {
              key_techs.map(tech => <span key={tech} className="px-2 mb-2 bg-gray-50">
                {tech}
              </span>)
            }
          </motion.div>
        </motion.div>
        <button onClick={() => setShowDetail(null)} className="absolute z-20 p-1 top-4 right-4 focus:outline-none bg-slate-50"><MdClose size={30}/></button>
        </div>
        : 
        <div onClick={() => setShowDetail(id)}>
          <Image
            src={image_path}
            alt={name} 
            className="cursor-pointer"
            width={300}
            height={180}
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