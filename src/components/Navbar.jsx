import styled from 'styled-components'
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile, tablet } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/userSlice.js';

const Container = styled.div`
    height: 60px;
    ${mobile({height: "50px"})}
`

const Wrapper = styled.div`
  padding: 10px 30px 10px 20px;
  display: flex; 
  justify-content: space-between;
  align-items: center;
  ${mobile({padding: "10px 0"})}

`
// const Left = styled.div`
//   /* flex: 1;100% / 3 */
//   display: flex;
//   align-items: center;
// `
// const Language = styled.div`
//   font-size: 14px;
//   cursor: pointer;
//   ${mobile({display: "none"})}
// `

// const SearchContainer = styled.div`
//   border: .5px solid lightgrey;
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   padding: 5px;
//   ${mobile({display: "none"})}

// `

// const Input = styled.input`
//   border: none;
//   &:focus {
//         outline: none;
//         /* box-shadow: 0px 0px 2px red; */
//     };

//     ${mobile({width: "50px"})}
// `

const Center = styled.div`
  /* flex: 1; */
  text-align: center;
  color: black;
  text-decoration: none;
`
const Logo = styled.h1`
  font-weight: bold;
  text-decoration: none;
  color: black;
  ${mobile({fontSize: "24px"})}
  ${tablet({fontSize: "24px"})}
`
const Right = styled.div`
  /* flex: 1; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex: 2, justifyContent: "center"})}

`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px; 
  ${mobile({fontSize: "12px", marginLeft: "10px"})}
`


const Navbar = () => {
  const quantity = useSelector(state => state.cart.products.length);
  const user = useSelector(state => state.user.currentUser)

  console.log()

  const dispatch = useDispatch()

  


  
  
  return (
    <Container>
        <Wrapper>
          {/* <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input /> 
              <SearchIcon style = {{color: "gray", fontSize: 16}}/>
            </SearchContainer>
          </Left> */}
          <Center><Link to = "/"><Logo>Shopnow.</Logo></Link></Center>
          <Right>

          <Link to = "/cart">
            <MenuItem>
              
              CHECKOUT
            </MenuItem>
            </Link>

          {user !== null ? (
            <MenuItem onClick={() => dispatch(logout())}>LOG OUT</MenuItem>
          ) : (
            <>
              <Link to = "/register">
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link to = "/login">
                <MenuItem>SIGN IN</MenuItem>
              </Link>
            </>
          )}


          {/* <Link to = "/register">
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to = "/login">
            <MenuItem>SIGN IN</MenuItem>
          </Link> */}

            {/* <MenuItem onClick={handleLogout}>LOG OUT</MenuItem> */}
      
            
            <Link to = "/cart">
            <MenuItem>
              <Badge badgeContent = {quantity} color = "primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
            </Link>
          </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar