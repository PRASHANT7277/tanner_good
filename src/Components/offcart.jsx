import { Image, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import Count from "./count";
import { DeleteIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useState, useEffect } from "react";

export default function OffCart() {
  const [data, setData] = useState([]);
  function handleGet() {
    axios
      .get("https://real-tan-adder-hose.cyclic.app/cart")
      .then((res) => setData(res.data));
  }
  useEffect(() => {
    handleGet();
  },[]);
  function handleDelete(id) {
    axios({
      url: `https://real-tan-adder-hose.cyclic.app/cart/${id}`,
      method: "DELETE",
    });
  }
  const HandleCount = (id, no, qty, price, aprice) => {
    axios({
      url: `https://real-tan-adder-hose.cyclic.app/cart/${id}`,
      method: "PATCH",
      data: { qty: qty + no, price: price + aprice * no },
    });
  };
  function calculateTotal() {
    return data.reduce((sum, elem) => sum + elem.price, 0);
  }
  function qTotal() {
    return data.reduce((sum, elem) => sum + elem.qty, 0);
  }

  return (
    <>
      <button
        style={{ backgroundColor: "white", border: "none" }}
        class="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <Image
          id="b8"
          src="https://png.pngtree.com/png-vector/20190411/ourlarge/pngtree-vector-shopping-bag-icon-png-image_927105.jpg"
          alt="img"
        />
      </button>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <Box mt="10px" w="100%" margin="auto">
            <Box mt="10px" display="flex" justifyContent="space-between">
              <Box>
                <Text fontweight="semibold" fontSize="40px">
                  <Link to="/cart">Your cart</Link>
                </Text>
                ({qTotal()}) item
              </Box>
              <Box mt="20px">
                <Text textDecor="underline">
                  <Link to="/">Continue Shopping</Link>
                </Text>
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" mt="20px">
              <Box color="grey">PRODUCT</Box>
              <Box color="grey">QUANTITY</Box>
              <Box color="grey">TOTAL</Box>
            </Box>
            <Box mt="7px">
              <hr />
            </Box>
            {data.map((elem) => (
              <Box display="flex" justifyContent="space-between" mt="20px">
                <Box display="flex">
                  <Box color="mineralgreen">
                    <Image h="120px" w="120px" src={elem.img} alt="..." />
                  </Box>
                  <Box w="200px" color="mineralgreen">
                    <Text fontSize="18" fontWeight="semibold">
                      {elem.title}
                    </Text>
                    <Text>{elem.des}</Text> <Text>₹{elem.price}</Text>
                  </Box>
                </Box>
                <Box display="flex">
                  <Count
                    qty={elem.qty}
                    HandleCount={HandleCount}
                    id={elem.id}
                    price={elem.price}
                    aprice={elem.aprice}
                  />
                  <Box>
                    <Button onClick={() => handleDelete(elem.id)}>
                      <DeleteIcon h="50px" />
                    </Button>
                  </Box>
                </Box>
                <Box color="mineralgreen">₹{elem.price}</Box>
              </Box>
            ))}
            <Box>
              <hr />
            </Box>
            <Box mt="70px" color="mineralgreen">
              <Text fontWeight="semibold" fontSize="15px" textAlign="right">
                Subtotal ₹{calculateTotal()}
              </Text>
            </Box>
            <Box mb="50px" color="white" textAlign="right" mt="30px">
              <Link to="/payment">
                <Button
                  bgColor="#475d4b"
                  pt="25px"
                  pb="25px"
                  pl="150px"
                  pr="150px"
                  fontWeight="bold"
                >
                  <Link to="/payment">Check out</Link>
                </Button>
              </Link>
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
}
