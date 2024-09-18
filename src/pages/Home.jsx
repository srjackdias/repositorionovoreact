import React from 'react';
import NavBar from '../assets/Components/NavBar';
import { useContext } from 'react';
import { GlobalContext } from '../assets/contexts/GlobalContext';

function Home() {
    const { usuarioLogado, usuarios,setUsuarios } = useContext(GlobalContext);


    function inventarUsuario(){

        let usuarioNovo = {

             id:Date.now(),
             nome:"Capitão Ganso",
             email: "Capitao@Juliarobert.com"



        }

        setUsuarios([...usuarios,usuarioNovo])



    }

    return (
        <div>
            <NavBar />
            <h1>Página Home do site</h1>
            <p>Olá {usuarioLogado}</p>
            <div>
                {usuarios.map((usuario) => (
                    <div key={usuario.id}>
                        <p>Nome: {usuario.nome}</p>
                        <p>E-mail: {usuario.email}</p>
                        <p>ID: {usuario.id}</p>
                    </div>
                ))}
            </div>

            <button onClick={inventarUsuario}>Inventar usuario</button>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate molestias ipsa beatae consectetur harum magni eos distinctio, aspernatur blanditiis, id sint, provident quae placeat omnis. Ut rerum repellendus voluptates alias.</p>
        </div>
    );
}

export default Home;
