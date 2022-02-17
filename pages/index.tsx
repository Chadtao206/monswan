import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { AnimatePresence, motion } from 'framer-motion';
import { IoMdArrowBack } from 'react-icons/io';
import Navbar from '../components/ThemeChanger';
import { Sidebar } from '../components/Sidebar';

const questions = [
  {
    title: 'What\'s your gender?',
    choices: ['Female', 'Male'],
  },
  {
    title: 'Are you currently pregnant or nursing?',
    choices: ['No', 'Yes'],
  },
  {
    title: 'What\'s your skin type?',
    choices: ['Dry', 'Oily', 'Combination'],
  },
  {
    title: 'Is your skin sensitive?',
    choices: ['No', 'Yes'],
  },
];

const list = {
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  initial: {
    y: 25,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
};

const title = {
  initial: {
    y: 25,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  exit: {
    y: -25,
    opacity: 0,
    transition: {
      duration: 0.4,
      y: { stiffness: 1000, velocity: -100 },
    },
  },
};

const Question = ({ q, setQ }: any) => {
  const [selected, setSelected] = useState(-1);
  return (
    <>
      <motion.div
        variants={title}
        animate="show"
        initial="initial"
        exit="exit"
        className="text-center text-[20px] mb-4 font-semibold !text-th-primary-dark"
      >
        {q.title}
      </motion.div>
      <motion.ul
        className="px-10 my-8 w-full"
        variants={list}
        animate="show"
        initial="initial"
      >
        {q.choices.map((a: string, i: number) => (
          <motion.li variants={item} key={a}>
            <button
              onClick={() => setSelected(i)}
              className={`flex capitalize justify-between btn border-none btn-block mx-2 px-8 btn-sm text-th-${
                selected === i ? 'accent' : 'primary'
              }-dark !bg-th-primary-light shadow-xl rounded-full`}
            >
              <div>{a}</div>
              <input
                type="checkbox"
                onChange={() => null}
                checked={selected === i}
                className="checkbox checkbox-sm checkbox-secondary rounded-full"
              />
            </button>
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
};

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [question, setQuestion] = useState<number>(0);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <div className="antialiased relative font-sans h-full w-full bg-th-background text-th-primary-dark">
      <Navbar theme={theme} />
      <Sidebar setTheme={setTheme} />
      <main>
        <div className="relative pt-12 pb-12 h-full px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8 bg-th-background">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-th-accent-dark sm:text-4xl">
                Tailwind Demo with Next Themes (and Framer Motion)
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl sm:mt-4">
                Welcome to Mongoose 2.0 - MonSwan 🦢 (trademark pending)
              </p>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-1 bg-th-background-secondary p-6 flex flex-col justify-between">
                  <div className="text-xl font-semibold">
                    Tailwind CSS vs Styled Components
                  </div>
                  <div className="flex-1">
                    <p className="text-sm badge badge-sm">Pros and Cons</p>
                    <div className="flex">
                      <div className="w-48 flex flex-col items-start mt-4">
                        <div className="text-center w-full font-semibold mb-3">
                          Tailwind CSS
                        </div>
                        <div className="badge text-xs w-full relative right-2 badge-primary badge-outline my-1">
                          Good Defaults 😁
                        </div>
                        <div className="badge text-xs w-full relative right-2 badge-primary badge-outline my-1">
                          Extensible Themes 😁
                        </div>
                        <div className="badge text-xs w-full relative right-2 badge-primary badge-outline my-1">
                          Framework Agnostic 😁
                        </div>
                        <div className="badge text-xs w-full relative right-2 badge-primary badge-outline my-1">
                          Small Bundle 😁
                        </div>
                        <div className="badge text-xs w-full relative right-2 badge-primary badge-outline my-1">
                          Rapid DX/Iteration 😁
                        </div>
                        <div className="badge text-xs w-full relative right-2 badge-primary badge-outline my-1">
                          Actively Maintained 😁
                        </div>
                        <div className="badge text-xs w-full relative right-2 badge-error badge-outline my-1 mt-4">
                          Learning Curve 😭
                        </div>
                        <div className="badge text-xs w-full relative right-2 badge-error badge-outline my-1">
                          Inline CSS Logic 😭
                        </div>
                        <div className="badge text-xs w-full relative right-2 badge-error badge-outline my-1">
                          Long Class Names 😭
                        </div>
                      </div>
                      <span className="w-1 bg-th-accent-dark h-96"></span>
                      <div className="w-48 flex flex-col items-center mt-4">
                        <div className="text-center ml-3 w-full font-semibold mb-3">
                          Styled Components
                        </div>
                        <div className="badge text-xs w-full relative left-2 badge-primary badge-outline my-1">
                          Native CSS Syntax 😁
                        </div>
                        <div className="badge text-xs w-full relative left-2 badge-primary badge-outline my-1">
                          CSS Conditional Separate 😁
                        </div>
                        <div className="badge text-xs w-full relative left-2 badge-primary badge-outline my-1">
                          CSS in JS 😁
                        </div>
                        <div className="badge text-xs w-full relative left-2 badge-primary badge-outline my-1">
                          Clear and Readable 😁
                        </div>
                        <div className="badge text-xs w-full relative left-2 badge-primary badge-outline my-1">
                          CSS Follows Comp 😁
                        </div>
                        <div className="badge text-xs w-full relative left-2 badge-error badge-outline my-1 mt-4">
                          Redundancy & Verbosity 😭
                        </div>
                        <div className="badge text-xs w-full relative left-2 badge-error badge-outline my-1">
                          Extra JS layer in App 😭
                        </div>
                        <div className="badge text-xs w-full relative left-2 badge-error badge-outline my-1">
                          Not Universal 😭
                        </div>
                        <div className="badge text-xs w-full relative left-2 badge-error badge-outline my-1">
                          CSS&Comp tight Coupled 😭
                        </div>
                        <div className="badge text-xs w-full relative left-2 badge-error badge-outline my-1">
                          Manual Media Queries 😭
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-1 bg-th-background-secondary p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-xl font-medium text-th-accent-dark">
                      Routing Transitions
                    </p>
                    <div className="block mt-2">
                      <p className="mt-3 text-base">
                        Using framer motion library to create routing animations
                        that can be customized with configs.
                      </p>
                    </div>
                  </div>
                  <div className="h-80 shadow-xl rounded-lg bg-th-background px-5 py-3">
                    <div className="question-container">
                      <AnimatePresence exitBeforeEnter>
                        {questions.map(
                          (q, i) =>
                            question === i && (
                              <motion.div
                                exit={{ opacity: 0, y: -25 }}
                                transition={{ duration: 1 }}
                              >
                                <Question
                                  key={i}
                                  q={q}
                                  setQ={(n: number) =>
                                    setQuestion(
                                      (question + questions.length + n) %
                                        questions.length
                                    )
                                  }
                                />
                              </motion.div>
                            )
                        )}
                      </AnimatePresence>
                    </div>
                    <motion.div
                      layout="position"
                      transition={{ duration: 0.3 }}
                      className="flex justify-center"
                    >
                      <button
                        onClick={() =>
                          setQuestion(
                            (question + questions.length - 1) % questions.length
                          )
                        }
                        className="btn mx-2 bg-th-primary-light border-0 shadow-xl btn-circle text-th-primary-dark border-radius[24px]"
                      >
                        <IoMdArrowBack size={24} />
                      </button>
                      <button
                        onClick={() =>
                          setQuestion(
                            (question + questions.length + 1) % questions.length
                          )
                        }
                        className="btn mx-2 px-8 bg-th-primary-dark shadow-xl text-th-secondary-dark rounded-full"
                      >
                        Next
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="bg-th-background-secondary h-full">
                  <h1 className="mt-6 text-center text-xl font-semibold">
                    Animated Keyframes Using Framer Motion
                  </h1>
                  <motion.div
                    animate={{
                      scale: [1, 2, 2, 1, 1],
                      rotate: [0, 0, 270, 270, 0],
                      borderRadius: ['20%', '20%', '50%', '50%', '20%'],
                    }}
                    className="bg-th-accent-dark w-[150px] h-[150px] rounded-lg mx-auto mt-28"
                    transition={{
                      duration: 2,
                      ease: 'easeInOut',
                      times: [0, 0.2, 0.5, 0.8, 1],
                      repeat: Infinity,
                      repeatDelay: 0.5,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-th-background text-center font-semibold lg:text-left">
        <div className="w-full flex justify-center mb-2">
          <div className="mx-1">Made With</div>
          <div className="heart"></div>
          <div className="mx-1">By Chad Tao</div>
        </div>
        <div className="text-th-accent-dark text-center p-4">
          © 2022 Copyright
          <span className="ml-2">Populus Media</span>
        </div>
      </footer>
    </div>
  );
}
