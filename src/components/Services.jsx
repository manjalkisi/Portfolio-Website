import React from 'react'

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Full Stack Development',
            description: 'Building robust, scalable web applications from front to back using modern technologies like React, Node.js, and MongoDB.'
        },
        {
            id: 2,
            title: 'UI/UX Design',
            description: 'Creating intuitive and visually appealing user interfaces that provide seamless user experiences across all devices.'
        },
        {
            id: 3,
            title: 'API Integration',
            description: 'Developing and integrating RESTful APIs to connect your applications with third-party services and data sources.'
        },
        {
            id: 4,
            title: 'Website Optimization',
            description: 'Improving website performance, speed, and SEO to ensure your digital presence reaches its full potential.'
        }
    ]

    return (
        <div id="services" className="container mx-auto py-16 px-8 text-secondary min-h-[80vh] flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-12 border-b-2 border-accent inline-block pb-2">
                Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service) => (
                    <div key={service.id} className="glass-card relative overflow-hidden flex flex-col gap-4 hover:bg-glass/10 transition duration-300 transform hover:-translate-y-2 group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-full -mr-4 -mt-4 transition group-hover:bg-accent/20"></div>
                        <h3 className="text-2xl font-bold text-accent group-hover:text-secondary transition duration-300">{service.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services
