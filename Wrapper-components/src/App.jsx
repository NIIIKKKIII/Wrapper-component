function App(){
  return <div style={{display: "flex"}}>
    <Card>
      Hi there
    </Card>
    <Card>
      Hi there from card 2
    </Card>
  </div>
}




function Card({children}){
  return <div style={{
    border: "1px solid black",
     padding:10,
     margin: 10 }}>
{children}
  </div>
}

export default App;