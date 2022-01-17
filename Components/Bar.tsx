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
        <div className='my-2 text-white rounded-full bg-gray'>
            <motion.div className='flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue' style={{width: level}}
                variants={variants}
                initial="initial"
                animate="animate"
            >
                <Icon className='mr-3 text-white'/>
                {name}
            </motion.div>
        </div>
    );
};

export default Bar;