import getWeatherDescription from "./weatherTable"
import image from '@/src/style/images'

export const bgSelect = (weatherCode:number,isday:number) => {
    const weather = getWeatherDescription(weatherCode,isday)
    const forecasts =[
        {
            weatherName:'clear',
            src: (isday ? image.sunny : image.night),
            bg1: (isday ? '#45AFDC' : '#221A26'),
            bg2: (isday ? '#0057D9' : '#2C0781')
        },
        {
            weatherName:'snowy',
            src: image.snowy,
            bg1:'#8B8B8B',
            bg2:'#1495CC'
        },
        {
            weatherName:'rainy',
            src: image.rainy,
            bg1:'#031716',
            bg2:'#274D60'
        },
        {
            weatherName:'thunderstorm',
            src: image.thunderstorm,
            bg1:'#522C5D',
            bg2:'#150016'
        }
    ]


    return (
        
        forecasts.find( x => x.weatherName === weather)
    )


    }

