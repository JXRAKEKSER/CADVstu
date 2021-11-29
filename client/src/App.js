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
  const [foreign, setForeign] = useState(false);
  const toogleForeign = (val) => setForeign(val);
  return (
   
    <LocaleContext.Provider value={foreign} > 
      <Header data={fetchData.data} toogle={toogleForeign}/>
      <Description data={fetchData.data} foreign={foreign}/>
      <Icons data={fetchData.data} foreign={foreign} />
      <Details data={fetchData.data} foreign={foreign} />
      <Faq data={fetchData.data} foreign={foreign} />
      <Footer foreign={foreign}/>
   </LocaleContext.Provider>
  );
}


export default App;