import image from '@/src/style/images'

const forecasts =[
    {
        weatherName:'sunny',
        src: image.sunny,
        bg1:'#45AFDC',
        bg2:'#0057D9'
    },
    {
        weatherName:'night',
        src: image.night,
        bg1:'#221A26',
        bg2:'#2C0781'
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

const imgSelect = (weather:string) => {
    return forecasts.find( x => x.weatherName === weather)
}


const bgSelect = (weather:string) => {
    forecasts.find( x => x.weatherName === weather)
}


export default imgSelect