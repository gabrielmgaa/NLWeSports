
export function convertMinutesToHoursString(minutesAmount: number){
  
  const hours = Math.floor(minutesAmount / 60);
  // console.log(hours);
  
  const minutes = minutesAmount % 60;
  // console.log(minutes);
  

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
}