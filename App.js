import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import Weather from "./component/apifetch";
import APPUI from "./component/APPUI";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();


const HomeScreen = ({route,navigation}) => {
  const [city, setCity] = useState('mumbai'); // Default city name
  const [weatherData, setWeatherData] = useState(null);



  
  useEffect(() => {
    if (route.params?.getValue) {
    console.log(route.params.getValue)
    let cityname = route.params.getValue
      setCity(cityname); // Optionally, set this to update the city
  } else {
      console.log("getValue is null or undefined");
  }
  }, [route.params]);





  useEffect(()=>{

getWeatherData()



  },[city])


  

  async function getWeatherData() {
     const data = await Weather(city);
     setWeatherData(data); // Store fetched data in state
   }
const metersToKm = (distance) => (distance / 1000).toFixed(1); // Converts meters to kilometers

const mpsToKph = (speed) => (speed * 3.6).toFixed(1); // Converts meters per second to km/h

const kelvinToCelsius = (temp) => (temp - 273.15).toFixed(2); // Converts Kelvin to Celsius

console.log(weatherData) 

const timestampToTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const Datefinder = ()=>{

  const date = new Date().getDay()

  switch(date){

case 0 :
  
text = "sun";
break

case  1 :
  text = "mon";
break

case 2 :
  text = "tues";
break

case 3 :
  text = "wed";
break

case 4 :
  text = "thurs";
break

case 5 : 
text = "fri";
break

default : 
text ="sat"




 



  }

return text

}


let dateint = new Date().getDate()

let cruntday= Datefinder()

console.log("Date",dateint)

let Dates = new Date().getDate()
let month = new Date().getMonth()
let year = new Date().getFullYear()

console.log(Dates,month,year)









let tempmin = weatherData?weatherData.main.temp_min:"Loading"
let tempmax = weatherData?weatherData.main.temp_max:"Loading"
return(

 



 <View style={{ width: "100%", height: "100%", backgroundColor: "black" }}>

      {weatherData ? console.log(weatherData.base) : console.log("Loading")}
      <SafeAreaView>
        <View style={{
          width: "100%", flexDirection: "row", overflow: 'hidden', justifyContent: 'flex-end',
          position: 'absolute',
          top: 0,
          zIndex: 1,

          backgroundColor: 'black',

        }}>


          <View style={{ flexDirection: "row", height: 38, overflow: 'hidden', justifyContent: 'flex-end' }}>
            <TouchableOpacity
            onPress={()=>{

               navigation.navigate("Search")

            }}
            >

            <Image source={require("./images/icons8-search-50.png")} style={{ width: 25, height: 25, margin: 10 }} />
            
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{

                   
            }}>
            <Image source={require("./images/icons8-menu-24.png")} style={{ margin: 10 }}  />
            </TouchableOpacity>
          </View>


        </View>
        <ScrollView>
          <View style={{
            flexDirection: 'column',
            margin: 20
          }}>








            {weatherData ?
              <Text style={{
                color: 'white',

                fontSize: 30,
                marginTop: 10
              }}>
                {weatherData.name}/{weatherData.sys.country}
              </Text>
              :
              <Text>No weather data available.</Text>}


            <Image source={require("./images/icons8-location-50.png")} style={{ width: 15, height: 15, margin: 10 }} />



          </View>

          <View>

            <View style={{
              flexDirection: 'row',
              marginLeft: 20
            }}>
              {weatherData ? <Text style={{ color: 'white', fontSize: 60 }}>{(weatherData.main.temp - 273.15).toFixed(2)}</Text> :
                <Text>Loading</Text>}
              <Image style={{
                width: 20,
                height: 20,
                marginLeft: 10,
                marginTop: 15
              }} source={require("./images/icons8-dot-50.png")} />


            </View>

            <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
              <Text style={{ color: 'white' }}>

                {cruntday} {kelvinToCelsius(tempmax)}/{kelvinToCelsius(tempmin)} °C
              </Text>

              <Text style={{ color: 'white', marginLeft: 10 }}>
                Date:{Dates}-{month}-{year}

              </Text>
            </View>


          </View>

          <View>



            <View style={{
              width: "90%", height: 120, //sunrise and sunset
              backgroundColor: '#C5001A',
              borderRadius: 25,
              alignSelf: 'center', marginVertical: 15,
              elevation: 4,
              overflow: 'hidden',
              flexDirection: 'row',
              justifyContent: 'space-around'

            }}>

              {weatherData ? <><View style={{
                justifyContent: 'center'
              }}>
                <Image source={require("./images/icons8-sunrise-50.png")} />
                <Text style={{
                  textAlign: 'center',
                  color: 'gold'
                }}>sunrise</Text>
                <Text style={{
                  color: 'white',
                  textAlign: 'center'
                }}>
                  {timestampToTime(weatherData.sys.sunset)}
                </Text>


              </View><View style={{
                justifyContent: 'center'
              }}>
                  <Image source={require("./images/icons8-sunset-50.png")} />
                  <Text style={{
                    textAlign: 'center',
                    color: 'gold'
                  }}>sunset</Text>
                  <Text style={{
                    color: 'white',
                    textAlign: 'center'
                  }}>
                    {timestampToTime(weatherData.sys.sunrise)}
                  </Text>

                </View></> : <Text>Loading</Text>}



            </View>
            <View style={{
              width: "90%", height: 400,
              backgroundColor: '#C5001A',
              borderRadius: 25,
              alignSelf: 'center', marginVertical: 15,
              elevation: 4,
              overflow: 'hidden',

            }}>

              <View style={{
                justifyContent: 'space-around',
              }}>
                <Text style={{
                  fontSize: 140,
                  alignSelf: "center",
                  color: 'white'
                }}>{dateint}</Text>
                <Text style={{
                  fontSize: 140,
                  alignSelf: "center",
                  color: 'gold'
                }}>{cruntday}</Text>
              </View>

            </View>

            <View style={{
              flexDirection: 'column'
            }}>

              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
                alignSelf: 'center',
                marginVertical: 5
              }}>

                <View style={{
                  width: '47%',
                  height: 130,
                  backgroundColor: "#C5001A",
                  borderRadius: 30
                }}>
                  <View style={{ flexDirection: "column", alignSelf: 'center', width: '100%', height: "90%", justifyContent: "space-around", alignItems: 'center' }}>
                    <Image source={require("./images/icons8-celsius-50.png")} />

                    <Text style={{
                      color: 'gold'
                    }}>Feel Like</Text>
                    {weatherData ? <Text style={{
                      color: 'white'
                    }}>
                      {(weatherData.main.temp - 273.15).toFixed(2)}
                    </Text> : <Text>Loading</Text>}
                  </View>
                </View>
                <View style={{
                  width: '47%',
                  height: 130,
                  backgroundColor: "#C5001A",
                  borderRadius: 30
                }}>

                  <View style={{ flexDirection: "column", alignSelf: 'center', width: '100%', height: "90%", justifyContent: "space-around", alignItems: 'center' }}>
                    <Image source={require("./images/icons8-wind-50.png")} />

                    <Text style={{
                      color: 'gold'
                    }}>E wind</Text>
                    {weatherData ? <Text style={{
                      color: 'white'
                    }}>
                      {mpsToKph(weatherData.wind.speed)}mi/h
                    </Text> : <Text>Loading</Text>}
                  </View>

                </View>



              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
                alignSelf: 'center',
                marginVertical: 5
              }}>

                <View style={{
                  width: '47%',
                  height: 130,
                  backgroundColor: "#C5001A",
                  borderRadius: 30
                }}>
                  <View style={{ flexDirection: "column", alignSelf: 'center', width: '100%', height: "90%", justifyContent: "space-around", alignItems: 'center' }}>
                    <Image source={require("./images/icons8-humidity-50.png")} />

                    <Text style={{
                      color: 'gold'
                    }}>Humidity</Text>
                    {weatherData ? <Text style={{
                      color: 'white'
                    }}>
                      {weatherData.main.humidity}"%"
                    </Text> : <Text>Loading</Text>}
                  </View>
                </View>
                <View style={{
                  width: '47%',
                  height: 130,
                  backgroundColor: "#C5001A",
                  borderRadius: 30
                }}>
                  <View style={{ flexDirection: "column", alignSelf: 'center', width: '100%', height: "90%", justifyContent: "space-around", alignItems: 'center' }}>
                    <Image source={require("./images/icons8-visibility-50.png")} />

                    <Text style={{
                      color: 'gold'
                    }}>Visibility</Text>
                    {weatherData ? <Text style={{
                      color: 'white'
                    }}>
                      {metersToKm(weatherData.visibility)}KM
                    </Text> : <Text>Loading</Text>}
                  </View>
                </View>



              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
                alignSelf: 'center',
                marginVertical: 5
              }}>

                <View style={{
                  width: '47%',
                  height: 130,
                  backgroundColor: "#C5001A",
                  borderRadius: 30
                }}>
                  <View style={{ flexDirection: "column", alignSelf: 'center', width: '100%', height: "90%", justifyContent: "space-around", alignItems: 'center' }}>
                    <Image source={require("./images/icons8-air-pressure-50.png")} />

                    <Text style={{
                      color: 'gold'
                    }}>Air pressure</Text>
                    {weatherData ? <Text style={{
                      color: 'white'
                    }}>
                      {weatherData.main.pressure}hPa
                    </Text> : <Text>Loading</Text>}
                  </View>
                </View>
                <View style={{
                  width: '47%',
                  height: 130,
                  backgroundColor: "#C5001A",
                  borderRadius: 30
                }}>
                  <View style={{ flexDirection: "column", alignSelf: 'center', width: '100%', height: "90%", justifyContent: "space-around", alignItems: 'center' }}>
                    <Image source={require("./images/icons8-map-marker-50.png")} />

                    <Text style={{
                      color: 'gold'
                    }}>city name</Text>
                    {weatherData ? <Text style={{
                      color: 'white'
                    }}>
                      {weatherData.name}
                    </Text> : <Text>Loading</Text>}
                  </View>
                </View>



              </View>





            </View>
          </View>
        </ScrollView>
      </SafeAreaView>




    </View>
)


};



const App = () => {


  return (
    <NavigationContainer initialRouteName="Home"> 
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown:false
      }} >
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Search" component={APPUI} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
