class FetchApi{
    constructor(url){
        this.url = url;
        this.key= 'a0ff3a40ca111c69950575f4710a8987';
        // this.url= 'https://api.openweathermap.org/data/2.5/'  
    }

    async getWeatherData(cityName){
        try{    
            const response = await fetch(`${this.url}weather?q=${cityName}&units=metric&APPID=${this.key}`);
            return response.json();
        }
        catch(error){
            console.log('There is an error: ',error)
        }
    }
}
export {FetchApi};