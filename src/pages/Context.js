import { useState, createContext, useContext } from "react";

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Puja Moravadiya");

  return (
    <UserContext.Provider value={user}>
      <h1 class="middle">{`Hello ${user} !!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}
function Component2() {
  return (
    <>
      <h1>Component2</h1>
      <Component3 />
    </>
  );
}
function Component3() {
  return (
    <>
      <h1>Component3</h1>
      <Component4 />
    </>
  );
}
function Component4() {
  return (
    <>
      <h1>Component4</h1>
      <Component5 />
    </>
  );
}
function Component5() {
  const user = useContext(UserContext);
  return (
    <>
      <h1>{` Hello ${user} again!!`}</h1>
    </>
  );
}

export default Component1;
