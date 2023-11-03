import {} from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {

  return (
    <>
    <footer className="text-center rodape col-sm-12 col-md-12 col-lg-12">
  <figure>
    <img src="./images/footer-logo.png" alt="Imagem 1" className="img-fluid efeito-fotos" />
  </figure>

  <p className="text-info-emphasis">A Smart Light oferece produtos e serviços de qualidade com preços e condições diferenciadas para você migrar para energia solar.</p>
</footer>

    </>
  )
}

export default Footer
