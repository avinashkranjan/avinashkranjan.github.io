import { MdSchool, MdWork } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

interface ExperienceProps {
    index: number
    logo: string
    company: string
    position: string
    desc: string[]
    skills: string[]
    institute: string
    degree: string
    duration: string
}

const Experience = ({
    index,
    logo,
    company,
    position,
    desc,
    skills,
    institute,
    degree,
    duration,
}: ExperienceProps) => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    })

    const cardVariants = {
        hidden: { x: index % 2 === 0 ? 20 : -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: 'easeInOut' },
        },
    }

    return (
        <div
            className={`mb-6 md:mb-8 flex md:justify-between items-center w-full ${
                index % 2 === 0
                    ? 'md:flex-row-reverse left-timeline'
                    : 'right-timeline'
            }`}
        >
            <div className="order-1 md:w-5/12"></div>

            <span className="z-20 flex items-center order-1 justify-center w-6 h-6 md:w-9 md:h-9 bg-violet-200 rounded-full ring-4 md:ring-8 ring-white dark:ring-grey-800 dark:bg-violet-900">
                {company && (
                    <MdWork className="text-base md:text-xl text-violet-600 dark:text-violet-400" />
                )}
                {institute && (
                    <MdSchool className="text-base md:text-xl text-violet-600 dark:text-violet-400" />
                )}
            </span>

            <motion.div
                ref={ref}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="order-1 rounded-lg w-full ml-3 md:ml-0 bg-white dark:bg-grey-800 md:w-5/12 p-3 md:px-4 md:py-4"
            >
                <h3 className="mb-2 font-bold text-lg md:text-xl">
                    {logo && (
                        <Image
                            src="https://www.one24store.com/images/logo.png"
                            className="mr-2.5"
                            alt="logo"
                            width={50}
                            height={50}
                        />
                    )}
                    {company || institute}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {position || degree} | {duration}
                </p>
                <ul className="text-sm text-gray-400 mt-2 ml-4 list-disc">
                    {desc &&
                        desc.map((d, i) => (
                            <li key={i} className="mb-0.5">
                                {d}
                            </li>
                        ))}
                </ul>
                <span className="flex flex-wrap text-sm  font-medium pt-2">
                    {skills && (
                        <p className="text-gray-500 dark:text-gray-400">
                            Skills:
                        </p>
                    )}
                    {skills &&
                        skills.map((s, i) => (
                            <p key={i} className="mx-1">
                                <b className="text-black">•</b> {s}
                            </p>
                        ))}
                </span>
            </motion.div>
        </div>
    )
}

export default Experience
