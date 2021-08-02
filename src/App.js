import Item from "./components";

const App = () => {
  return(
    <>
      <h1>HEROFLIX</h1>
      <ul>
        <Item texto='Mulher-Maravilha 1984'/>
        <Item texto='Superman o filme'/>
        <Item texto='Loki'/>
        <Item texto='Viúva Negra'/>
        <Item texto='Vingadores Ultimato'/>
        <Item texto='Como virei super-herói'/>
        <Item texto='Liga da Justiça'/>
        <Item texto='Homem-Aranha Longe de Casa'/>
        <Item texto='Batman e o longo dia das Bruxas'/>
        <Item texto='Vingadores Guerra Infinita'/>
      </ul>
    </>
  )
}

export default App;