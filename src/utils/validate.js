export const checkValidation = (email,password) => {

   const isValidemail =   /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) 
   const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

   if(!isValidPassword) return "Password is not valid"
   if(!isValidemail)  return "Email is not valid"

   return  null; 
}