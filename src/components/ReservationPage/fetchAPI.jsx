export const fetchAPI = (date)=>{
    let day;
      const getWeekDay =  (d) =>{
      const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      return weekdays[d.getDay()+1];
    }
    if(!date){
      date = new Date();
      day = getWeekDay(date);
    }
    else{
      day = getWeekDay(new Date(date));
    }
    switch(day){
      case 'Sunday':
        return ['12:00','13:00','14:00','14:00','16:00','17:00'];
      case 'Saturday':
        return ['14:00','15:00','16:00','17:00','18:00','19:00'];
      case 'Monday':
          return ['15:00','15:00','16:00','17:00','18:00','19:00','20:00'];
      case 'Tuesday':
          return ['15:00','16:00','17:00','18:00','19:00','20:00'];
      case 'Wednesday':
          return ['17:00','15:00','16:00','17:00','18:00','19:00','20:00'];
      case 'Thursday':
          return ['18:00','15:00','16:00','17:00','18:00','19:00','20:00'];
      case 'Friday':
          return ['19:00','15:00','16:00','17:00','18:00','19:00','20:00'];

      default: return ["17:00","18:00","19:00","20:00","21:00"];
    }
  } 