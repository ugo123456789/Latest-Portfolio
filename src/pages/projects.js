import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";

import React from "react";
import eStore from "../../public/images/projects/E-store.png";
import Admin from "../../public/images/projects/admin.png";
import Gym from "../../public/images/projects/gym.png";
import ladderhills from "../../public/images/projects/ladderhills.png";


import { FeaturedProject } from "@/components/projects/featuredProject";
import { Project1 } from "@/components/projects/project1";
import Transition from "@/components/Transition";

const projects = () => {
  return (
    <>
      <Head>
        <title>Ugonna | Projects</title>
        <meta name="description" content="Ugonna projects" />
      </Head>
	  <Transition/>
      <main className="dark:text-light w-full mt-2 flex flex-col items-center justify-center">
        <Layout className="pt-8">
          <AnimatedText text="My Projects" text1="" text2="" className="" />

          <div className="mt-4 grid grid-cols-6  gap-12 xl:gap-16">
<<<<<<< HEAD
            <div className="col-span-6">
              <FeaturedProject
                title="E-Store-Admin CMS Application"
                type="Featured Project"
                summary="A feature-rich ecommerce content management system which helps users create and manage content for their e-commerce store using a human-friendly interface, rather than needing to work directly with the code. Built with NextJS, Tailwind CSS(Shadcn UI), Typescript, Clerk Authentication."
                link="https://e-store-admin-ugo123456789.vercel.app/"
                github="https://github.com/ugo123456789/E-Store-Admin"
                img={Admin}
              />
            </div>
            <div className="md:col-span-3 col-span-6">
              <Project1
                title="E-Store Application"
=======
          <div className="col-span-6">
              <FeaturedProject
                title="LadderHills"
                type="Featured Project"
                summary="Built the official website for a start-up recruitment agency."
                link="https://ladderhills.com/"
                github="https://github.com/ugo123456789/"
                img={ladderhills}
              />
            </div>
 
            <div className="md:col-span-3 col-span-6">
              <Project1
                title="E-Store"
>>>>>>> 8d8849b (Typescript added. LadderHills Project added)
                type="Web Application"
                link="https://e-store-ugo123456789.vercel.app/"
                github="https://github.com/ugo123456789/e-Store"
                img={eStore}
              />
            </div>
            <div className="md:col-span-3 col-span-6">
              <Project1
                title="FitGym"
<<<<<<< HEAD
                type="Website Template"
=======
                type="Website"
>>>>>>> 8d8849b (Typescript added. LadderHills Project added)
                link="https://fit-gym-five.vercel.app/"
                github="https://github.com/ugo123456789"
                img={Gym}
              />
            </div>
<<<<<<< HEAD
            <div className="col-span-6">
              <FeaturedProject
                title="LadderHills"
                type="Website"
                summary="Built the official website for a start-up recruitment agency. Currently at the early stages."
                link="https://ladderhills.com/"
                github="https://github.com/ugo123456789/"
                img={ladderhills}
=======
  
            <div className="col-span-6">
              <FeaturedProject
                title="E-Store-Admin "
                type="Web Application"
                summary="A feature-rich ecommerce content management system which helps users create and manage content for their e-commerce store using a human-friendly interface, rather than needing to work directly with the code. Built with NextJS, Tailwind CSS(Shadcn UI), Typescript, Clerk Authentication."
                link="https://e-store-admin-ugo123456789.vercel.app/"
                github="https://github.com/ugo123456789/E-Store-Admin"
                img={Admin}
>>>>>>> 8d8849b (Typescript added. LadderHills Project added)
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
