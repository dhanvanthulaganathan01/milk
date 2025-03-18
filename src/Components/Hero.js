import HeroImg from '../assets/hero.png';
import { AiOutlineWhatsApp , AiOutlineMail } from "react-icons/ai";
import { HiOutlineMapPin } from "react-icons/hi2";
export default function Hero() {
    const config  = {
        subtitle: 'Im a Founder of Gomatha Milk Agency',
        social: {
            behance: ' +916379803030',
            linkedin: 'ulaganathanarumugam0380@gmail.com',
            github:'https://maps.app.goo.gl/jorMjk61cTNFQ1oG9?g_st=ac'
        }
    }
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
    <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Mr, <br/> A. <span className='text-blue-600'>Ulaganathan</span>
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
    
                <a href={config.social.behance} className=' text-white pr-5 hover:text-blue-500'><AiOutlineWhatsApp size={40}/></a>
                <a href={config.social.linkedin} className='  text-white pr-5 hover:text-blue-500'><AiOutlineMail size={40}/></a>
                <a href={config.social.github} className=' text-white hover:text-blue-500'><HiOutlineMapPin size={40}/></a>
            </div>
    </div>
    <img className='md:w-1/3' src={HeroImg} />
    </section>
}
