import styled from 'styled-components'

const Box = styled.div`
  background: #fff;
  border-radius: 8px;
  
`
const MainGrid = styled.main`
  display: grid;
  grid-gap: 10px;
  padding: 16px;
  @media (min-width: 860px) {
    grid-template-area: "profileArea welcomeArea profileRelationshipArea";
    grid-template-columns: 160px 618px 312px;
  }
`

export default function Home() {
  return(
  <MainGrid>
    <div style={{ gridArea: 'profileArea' }}>
      <Box>
      imagem
      </Box>
    </div>
    <div style={{ gridArea: 'welcomeArea' }}>
      <Box>
      Bem Vindo
      </Box>
    </div>
    <div style={{ gridArea: 'profileRelationshipArea' }}>
      <Box>
      Comunidades
      </Box>
    </div>
  </MainGrid>
  )
  
}
