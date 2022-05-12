
export function getPercentage(gender, data){

   let allAdmitted = getAllAdmitted(data);
   let percentage = (gender.admitted/allAdmitted)*100;
   percentage = Math.round(percentage);
   return percentage;
}

function getAllAdmitted(genders){
    let allAdmitted = 0; 
    genders.forEach((gender) => allAdmitted+=gender.admitted);
    return allAdmitted;
}