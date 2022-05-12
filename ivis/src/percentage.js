
export function getPercentage(gender, data){

   let allAdmitted = getAllAdmitted(data);
   let percentage = (gender.admitted/allAdmitted)*100;
   percentage = percentage.toFixed(1);
   return percentage;
}

function getAllAdmitted(genders){
    let allAdmitted = 0; 
    genders.forEach((gender) => allAdmitted+=gender.admitted);
    return allAdmitted;
}