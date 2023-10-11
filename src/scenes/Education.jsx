import React from 'react'
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Education = () => {
        return (
                <section id="educations" className="pt-32 pb-16">
                        {/* HEADING */}
                        <motion.div
                                className="md:w-1/5 text-center md:text-left"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                        hidden: { opacity: 0, x: -50 },
                                        visible: { opacity: 1, x: 0 },
                                }}
                        >
                                <p className="font-playfair font-semibold text-4xl mb-5 text-red">
                                        Educations
                                </p>
                                <LineGradient width="mx-auto w-2/4" />
                                <p className="mt-10">
                                        Bachelor of Software Engineering from Damascus Univarsity

                                </p>
                        </motion.div>

                        <div className="md:flex md:justify-between gap-8" >
                                <motion.div
                                        className="mx-auto relative bg-blue max-w-[400px] h-[400px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person11"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ duration: 0.6 }}
                                        variants={{
                                                hidden: { opacity: 0, scale: 0.8 },
                                                visible: { opacity: 1, scale: 1 },
                                        }}
                                >
                                        <center>
                                                <p className=" items-center font-playfair text-xl font-bold ">Bachelor of Software Engineering</p>
                                        </center>
                                        <p className="text-center text-xl">
                                                Damascus University
                                                <br />
                                                2022-2024
                                                <br />
                                                Studied fundamental concepts related to
                                                software engineering and different project
                                                management approaches.
                                        </p>
                                </motion.div>

                                <motion.div
                                        className="mx-auto relative bg-red max-w-[400px] h-[400px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person11"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ delay: 0.2, duration: 0.6 }}
                                        variants={{
                                                hidden: { opacity: 0, scale: 0.8 },
                                                visible: { opacity: 1, scale: 1 },
                                        }}
                                >
                                        <center>
                                                <p className="font-playfair text-xl font-bold">  Information Technology Engineering</p>
                                        </center>
                                        <p className="text-center text-xl">
                                                Damascus University
                                                <br />
                                                2019-2022
                                                <br />
                                                Studied fundamental concepts of
                                                computer science such as: computer
                                                architecture, database design, compilers
                                                and computer graphics.

                                        </p>
                                </motion.div>

                                <motion.div
                                        className="mx-auto relative bg-yellow max-w-[400px] h-[] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-130px] before:-ml-[125px] before:left-1/2 before:content-person12"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                        variants={{
                                                hidden: { opacity: 0, scale: 0.8 },
                                                visible: { opacity: 1, scale: 1 },
                                        }}
                                >
                                        <center>
                                                <p className="font-playfair text-xl font-bold ">Ranked in 1st in Country in High School</p>
                                        </center>   <p className="text-center text-xl">
                                                Scored 95.65%
                                        </p>
                                </motion.div>
                        </div>

                </section>
        )
}

export default Education
