import * as Yup from "yup";

export const signUpSchema = Yup.object({
  fname: Yup.string().min(2).max(25).required("Please enter your first name"),
  lname: Yup.string().min(2).max(25).required("Please enter your last name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,{message:"password must contain one letter one number and one special character" , excludeEmptyString: false}).required("Please enter your password"),
  cpassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"), null], "Password must match"),
  //mobile:Yup.string().tests(['0-9']).length(10).required("Number is Required"),
  mobile : Yup.string().matches(/^[6-9]\d{9}$/, {message: "Please enter valid number.", excludeEmptyString: false}).required("Mobile number is Required"),
  address:Yup.string().min(10).max(100).required("Address is Required"),
});

export const signInSchema = Yup.object ({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,{message:"password must contain one letter one number and one special character" , excludeEmptyString: false}).required("Please enter your password"),
})