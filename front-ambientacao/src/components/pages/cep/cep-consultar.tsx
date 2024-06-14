import { useEffect, useState } from "react";
import { Endereco } from "../../../models/Endereco";
//EXERCÍCIOS
//1 - Consultar os produtos da API (CORS)
//2 - Exibir no HTML uma lista de produtos

function CepConsultar() {
    const[rua, setRua] = useState("");
    const[bairro, setBairro] = useState("");
    const[cidade, setCidade] = useState("");
    const[cep, setCep] = useState("");

    //Evento de carregamento do componente
    useEffect(() => {

    },[]);

    function carregarCep(){
         //FETCH ou AXIOS
         fetch("https://viacep.com.br/ws/" + cep + "/json/")
         .then((resposta) =>                 
             resposta.json()
         )
         .then((endereco : Endereco) => {
             console.log(endereco.logradouro);
             setRua(endereco.bairro);
             setBairro(endereco.bairro);
             setCidade(endereco.localidade);
         });
    }

    return (
        <div>
            <h1>Consultar CEP</h1>
            <input type="text" placeholder="Digite seu Cep" onBlur={carregarCep} onChange={(e : any) => setCep(e.target.value)}
            />
            <p>
                { rua }
            </p>
            <button>{bairro}</button>

            <input type="text" disabled value={cidade}/>
        </div>
    )
}

export default CepConsultar;    