import './App.css';


function App() {
  return (
    <div className="table">
      <h1>
        Cadastre seu vilão
      </h1>
      <input type="text" placeholder="Qual é seu nome?"/>
      <input type="text" placeholder="Quais são suas maldades" />
      <input type="text" placeholder="Ele tem poder?" />
      <thead>
        <th>
          Nome
        </th>
        <th>
          Maldade
        </th>
        <th>
          Poder
        </th>
      </thead>
      
    </div>
  );
}

export default App;