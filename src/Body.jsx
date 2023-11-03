import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/hover.css';
import './css/styles.css';
import './css/variables.css';
import Cliente from './Cliente'; // Importe o componente Cliente

function Body() {

   
  return (
    <main className="container mb-4">
      <article className="row p-5 m-5 d-flex align-items-center lead">
        <section className="col-md-6 my-3">
          <p className="texto-azul-aplicativo">&lt;mude para energia solar em 2023&gt;</p>
          <h2 className="display-6 lead my-4"><strong>Esqueça a conta de luz alta</strong></h2>
          <p>Deixe o sol ser a sua fonte de energia!!</p><br />

          <p>Está procurando formas de resolver o uso excessivo de energia elétrica não renovável e não sustentável?</p><br />

          <p>Através dos nossos painéis que captam a luz solar, você consegue resolver esse problema!</p>
        </section>

        <figure className="col-md-6 my-5">
          <img src="./images/painel.png" alt="Imagem de um relógio" className="img-fluid efeito-fotos" />
        </figure>
      </article>

      {/* ÁREA DE CARTÕES */}
      <div className="container text-center mt-5 lead">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card cards m-2 efeito-cards" style={{ borderRadius: '15px' }}>
              <div className="card-body">
                <h5 className="card-title"><strong>Experiência</strong></h5>
                <p className="card-text my-4">A Smart Light está entre as maiores empresas de energia solar do Brasil.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card cards m-2 efeito-cards" style={{ borderRadius: '15px' }}>
              <div className="card-body">
                <h5 className="card-title"><strong>Qualidade</strong></h5>
                <p className="card-text my-4">Trabalhamos com as melhores linhas de produtos no mercado.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card cards m-2 efeito-cards" style={{ borderRadius: '15px' }}>
              <div className="card-body">
                <h5 className="card-title"><strong>Flexibilidade</strong></h5>
                <p className="card-text my-4">A Smart Light tem condições de financiamento diferenciadas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ÁREA DO MAPA DA SOLUÇÃO */}
      <article className="row p-5 m-5 d-flex align-items-center lead">
        <section className="col-md-6 my-3">
          <p className="texto-azul-aplicativo">&lt;solução completa&gt;</p>
          <h2 className="display-6 lead my-4"><strong>Apresentação<br /> Smart Light</strong></h2>
          <p>Somos uma empresa de painéis de captação de energia sustentável e renovável com baixo custo ao cliente integrado a um software com grande interação com o usuário, destinado a empresas e construções interessadas em adotar práticas sustentáveis e reduzir o consumo de energia elétrica.</p>
        </section>

        <figure className="col-md-6 my-5">
          <img src="./images/mapa.png" alt="Imagem de um mapa" className="img-fluid efeito-fotos" />
        </figure>
      </article>

      {/* ÁREA DE IMPACTOS */}
      <div className="container text-center">
        <div className="row">
          <div className="col align-self-start mb-5 mt-5">
            <p className="texto-azul-aplicativo">&lt;economize dinheiro e salve o planeta&gt;</p>
            <h2 className="display-6 lead my-4"><strong>Impactos positivos<br /> da energia elétrica</strong></h2>
            <p>No entanto, há uma solução para esses problemas: a energia solar. Ao optar pela energia solar, as pessoas podem reduzir sua dependência de fontes não renováveis de energia e contribuir para a redução das emissões de gases do efeito estufa. A energia solar também é limpa e renovável, não emite poluentes atmosféricos e não requer desmatamento ou grandes áreas de terra. Além disso, a instalação de painéis solares pode ajudar as pessoas a economizar dinheiro em suas contas de energia elétrica e a controlar melhor o consumo de energia. Portanto, a energia solar é uma alternativa viável e eficiente que pode ajudar a proteger o meio ambiente e promover um futuro mais sustentável.</p>
          </div>
        </div>
      </div>

      <article className="row p-5 m-5 d-flex align-items-center lead">
        <figure className="col-lg-6 col-md-12 col-sm-12 my-5">
          <p className="texto-azul-aplicativo">&lt;energia positiva&gt;</p>
          <h1>Junte-se à comunidade solar e ajude a criar um futuro sustentável</h1>
          <img src="./images/painel.png" alt="Imagem de um relógio" className="img-fluid efeito-fotos" />
        </figure>

        <section className="col-lg-6 col-md-12 col-sm-12 my-3">
          <button className="btn btn-primary my-3 button-saibamais efeito-button">Saiba mais</button>
          <h2 className="mt-5"><i className="fa-solid fa-bolt-lightning me-4"></i>Energia limpa e transparente</h2><br />
          <p>Diferentemente dos combustíveis fósseis, a energia solar não pode ser esgotada e continuará fornecendo energia limpa às gerações futuras.</p>

          <h2 className="mt-5"><i className="fa-solid fa-piggy-bank me-4"></i>Investimento seguro & sustentável</h2><br />
          <p>Além de valorizar o seu imóvel, o retorno sobre o investimento em um projeto fotovoltaico supera a grande maioria dos produtos financeiros.</p>

          <h2 className="mt-5"><i className="fa-solid fa-house me-4"></i>Independência energética</h2><br />
          <p>Nãose preocupe com o aumento da tarifa de luz. Quando você produzir a sua própria energia, esse não será mais um problema</p>
        </section>
      </article>

      <article className="row p-5 m-5 d-flex align-items-center lead">
        <section className="col-lg-6 col-md-12 col-sm-12 my-3">
          <p className="texto-azul-aplicativo">&lt;feedbacks&gt;</p>
          <h2 className="display-6 lead my-4"><strong>Comentários de quem migrou para energia fotovoltaica com a Smart Light</strong></h2>
          <p>“Entrei em contato com a Smart Light em procura de informações sobre energia limpa! Fui atendida com presteza e solicitude por seu colaborador, o que me deu mais empolgação para aquisição da mesma. Fui atendida em todas as etapas do processo com agilidade e rapidez! No término do serviço, entendi que além de ter feito um ótimo negócio, ganhei de presente amigos que quero levar para vida!”</p><br />

          <h5 className="mt-3">Acácia Figueiredo</h5>
          <p className="texto-azul-aplicativo">&lt;Rio de Janeiro - RJ&gt;</p>
          <p>"Trabalharam com muita seriedade e rapidez. Fiquei muito satisfeito"</p>

          <h5 className="mt-5">Cristina Carla Santos Netto Winnubst</h5>
          <p className="texto-azul-aplicativo">&lt;São Paulo - SP&gt;</p>
          <p>"A instalação foi super rápida"</p>
        </section>

        <figure className="col-md-6 my-5">
          <img src="./images/comentarios.png" alt="Imagem de um emoji de comentário" className="img-fluid efeito-fotos" />
        </figure>
      </article>

      <h4 className="text-center mb-5">Fique por dentro das novidades do mercado solar ou conheça mais sobre a energia fotovoltaica</h4>

      {/* COLUNA 1 */}
      <section className="row my-4 justify-content-center">
        {/* PRIMEIRO ITEM */}
        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
          <div className="d-flex flex-column align-items-center">
            <img src="./images/calculadora.png" alt="Imagem 1" className="img-fluid" />
            <p className="mt-3">Como calcular a economia com energia solar?</p>
          </div>
        </div>

        {/* SEGUNDO ITEM */}
        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
          <div className="d-flex flex-column align-items-center">
            <img src="./images/casa com moeda.png" alt="Imagem 1" className="img-fluid" />
            <p className="mt-3">Qual é o preço médio de um sistema fotovoltaico?</p>
          </div>
        </div>

        {/* TERCEIRO ITEM */}
        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
          <div className="d-flex flex-column align-items-center">
            <img src="./images/painel-telhado.png" alt="Imagem 1" className="img-fluid" />
            <p className="mt-3">Como a energia solar é convertida em eletricidade?</p>
          </div>
        </div>
      </section>

      {/* COLUNA 2 */}
      <section className="row my-4 justify-content-center">
        {/* PRIMEIRO ITEM */}
        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
          <div className="d-flex flex-column align-items-center">
            <img src="./images/conta.png" alt="Imagem 1" className="img-fluid" />
            <p>Posso zerar a minha conta de luz com energia solar?</p>
          </div>
        </div>

        {/* SEGUNDO ITEM */}
        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
          <div className="d-flex flex-column align-items-center">
            <img src="./images/painel-numerado.png" alt="Imagem 1" className="img-fluid" />
            <p className="mt-3">Qual é a melhor placa solar?</p>
          </div>
        </div>

        {/* TERCEIRO ITEM */}
        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
          <div className="d-flex flex-column align-items-center">
            <img src="./images/painel-loja.png" alt="Imagem 1" className="img-fluid" />
            <p className="mt-3">Posso vender o excesso de energia produzido pelo meu sistema fotovoltaico?</p>
          </div>
        </div>
      </section>
      <Cliente />
    </main>
  );
}

export default Body;

