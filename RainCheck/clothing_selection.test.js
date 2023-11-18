import chooseClothes from "./clothing_selection";
import * as outfits from './constants/outfits';


function expectOutfitInCategory(category, outfit) {
    expect(category['head'].includes(outfit['head'])).toBe(true);
    expect(category['top'].includes(outfit['top'])).toBe(true);
    expect(category['bottom'].includes(outfit['bottom'])).toBe(true);
    expect(category['shoes'].includes(outfit['shoes'])).toBe(true);
}


describe('Choose outfits based on temp', () => {
    test('Create an outfit for hot weather (Sunny)', () => {
        const weatherData = {'temperature': 75, 'rain': .05, 'forecast': 'Mostly Sunny'};
        const outfit = chooseClothes(weatherData);
    
        expectOutfitInCategory(outfits.SUNNY_CLOTHES, outfit);
    });

    test('Create an outfit for warm weather', () => {
        const weatherData = {'temperature': 75, 'rain': .05, 'forecast': 'Mostly Clear'};
        const outfit = chooseClothes(weatherData);
    
        expectOutfitInCategory(outfits.WARM_CLOTHES, outfit);
    });

    test('Create an outfit for warm weather (sunny)', () => {
        const weatherData = {'temperature': 60, 'rain': .05, 'forecast': 'Mostly Sunny'};
        const outfit = chooseClothes(weatherData);
    
        expectOutfitInCategory(outfits.WARM_CLOTHES, outfit);
    });

    test('Create an outfit for temperate weather', () => {
        const weatherData = {'temperature': 50, 'rain': .05, 'forecast': 'Mostly Sunny'};
        const outfit = chooseClothes(weatherData);
    
        expectOutfitInCategory(outfits.NORMAL_CLOTHES, outfit);
    });

    test('Create an outfit for cold weather', () => {
        const weatherData = {'temperature': 40, 'rain': .05, 'forecast': 'Mostly Sunny'};
        const outfit = chooseClothes(weatherData);
    
        expectOutfitInCategory(outfits.COLD_CLOTHES, outfit);
    });
});

describe('Choose outfits based on precipitation', () => {
    test('Create an outfit for rain in hot weather (Sunny)', () => {
        const weatherData = {'temperature': 75, 'rain': .6, 'forecast': 'Mostly Sunny'};
        const outfit = chooseClothes(weatherData);
    
        expectOutfitInCategory(outfits.RAINY_CLOTHES, outfit);
    });

    test('Create an outfit for rain in warm weather', () => {
        const weatherData = {'temperature': 60, 'rain': .4, 'forecast': 'Mostly Clear'};
        const outfit = chooseClothes(weatherData);
    
        expect(outfits.RAINY_CLOTHES['head'].includes(outfit['head'])).toBe(true);
        expect(outfits.WARM_CLOTHES['top'].includes(outfit['top'])).toBe(true);
        expect(outfits.WARM_CLOTHES['bottom'].includes(outfit['bottom'])).toBe(true);
        expect(outfits.WARM_CLOTHES['shoes'].includes(outfit['shoes'])).toBe(true);
    });
});