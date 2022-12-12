'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';

const Contact = () => (
    <section className={`${styles.paddings}`} id="explore">
    <motion.div className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
            title={<>Contact <br className="md:block hidden" /> us </>}
            textStyles="text-center"
            
        />
        {/* !--create contact us form */}
        <form className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <input type="text" placeholder="Message" />
        </form>
    </motion.div>
    </section>
);

export default Contact;