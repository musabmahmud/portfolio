import React, { FunctionComponent } from 'react';
import { IService } from '../type';

const ServiceCard: FunctionComponent<{service:IService}> = ({service:{title,about,Icon},
}) => {
    const createMarkup = ()=>{
        return {
            __html:about
        }
    }
    return (
        <div className='flex items-center px-1 py-1 space-x-4 sm:py-4 sm:px-2'>
            <div className='flex-none w-10'>
                <Icon className='w-10 h-full text-center text-green-500'/>
            </div>
            <div className='flex-initial'>
                <h4 className='font-bold capitalize'>{title}</h4>
                <p className='mt-2' dangerouslySetInnerHTML={createMarkup()}/>
            </div>
        </div>
    );
};

export default ServiceCard;