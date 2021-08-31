import React from 'react';
import { 
  Highlight, Highlight2,
} from './styles';

// projects
const projects = {
  rastreioDeEncomendas: {
    title: 'Rastreio de Encomendas',
    text: () =>{
      return(
        <div>
          <p>
          Acesse em: <a href="https://correios-tracking.herokuapp.com" target="_blank" rel="noopener noreferrer">correios-tracking.herokuapp.com</a>
          <br/>
          Sobre: O Rastreio de Encomendas ou RDE é um aplicativo gratuito para dispositivos Android que consulta a situação de objetos em transporte pelos Correios, pode ser usado também pelo navegador.
          </p>
          <hr/>
          <p>
          Neste projeto foi desenvolvido um aplicativo mobile em <Highlight2>React-Native</Highlight2> utilizando uma API feita em <Highlight>Node.JS</Highlight> para a busca das informações nos Correios.
          <br/>
          Foi feita também a aplicação Web utilizando <Highlight2>Bootstrap 4</Highlight2> e <Highlight2>JQuery</Highlight2> consumindo a mesma API.        
          </p>
        </div>
      );
    },
  },

  minhaloji: {
    title: 'Minhaloji.com',
    text: () =>{
      return(
        <div>
          <p>
          Acesse em: <a href="https://minhaloji.com" target="_blank" rel="noopener noreferrer">minhaloji.com</a>
          <br/>
          Sobre: A minhaloji.com é uma plataforma onde vendedores podem criar sua própria página de vendas, adicionar produtos e serviços e ainda receber pedidos via WhatsApp (o cliente monta o pedido na página e envia pelo WhatsApp).
          </p>
          <hr/>
          <p>
          Neste projeto foi desenvolvido no Back End uma api com <Highlight>Laravel</Highlight> utilizando <Highlight>JSON Web Token</Highlight> como método de autenticação, integração do gateway de pagamento <Highlight>Pag Seguro</Highlight> para o pagamento por recorrência, <Highlight>AWS S3</Highlight> para o armazenamento em nuvem das imagens de produtos, logos, banners etc, e um blog em <Highlight>WordPress</Highlight>.
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
          Disponível em: <a href="https://github.com/rangel-pci/pwmui" target="_blank" rel="noopener noreferrer">github.com/rangel-pci</a>
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
          Acesse em: <a href="https://covid-19panel.herokuapp.com/" target="_blank" rel="noopener noreferrer">covid-19panel.herokuapp.com</a>
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
          Disponível em: <a href="https://github.com/rangel-pci/ecoletanlw" target="_blank" rel="noopener noreferrer">github.com/rangel-pci</a>
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

export default projects;