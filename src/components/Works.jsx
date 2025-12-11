import React from 'react'

const Works = () => {
    const experiences = [
        {
            id: 1,
            role: 'Senior Frontend Developer',
            company: 'Tech Corp',
            duration: '2023 - Present',
            description: 'Leading the frontend team, migrating to Next.js, and improving performance by 40%.'
        },
        {
            id: 2,
            role: 'Full Stack Developer',
            company: 'Creative Agency',
            duration: '2021 - 2023',
            description: 'Built award-winning websites for clients using React, GSAP, and Node.js.'
        },
        {
            id: 3,
            role: 'Junior Web Developer',
            company: 'Startup Inc',
            duration: '2020 - 2021',
            description: 'Collaborated on the main product dashboard and implemented responsive designs.'
        }
    ]

    return (
        <div id="work" className="container mx-auto py-16 px-8 text-white">
            <h2 className="text-4xl font-bold mb-8 border-b-2 border-accent inline-block">
                Work Experience
            </h2>
            <div className="flex flex-col gap-8">
                {experiences.map((exp) => (
                    <div key={exp.id} className="glass-card relative overflow-hidden flex flex-col gap-2 hover:bg-glass/10 transition duration-300">
                        <h3 className="text-2xl font-bold text-accent">{exp.role}</h3>
                        <h4 className="text-xl text-gray-300 mb-2">
                            {exp.company} | <span className="text-sm text-gray-500">{exp.duration}</span>
                        </h4>
                        <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Works
