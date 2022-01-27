import { motion } from 'framer-motion';
import React, { useState } from 'react';
import ProjectCard from './../components/ProjectCard';
import ProjectNavbar from './../components/ProjectNavbar';
import { projects as projectsData } from './../data';
import { Category } from './../type';
import {stagger,fadeInUp} from './../animates';
const Projects = () => {
    
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");
  const handlerFilterCategory = (category: Category | "all") => {
      if (category === "all") {
        setProjects(projectsData);
        setActive(category);
        return;
      }
  
      const newArray = projectsData.filter((project) =>
        project.category.includes(category)
      );
      setProjects(newArray);
      setActive(category);
  };
  const [showDetail, setShowDetail] = useState<number|null>(null);

    return (
        <div className='px-5 overflow-y-scroll' style={{height: '75vh'}}>
           <ProjectNavbar
            handlerFilterCategory={handlerFilterCategory}
            active={active}/>
            <motion.div className='relative grid grid-cols-12 gap-4 mt-5'
              variants={stagger}
              initial="initial"
              animate="animate">
                {
                projects.map((project) => ( 
                    <motion.div
                    variants={fadeInUp}
                    key={project.id} className="col-span-12 p-2 bg-gray-100 rounded hover:shadow-lg sm:col-span-6 lg:col-span-4">
                        <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail}/>
                    </motion.div>
                ))}
            </motion.div>  
        </div>
    );
};

export default Projects;