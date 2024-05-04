import Profile from "./Components/Profile";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./Components/Login";

 
function App() {
  return (
    <UserContextProvider>
      <h1 className="text-blue-800 text-3xl flex justify-center items-center mt-5 mb-5">This is a context api topic</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  );
}

export default App;
