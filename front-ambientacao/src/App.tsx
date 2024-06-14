import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CepConsultar from "./components/pages/cep/cep-consultar";
import ProdutoCadastrar from "./components/pages/produto/produto-cadastrar";
import ProdutoListar from "./components/pages/produto/produto-listar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
            <Link to={"/pages/produtos/listar"}>Listar Produtos</Link></li>
            <li>
            <Link to={"/pages/produtos/cadastrar"}>Cadastrar Produtos</Link></li>
            <li>
            <Link to={"/pages/cep/consultar"}>Consultar CEP</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<ProdutoListar />}/>
          <Route path='/pages/produtos/listar' element={<ProdutoListar />}/>
          <Route path='/pages/produtos/cadastrar' element={<ProdutoCadastrar />} />
          <Route path='/pages/cep/consultar' element={<CepConsultar />} />
        </Routes>
        <footer>
          <p>Desenvolvido por Jean Felipe Moreira</p>
        </footer>
        </BrowserRouter>
    </div>
  );
}

export default App;