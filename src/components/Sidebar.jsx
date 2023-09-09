import SocialNetworks from './SocialNetwoks'
import Avatar from '../img/imagem-portfolio1.jpeg'

import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'

const Sidebar =() =>{

return(
     <aside id="sidebar">
        <img src={Avatar} alt="Minha imagem"  />
        <p className="title">Desenvolvedor Front-End</p>
        <SocialNetworks/>
        <InformationContainer />
        <a href="../public/curriculo/JoseVictorDev.pdf" download="JoseVictorDev.pdf" className="btn">Download currículo</a>
        
     </aside>
    )
}

export default Sidebar