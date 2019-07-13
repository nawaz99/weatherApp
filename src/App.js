import React,{ useState,useEffect } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

function App() {

  const [state,setState] = useState({
    temperature:'',
    city:'',
    coutry:'',
    humidity:'',
    description:'',
    error:''
  })

const getWeather = async (e) => {

const API_key = 'fcbba02a3a77faea0ff178abf1ad0951';
e.preventDefault();
const city = e.target.elements.city.value;
const country = e.target.elements.country.value;
const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}&units=metric`
const api_call = await fetch(URL);
const data = await api_call.json();

if(city && country){
setState({
  temperature:data.main.temp,
  city:data.name,
  country:data.sys.country,
  humidity:data.main.humidity,
  description:data.weather[0].description,
  error:''  
})
}else{
  setState({
    temperature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:'please enter the value.'  
  })
}
}
useEffect(() => {
  return () =>  getWeather;
})


return (
  <div>
  <div  className='wrapper'>
    <div  className='main'>
      <div  className='container'>
           <div className='row'>
           <div className='col-xs-5 title-container'>
           <Title />
           </div>
           <div className='col-xs-7 form-container'>
           <Form getWeather={getWeather}/>
           <Weather {...state} />
           </div>
         </div>
      </div>
    </div>
  </div>
  </div>  
  );
}

export default App;
