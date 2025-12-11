import React from 'react'

const Contact = () => {
    return (
        <div id="contact" className="w-full h-screen bg-[#0d0d0d] flex flex-col justify-center items-center px-4">
            <div className="max-w-[600px] w-full text-center">
                <p className="text-accent font-bold text-xl">CONTACT INFO</p>
                <h2 className="text-4xl font-bold my-4 text-gray-200">Let's Work Together</h2>
                <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                    I'm currently available for freelance work or part-time opportunities. If you have a project in mind or just want to say hi, feel free to send me a message!
                </p>

                <form action="" className='flex flex-col gap-4'>
                    <input
                        type="text"
                        placeholder='Name'
                        className="bg-[#ccd6f6] p-4 rounded-md text-black outline-none focus:ring-2 focus:ring-accent transition duration-200"
                    />
                    <input
                        type="email"
                        placeholder='Email'
                        className="bg-[#ccd6f6] p-4 rounded-md text-black outline-none focus:ring-2 focus:ring-accent transition duration-200"
                    />
                    <textarea
                        name="message"
                        rows="10"
                        placeholder='Message'
                        className="bg-[#ccd6f6] p-4 rounded-md text-black outline-none focus:ring-2 focus:ring-accent transition duration-200 resize-none"
                    ></textarea>
                    <button
                        className="border-2 border-white px-8 py-4 text-white font-bold mt-4 hover:bg-accent hover:border-accent transition duration-300 rounded-md"
                    >
                        Shoot me a message!
                    </button>
                </form>
            </div>

            <footer className="mt-auto pb-8 text-gray-500 text-sm">
                <p>© 2025 Manjal Kisi. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Contact
