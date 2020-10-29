import React, { Component } from 'react';
import './index.css';

import { 
  Highlight, Highlight2, Header, Wrap, ToggleMenu, Nav, Logo, Main, Container,
  About, Skill, Blocks, FloatingBlock, Project, FlexGrid, Contact, Footer,
  ProjectModal
} from './styles';

const projects = {
  minhaloji: {
    title: 'Minhaloji.com',
    text: () =>{
      return(
        <div>
          <p>
          Acesse em: <a href="https://minhaloji.com" target="_blank">minhaloji.com</a>
          <br/>
          Sobre: A minhaloji.com é uma plataforma onde vendedores podem criar sua própria página de vendas, adicionar produtos e serviços e ainda receber pedidos via WhatsApp (o cliente monta o pedido na página e envia pelo WhatsApp).
          </p>
          <hr/>
          <p>
          Neste projeto foi desenvolvido no Back End uma api com <Highlight>Laravel</Highlight> usando <Highlight>JSON Web Token</Highlight> como método de autenticação e <Highlight>AWS S3</Highlight> para o armazenamento em nuvem das imagens de produtos, logos, banners etc, e um blog em <Highlight>WordPress</Highlight>.
          <br/>
          No Front End foi usado <Highlight2>JQuery</Highlight2> para manipulação do DOM + <Highlight2>axios</Highlight2> para as requisições AJAX ao servidor.
          </p>
        </div>
      );
    },
  },

  pwm: {
    title: 'PWM',
    text: () =>{
      return(
        <div>
          <p>
          Disponível em: <a href="https://github.com/rangel-pci/pwmui" target="_blank">github.com/rangel-pci</a>
          <br/>
          Sobre: A PWM é um sitema focado em jogadores, e funciona como uma rede social permitindo a interação entre usuários, o usuário pode adicionar jogos a sua lista, exibir tag/nickname de outras plataformas como PSN, Twitch, Xbox etc, e ainda avaliar outros jogadores como legal ou tóxico.
          </p>
          <hr/>
          <p>
          Foi construida uma api com <Highlight>PHP OO</Highlight> puro seguindo o padrão MVC + autenticação com <Highlight>JWT</Highlight>.
          <br/>
          No Front End foi usado <Highlight2>React JS</Highlight2> + algumas ferramentas como <Highlight2>axios</Highlight2> para as requests HTTP e <Highlight2>React Router</Highlight2> para o controle de rotas.
        </p>
        </div>
      );
    },
  },

  covid19panel: {
    title: 'Painel COVID-19',
    text: () =>{
      return(
        <div>
          <p>
          Acesse em: <a href="https://covid-19panel.herokuapp.com/" target="_blank">covid-19panel.herokuapp.com</a>
          <br/>
          Sobre: Painel com informações atualizadas em tempo real a respeito do vírus COVID-19 no Brasil e seus estados.
          </p>
          <hr/>
          <p>
          Aplicação feita em <Highlight2>React JS</Highlight2> consumindo e se mantendo atualizada diariamente com dados recebidos através da api do Ministério da Saúde.
          </p>
        </div>
      );
    },
  },

  gustavoRiether: {
    title: 'Gustavo Riether',
    text: () =>{
      return(
        <div>
          <p>
          Sobre: Landing Page simples feita em <Highlight>WordPress</Highlight> utilizando o plugin <Highlight2>Elementor Page Builder</Highlight2>.
          </p>
        </div>
      );
    },
  },

  ecoleta: {
    title: 'Ecoleta',
    text: () =>{
      return(
        <div>
          <p>
          Disponível em: <a href="https://github.com/rangel-pci/ecoletanlw" target="_blank">covid-19panel.herokuapp.com</a>
          <br/>
          Sobre: Com o Ecoleta é possível registrar e econtrar locais que coletem materiais recicláveis.
          </p>
          <hr/>
          <p>
          Back End feito em <Highlight>Node.JS|Express.JS</Highlight> utilizando o template engine <Highlight>Nunjucks</Highlight> e a api do IBGE para consulta de estados e cidades.
          <br/>
          No front End foi utilizado além de <Highlight2>HTML</Highlight2> e <Highlight2>CSS</Highlight2>, <Highlight2>JavaScript</Highlight2> puro para pequenas animações e requests com Fetch API.
          </p>
        </div>
      );
    },
  },
};

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggleMenuOn: 0,
      projects: projects,
      projectModal: {display: 'none', action: 'hide', title:'', text: () => false},
    }
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
    this.setState({ projectModal: { display: 'none', action: 'hide', title: '', text: () => false }});
    document.body.style.overflowY = "scroll";
  }

  render(){
    const { projects, projectModal } = this.state;

    return (
      <div>
        <Header>
          <Wrap>
            <Logo><img src={process.env.PUBLIC_URL + '/assets/logo.svg'} height="60px" alt=""/></Logo>

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
          <About id="about" imageUrl={process.env.PUBLIC_URL + '/assets/profile_img.jpg'} imageUrl2={process.env.PUBLIC_URL + '/assets/profile_img_desktop.jpg'}>
            <Container className="grid">
              <img className="perfil-img" src={process.env.PUBLIC_URL + '/assets/profile_img_desktop.png'} alt="foto de Rangel Pereira" />
              
              <div>
                <h1>Rangel Pereira</h1>
                <p>
                  Brasiliense, 20 anos, técnico em Desenvolvimento de Sistemas. Desenvolvedor <Highlight><strong>PHP</strong></Highlight> e <Highlight><strong>JavaScript</strong></Highlight>.
                </p>
              </div>
            </Container>
          </About>

          {/* My skills */}
          <Skill id="skills">
            <Container className="flex-c">
              <div>
                <h2>Minhas Skills</h2>
                <p>Trabalho com desenvolvimento de sites e sistemas web usando as seguintes tecnologias.</p>

                <Blocks>
                  <FloatingBlock time="2">PHP</FloatingBlock>
                  <FloatingBlock time="1.5">JavaScript</FloatingBlock>
                  <FloatingBlock time="2">Laravel</FloatingBlock>
                  <FloatingBlock time="1.5">React JS</FloatingBlock>
                  <FloatingBlock time="2">JQuery</FloatingBlock>
                  <FloatingBlock time="1.5">Bootstrap</FloatingBlock>
                  <FloatingBlock time="2">HTML</FloatingBlock>
                  <FloatingBlock time="1.5">CSS</FloatingBlock>
                  <FloatingBlock time="2">MySQL</FloatingBlock>
                  <FloatingBlock time="1.5">Git</FloatingBlock>
                </Blocks>
                <h2>Ferramentas</h2>
                <Blocks>
                  <FloatingBlock time="2">Sublime Text</FloatingBlock>
                  <FloatingBlock time="1.5">Figma</FloatingBlock>
                  <FloatingBlock time="2">Photoshop</FloatingBlock>
                  <FloatingBlock time="1.5">Insomnia</FloatingBlock>
                  <FloatingBlock time="2">Trello</FloatingBlock>
                  <FloatingBlock time="1.5">...</FloatingBlock>
                </Blocks>
              </div>

              <div>
                <p>Também implemento projetos utilizando métodos e padrões como MVC, RESTful e JWT.</p>
                <a href="#projects"><img width="30px" src={process.env.PUBLIC_URL + '/assets/arrow-down.svg'} /></a>
              </div>
            </Container>
          </Skill>

          {/* My projects */}
          <Project id="projects">
            <Container>
             <h2>Projetos</h2>
             <p>Estes são alguns dos meus projetos, clique sobre a imagem para informações detalhadas.</p>

             <FlexGrid>
                <button onClick={() => this.showModalProject(projects.minhaloji)}>
                  <img src={process.env.PUBLIC_URL + '/assets/png1.png'} alt="projeto 1" />
                  <span><Highlight>Laravel</Highlight> + <Highlight>AWS S3</Highlight> + <Highlight2>JQuery</Highlight2></span>
                </button>
                <button onClick={() => this.showModalProject(projects.pwm)}>
                  <img src={process.env.PUBLIC_URL + '/assets/png2.png'} alt="projeto 2" />
                  <span><Highlight>PHP</Highlight> + <Highlight2>React JS</Highlight2></span>
                </button>
                <button onClick={() => this.showModalProject(projects.covid19panel)}>
                  <img src={process.env.PUBLIC_URL + '/assets/png3.png'} alt="projeto 3" />
                  <span><Highlight2>React JS</Highlight2></span>
                </button>
                <button onClick={() => this.showModalProject(projects.gustavoRiether)}>
                  <img src={process.env.PUBLIC_URL + '/assets/png4.png'} alt="projeto 4" />
                  <span><Highlight>WordPress</Highlight></span>
                </button>
                <button onClick={() => this.showModalProject(projects.ecoleta)}>
                  <img src={process.env.PUBLIC_URL + '/assets/png5.png'} alt="projeto 5" />
                  <span><Highlight>Node.js</Highlight> + <Highlight2>JavaScript</Highlight2></span>
                </button>
             </FlexGrid>

             <p>Mais projetos disponíveis no meu <a href="https://github.com/rangel-pci" target="_blank"><Highlight>GitHub</Highlight></a></p>
            </Container>
          </Project>

          {/* My contact */}
          <Contact id="contact" imageUrl={process.env.PUBLIC_URL + '/assets/contact.jpg'}>
            <Container className="flex-c">
              <h2>Contato</h2>
              <p>Entre em contato para mais informações.</p>

                <Blocks>
                  <a href="https://www.linkedin.com/in/rangel-pereira-a5a4031b3/" target="_blank">
                  <FloatingBlock time="2">
                      <img src={process.env.PUBLIC_URL + '/assets/linkedin.svg'} width="25px" alt="linkedin" />
                      <span>Linkedin</span>
                  </FloatingBlock>
                  </a>
                  <a href="https://github.com/rangel-pci/" target="_blank">
                  <FloatingBlock time="1.5">
                      <img src={process.env.PUBLIC_URL + '/assets/github.svg'} width="25px" alt="github" />
                      <span>GitHub</span>
                  </FloatingBlock>
                  </a>
                  <a href="mailto:rangel.pci@gmail.com" target="_blank">
                  <FloatingBlock time="2">
                      <img src={process.env.PUBLIC_URL + '/assets/email.svg'} width="25px" alt="e-mail" />
                      <span>rangel.pci@gmail.com</span>
                  </FloatingBlock>
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=5561992156634&text=Olá" target="_blank">
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
              <p><a href="#about"><Highlight>rangelpereira.com</Highlight></a> desenvolvido com <Highlight2>React JS</Highlight2> + <Highlight2>Styled Components</Highlight2></p>
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