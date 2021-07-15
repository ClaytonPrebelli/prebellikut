import  MainGrid  from '../src/components/MainGrid'
import Box  from '../src/components/Box'
import  { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'
import { AlurakutMenu } from '../src/lib/AlurakutCommons'
function ProfileSidebar(propriedades) {
  console.log(propriedades)
  return (
    <Box>
    <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px'}}/>
    <hr/>
    <h1 className="boxLink">{`${propriedades.githubUser}`}</h1>
    <p className="subTitle">{`Github Profile`}</p>
  </Box>
  )
}


export default function Home() {
  const githubUser = 'ClaytonPrebelli';
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
      Bem Vindo
      </Box>
    </div>
    <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
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
