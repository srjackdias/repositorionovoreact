import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {

    let usuarioLogado = 'Gill Bates'

    const [usuarios,setUsuarios] = useState([

        {


            id:Date.now(),
            nome: "Et Bilu",
            email: "flash@gmail.com"


        },

        {


            id:Date.now() + 1,
            nome: "Mano juca",
            email: "rui@gmail.com"


        },



        {


            id:Date.now() + 2,
            nome: "Costinha",
            email: "costinha@gmail.com"


        },






    ])

    return(

        <GlobalContext.Provider value={{usuarioLogado,usuarios,setUsuarios}}>

            {children}

        </GlobalContext.Provider>




    )


}