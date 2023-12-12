import 'animate.css/animate.min.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Contact = () => {
    const { register, formState: { errors }, reset, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log('Form submitted:', data);
        const userMessage = {
            name: data.name,
            email: data.email,
            message: data.message,
        }

        // console.log(userMessage)

        await axios.post("https://saifur-portfolio-server.vercel.app/api/v1/user/messages", userMessage)
        .then(res => {
            console.log(res);
            if(res.data.insertedId)
            {
                toast('Thank you for  writing to me!', {
                    icon: '👏',
                });

                // console.log("success");
            }
        })
        .catch(err => {
            // console.log(err.message)
        })
        

        reset();
    };

    const contactInfo = {
        name: 'Md Saifur Rahman',
        email: 'tosaifurrahman@gmail.com',
        linkedIn: 'linkedin.com/in/mr-saifur-rahman'
    };

    return (
        <div className="contact-section p-10">
            <div className="text-center mb-20">
                <h1 className="text-2xl animate__animated animate__fadeInUp animate__delay-1s">
                    <span className='text-4xl font-bold'>|</span> <span className='px-3 font-bold'>03 : Contact Me</span>{' '}
                    <span className='text-4xl font-bold'>|</span>
                </h1>
            </div>
            <div>
                <div className="container mx-auto text-neutral-300 w-2/3">
                    <p className="mb-2">
                        Contact me by filling out the form below. For direct inquiries, you can also reach out to me using the following information.
                    </p>
                    <div className='text-right border-r-4 pr-4 border-blue-300 mt-8 mb-10'>
                        <div className="mb-2">
                            <strong className=''>Name:</strong> {contactInfo.name}
                        </div>
                        <div className="mb-2">
                            <strong>Email:</strong> {contactInfo.email}
                        </div>
                        <div className="mb-2">
                            <strong>Social:</strong> <a href="https://linkedin.com/in/mr-saifur-rahman" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container mx-auto text-neutral-300 w-2/4 bg-[#193a5e] drop-shadow-xl p-5 rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="text-neutral-300 animate__animated animate__fadeInUp animate__delay-2s">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-neutral-300 font-bold mb-2 ">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            {...register('name', { required: true })}
                            placeholder='Name'
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-neutral-900"
                        />
                        {errors.name && <span className="text-xs text-orange-500 ">Name is required</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-neutral-300 font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            {...register('email', { required: true })}
                            placeholder='Email'
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-neutral-900"
                        />
                        {errors.email && <span className="text-xs text-orange-500 ">Email is required</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-neutral-300 font-bold mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            {...register('message', { required: true })}
                            placeholder='Your message...'
                            className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring focus:border-blue-300 text-neutral-900"
                            rows="4"
                        ></textarea>

                        {errors.message && <span className="text-xs text-orange-500 ">Message is required</span>}
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-full inline-block text-lg hover:bg-blue-600"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
