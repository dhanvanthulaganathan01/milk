import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: 'Hi, My name is A.Ulaganathan. I am a Milk Dealer. And Founder of Gomatha Milk Agency ',
        line2: 'It has been 25 years since this shop started The shop is open for twenty hours and Dealership(kc)',
        line3: 'You can get as many liters of milk as you want Milk curd, buttermilk , all dairy milk products Available required for marriage.'
    }
    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4  mb-5 w-[170px] font-bold text-white'>About<span className='text-blue-600'> Me</span></h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}