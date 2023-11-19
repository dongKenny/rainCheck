import * as outfits from './constants/outfits';

export function parseShortForecast(forecast) {
    forecast = forecast.toLowerCase();

    let firstForecast = '';
    let firstForecastIndex = forecast.length - 1;
    const forecasts = ['cloudy', 'clear', 'rain', 'blizzard', 'thunder', 'snow', 'sunny'];

    // Returns the first mentioned forecast in the description to prevent ordering of statements affecting outcome
    forecasts.forEach((possibleForecast) => {
        const idx = forecast.indexOf(possibleForecast);
        if (idx != -1 && idx < firstForecastIndex) {
            firstForecast = possibleForecast;
            firstForecastIndex = idx;
        }
    }); 

    switch(firstForecast) {
        case 'blizzard':
            return 'heavySnow';
        case 'thunder':
            return 'storm'
        default:
            return firstForecast;
    }
}


function filterTemp(temperature, forecast) {
    // Temps based on clothing sales forecasts in South Korea https://www.scirp.org/pdf/jtst_2023020615050778.pdf
    if (temperature >= 75 && parseShortForecast(forecast) === 'sunny') {
        return outfits.SUNNY_CLOTHES;
    }
    if (temperature >= 60) {
        return outfits.WARM_CLOTHES;
    }
    if (temperature >= 50) {
        return outfits.NORMAL_CLOTHES;
    }
    return outfits.COLD_CLOTHES;
}


function filterRain(precipitation, forecast, outfit) {
    if (['rain', 'storm', 'heavyRain'].includes(forecast) || precipitation >= .6) {
        return outfits.RAINY_CLOTHES;
    }
    if (precipitation >= .4) {
        return {
            head: outfits.RAINY_CLOTHES['head'],
            top: outfit['top'],
            bottom: outfit['bottom'],
            shoes: outfit['shoes'],
        }
    }
    return outfit;
}


function selectRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


export default function chooseClothes(weather_data) {
    // https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9035969/
    // http://koreascience.or.kr/article/JAKO201717234703282.pdf 

    let clothes = filterTemp(weather_data['temperature'], weather_data['forecast'].toLowerCase());
    clothes = filterRain(weather_data['rain'], weather_data['forecast'].toLowerCase(), clothes);

    return {
        head: selectRandom(clothes['head']),
        top: selectRandom(clothes['top']),
        bottom: selectRandom(clothes['bottom']),
        shoes: selectRandom(clothes['shoes']),
    };
}