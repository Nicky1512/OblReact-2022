import { useNavigate } from 'react-router-dom';
/* const useLogOut = () => {
    
    const navigate = useNavigate();
  
    const logoutUser = () => {
        localStorage.removeItem("loggedUser");   
        navigate('/');
      }
  
      
    return { logoutUser }
  };

export default useLogOut; */
/* 
const LogOutFuncion = () =>{

  export  const useLogOut = () => {
    
    const navigate = useNavigate();
  
    // we don't useEffect here, we are only interested in function logoutUser
  
    const logoutUser = () => {
      localStorage.removeItem("loggedUser");   
          navigate('/');
  
    return { logoutUser }
  };
  
  export default function LogOut() {
  
    const { logoutUser } = useLogOut();
  
    useEffect(() => {
      logoutUser()
    });
    return <div>Logout</div>;
  };

}
 */
