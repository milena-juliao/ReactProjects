import React, {useState} from 'react';
import axios from 'axios'; //usado para fazer a requisição numa api
import * as S from './estiloHome';
import { useHistory } from 'react-router-dom';//para nos direcionar para outras páginas.

export default function App(props) {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');//O que for digitado no input será recuperado e setado no array. Ele começa vazio pra adicionaros o que vamos buscar.
  const [erro, setErro] = useState(false);

  //------Função para lidar com a pesquisa-------
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositorios = response.data;
      const repositoriosName = [];

      //--------Percorrer os repositórios e armazená-los dentro de um array-------
      repositorios.map((repository) => {
        repositoriosName.push(repository.name);
      });
      localStorage.setItem('repositoriosName', JSON.stringify(repositoriosName))
      setErro(false);
      history.push('/repositorios');//sempre que os dados forem salvos no localStorage seremos redirecionados para a página com os repositórios.
    })
    .catch(erro => {
      setErro(true);
    });
  }
  //---------------------------------------------
  return (
    <S.HomeContainer>
      <S.Content>
        <S.Input value={usuario} placeholder="Usuário GitHub" name="usuario" onChange={e => setUsuario(e.target.value)}/>
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Content>
      { erro ?  <S.ErroMsg>Usuário não encontrado. Digite um usuário válido.</S.ErroMsg> : ''}
    </S.HomeContainer>
  );
}

//No button, ao clicar ele dispara a função responsável por buscar os repositórios referentes ao usuário digitado.
