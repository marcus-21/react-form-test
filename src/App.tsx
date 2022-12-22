import react ,{ useState } from 'react'

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

const App = () => {

  const [firstname,setFirstname] = useState("")
  const [lastname,setlastname] = useState("")
  const [years,setyears] = useState("")

  const clicoufirstname = (event: InputChangeEvent) => {
    setFirstname(event.target.value)
  }
  const clicoulastname = (event: InputChangeEvent) => {
    setlastname(event.target.value)
  }
  const clicouyears = (event: InputChangeEvent) => {
    setyears(event.target.value)
  }
  return (
    <div>
      <div>
        Nome:
        <input type="text" value={firstname} onChange={clicoufirstname} />
      </div>

      <div>
        Sobrenome:
        <input type="text" value={lastname} onChange={clicoulastname}/>
      </div>

      <div>
        Idade:
        <input type="text" value={years} onChange={clicouyears}/>
      </div>

      <hr/>

      Olá {`${firstname} ${lastname}`}, tudo bem?<br/>
      Você tem {years} anos.
    </div>
  );
}

export default App;
