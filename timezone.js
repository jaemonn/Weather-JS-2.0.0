class Timezone {
    constructor(data) {
        this.apiKey = '6767e5a977c84c93b83325c9558be31a';
        this.timezone = data.response.timezone;
    }

    async getTimezone() {
        const responseData = await fetch(`https://api.ipgeolocation.io/timezone?apiKey=${this.apiKey}&tz=${this.timezone}`);
        
        const response = await responseData.json();

        return {
            response
        }
    }

    // Change location
    
}