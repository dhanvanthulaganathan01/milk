
export default function Contact () {

    const config = {
        email : 'ulaganathanarumugam0380@gmail.com',
        phone: '+91 637903030'
    
    
    
    }

    return <section id='contact' className='flex flex-col bg-primary px-5 py-32 text-white'>
        <div className='flex flex-col items-center'>
        
            <h1 className='text-4xl border-b-4  border-secondary mb-5 w-[180px] font-bold'>Contact<span className='text-blue-600'>Me</span></h1>
            <p className='pb-5'>If you want to discuss more in detail, please contact me</p>
            <p className='py-2 '><span className='font-bold'>Email :</span><a  className="text border-b-3 " href="ulaganathanarumugam0380@gmail.com">dhanvanthulaganathan@gmail.com</a> </p>
            <p className='py-2'><span className='font-bold'>Phone :</span> {config.phone}</p>
            
        </div>
    </section>
}