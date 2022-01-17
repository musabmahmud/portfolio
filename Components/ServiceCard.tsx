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
        <div className='flex items-center px-2 py-4 space-x-4'>
            <div className='flex-none w-10'>
                <Icon className='text-green-500 w-10 h-full text-center'/>
            </div>
            <div className='flex-initial'>
                <h4 className='font-bold capitalize'>{title}</h4>
                <p className='mt-2' dangerouslySetInnerHTML={createMarkup()}/>
            </div>
        </div>
    );
};

export default ServiceCard;