import Pao from "../img/repo.paodequeijo.png";
import Generator from "../img/repo.generator.png";
import Login from "../img/login.png";

import "../styles/components/projectcontainer.sass";

const ProjectContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>
        Abaixo estão 3 dos meus principais projetos. Para ver todos os projetos, clique em &quot;ver mais&quot;
      </p>

      <div className="project" id="project">
        <span className="lista-projetos">
          <a href="https://github.com/vvenetillo/pao-de-queijo">
            <img
              src={Pao}
              alt="imagem do repositório do pão de queijo"
              className="projetos"
            />
          </a>
        </span>
        <span className="lista-projetos">
          <a href="https://github.com/vvenetillo/contact_creator">
            <img
              src={Login}
              alt="Tela de Login"
              className="projetos"
            />
          </a>
        </span>
        <span className="lista-projetos">
          <a href="https://github.com/vvenetillo/Gerador-de-senha">
            <img
              src={Generator}
              alt="imagem do repositório do gerador de senha"
              className="projetos"
            />
          </a>
        </span>
      </div>
      <a href="https://github.com/vvenetillo?tab=repositories" className="btn">
        Ver mais
      </a>
    </section>
  );
};

export default ProjectContainer;
