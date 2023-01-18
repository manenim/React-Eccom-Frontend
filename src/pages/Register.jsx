import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { register } from "../redux/apiCalls";
import { mobile } from "../responsive";
// import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-right: 10px;
`;

const Links = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const [state, setState] = useState({
    userName: "",
    email: "",
    password: "",
  })
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState('')

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  }

  const { error} = useSelector(state => state.user)

  const handleClick = (e) => {
    
    e.preventDefault();
    if(state.password !== confirmPassword){
      setErrors('Password does not match')
      console.log("password does not match")
    } else {
      dispatch(register(dispatch, navigate,  {...state}))
    }

  }
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>

          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input name = "userName" value={state.username} placeholder="userName" onChange={handleChange} />
          <Input name = "email" value={state.email} type= "email" placeholder="email" onChange={handleChange}/>
          <Input name = "password" value={state.password} type = "password" placeholder="password" onChange={handleChange}/>
          <Input value={confirmPassword} onChange= {(e) => setConfirmPassword(e.target.value)} placeholder="confirm password" />
          {error && <p>{errors}</p>}
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick = {handleClick}>CREATE</Button><br/>

          <Links>
            <Link to = "/login">ALREADY HAVE AN ACCOUNT?</Link>
          </Links>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Register;