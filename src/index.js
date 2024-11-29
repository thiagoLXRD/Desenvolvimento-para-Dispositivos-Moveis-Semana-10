import React from 'react';
import ReactDOM from 'react-dom/client';


class TotalCliques extends React.Component{
  constructor(props){
    super(props)
    this.state = {cliques : 0, lista : []}
    this.handleClick = this.handleClick.bind(this)
    
  }

  handleClick() {
    this.setState(prevState => ({
      cliques: prevState.cliques + 1,
      lista: [...prevState.lista, (new Date().toLocaleTimeString())]
    }))
  }


  render(){
    const listItems = this.state.lista.map((li, index) => {
      return <li key={index}>{li}</li>
    })
    return (<div>
        <button onClick={this.handleClick}>Clique Aqui</button>
        <h2>Total de Cliques : {this.state.cliques}</h2>
        {listItems}
      </div>  )
  }
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>Registro de Horário de cliques</h1>
    <TotalCliques/>
  </div>
);


