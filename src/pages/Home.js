import React, { Component } from 'react';
import projects from '../projects';
import '../index.css';

import { 
  Highlight, Highlight2, Header, Wrap, ToggleMenu, Nav, Main, Container,
  About, Skill, Blocks, FloatingBlock, Project, FlexGrid, Contact, Footer,
  ProjectModal
} from '../styles';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggleMenuOn: 0,
      projects: projects,
      projectModal: {display: '', action: '', title:'', text: () => false},
      param1: null,
    }
  }

  componentDidMount(){
    const { firstParam } = this.props.match.params;
    this.setState({param1: firstParam !== undefined ? firstParam : null});
  }

  toggleMenu = () => {
    const { toggleMenuOn } = this.state

    toggleMenuOn ? this.setState({ toggleMenuOn: 0 }) : this.setState({ toggleMenuOn: 1 });    
  }

  showModalProject = (project) => {
    this.setState({ projectModal: { display: 'block', action: 'show', title: project.title, text: project.text }});
    document.body.style.overflow = "hidden";
  }

  hideModalProject = () => {
    this.setState({ projectModal: { display: 'block', action: 'hide', title: '', text: () => false }});
    document.body.style.overflowY = "scroll";
  }

  render(){
    const { projects, projectModal } = this.state;

    return (
      <div>
        
        <Header>
          <Wrap>
            <span></span>
            <ToggleMenu on={this.state.toggleMenuOn} onClick={this.toggleMenu}><div></div><div></div><div></div></ToggleMenu>

            <Nav on={this.state.toggleMenuOn}>
              <ul>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#contact">Contato</a></li>
              </ul>
            </Nav>
          </Wrap>
        </Header>

        {/* About me */}
        <Main>
          <About id="about" imageUrl={process.env.PUBLIC_URL + '/assets/profile.webp'} imageUrl2={process.env.PUBLIC_URL + '/assets/profile.webp'}>
            <Container className="grid">
              <div className="perfil-img">
                <img src={process.env.PUBLIC_URL + '/assets/profile.webp'} alt="foto de Rangel Pereira" />
              </div>                
              
              <div>
                <h1>Rangel Pereira</h1>
                <p>
                  Brasiliense, Técnico em Desenvolvimento de Sistemas e estudante de Análise e Desenvolvimento de Sistemas. Desenvolvedor <Highlight><strong>PHP</strong></Highlight> e <Highlight2><strong>JavaScript</strong></Highlight2>.
                </p>
                <p>
                <span role="img" aria-label='emoji'>📍</span>  Brasil | Brasília - DF.
                </p>
              </div>
            </Container>
          </About>

          {/* My skills */}
          <Skill id="skills">
            <Container className="flex-c">
              <div>
                <h2><span role="img" aria-label='emoji'>🔨</span> Minhas Skills</h2>
                <p>Costumo desenvolver aplicações utilizando, mas não exclusivamente, as seguintes tecnologias e padrões.</p>

                <Blocks>
                  <FloatingBlock time="2">PHP</FloatingBlock>
                  <FloatingBlock time="1.5">Laravel</FloatingBlock>
                  <FloatingBlock time="2">MySQL</FloatingBlock>
                  <FloatingBlock time="1.5">JavaScript</FloatingBlock>
                  <FloatingBlock time="2">React.js</FloatingBlock>
                  <FloatingBlock time="1.5">JQuery</FloatingBlock>
                  <FloatingBlock time="2">Bootstrap</FloatingBlock>
                  <FloatingBlock time="1.5">API REST</FloatingBlock>
                  <FloatingBlock time="1.5">MVC</FloatingBlock>
                  <FloatingBlock time="2">JWT</FloatingBlock>
                  <FloatingBlock time="1.5">...</FloatingBlock>
                </Blocks>
                <h2><span role="img" aria-label='emoji'>🧰</span> Ferramentas</h2>
                <Blocks>
                  <FloatingBlock time="2">GIT</FloatingBlock>
                  <FloatingBlock time="1.5"><span style={{textDecoration: 'line-through'}}>Sublime Text</span> VS Code</FloatingBlock>
                  <FloatingBlock time="2">Figma</FloatingBlock>
                  <FloatingBlock time="1.5">Postman</FloatingBlock>
                  <FloatingBlock time="2">NPM/Composer</FloatingBlock>
                  <FloatingBlock time="1.5">...</FloatingBlock>
                </Blocks>
              </div>

              <div>
                <h2><span role="img" aria-label='emoji'>📚</span> Estudando</h2>
                <Blocks>
                  <FloatingBlock time="2">Impulso Javascript Evolution Bootcamp by DIO &nbsp;<a href="https://github.com/rangel-pci/BootcampDIO" target='_blank' rel='noopener noreferrer' style={{textDecoration: 'underline' }}>Sobre &raquo;</a></FloatingBlock>
                  <FloatingBlock time="2">Análise de Dados by Google &nbsp;<a href="https://www.coursera.org/professional-certificates/google-data-analytics" target='_blank' rel='noopener noreferrer' style={{textDecoration: 'underline' }}>Sobre &raquo;</a></FloatingBlock>
                </Blocks>

                <a href="#projects"><img width="30px" src={process.env.PUBLIC_URL + '/assets/arrow-down.svg'} alt="" /></a>
              </div>
            </Container>
          </Skill>

          {/* My projects */}
          <Project id="projects">
            <Container>
             <h2>Projetos</h2>
             <p>Estes são alguns dos meus trabalhos e projetos, veja mais no meu <a href="https://github.com/rangel-pci" target="_blank" rel="noopener noreferrer"><Highlight>GitHub</Highlight></a>.</p>

             <FlexGrid>
                <button onClick={() => this.showModalProject(projects.adoteUmPet)}>
                  <p className="projectTitle">Adote um Pet <img src="./assets/info.svg" alt="info icon" /></p>
                  <img src={process.env.PUBLIC_URL + '/assets/png8.webp'} alt="projeto" />
                  <span><Highlight>Laravel</Highlight> + <Highlight2>Next.JS</Highlight2> + <Highlight2>TypeScript</Highlight2></span>
                </button>
                <button onClick={() => this.showModalProject(projects.winPro)}>
                  <p className="projectTitle">WinPro <img src="./assets/info.svg" alt="info icon" /></p>
                  <img src={process.env.PUBLIC_URL + '/assets/png7.webp'} alt="projeto" />
                  <span><Highlight>Laravel</Highlight> + <Highlight2>JQuery</Highlight2> + <Highlight2>Bootstrap</Highlight2></span>
                </button>
                <button onClick={() => this.showModalProject(projects.rastreioDeEncomendas)}>
                  <p className="projectTitle">Rastreio de Encomendas <img src="./assets/info.svg" alt="info icon" /></p>
                  <img src={process.env.PUBLIC_URL + '/assets/png6.webp'} alt="projeto" />
                  <span><Highlight2>React Native</Highlight2> | <Highlight>Node.JS</Highlight> + <Highlight2>JQuery</Highlight2></span>
                </button>
                <button onClick={() => this.showModalProject(projects.minhaloji)}>
                  <p className="projectTitle">MinhaLoji <img src="./assets/info.svg" alt="info icon" /></p>
                  <img src={process.env.PUBLIC_URL + '/assets/png1.webp'} alt="projeto" />
                  <span><Highlight>Laravel</Highlight> + <Highlight>AWS S3</Highlight> + <Highlight>PagSeguro API</Highlight> + <Highlight2>JQuery</Highlight2></span>
                </button>
                <button onClick={() => this.showModalProject(projects.pwm)}>
                  <p className="projectTitle">PWM <img src="./assets/info.svg" alt="info icon" /></p>
                  <img src={process.env.PUBLIC_URL + '/assets/png2.webp'} alt="projeto" />
                  <span><Highlight>PHP</Highlight> + <Highlight>API</Highlight> + <Highlight>JWT</Highlight> + <Highlight2>React.JS</Highlight2></span>
                </button>
                <button onClick={() => this.showModalProject(projects.covid19panel)}>
                  <p className="projectTitle">Painel Covid-19 <img src="./assets/info.svg" alt="info icon" /></p>
                  <img src={process.env.PUBLIC_URL + '/assets/png3.webp'} alt="projeto" />
                  <span><Highlight2>React.JS</Highlight2></span>
                </button>
                <button onClick={() => this.showModalProject(projects.ecoleta)}>
                  <p className="projectTitle">Ecoleta <img src="./assets/info.svg" alt="info icon" /></p>
                  <img src={process.env.PUBLIC_URL + '/assets/png5.webp'} alt="projeto" />
                  <span><Highlight>Node.JS</Highlight> + <Highlight2>JavaScript</Highlight2></span>
                </button>
             </FlexGrid>

            </Container>
          </Project>

          {/* My contact */}
          <Contact id="contact" imageUrl={process.env.PUBLIC_URL + '/assets/contact.webp'}>
            <Container className="flex-c">
              <h2>Contato</h2>
              <p>
                Entre em contato caso precise de um orçamento, informações ou possua uma oportunidade.
              </p>


                <Blocks>
                  <a href="https://www.linkedin.com/in/rangel-pereira-a5a4031b3/" target="_blank" rel="noopener noreferrer">
                  <FloatingBlock time="2">
                      <img src={process.env.PUBLIC_URL + '/assets/linkedin.svg'} width="25px" alt="linkedin" />
                      <span>Linkedin</span>
                  </FloatingBlock>
                  </a>
                  <a href="https://github.com/rangel-pci/" target="_blank" rel="noopener noreferrer">
                  <FloatingBlock time="1.5">
                      <img src={process.env.PUBLIC_URL + '/assets/github.svg'} width="25px" alt="github" />
                      <span>GitHub</span>
                  </FloatingBlock>
                  </a>
                  <a href="mailto:rangel.pci@gmail.com" target="_blank" rel="noopener noreferrer">
                  <FloatingBlock time="2">
                      <img src={process.env.PUBLIC_URL + '/assets/email.svg'} width="25px" alt="e-mail" />
                      <span>rangel.pci@gmail.com</span>
                  </FloatingBlock>
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=5561992156634&text=Olá" target="_blank" rel="noopener noreferrer">
                  <FloatingBlock time="1.5">
                      <img src={process.env.PUBLIC_URL + '/assets/whatsapp.svg'} width="25px" alt="whatsapp" />
                      <span>WhatsApp</span>
                  </FloatingBlock>
                  </a>
                </Blocks>
            </Container>
          </Contact>
          <Footer>
            <Container>
              <p><a href="#about"><Highlight>rangelpereira.com</Highlight></a></p>
            </Container>
          </Footer>
        </Main>
        
        <ProjectModal display={projectModal.display} action={projectModal.action}>
          <Container>
            <div className="header">
              <h2>{projectModal.title}</h2>
            </div>
            <hr/>

            <div className="content">
              {projectModal.text()}
            </div>
            <button className="return" onClick={this.hideModalProject}>
              <img src={process.env.PUBLIC_URL + '/assets/left-arrow.svg'} width="25px" alt="" /><span><strong>Voltar</strong></span>
            </button>
          </Container>
        </ProjectModal>

      </div>
    );
  }
}