import React from 'react'

const About = () => {
    return (
        <div id="about" className="w-full text-secondary bg-primary py-16">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-accent">
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] b-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold">
                        <p>Hi. I'm Manjal Kisi, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            I am a hardworking and dedicated individual who believes in the power of consistency.
                            Currently pursuing my BCA at <span className="text-accent font-bold">Samriddhi College</span>, I have a deep passion for learning new technologies and applying them to solve real-world problems.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                            I thrive in collaborative environments and am always eager to work together with like-minded people to create something impactful.
                            Whether it's debugging a complex issue or brainstorming the next big feature, I bring 100% effort and creativity to the table.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
