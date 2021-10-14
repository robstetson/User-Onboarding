import React, {useState, useEffect} from 'react';
import Form from './Components/form';
import UserInfo from './Components/userinfo';
import './App.css';
import * as yup from 'yup';
import schema from './validationsect/formschema';
import axios from 'axios';


const intialFormValues ={
name: '',
email: '',
password: '',
terms: false,
}

const intialFormErrors = {
name: '',
email: '',
password: '',
terms: false,
}
const initalUser = []
const initialDisabled = true


function App() {

  const [user, setUser] = useState(initalUser);
  const [formValues, setFormValues] = useState(intialFormValues);
  const [formErrors, setFormErrors] = useState(intialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  
  
  const getUser = () =>{
    axios.get('https://reqres.in/api/users')
    .then(response =>{
      console.log(response.data);
      setUser([response.data, ...user]);
    })
    .catch(error => {
  console.error(error);
    })
  }
  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser )
    .then(response =>{
      setUser([response.data, ...user])
    })
    .catch(error =>{
      console.error(error);
    })
    .finally(()=>{
      setFormValues(intialFormValues)
    })
  }
    const validate = (name, value) =>{
      yup.reach(schema, name)
      .validate(value)
  .then(()=> setFormErrors ({...formErrors, [name]: ''}))
  .catch(error => setFormErrors({...formErrors, [name]: error.errors[0] }))
    }
  
  const changeInput =(name,value) => {
    validate(name,value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }
  
  const formSubmition = () =>{
    const newUser = {
      name:formValues.name.trim(),
      email:formValues.email.trim(),
      password:formValues.password.trim(),
      terms:formValues.terms
    }
    postNewUser(newUser);
  }
  useEffect(()=>{
    getUser()
  },[])
  
  useEffect(() =>{
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  },[formValues])
  
  
  
  
  
  
    return (
      <div className="App">
     <h1>User app</h1>
     <Form 
     values={formValues}
     change={changeInput}
     submit={formSubmition}
     disabled={disabled}
     errors={formErrors}
  />
  {
    user.map(item => {
      return ( 
        <UserInfo key={item.id} details={item} />
      )
    })
  }
      </div>
    );
}
  
  export default App;