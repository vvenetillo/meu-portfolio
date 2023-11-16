import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiReact,
    DiBootstrap,
    DiAngularSimple,
    DiJava,
    DiMongodb,
    DiCode
} from 'react-icons/di'


import '../styles/components/technologiescontainer.sass'

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />, description: "Utilizo o HTML5 para criar estruturas sólidas e semânticas para páginas da web.⭐⭐⭐⭐⭐" },
    { id: "css", name: "CSS3", icon: <DiCss3 />, description: "Trabalho com CSS3 para estilizar páginas web, criando layouts atraentes e responsivos que se adaptam a diferentes dispositivos.⭐⭐⭐⭐⭐" },
    { id: "js", name: "Javascript", icon: <DiJsBadge />, description: "Tenho experiência em desenvolver funcionalidades interativas usando JavaScript, melhorando a experiência do usuário e integrando APIs.⭐⭐⭐⭐⭐" },
    { id: "angular", name: "Angular", icon: <DiAngularSimple />, description: "Desenvolvo aplicações robustas e escaláveis usando o Angular. Com um conhecimento sólido, sou capaz de criar interfaces de usuário dinâmicas e eficientes. Utilizo recursos avançados, como ligação de dados bidirecional e modularidade, para proporcionar uma experiência de desenvolvimento consistente.⭐⭐⭐⭐" },
    { id: "react", name: "React", icon: <DiReact />, description: "Sou proficiente em React para criar interfaces de usuário reativas e modernas, desenvolvendo componentes reutilizáveis.⭐⭐⭐⭐" },
    { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap />, description: "Uso o Bootstrap como framework front-end para desenvolver rapidamente layouts responsivos e bem projetados. ⭐⭐⭐⭐" },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />, description: "Utilizo o Node.js no desenvolvimento de aplicativos do lado do servidor, proporcionando alta escalabilidade e desempenho.⭐⭐⭐" },
    { id: "java", name: "Java", icon: <DiJava />, description: "Tenho experiência em desenvolvimento Java, utilizando-o para criar aplicações do lado do servidor. Embora meu conhecimento seja sólido, estou em processo de aprimoramento para explorar ainda mais os recursos avançados da linguagem.⭐⭐"},
    { id: "mongodb", name: "MongoDB", icon: <DiMongodb />, description: "Utilizo o MongoDB para armazenar dados de forma flexível e escalável. Com um conhecimento sólido, sou capaz de projetar esquemas eficientes e realizar consultas avançadas.⭐⭐⭐"},
    { id: "typescript", name: "TypeScript", icon: <DiCode />, description: "Domino o TypeScript com proficiência, aplicando tipagem estática para garantir um código mais robusto e prevenir erros comuns durante o desenvolvimento. Utilizo interfaces, tipos avançados e recursos modernos para criar aplicações mais seguras, escaláveis e fáceis de manter. ⭐⭐⭐⭐"}
]

const TechnologiesContainer = () => {
    return (
        <section className='technologies-container'>
            <h2> Tecnologias</h2>
            <p style={{marginLeft: "10px"}}> CONHECIMENTO EM:</p>
            <div className="technologies-grid" style={{alignItems: "center" }} >
                {technologies.map((tech) => (
                    <div className="technology-card" id={tech.id} key={tech.id} style={{minWidth: "350px"}}>
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
