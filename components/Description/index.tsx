import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import NumberTicker from '@/components/ui/number-ticker';
import { ArrowRight, Pause, PauseIcon } from 'lucide-react';
export default function index() {

    const phrase = "We craft home with Luxury Quality and Simplicity";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <h2>
                    {
                        phrase.split(" ").map((word, index) => {
                            return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                        })
                    }
                </h2>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>For over 20 years, we've mastered the art of crafting impeccable lifestyle standards that are both luxurious and sustainable. Experience the future of Dhuni Constructions Pvt. Ltd., where timeless elegance and modern sustainability converge to create a truly unparalleled living experience.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    {/* <Rounded className={styles.button}>
                        <p><a href="/about">About Us</a></p>
                    </Rounded> */}
                    <button onClick={() => window.location.href = '/about'} className=" uppercase group relative overflow-hidden border-[1px] border-white bg-transparent px-8 py-4 text-black transition-all duration-300 hover:border-orange-400">
                        <span className="relative z-10 flex items-center gap-2">
                            About Us
                            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 -z-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
                    </button>
                </div>
            </div>
            {/* <video className='mt-10' src="video1.mp4" autoPlay autoFocus muted onAbort={close}></video> */}
            {/* <img src="dhuni-intro.jpg" className='mt-10 rounded-md' alt="" /> */}

            <div className='md:flex grid grid-cols-2 gap-8 my-8 p-4 items-center content-center justify-between'>
                <div className='flex flex-col items-center justify-center'>
                    <p className="text-nowrap whitespace-pre-wrap text-8xl font-light tracking-tighter ">
                        <NumberTicker value={128000} />+
                    </p>
                    <p className='text-center leading-5'>Sq.ft. Land We Developed</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className="whitespace-pre-wrap text-8xl font-light tracking-tighter ">
                        <NumberTicker className='white' value={21} />+
                    </p>
                    <p className='text-center leading-5'>Years of Experience</p>
                </div>
                
                <div className='flex flex-col items-center justify-center'>
                    <p className="whitespace-pre-wrap text-8xl font-light tracking-tighter ">
                        <NumberTicker value={11} />+
                    </p>
                    <p className='text-center leading-5'>Successful Projects Delivered</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className="whitespace-pre-wrap text-8xl font-light tracking-tighter ">
                        <NumberTicker value={98} />%
                    </p>
                    <p className='text-center leading-5'>Happy Customers Rate</p>
                </div>
            </div>
        </div>
    )
}