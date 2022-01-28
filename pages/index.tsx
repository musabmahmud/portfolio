import { motion } from "framer-motion";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import ServiceCard from "./../components/ServiceCard";
import { services } from "./../data";
import {stagger,fadeInUp} from './../animates';
const About = ({endpoint}) => {

  return (
    <div className="flex flex-col flex-grow pt-1 overflow-y-scroll" style={{height: '75vh'}}>
      <h6 className="font-medium text-justify sm:px-4">
        I&apos;m Md Musab Mahmud, Full Stack Web Developer, strongly Qualified more than 1 year in Frontend Development which provides high-impact web solutions for diverse industry organizations. To prove myself as a quick learner and highly energetic person face any challenge in such an organization in the field of Computer Science and Engineering where I can exploit my academic and logical skills and keep myself updated with the upcoming technologies.<br/>
        I&apos;ve experienced in responsive design that supports your site on any device like mobiles, tablets, laptops. I write my codes fully in handed and well-commented.
        
      </h6>
      <div
        className="flex-grow mt-5 sm:p-4">
        <h4 className="text-xl font-semibold tracking-wide">
          What I am doing?
        </h4>

        <motion.div className="grid gap-6 my-3 md:grid-cols-2"
        variants={stagger}
        initial="initial"
        animate="animate"
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              className="col-span-2 p-2 bg-gray-200 rounded-lg md:col-span-1 hover:shadow"
              key={service.id}
            >
              <ServiceCard service={service}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};


// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   return {
//     props: { endpoint: process.env.VERCEL_URL } , // will be passed to the page component as props
//   }
// }
// export const getServerSideProps: GetServerSideProps = async (
//    context: GetServerSidePropsContext
// ) => {
//    return { props: { endpoint: process.env.VERCEL_URL } }
// }

export const getServerSideProps: GetServerSideProps = async (
   context: GetServerSidePropsContext
) => {
   return { props: { endpoint : process.env.VERCEL_URL || null} }
}


export default About;