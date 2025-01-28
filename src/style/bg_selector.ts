

export const bgSelect = (weather:string) => {
  

    const forecasts =[
        {
            weatherName:'sunny',
            bg1:'#F6D759',
            bg2:'#AC4403'
        },
        {
            weatherName:'clear',
            bg1:'#45AFDC',
            bg2:'#0057D9'
        },
        {
            weatherName:'snowy',
            bg1:'#A2B7D2',
            bg2:'#02255B'
        },
        {
            weatherName:'rainy',
            bg1:'#031716',
            bg2:'#274D60'
        },
        {
            weatherName:'stormy',
            bg1:'#522C5D',
            bg2:'#150016'
        }
    ]


    return (
        forecasts.find( x => x.weatherName === weather)
    )



    }

