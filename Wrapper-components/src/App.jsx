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




function Card({children}){    {/*This Card is a Warpper component in which we can add any component or any other div and that will be taken as  children*/}
  return <div style={{
    border: "1px solid black",
     padding:10,
     margin: 10 }}>
{children}
  </div>
}

export default App;
