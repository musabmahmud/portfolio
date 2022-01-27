import React, { FunctionComponent } from 'react';
import { Iskill } from '../type';
import {motion} from 'framer-motion';
const Bar:FunctionComponent<{
    data:Iskill
}> = ({data:{name,level,Icon}}) => {

    const variants = {
        initial:{
            width: 0,
        },
        animate:{
            width: `${level}`,
            transition:{
                duration: .5,
                type: "spring",
                damping: 10,
                stiffness: 100,
            }
        }
    }

    return (
        <div className='text-white bg-gray-100 rounded-full'>
            <motion.div className='flex capitalize items-center px-4 py-1 rounded-full bg-gradient-to-r from-green-500 to-blue-500' style={{width: level}}
                variants={variants}
                initial="initial"
                animate="animate"
            >
                <Icon className='text-white mr-1'/>
                {name}
            </motion.div>
        </div>
    );
};

export default Bar;