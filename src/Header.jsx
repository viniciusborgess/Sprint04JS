import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Dropdown from 'react-bootstrap/Dropdown';
import './css/hover.css';
import './css/styles.css';
import './css/variables.css';

function Header() {
  // Função para manipular o clique do botão existente
  const handleBotaoClick = () => {
    // Verifica se já existe um valor armazenado no localStorage
    let valorAtual = parseInt(localStorage.getItem('contador') || '0', 10);

    // Incrementa o valor atual usando uma operação matemática
    valorAtual += 2;

    // Armazena o novo valor no localStorage
    localStorage.setItem('contador', valorAtual.toString());

    // Exibe o valor no console
    console.log(`Cliques no botão do header multiplicado por 2: ${valorAtual}`);
  };


  return (
    <header className="container mt-4">
      {/* menu principal */}
      <nav className="d-flex navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand logo-menu" href="#">
            <figure className="col-md-6 my-5">
              <img src="./images/logosmart.png" alt="Imagem de um relógio" className="img-fluid efeito-fotos" />
            </figure>
          </a>

          <Button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-text-right"></i>
          </Button>

          <div className="collapse navbar-collapse justify-content-center nav-link" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Smart Light
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Conheça
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Seja um parceiro
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Form">
                  Atendimento
                </a>
              </li>
              

              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic" className='botaoinicio'>
                  Canais de contato
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ul>
          </div>

          <div className="navbar" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Button className="btn btn-primary my-3 color-smartlight efeito-button" id="botaoExistente"
                  onClick={handleBotaoClick} data-toggle="modal"
                  data-target="#ModalLongoExemplo">
                  Entrar em sua conta
                </Button>
              </li>
            </ul>
          </div>
          
        </div>
      </nav>
    </header>
  );
}

export default Header;
