import Pao from "../img/repo.paodequeijo.png";
import Generator from "../img/repo.generator.png";

import { FaGithub } from "react-icons/fa";
const social = [
  {
    name: "github",
    icon: <FaGithub />,
    text_link: "https://github.com/vvenetillo/pao-de-queijo",
  },
];

const socialnet = [
    {
    name: "github",
    icon: <FaGithub />,
    text_link: "https://vvenetillo.github.io/Gerador-de-senha/",
  },
];
import "../styles/components/projectcontainer.sass";

const ProjectContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugiat
        mollitia eius voluptatum commodi incidunt non, facere ipsum ab, iure
        consequatur ex aliquid debitis earum architecto, eaque eum esse! Sint?
      </p>
      <a href="#projects" className="btn">
        Ver Projetos
      </a>
      <div className="project" id="project">
        <span>
            {social.map((link)=>(
                <a href={link.text_link}
                className="social-btn"
                id="social-button"
                key={link.name}
                > {link.icon}</a>
            ))}
            <img
              src={Pao}
              alt="imagem do repositório do pão de queijo"
              className="repopaodequeijo"
            />
          
          </span>
          <span>
          <img
            src={Generator}
            alt="imagem do repositório do gerador de senha"
            className="generator"
          />
          <span id="social-btn">
            {socialnet.map((network) => (
              <a
                href={network.text_link}
                className="social-btn"
                id="network.name"
                key={network.name}
              >
                {network.icon}
              </a>
            ))}
          </span>
        </span>
      </div>
    </section>
  );
};

export default ProjectContainer;
