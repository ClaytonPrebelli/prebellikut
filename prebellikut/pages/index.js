import React from 'react';
import  MainGrid  from '../src/components/MainGrid'
import Box  from '../src/components/Box'
import  { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
function ProfileSidebar(propriedades) {
  
  return (
    <Box>
    <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px'}}/>
    <hr/>
    <p>
    <a className="boxLink" href={`https://github.com/${propriedades.githubuser}`}>@{propriedades.githubUser}</a></p>
    <hr/>
    <AlurakutProfileSidebarMenuDefault />
  </Box>
  )
}


export default function Home() {
  const githubUser = 'ClaytonPrebelli';
  const [comunidades, setComunidades] =  React.useState(['Alurakut']);
  console.log(comunidades);
  const pessoasFavoritas = ['juunegreiros', 'omariosouto', 'peas' ,'rafaballerini', 'marcobrunodev', 'felipefialho']
  return(
    <>
    <AlurakutMenu />
  <MainGrid>
    <div className="profileArea"    style={{ gridArea: 'profileArea' }}>
     <ProfileSidebar githubUser={githubUser}/>  
    </div>
    <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
      <Box>
          <h1 className="title"> Bem Vindo</h1>


          <OrkutNostalgicIconSet>
            
          </OrkutNostalgicIconSet>
      </Box>
      <Box>
        <h2 className="subTitle">O que você deseja fazer?</h2>
        <form onSubmit={function handleCriaComunidade(e){
          e.preventDefault();
          console.log(e);
          const comunidadesAtualizadas = [...comunidades, 'Alurastars'];
          setComunidades(comunidadesAtualizadas);
          console.log(comunidades);
        }}>
        <div>
        
          <input placeholder="Qual vai ser o nome da sua comunidade?" 
          name="title" 
          aria-label="Qual vai ser o nome da sua comunidade?"
          type="text"/>
        
        </div>
        <div>
        
          <input placeholder="Insira a URL da capa" 
          name="image" 
          aria-label="Insira a URL da capa"
          type="text"/>
       
        </div>
        <button>Criar Comunidade</button>

        </form>
      </Box>
    </div>
    <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
        <ProfileRelationsBoxWrapper>
          
         <ul>
          {comunidades.map((pessoa) => {
            return(
              <li>
                <a href={`/users/${pessoa}`} key={pessoa}>
                <img src={`http://placehold.it/300x300`} /> 
                <span>{pessoa}</span>
              </a>
              </li>
            )})}
          </ul>
        </ProfileRelationsBoxWrapper>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Meus amigos <span className="boxLink">({pessoasFavoritas.length})</span>
          </h2>
         <ul>
          {pessoasFavoritas.map((pessoa) => {
            return(
              <li>
                <a href={`/users/${pessoa}`} key={pessoa}>
                <img src={`https://github.com/${pessoa}.png`} />
                <span>{pessoa}</span>
              </a>
              </li>
            )})}
          </ul>
        </ProfileRelationsBoxWrapper>
        <Box>
          Comunidades
         </Box>
    </div>
  </MainGrid>
  </>
  )
  
}
