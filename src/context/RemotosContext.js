//RemotosContext.js
import React, {useState,useEffect} from 'react';
import '@babel/polyfill';
import { toast } from "react-toastify";
let RemoteContext = React.createContext({});
let {Provider,Consumer}=RemoteContext;
  function RemoteProvider ({children}) {
  
  let [gifs, setGifs] = React.useState([]);
  let [tecnologias, setTecnologias] = React.useState([]);
  let [correlaciones, setCorrelaciones] = React.useState([]);
  let [agentes, setAgentes] = React.useState([]);
  let [modulos, setModulos] = React.useState([]);
  let [estadisticas, setEstadisticas] = React.useState([]); 
  
  const buscarGifs = async () => {
   
     try {
     
      const response = await fetch("http://backendpandoragui.herokuapp.com/dashboard/eventos", {
        method: "GET",
          headers: {
            "Content-type": "application/json",
             jwt_token: localStorage.token
          }
      });
    
     const parseRes = await response.json();
     console.log('router.post correlaciones 04 parseRes:',parseRes);
     setGifs(parseRes);
     toast.success("Inicio de carga previa de data...");
      return parseRes;
    } catch (err) {
      console.error(err.message);
       toast.error(parseRes);
    }

  };
   const buscarTecnologias = async () => {
   
     try {
     
      const response = await fetch("http://backendpandoragui.herokuapp.com/dashboard/grupos", {
        method: "GET",
          headers: {
            "Content-type": "application/json",
             jwt_token: localStorage.token
          }
      });
    
     const parseRes = await response.json();
     console.log('router.get grupos 04 parseRes:',parseRes);
     setTecnologias(parseRes);
     toast.success("Inicio de carga previa de tecnologias...");
      return parseRes;
    } catch (err) {
      console.error(err.message);
       toast.error(parseRes);
    }

  };
  const buscarCorrelaciones = async () => {
   
     try {
     
      const response = await fetch("http://backendpandoragui.herokuapp.com/dashboard/correlaciones", {
        method: "GET",
          headers: {
            "Content-type": "application/json",
             jwt_token: localStorage.token
          }
      });
    
     const parseRes = await response.json();
     console.log('router.get grupos 04 parseRes:',parseRes);
     setCorrelaciones(parseRes);
     toast.success("Inicio de carga previa de Correlaciones...");
      return parseRes;
    } catch (err) {
      console.error(err.message);
       toast.error(parseRes);
    }

  };
    const buscarAgentes = async () => {
   
     try {
     
      const response = await fetch("http://backendpandoragui.herokuapp.com/dashboard/dependenciasagentes", {
        method: "GET",
          headers: {
            "Content-type": "application/json",
             jwt_token: localStorage.token
          }
      });
    
     const parseRes = await response.json();
     console.log('router.get grupos 04 parseRes:',parseRes);
     setAgentes(parseRes);
     toast.success("Inicio de carga previa de Agentes...");
      return parseRes;
    } catch (err) {
      console.error(err.message);
       toast.error(parseRes);
    }

  };

  const buscarModulos = async () => {
   
     try {
     
      const response = await fetch("http://backendpandoragui.herokuapp.com/dashboard/dependenciasmodulos", {
        method: "GET",
          headers: {
            "Content-type": "application/json",
             jwt_token: localStorage.token
          }
      });
    
     const parseRes = await response.json();
     console.log('router.get grupos 04 parseRes:',parseRes);
     setModulos(parseRes);
     toast.success("Inicio de carga previa de Modulos...");
      return parseRes;
    } catch (err) {
      console.error(err.message);
       toast.error(parseRes);
    }

  };

    const buscarEstadisticas = async () => {
   
     try {
     
      const response = await fetch("http://backendpandoragui.herokuapp.com/dashboard/estadisticas", {
        method: "GET",
          headers: {
            "Content-type": "application/json",
             jwt_token: localStorage.token
          }
      });
    
     const parseRes = await response.json();
     console.log('router.get estadisticas 04 parseRes:',parseRes);
     setEstadisticas(parseRes);
     toast.success("Inicio de carga previa de estadisticas...");
      return parseRes;
    } catch (err) {
      console.error(err.message);
       toast.error(parseRes);
    }
    
  };
      const checkAuthenticated2 = async () => {
    try {
      const res = await fetch("http://localhost:5000/authentication/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });

      const parseRes = await res.json();

    if (parseRes === true) { 
     
    console.log('TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT');
    buscarGifs();
    buscarTecnologias();
    buscarCorrelaciones();
    buscarAgentes();
    buscarModulos();
    buscarEstadisticas();
   }else {
    console.log('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
   }
    
    } catch (err) {
      console.error(err.message);
    }
  };
    
    useEffect(() => {
    const timer = setTimeout(() => {
    checkAuthenticated2();
     }, 10000);
    
    return () => clearTimeout(timer); 
   
   }, [checkAuthenticated2]);

     return <Provider value={{ gifs,tecnologias,correlaciones,agentes,modulos,estadisticas }}>
    {children}
   
  </Provider>

}
export {RemoteProvider ,Consumer as RemoteConsumer,RemoteContext} ;

