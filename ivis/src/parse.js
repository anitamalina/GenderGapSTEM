import Parse from "parse";

export async function getGenderRep() {
  let genderArray = [];
  let query = new Parse.Query("gender_itu");

  try {
    let gender = await query.find();

    gender.forEach((gender) => {
      genderArray.push(gender);
    });
    return genderArray;
  } catch (error) {}
}
   