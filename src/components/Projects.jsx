import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            image: 'https://via.placeholder.com/600x400?text=Project+1', // Placeholder
            description: 'A fully functional e-commerce store with cart and checkout.',
            tech: ['React', 'Redux', 'Firebase'],
            github: '#',
            live: '#'
        },
        {
            id: 2,
            title: 'Social Media Dashboard',
            image: 'https://via.placeholder.com/600x400?text=Project+2', // Placeholder
            description: 'Real-time dashboard for tracking social media metrics.',
            tech: ['Next.js', 'Tailwind', 'Chart.js'],
            github: '#',
            live: '#'
        },
        {
            id: 3,
            title: 'Task Management App',
            image: 'https://via.placeholder.com/600x400?text=Project+3', // Placeholder
            description: 'Productivity tool for teams with drag-and-drop features.',
            tech: ['Vue', 'Vuex', 'Node.js'],
            github: '#',
            live: '#'
        }
    ]

    return (
        <div id="projects" className="container mx-auto py-16 px-8 text-white bg-primary">
            <h2 className="text-4xl font-bold mb-8 border-b-2 border-cyan inline-block">
                Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project.id} className="glass-card p-0 overflow-hidden flex flex-col group hover:-translate-y-2 transition duration-300">
                        <div className="h-48 bg-gray-800 overflow-hidden relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center gap-4">
                                <a href={project.github} className="text-white hover:text-accent text-2xl"><FaGithub /></a>
                                <a href={project.live} className="text-white hover:text-accent text-2xl"><FaExternalLinkAlt /></a>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4 flex-1">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((t, idx) => (
                                    <span key={idx} className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
