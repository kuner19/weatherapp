const getWeatherDescription = (weatherCode:number,isday:number) => {
    switch (true) {
      case (weatherCode >= 0 && weatherCode <= 19):
        return Boolean(isday)? 'sunny' : 'night'
      case (weatherCode >= 20 && weatherCode <= 29):
        return "rainy";
      case (weatherCode >= 30 && weatherCode <= 49):
        return "snowy";
      case (weatherCode >= 50 && weatherCode <= 69):
        return "rainy";
      case (weatherCode >= 70 && weatherCode <= 79):
        return "snowy";
      case (weatherCode >= 80 && weatherCode <= 99):
        return "thunderstorm";

      default:
        return "Unknown Weather";
    }
  };


  export default getWeatherDescription