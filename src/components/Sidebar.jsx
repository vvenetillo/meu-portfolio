import SocialNetworks from "./SocialNetwoks";
import Avatar from "../img/imagem-portfolio1.jpeg";
import { TypeAnimation } from "react-type-animation";

import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";

const Sidebar = () => {
  return (
    <aside id="sidebar" style={{minWidth: "400px"}}>
      <img src={Avatar} alt="Minha imagem" />
      <p className="title">
        <TypeAnimation
          sequence={[
            "José Victor Ferreira Venetillo",
            1000,
            "De-sen-vol-ve-dor",
            1000,
            "Desenvolvedor",
            1000,
            "Desenvolvedor full-stack",
            0,
          ]}
          speed={50}
          style={{
            fontSize: "1.5em"
          }}
          repeat={0}
          className="myname"
          id="myname"
        />
      </p>
      <SocialNetworks />
      <InformationContainer />
      <a
        href="curriculo/JVictorDev2024.pdf"
        download="JoseVictorDev2025.pdf"
        className="btn"
      >
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
