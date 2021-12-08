const user_Validation={
    create:{
    email:{
    required: true,
    regex: '',
    in:['body'],
    errorMessage: 'email is required'
},
password:{
    required:true,
    in:['body'],
    errorMessage: 'password is required',
    custom: true
},
    }
}
export default user_Validation;


