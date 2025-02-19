import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Dashboard from './Dashboard';
import RichTextEditor from './RichTextEditor';
import Navbar from './Navbar';

const Counter = () => {
    const [count, setCount] = useState(0);

    const bgColorLevel = `rgba(255,196,12, ${count / 10})`; // Linear color change

    return (<>
    <Navbar />
        <motion.div
            className="flex md:flex-row flex-col-reverse justify-center  gap-2"
            style={{ backgroundColor: bgColorLevel }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
        >
            <div className='flex flex-col items-center justify-center gap-2'>
                <div className='flex flex-col items-center justify-center md:h-[46vh] h-[30vh] md:w-[46vw] w-[96vw]'>
                    <h1 className="md:text-4xl text-base font-bold mb-4">Counter: {count}</h1>
                    <div className="space-x-4">
                        <button
                            onClick={() => setCount(count - 1)}
                            className="md:px-4 px-2 md:py-2 py-1 bg-red-500 text-white font-extrabold md:text-xl text-base rounded"
                        >
                            -
                        </button>
                        <button
                            onClick={() => setCount(0)}
                            className="md:px-4 px-2 md:py-2 py-1 bg-gray-500 text-white font-extrabold md:text-xl text-base rounded"
                        >
                            Reset
                        </button>
                        <button
                            onClick={() => setCount(count + 1)}
                            className="md:px-4 px-2 md:py-2 py-1 bg-blue-500 text-white font-extrabold  md:text-xl text-base rounded"
                        >
                            +
                        </button>
                    </div>

                </div>
                <Dashboard />
            </div>
            <RichTextEditor />
        </motion.div>
    </>

    );
};

export default Counter;