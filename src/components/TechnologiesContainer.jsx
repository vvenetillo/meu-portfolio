import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiReact,
    DiBootstrap,
    DiAngularSimple,
    DiJava
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />, description: "Utilizo o HTML5 para criar estruturas sólidas e semânticas para páginas da web.⭐⭐⭐⭐⭐" },
    { id: "css", name: "CSS3", icon: <DiCss3 />, description: "Trabalho com CSS3 para estilizar páginas web, criando layouts atraentes e responsivos que se adaptam a diferentes dispositivos.⭐⭐⭐⭐⭐" },
    { id: "js", name: "Javascript", icon: <DiJsBadge />, description: "Tenho experiência em desenvolver funcionalidades interativas usando JavaScript, melhorando a experiência do usuário e integrando APIs.⭐⭐⭐⭐⭐" },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />, description: "Utilizo o Node.js no desenvolvimento de aplicativos do lado do servidor, proporcionando alta escalabilidade e desempenho.⭐⭐⭐" },
    { id: "react", name: "React", icon: <DiReact />, description: "Sou proficiente em React para criar interfaces de usuário reativas e modernas, desenvolvendo componentes reutilizáveis.⭐⭐⭐⭐" },
    { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap />, description: "Uso o Bootstrap como framework front-end para desenvolver rapidamente layouts responsivos e bem projetados. ⭐⭐⭐⭐" },
    { id: "angular", name: "Angular", icon: <DiAngularSimple />, description: "Loading...⭐" },
    { id: "java", name: "Java", icon: <DiJava />, description: "Loading...⭐"}
]

const TechnologiesContainer = () => {
    return (
        <section className='technologies-container'>
            <h2> Tecnologias</h2>
            <p style={{marginLeft: "10px"}}> CONHECIMENTO EM:</p>
            <div className="technologies-grid" >
                {technologies.map((tech) => (
                    <div className="technology-card" id={tech.id} key={tech.id} style={{minWidth: "450px"}}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            <p>{tech.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default TechnologiesContainer;
