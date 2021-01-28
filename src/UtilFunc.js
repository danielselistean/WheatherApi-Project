export const displayDate = (timestamp)=>{
    function addZero(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }
    const a = new Date(timestamp * 1000);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const days = ['Sunday','Monday','Tuesday','Wednesdy','Thursday','Friday','Saturday']
   
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    
    const day = a.getDate();
    const dayWeek = days[a.getDay()];
    
    let hour = addZero(a.getHours());
    const min = addZero(a.getMinutes());

    const timeData = `${dayWeek} ${day} ${month} ${year} ${hour}:${min}`
    
    return timeData;
}