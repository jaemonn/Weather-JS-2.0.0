
class Weather{
    constructor(location) {
        this.apiKey = 'ENWCKHRPFD6SEDZBAEHUQ4KED';
        this.location = location;
    }

    async getWeather() {
        const responseData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.location}/?key=${this.apiKey}`);
        
        const response = await responseData.json();

        return {
            response
        }
    }

    // Change location
    changeLocation(newLocation) {
        this.location = newLocation;
    }
}