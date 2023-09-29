import {} from 'react';
/*importando o bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
/*importando todas as imagens */
import Imagem1 from './assets/produto-hero.jpg';
import Img1 from './assets/cat-img-1.jpg';
import Img2 from './assets/cat-img-2.jpg';
import Img3 from './assets/cat-img-3.jpg';
import Img4 from './assets/cat-img-3.jpg';
import Produto1 from './assets/product-1.jpg';
import Produto2 from './assets/product-2.jpg';
import Produto3 from './assets/product-3.jpg';
import Produto4 from './assets/product-4.jpg';
import Produto5 from './assets/product-5.jpg';
import Produto6 from './assets/product-6.jpg';
import Produto7 from './assets/product-7.jpg';
import Produto8 from './assets/product-8.jpg';
import ProdutoDetail1 from './assets/product-detail-1.jpg';
import ProdutoDetail2 from './assets/product-detail-2.jpg';
import ProdutoDetail3 from './assets/product-detail-3.jpg';
import ProdutoDetail4 from './assets/product-detail-4.jpg';

function Home() {
  return (
    <>
    {/*section principal de imagem no home */}
      <section className="mb-4 p-5 bg-grey">
        <div className="row d-flex align-items-center justify-content-center hero">
          <div className="col-md-6 my-3">
            <h1 className="text-secondary">Nova coleção 2023</h1>
            <h2 className="mb-3">20% OFF para a nova coleção</h2>
            <a href="" className="btn btn-dark">
              Conheça a coleção
            </a>
          </div>
          <div className="col-md-6 my-3 text-center">
            <img src={Imagem1} alt="hero" className="img-fluid" />
          </div>
        </div>
      </section>
      {/* section dos Produtos */}

      <section className="my-5">
        <h4 className="text-center">Produtos em destaque</h4>
        <div className="row">
          <div className="col-md-4 my-3">
            <img src={Img1} alt="" className="img-fluid" />
          </div>
          <div className="col-md-4 my-3 d-flex flex-column justify-content-between align-items-center">
            <img src={Img2} alt="" className="img-fluid" />
            <img src={Img3} alt="" className="img-fluid" />
          </div>
          <div className="col-md-4 my-3">
            <img src={Img4} alt="" className="img-fluid" />
          </div>
        </div>
      </section>
      {/* section do veja mais*/}

      <section className="my-5">
        <h4 className="text-center">Veja também</h4>
        <div className="row">
          <div className="col-md-6 col-lg-3 my-3 text-center">
            <img src={Produto1} alt="" className="img-fluid" />
            <a href="" className="btn btn-outline-dark my-3">
              Adicionar ao carrinho
            </a>
          </div>
          <div className="col-md-6 col-lg-3 my-3 text-center">
            <img src={Produto2} alt="" className="img-fluid" />
            <a href="" className="btn btn-outline-dark my-3">
              Adicionar ao carrinho
            </a>
          </div>
          <div className="col-md-6 col-lg-3 my-3 text-center">
            <img src={Produto3} alt="" className="img-fluid" />
            <a href="" className="btn btn-outline-dark my-3">
              Adicionar ao carrinho
            </a>
          </div>
          <div className="col-md-6 col-lg-3 my-3 text-center">
            <img src={Produto4} alt="" className="img-fluid" />
            <a href="" className="btn btn-outline-dark my-3">
              Adicionar ao carrinho
            </a>
          </div>
          <div className="col-md-6 col-lg-3 my-3 text-center">
            <img src={Produto5} alt="" className="img-fluid" />
            <a href="" className="btn btn-outline-dark my-3">
              Adicionar ao carrinho
            </a>
          </div>
          <div className="col-md-6 col-lg-3 my-3 text-center">
            <img src={Produto6} alt="" className="img-fluid" />
            <a href="" className="btn btn-outline-dark my-3">
              Adicionar ao carrinho
            </a>
          </div>
          <div className="col-md-6 col-lg-3 my-3 text-center">
            <img src={Produto7} alt="" className="img-fluid" />
            <a href="" className="btn btn-outline-dark my-3">
              Adicionar ao carrinho
            </a>
          </div>
          <div className="col-md-6 col-lg-3 my-3 text-center">
            <img src={Produto8} alt="" className="img-fluid" />
            <a href="" className="btn btn-outline-dark my-3">
              Adicionar ao carrinho
            </a>
          </div>
        </div>
      </section>

      {/* section do detalhes do produto */}
      <h4 className="text-center mb-3">Detalhes do Produto</h4>

      <section className="mb-5 px-5 bg-grey">
        <div className="row d-flex">
          <div className="col-md-2 my-3">
            <div className="row">
              <div className="col-6">
                <img
                  src={ProdutoDetail1}
                  className="img-fluid my-2"
                  alt="Imagem do produto"
                />
              </div>
              <div className="col-6">
                <img
                  src={ProdutoDetail2}
                  className="img-fluid my-2"
                  alt="Imagem do produto"
                />
              </div>
              <div className="col-6">
                <img
                  src={ProdutoDetail3}
                  className="img-fluid my-2"
                  alt="Imagem do produto"
                />
              </div>
              <div className="col-6">
                <img
                  src={ProdutoDetail4}
                  className="img-fluid my-2"
                  alt="Imagem do produto"
                />
              </div>
            </div>
          </div>
          <div className="col-md-5 my-3 text-center">
            <img
              src={ProdutoDetail1}
              className="img-fluid my-2"
              alt="Imagem do produto"
            />
          </div>

          <div className="col-md-5 my-3 py-3">
            <div>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <h2 className="my-2">Red Digital Watch</h2>
            <h5 className="text-secondary">R$ 9999.99</h5>
            <p className="my-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              ratione, nostrum cupiditate repellendus distinctio obcaecati!
            </p>
            <a href="" className="btn btn-dark my-3">
              Adicionar ao carrinho
            </a>
            <p className="my-3">
              <i className="bi bi-heart"></i> Adicionar a sua lista de desejos
            </p>
          </div>
        </div>
      </section>

      {/* section do rodape  */}
      <section className="p-5 mt-4 bg-dark text-center text-light">
        <h4>Engenharia de Software- 2023</h4>
      </section>
    </>
  );
}
export default Home;
