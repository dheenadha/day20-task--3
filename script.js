// apiKey = "7b8fbd37-eca9-4b1e-a56b-4bfc2f971902"
url = "https://holidayapi.com/v1/holidays?pretty&key=7b8fbd37-eca9-4b1e-a56b-4bfc2f971902&country=IN&year=2023"

function getHolidaysList(){
    let Sno =0
    console.log(url)
    var req = fetch(url)
    req
    .then((res)=>res.json())
    .then((data)=> {console.log(data)
        console.log(data['count'])
        console.log(data['holidays'])
        holidaysData = data['holidays']
        holidaysData.map((ele)=>{
            Sno++
            const {name,date,weekday,public} = ele
            console.log(name,date,weekday)
            const day = weekday['date']['name']
            console.log(day)
            let type= "Regional Holiday"
            if(public){
                type= "National Holiday"
            }
            const itemlist = document.getElementById('itemlist')
            itemlist.innerHTML +=`
            <tr>
              <td>${Sno}</td>
              <td>${name}</td>
              <td>${date}</td>
              <td>${day}</td>
              <td>${type}</td>
            </tr> 
            `
            
        })
        
    })
    .catch((err)=>console.log(err))
}
getHolidaysList()