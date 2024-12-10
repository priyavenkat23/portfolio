import AboutImg from '../assets/aboutme.png';

export default function About () {
    const config  = {
        line1: '* Hi, My name is Shanmugapriya Gunaseelan. I am a Full stack web developer. Expertise in several Java/J2EE technologies like Spring, Servlets ,JSP, JSTL, MVC, Struts, JDBC, Hibernate, WebSphere portal, Swing, CSS, JavaScript, XML,HTML5/HTML, Maven, Ant, PL/SQL.',
        line2: '* Designed & developed several multi-tier Web based, Client-Server applications using Object Oriented Analysis and Design concepts and Service Oriented Architecture (SOA) mostly in cross platform environments.',
        line3: '* Proficient experience in using the databases such as MySQL, DB2, Oracle 9i/10g/11g, MySQL Workbench.'
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}