import {FaGithub, FaLinkedinIn} from 'react-icons/fa'

import '../styles/components/socialnetworks.sass';

const socialnetworks = [
    {name: 'linkedin',  icon: <FaLinkedinIn />, text_link: 'https://www.linkedin.com/in/vvenetillo'},
    {name: 'github',  icon: <FaGithub />, text_link: 'https://www.github.com/vvenetillo'},

]

const SocialNetworks = () =>{
    return ( 
        <section id='social-networks'>
            {socialnetworks.map((network)=>(
                <a href={network.text_link} className='social-btn' id='network.name' key={network.name}>
                    {network.icon}
                </a>
            ))}
        </section>
     );
}

export default SocialNetworks;