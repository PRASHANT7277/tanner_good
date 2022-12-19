import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Box, Image, Text, Button } from "@chakra-ui/react";
import cc from "../Images/cc.png";
import dd from "../Images/r.png";
import Count from "./count";
import AccordianItem from "../Carousel/Accordian";
export default function SingleProduct() {
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://real-tan-adder-hose.cyclic.app/collections/${params.id}`)
      .then((res) => setData(res.data));
    console.log(data);
  }, [params.id, data]);

  function handleCart(data) {
    axios({
      url: `https://real-tan-adder-hose.cyclic.app/cart`,
      method: "POST",
      data: data,
    });
    alert("Item added to cart");
  }

  return (
    <>
      <Box>
        <Image src={cc} alt="..." />
      </Box>
      <Box id="singlepro">
        <Box>
          <Image id="spro" src={data?.img} alt=".." />
        </Box>
        <Box id="sipro">
          <Text color={"grey"}>{data?.des}</Text>
          <Text fontWeight={"bold"} fontSize="30px">
            {data?.title}
          </Text>

          <Text color={"grey"} mt="40px">
            $ {data?.price}.00
          </Text>
          <Text color={"grey"} mt="-5px">
            <a href="https://www.tannergoods.com/policies/shipping-policy">
              Shipping
            </a>{" "}
            calculated at checkout.
          </Text>
          <Text color={"grey"} mt="40px">
            QUANTITY
          </Text>
          <Count qty="1" />
          <Button
            mt="25"
            pl="250"
            pr="250"
            pt="6"
            pb="6"
            bgColor="white"
            border="1px solid black"
            onClick={() => handleCart(data)}
          >
            ADD TO CART
          </Button>
          <br />
          <Link to="/payment">
            <Button
              mt="5"
              pl="250"
              pr="260"
              pt="6"
              pb="6"
              bgColor="black"
              color="white"
              border="1px solid black"
              onClick={() => handleCart(data)}
            >
              BUY IT NOW
            </Button>
          </Link>
          <Text mt="5" ml="35%" mb="5">
            More Payment options
          </Text>
          <Image mb="10" w="620px" src={dd} alt=".." />
          <AccordianItem />
        </Box>
      </Box>
    </>
  );
}
