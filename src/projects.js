import React from 'react';
import { 
  Highlight, Highlight2,
} from './styles';

// projects
const projects = {
  winPro: {
    title: 'winPro.com.br',
    text: () =>{
      return(
        <div>
          <p>
          Disponível em: <a href="https://winpro.com.br" target="_blank" rel="noopener noreferrer">winpro.com.br</a>
          <br/>
          Como freelancer fiquei responsável por corrigir e implementar novas funcionalidades em um sistema de controle de estoque e emissão de Nota Fiscal eletrônica, no Back-end em <Highlight>Laravel</Highlight> e no Front-end com <Highlight2>JQuery</Highlight2> e <Highlight2>Bootstrap</Highlight2>.
          </p>
          <ul style={{ marginLeft: '32px' }}>
            <li>Confirmação de senha para a alteração do preço de produtos</li>
            <li>Otimização de filtros, como filtro de pedidos por id, nome do cliente, número de NFe ou NFCe etc.</li>
            <li>Importação de vendas em NFCe (PDV) para vendas com NFe</li>
            <li>Correção nas funções de cancelamento e inutilização de NFCe</li>
            <li>Criação de módulo para criação de orçamento, pré-venda, edição de vendas e emissão de NFe para conta crédito</li>
            <li>Criação de novo comprovante de venda em modelo A4 PDF para vendas NFe, NFCe e Conta Crédito</li>
            <li>Criação de relatório de vendas avançado, contas a raceber e recebidos</li>
            <li>Criação do menu principal com base em novo layout</li>
            <li>Entre outras alterações</li>
          </ul>
        </div>
      );
    },
  },
  
  rastreioDeEncomendas: {
    title: 'Rastreio de Encomendas',
    text: () =>{
      return(
        <div>
          <p>
          Disponível em: <a href="https://correios-tracking.herokuapp.com" target="_blank" rel="noopener noreferrer">correios-tracking.herokuapp.com</a>
          <br/>
          APP mobile disponível em: <a href="https://play.google.com/store/apps/details?id=com.rastreiodeencomendas" target="_blank" rel="noopener noreferrer">Google Play/RDE</a>
          <br/>
          Sobre: O Rastreio de Encomendas é um aplicativo gratuito para dispositivos Android que consulta a situação de objetos em transporte pelos Correios, pode ser usado também pelo navegador.
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
          Acesse em: <del style={{ textDecoration: 'line-through' }}><a href="https://minhaloji.com" target="_blank" rel="noopener noreferrer">minhaloji.com</a></del>
          <br/>
          Sobre: A minhaloji.com é uma plataforma onde vendedores podem criar sua própria página de vendas, adicionar produtos e serviços e ainda receber pedidos via WhatsApp (o cliente monta o pedido na página e envia pelo WhatsApp).
          </p>
          <hr/>
          <p>
            Esse projeto é fruto de uma ideia que foi desenvolvida durante o programa <a href="https://web.programastartbsb.com.br" target="_blank" rel="noopener noreferrer">Start BSB</a> (programa de incentivo ao empreendedorismo inovador do Distrito Federal, ocorreu de 2020 a 2021) no qual chegamos a fase 3 de 4 na 148º posição de um total de mais de 700 projetos, mas que infelizmente não fomos um dos aprovados entre os ultimos 50 selecionados.
            <br/>
            Integrantes da equipe: Eu, como desenvolvedor e @brenno.lorran, responsável pela análise de mercado, e busca de avaliações e opiniões de comerciantes e possíveis usuários.
            <br/>
            Atualmente a aplicação está offline, em breve estará disponível em <Highlight2>minhaloji.rangelpereira.com</Highlight2>.
          </p>
          <hr/>
          <p>
          Nesse projeto foi desenvolvido no Back-end uma API com <Highlight>Laravel</Highlight> utilizando <Highlight>JSON Web Token</Highlight> como método de autenticação, integração do gateway de pagamento <Highlight>Pag Seguro</Highlight> por meio de API e <Highlight>Webhook</Highlight> para a aquisição e cancelamento de planos de pagamento por recorrência e <Highlight>Amazon S3/AWS S3</Highlight> para o armazenamento em nuvem das imagens de produtos, logos e banners.
          <br/>
          No Front End <Highlight2>JQuery</Highlight2> para manipulação do DOM e <Highlight2>Axios</Highlight2> para as requisições a API.
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
          Demo disponível em: <a href="https://pwm.rangelpereira.com" target="_blank" rel="noopener noreferrer">pwm.rangelpereira.com</a>
          <br/>
          Código fonte do projeto disponível no meu <a href="https://github.com/rangel-pci/" target="_blank" rel="noopener noreferrer">GitHub</a>.
          <br/>
          PWM é o acronimo de "Play With Me", uma aplicação com foco na união de pessoas que jogam em multiplayer, recomendando usuários com base na sua lista de jogos,
          além de poder avaliar aquela pessoa com quem você acabou de jogar.
          </p>
          <hr/>
          <p>
          No Back-end contrui uma api em <Highlight>PHP OO</Highlight> sem frameworks, seguindo o padrão <Highlight>REST</Highlight> e autenticação com <Highlight>JSON WebToken</Highlight>.
          <br/>
          Confira a documentação da API em <a href="https://documenter.getpostman.com/view/11970203/T17J9muk?version=latest" target="_blank" rel="noopener noreferrer">documenter.getpostman.com</a>.
          <br/>
          Utilizei também a <a href="https://api.rawg.io/docs/" target="_blank" rel="noopener noreferrer">RAWG Video Games Database API</a> para a extração de dados de alguns jogos, e os pacotes <Highlight>PHPMailer</Highlight> para o envio de e-mail contendo a chave de ativação da conta e <Highlight>lcobucci/jwt</Highlight> para trabalhar com o JWT.
          <br/>
          No Front-end utilizei o <Highlight2>React JS</Highlight2> e mais algumas ferramentas como <Highlight2>Axios</Highlight2> para as requests HTTP, <Highlight2>React Router</Highlight2> para o controle das rotas e <Highlight2>node-jsonWebToken</Highlight2> para trabalhar com o JWT.
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

  ecoleta: {
    title: 'Ecoleta',
    text: () =>{
      return(
        <div>
          <p>
          Disponível em: <a href="https://github.com/rangel-pci/ecoletanlw" target="_blank" rel="noopener noreferrer">github.com/rangel-pci</a>
          <br/>
          Sobre: O Ecoleta é um projeto que foi desenvolvido durante o evento "Next Level Week" ministrado pela RocketSeat, nele é possível registrar e econtrar locais que coletem materiais recicláveis.
          </p>
          <hr/>
          <p>
          Back End feito em <Highlight>Node.JS|Express.JS</Highlight> utilizando o template engine <Highlight>Nunjucks</Highlight> e a api do IBGE para consulta de estados e cidades.
          <br/>
          No front End foi utilizado além de <Highlight2>HTML</Highlight2> e <Highlight2>CSS</Highlight2>, <Highlight2>JavaScript</Highlight2> puro para pequenas animações e requests com <Highlight2>Fetch API</Highlight2>.
          </p>
        </div>
      );
    },
  },
};

export default projects;