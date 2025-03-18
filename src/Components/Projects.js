import websiteImg1 from '../assets/ecommerce-websites.jpg';
import websiteImg2 from '../assets/food-ecommerce.jpg';
import websiteImg3 from '../assets/website-blog.png';

export default function Projects() {
    const config = {
        Projects : [
            {
                image: websiteImg3,
                description: 'Quality dairy products since 1995. Fresh milk, curd, ghee,homemade',
                link: 'https://dodladairy.com/'
            },
            {
                image: websiteImg2,
                description: 'Fresh milk, curd, ghee, all marriage dairy product',
                link: 'https://dir.indiamart.com/madurai/curd.html'
            },
            {
                image: websiteImg1,
                description: 'Dodla Dairy Limited: Quality dairy products since 1995. Fresh milk, curd, ghee, and more from 14 processing plants serving 11 states. Committed to purity and taste',
                link: 'https://dodladairy.com/'
            }
        ]
    }
    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
            <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[190px] font-bold text-blue-700"><span className='text-white'>My </span>Product</h1>
            <p>These are some of my best projects. I have built these with React, MERN and vanilla CSS. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.Projects.map((project) => (
                    <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}