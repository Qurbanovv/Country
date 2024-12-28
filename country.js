let countries=[
    {
      "name": "Azerbaijan",
      "timezone": "Asia/Baku",
      "coordinates": {
        "latitude": 40.1431,
        "longitude": 47.5769
      }
    },
    {
      "name": "United States (New York)",
      "timezone": "America/New_York",
      "coordinates": {
        "latitude": 40.7128,
        "longitude": -74.0060
      }
    },
    {
      "name": "Germany",
      "timezone": "Europe/Berlin",
      "coordinates": {
        "latitude": 52.5200,
        "longitude": 13.4050
      }
    },
    {
      "name": "India",
      "timezone": "Asia/Kolkata",
      "coordinates": {
        "latitude": 22.5726,
        "longitude": 88.3639
      }
    },
    {
      "name": "Australia (Sydney)",
      "timezone": "Australia/Sydney",
      "coordinates": {
        "latitude": -33.8688,
        "longitude": 151.2093
      }
    },
    {
      "name": "Brazil (São Paulo)",
      "timezone": "America/Sao_Paulo",
      "coordinates": {
        "latitude": -23.5505,
        "longitude": -46.6333
      }
    },
    {
      "name": "China",
      "timezone": "Asia/Shanghai",
      "coordinates": {
        "latitude": 31.2304,
        "longitude": 121.4737
      }
    },
    {
      "name": "United Kingdom",
      "timezone": "Europe/London",
      "coordinates": {
        "latitude": 51.5074,
        "longitude": -0.1278
      }
    },
    {
      "name": "Russia (Moscow)",
      "timezone": "Europe/Moscow",
      "coordinates": {
        "latitude": 55.7558,
        "longitude": 37.6173
      }
    },
    {
      "name": "Canada (Toronto)",
      "timezone": "America/Toronto",
      "coordinates": {
        "latitude": 43.6510,
        "longitude": -79.3470
      }
    },
    {
      "name": "South Africa",
      "timezone": "Africa/Johannesburg",
      "coordinates": {
        "latitude": -26.2041,
        "longitude": 28.0473
      }
    },
    {
      "name": "Japan",
      "timezone": "Asia/Tokyo",
      "coordinates": {
        "latitude": 35.6895,
        "longitude": 139.6917
      }
    },
    {
      "name": "Turkey",
      "timezone": "Europe/Istanbul",
      "coordinates": {
        "latitude": 41.0082,
        "longitude": 28.9784
      }
    },
    {
      "name": "Mexico",
      "timezone": "America/Mexico_City",
      "coordinates": {
        "latitude": 19.4326,
        "longitude": -99.1332
      }
    },
    {
      "name": "Argentina",
      "timezone": "America/Argentina/Buenos_Aires",
      "coordinates": {
        "latitude": -34.6037,
        "longitude": -58.3816
      }
    },
    {
      "name": "Saudi Arabia",
      "timezone": "Asia/Riyadh",
      "coordinates": {
        "latitude": 24.7136,
        "longitude": 46.6753
      }
    },
    {
      "name": "Italy",
      "timezone": "Europe/Rome",
      "coordinates": {
        "latitude": 41.9028,
        "longitude": 12.4964
      }
    },
    {
      "name": "South Korea",
      "timezone": "Asia/Seoul",
      "coordinates": {
        "latitude": 37.5665,
        "longitude": 126.9780
      }
    },
    {
      "name": "Indonesia (Jakarta)",
      "timezone": "Asia/Jakarta",
      "coordinates": {
        "latitude": -6.2088,
        "longitude": 106.8456
      }
    },
    {
      "name": "Nigeria",
      "timezone": "Africa/Lagos",
      "coordinates": {
        "latitude": 6.5244,  //latitude->en
        "longitude": 3.3792  //longitude->uzunluq
      }
    }
  ]
function aradakimesafe(coord_1_lati,coord_1_long,coord_2_lati,coord_2_long){
    let x_1 = coord_1_lati*Math.PI/180  //x = latitude y=longitude
    let y_1 = coord_1_long*Math.PI/180
    let x_2 = coord_2_lati*Math.PI/180
    let y_2 = coord_2_long*Math.PI/180
    let Δx= x_2 -x_1
    let Δy= y_2 -y_1
    let R = 6371 // dunyanin yari capi (km)
    let a = Math.sin(Δx / 2)**2 +( Math.cos(x_1)*Math.cos(x_2)*Math.sin(Δy/2 )**2)
    let c = 2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))
    let d = R*c
    return d
}
console.log(aradakimesafe(37.5665,126.9780,41.0082,28.9784))
function clic(){
  let olkeadi_1 = document.getElementById("olkeadi_1").value 
  let olkeadi_2 = document.getElementById("olkeadi_2").value 
  let olke_1_coord= enuzun_2(olkeadi_1)
  let olke_2_coord= enuzun_2(olkeadi_2)
  // console.log(olke_1_coord[0])
  // console.log(olke_2_coord)
  let yazi = document.getElementById("yazi")
  let a = aradakimesafe(olke_1_coord[0],olke_1_coord[1],olke_2_coord[0],olke_2_coord[1])
  yazi.textContent=`${a}km mesafe var`
  console.log(aradakimesafe(olke_1_coord[0],olke_1_coord[1],olke_2_coord[0],olke_2_coord[1]))
}
function enuzun_2(olkeadi){
  for(let i=0;i<21;i++){
    // console.log(typeof(olkeadi))
    // console.log(typeof(countries[i].name))
      if(countries[i].name===olkeadi){
          // console.log(coordinates.latitude)
          // console.log(coordinates.latitude)
          // console.log("dsasd")
          return [countries[i].coordinates.latitude,countries[i].coordinates.longitude]
      }
      // else{
      //     console.log("Beraber deyil")
      // }
  }
}
// console.log(enuzun_2("Japan")[0])
// console.log(enuzun_2("Japan")[1])





// console.log(aradakimesafe(40.1431,52.5200,47.5769,13.4050))
// console.log(typeof(countries))
// console.log(Math.)
// function enuzun(olkeadii){
//     countries.forEach(olke=> {
//         // console.log(olke.name)
//         if(olke.name===olkeadii){
//             console.log(olke.coordinates.latitude)
//             console.log(olke.coordinates.latitude)
//             const r = [
//                 olke.coordinates,
//                 olke.coordinates.longitude
//             ]
//             return 5
//         }
//         else{
//             console.log("Beraber deyil")
//         }
//     });
//     // const olken = (element)
// }
// console.log(enuzun("Turkey"))

// console.log(`${enuzun_2()}`)
// console.log(countries.coordinates)
// console.log(countries[0]["coordinates"]["latitude"]); // 38.9637
