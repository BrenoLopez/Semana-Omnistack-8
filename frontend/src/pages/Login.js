import React,{useState} from 'react';
import logo from '../assets/logo.svg';
import './Login.css';
import api from '../services/Api'

export default function Login({history}) {
  //forma de usar estados em um component stateless 

  const [username, setUsername] = useState('');
  async function handleSubmit(e){
    e.preventDefault();
    const response = await api.post('/devs',{ username});
    const {_id: id} = response.data;
    if(response){
      history.push(`/dev/${id}`);
    }
  }
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
      <img src={logo} alt="Tindev"/>
      <input
      placeholder="Digite seu usuário do github"
      value={username}
      onChange={e=>{
          setUsername(e.target.value)
      }}
      />
      <button type="submit">Enviar</button>
      </form>   
    </div>
  );
}
