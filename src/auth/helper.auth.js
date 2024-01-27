
// User Authentication Using localStorage 

// data save into localStorage 
export const doLoginLocalStorage=(ResponseData)=>{
  localStorage.setItem("userData",JSON.stringify(ResponseData));
}

// data fetch from localStorage 
export const getUserFromLocalStorage=()=>{
   const data = getDataFromLocalStorage();
   if(data!=null){
    return data.user;
   }else{
    return null;
   }
}
// Getting jwtToken from localStorage 
export const getTokenFromLocalStorage=()=>{
    const data =  getDataFromLocalStorage();
    if(data!=null){
       return data.jwtToken;
    }
    return null
}
// Getting Data from localStorage 
export const getDataFromLocalStorage=()=>{
  const data = localStorage.getItem("userData");
  if(data!=null){
    return JSON.parse(data);
  }else{
    return null;
  }
}

// checking user is LoggedIn or Not 
export const isLoggedIn=()=>{
  if(getTokenFromLocalStorage()){
    return true;
  }else{
    return false;
  }
}
// remove data from localStorage 
export const doLogoutFromLocalStorage=()=>{
  localStorage.removeItem("userData");
}