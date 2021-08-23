import React, { useEffect , useState} from 'react';//useEffect monitora uma variável e quando ela é modificada ele dispara.
import * as S from './estiloRep';//vai importar tudo que estiver dentro do arquivo de estilo, acessando pela variável S (pode ser qualquer letra).
import { useHistory } from 'react-router-dom';

export default function Repositorios(){
    //------Monitorar o ciclo de vida do componente------
    const history = useHistory();
    const [repositorios, setRepositorios] = useState([]);
    useEffect(() => {
        let repositoriosName = localStorage.getItem('repositoriosName');
        //-------se não houver um nome digitado------
        if(repositoriosName != null){//null é o valor que ele retorna quando não há nada digitado no input.
            repositoriosName = JSON.parse(repositoriosName);
            setRepositorios(repositoriosName);
            localStorage.clear();
        }else{
            history.push('/');
        }
        //-------------------------------------------
        
    }, [])
    //---------------------------------------------------

    return(
        <S.Container>
            <S.Title>Repositórios Encontrados</S.Title>
            <S.Lista>
                {repositorios.map(repository => {
                    return(
                        <S.Item>Repositório: {repository}</S.Item>
                    )
                }) }
            </S.Lista>
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    )
}
//linkHome: caso não haja nenhum dado inserido no campo ou algum repositório que não existe o usuário será redirecionado para a página inicial.