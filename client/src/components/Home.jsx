import React from 'react';

const Home = () => {
    const boxes = [
        { color: "green", label: "Beginner Quiz", desc: "Test your knowledge at a beginner level" },
        { color: "blue", label: "Intermediate Quiz", desc: "Challenge yourself with intermediate-level questions" },
        { color: "red", label: "Experienced Quiz", desc: "Prove your expertise with advanced questions" },
    ];

    // Function to get the background color class
    const getBgColorClass = (color) => {
        switch(color) {
            case 'green': return 'bg-green-500';
            case 'blue': return 'bg-blue-500';
            case 'red': return 'bg-red-500';
            default: return 'bg-gray-500';
        }
    }

    return (
        <div className='h-screen flex justify-center items-center gap-4 bg-slate-50'>
            {boxes.map(({ label, desc, color }, index) => (
                <div key={index} className={`${getBgColorClass(color)} w-72 rounded-md shadow-xl py-4 px-4 text-center relative`}>
                    <p className='text-gray-700 text-xl'>Level:</p>
                    <h2 className='font-bold text-3xl my-4 text-gray-100'>{label}</h2>
                    <p className='font-normal'>{desc}</p>
                    <button className='text-white bg-slate-900 w-full rounded-md my-2 px-4 py-2'>Start the Quiz -&gt;</button>
                </div>
            ))}
        </div>
    );
}

export default Home;
