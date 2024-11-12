




  
    const API_key = '4b0ffaf446912bb7aa62622cf4d55f2b'
    const API = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'
    
    
    
    async function Weather(city_name){
    
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`
    
       try{
    
            const response = await fetch(API)
    
            if(response.status == 200){
    
                const data = await response.json()
    
    return data
    
    
            }
    
    
        }
        catch(err){
    
            console.log(err)
    
        }
       
    
    
        
    }
    
   
 export default Weather;



