import Parse from "parse";

export async function getGenderRep() {
  let genderArray = [];
  let query = new Parse.Query("gender_itu");
  query.include("gender_description");

  try {
    let gender = await query.find();

    gender.forEach((gender) => {
      genderArray.push(gender);
    });
    console.log(genderArray);
    return genderArray;
  } catch (error) {}
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
   
   

