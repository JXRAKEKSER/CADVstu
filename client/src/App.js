import { createContext, useEffect, useState } from 'react';
import Header from './components/Header/Header';
import './App.css';

import Description from './components/Description/Description';
import Icons from './components/Icons/Icons';
import Details from './components/Details/Details';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';


export const LocaleContext = createContext();
function App() {
  const [fetchData, setFetchData] = useState({});
  useEffect(() =>{
    function getData(){
      fetch('/systemIiTEC')
      .then(response => {
        if(response.ok){
         return response.json()
        }
        return Promise.reject(`Ошибка с кодом ${response.status}`)
      })
      .then(data => {
        setFetchData({...fetchData, data});
      })
      .catch(error => console.log(error))
    }
    getData();
    
  },[])
  const [foreign, setForeign] = useState('ru');
  const toogleForeign = (val) => setForeign(val);

    const data = {...fetchData?.data?.[foreign], locale: foreign};



  return (
   
    <LocaleContext.Provider value={data} >
      <Header toogle={toogleForeign}/>
      <Description />
      <Icons />
      <Details />
      <Faq />
      <Footer />
   </LocaleContext.Provider>
  );
}


export default App;