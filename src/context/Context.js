import React,{useState} from 'react';

const Context =React.createContext()


const Context_provider=(props)=>{
    const [openconfirm,setOpenconfirm]=useState(false);

    return(
        <Context.Provider value={{setOpenconfirm,openconfirm}}>
{props.children}
        </Context.Provider>
    )

}

export {Context_provider};
export default Context;
