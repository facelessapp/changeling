let timeRanges = new Set([
   {range: {from: `4`, to: `5`}, name: `sunrise`, href:`./sunrise.css`},
   {range: {from: `6`, to: `10`}, name: `morning`, href:`./morning.css`},
   {range: {from: `11`, to: `18`}, name: `day`, href:`./day.css`},
   {range: {from: `19`, to: `23`}, name: `dawn`, href:`./dawn.css`},
   {range: {from: `24`, to: `3`}, name:`night`, href:`./night.css`},
]);

const changeTheme = timeRanges => {
   let currentHour = new Date().getHours();

   for(let {range, href, name} of timeRanges){
       if(currentHour >= range.from && currentHour <= range.to){
           Object.assign(document.querySelector(`link#time-theme`), { href });
   
           break;
       }
       
   }
}

changeTheme(timeRanges);
