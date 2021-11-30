export const signupValidation = (data) => {
  let result;
  if (!data) {
    result = { error: "Oops, nothing was filled out." };
  } else if (!data.first_name) {
    result = { error: "Oops, please fill out your first name." };
  } else if (!data.last_name) {
    result = { error: "Oops, please fill out your last name." };
  } else if (!data.phone) {
    result = { error: "Oops, please fill out your phone number." };
  } else if (!data.email) {
    result = { error: "Oops, please fill out your email." };
  } else if (!data.password1) {
    result = { error: "Oops, please select a password." };
  } else if (!data.password2) {
    result = { error: "Oops, please confirm your password." };
  } else if (data.privacy === false) {
    result = {
      error:
        "Oops, you need to agree to the privacy policy and terms and conditions before you create an account.",
    };
  } else if (data.password1 !== data.password2) {
    result = { error: "Oops, the passwords don't match" };
  } else {
    result = { success: "Passed validation" };
  }

  return result;
};

export const loginValidation = (data) => {
  let result;
  if (!data) {
    result = { error: "Oops, nothing was filled out." };
  } else if (!data.email) {
    result = { error: "Oops, please fill out your email." };
  } else if (!data.password) {
    result = { error: "Oops, please fill in your password." };
  } else {
    result = { success: "Passed validation" };
  }

  return result;
};

export const migrateValidation = (data) => {
  let result;
  if (!data) {
    result = { error: "Oops, nothing was filled out." };
  } else if (!data.password1) {
    result = { error: "Oops, please select a password." };
  } else if (!data.password2) {
    result = { error: "Oops, please confirm your password." };
  } else if (data.password1 !== data.password2) {
    result = { error: "Oops, the passwords don't match" };
  } else {
    result = { success: "Passed validation" };
  }

  return result;
};
