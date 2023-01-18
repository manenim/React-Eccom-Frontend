import styled from "styled-components";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile, tablet } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import { clearCart, removeProduct } from "../redux/cartRedux";
import { publicRequest } from "../requestMethods";
// import { removeProduct } from "../redux/cartRedux";




const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 600;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  /* position: ${(props) => props.move === "move" && "absolute"}; */
  margin-top: ${(props) => props.move === "move" && "2rem"};
  
  ${tablet({ display: "none" })}
`;

const TopTexts = styled.div`
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  ${mobile({ display: "none"})}
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column"})}
  ${tablet({ flexDirection: "column"})}

`;

const Info = styled.div`
  flex: 3;
  margin-bottom: 20px;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column", jusitfyContent: "center", alignItems: "start"})}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  ${mobile({ flexDirection: "column"})}
`;

const Image = styled.img`
  width: 200px;
  height: 150px;
  object-fit: cover;
  object-position: center;
  ${mobile({ width: "100%", height: "100%"})};

  
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ marginBottom: "20px", marginLeft:"15px",  justifyContent: "start", alignItems: "start", marginRight:"15px", width: "100%"})}  

`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  margin-bottom: 20px;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  max-height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  width: ${(props) => props.smalls && "60%"};
  /* ${mobile({ padding: "10%", width: "100%"})} */
`;

const Cart = () => {
  const KEY = process.env.REACT_APP_STRIPE


  console.log("HI", KEY, "key")

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart)
  const user = useSelector(state => state.user.currentUser)
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  console.log(navigate)
  console.log(cart.product)

  

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await publicRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        console.log(res)
        navigate("/success", {state: {data: res.data, products: cart}});
        dispatch(clearCart())
        /*, {
          stripeData: res.data,
          products: cart, }*/
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, navigate, cart, dispatch]);

  
  const removeItem = (prod) => {
    console.log(prod, "idyy")
    dispatch(removeProduct(prod))
  }

  const back = () => {
    navigate(-2)
  }

  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton onClick = {back}>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag({cart.quantity})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          {user == null ? 
            <Link to = "/register"><Button>LOGIN TO CHECKOUT</Button></Link> 
            : 
            <StripeCheckout
              name="Mani Shop"
              image="https://pngimg.com/uploads/shopping_bag/shopping_bag_PNG6385.png"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            > 
            <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
            }
          
        </Top>
        <Bottom>
          <Info>
            {cart.products && cart.products.map((product, i) => ( <Product key = {i}>
              <ProductDetail>
                <Image src={product.img}/>
                <Details>
                  <ProductName>
                    <b>Product:</b> {product.title}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {product._id}
                  </ProductId>
                  <ProductColor color={product.color} />
                  <ProductSize>
                    <b>Size:</b>{product.size}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <ProductName>Quantity:</ProductName>
                  <ProductAmount>{product.quantity}</ProductAmount>
                  
                </ProductAmountContainer>
                <ProductPrice>$ {product.price}</ProductPrice>
                <Button smalls onClick = {() => removeItem(product)}>Remove Item</Button>
              </PriceDetail>
            </Product>))}
            <Hr />
            
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            {user == null ? 
            <Link to = "/register"><Button>LOGIN TO CHECKOUT</Button></Link> 
            : 
            <StripeCheckout
              name="Mani Shop"
              image="https://pngimg.com/uploads/shopping_bag/shopping_bag_PNG6385.png"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            > 
            <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
            }
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;