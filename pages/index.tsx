import { motion } from "framer-motion";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import ServiceCard from "./Components/ServiceCard";
import { services } from "./../data";
// import { IService } from "./../types";
import {stagger,fadeInUp} from './../animates';
import Link from "next/link";
const About = ({endpoint}) => {

  return (
    <div className="flex flex-col flex-grow pt-1">
      <h6 className="px-4 font-medium text-justify">
        I&apos;m Md Musab Mahmud, B.Sc in CSE and strongly Qualified more than 2 years in <b>FrontEnd Development</b>. I&apos;ve experienced in responsive design which is useful for supporting your site in any device like mobiles, tablets, laptops and any type of computer. I write all codes clearly in handed and commented for understanding or modifying easily.
      </h6>
      <div
        className="flex-grow p-4 mt-5">
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
              className="col-span-2 p-2 rounded-lg md:col-span-1 bg-gray-200 hover:shadow"
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