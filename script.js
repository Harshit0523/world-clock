

const update = ()=>{ 
  let d = new Date();
    usa.innerHTML =  d.toLocaleString('en-US', {
    timeZone: 'America/Los_Angeles',
  }).split(", ")[1]
   india.innerHTML =  d.toLocaleString('en-US', {
    timeZone: 'Asia/kolkata',
  }).split(", ")[1]
  china.innerHTML =  d.toLocaleString('en-US', {
    timeZone: 'Asia/Shanghai',
  }).split(", ")[1]
  let alaramhour = alarm.value.split(':')[0]
  let alarammin = alarm.value.split(':')[1]
  if(d.getHours()==alaramhour && d.getMinutes()==alarammin){
    let adio = new Audio('stay_rock_version.mp3');
    adio.play();
  }
}

setInterval(update,1000)


