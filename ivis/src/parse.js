import Parse from "parse";


function destructure(gender){
  return {
      description: gender.get("gender_description"),
      color: gender.get("color"),
      admitted: gender.get("admitted")
    }
}

function destructureGenderArray(genderArray){
  genderArray.map(destructure);
}



export async function getPercentage() {
  let genderArray = [];
  let query = new Parse.Query("gender_itu");
  query.include("gender_description");

  // total students, get percentage for each gender 
  // for each gender, calculate percentage of 600px (for the p5 visualization)

  try {
    let gender = await query.find();

    gender.forEach((gender) => {
      genderArray.push(gender);
    });
    console.log(genderArray);
    return genderArray;
  } catch (error) {}
}
   
   

