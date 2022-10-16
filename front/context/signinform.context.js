import { createContext, useState } from "react";

export const SignInCredentialsContext = createContext({
  name: "",
  surname: "",
  Birthdate: "",
  age: "",
  living_address: "",
  living_city: "",
  living_postal_code: "",
  email: "",

  addFirstFormCredentials: (name, surname, Birthdate, age) => {},
  addSecondFormCredentials: (
    living_address,
    living_city,
    living_postal_code,
    email
  ) => {},
  getData: () => {},
  resetData: () => {},
});

function SignInCredentialsContextProvider({ children }) {
  const [state, setstate] = useState({});

  function addFirstFormCredentials(name, surname, Birthdate, age) {
    setstate({
      name: name,
      surname: surname,
      Birthdate: Birthdate,
      age: age,
    });
  }

  function addSecondFormCredentials(
    living_address,
    living_city,
    living_postal_code,
    email
  ) {
    setstate((currentValues) => {
      return {
        ...currentValues,
        living_address: living_address,
        living_city: living_city,
        living_postal_code: living_postal_code,
        email: email,
      };
    });
  }

  function getData() {
    return state;
  }
  function resetData() {
    setstate({});
  }

  const value = {
    name: state.name,
    surname: state.surname,
    Birthdate: state.Birthdate,
    age: state.age,
    living_address: state.living_address,
    living_city: state.living_city,
    living_postal_code: state.living_postal_code,
    email: state.email,
    addFirstFormCredentials: addFirstFormCredentials,
    addSecondFormCredentials: addSecondFormCredentials,
    getData: getData,
    resetData: resetData,
  };

  return (
    <SignInCredentialsContext.Provider value={value}>
      {children}
    </SignInCredentialsContext.Provider>
  );
}

export default SignInCredentialsContextProvider;
