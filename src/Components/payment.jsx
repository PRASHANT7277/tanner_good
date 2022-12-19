import {
  Image,
  Box,
  Flex,
  Text,
  Spacer,
  Input,
  Checkbox,
  Select,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import s from "../Images/s.png";
import t from "../Images/t.png";
import u from "../Images/u.png";
import v from "../Images/v.png";
import w from "../Images/w.png";
import { Link } from "react-router-dom";
import PayCart from "./paycart";

export default function Payment() {
  return (
    <>
      <Image src={s} alt="..." />
      <Flex w="75%" m="auto" columnGap="50">
        <Box w="60%" mt="5">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/cart">
                Cart
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>Payment</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Box mt="5" border="1px solid lightgrey">
            <Text fontWeight="semibold" ml="40%">
              Express checkout
            </Text>
            <Flex columnGap="3">
              <Image ml="5" w="200" h="50" src={t} alt="..." />
              <Image w="200" h="50" src={u} alt="..." />
              <Image w="200" h="50" src={v} alt="..." />
              <Image w="200" h="50" src={w} alt="..." />
            </Flex>
          </Box>
          <Box w="48%" mt="10">
            <hr />
          </Box>
          <Text ml="49%" mt="-3">
            OR
          </Text>
          <Box w="47%" ml="53%" mt="-2">
            <hr />
          </Box>
          <Flex>
            <Box p="4">
              <Text fontWeight="semibold" fontSize="20">
                Contact information
              </Text>
            </Box>
            <Spacer />
            <Box p="4">
              <Text mt="2" fontSize="14">
                Already have an account? <Link to="/login"> Log in</Link>{" "}
              </Text>
            </Box>
          </Flex>
          <Input placeholder="Email" />
          <Checkbox mt="3"> Email me with news and offers</Checkbox>
          <Text mt="5" fontWeight="semibold" fontSize="20">
            Shipping address
          </Text>
          <Select mt="4" placeholder="Select country/region">
            <option value="option1">USA</option>
            <option value="option2">India</option>
            <option value="option3">UK</option>
          </Select>
          <Flex columnGap="3">
            <Input mt="4" placeholder="First Name" />
            <Input mt="4" placeholder="Last Name" />
          </Flex>
          <Input mt="4" placeholder="Company" />
          <Input mt="4" placeholder="Address" />
          <Input mt="4" placeholder="Apartment,suite,etc." />
          <Flex columnGap="3">
            <Input mt="4" placeholder="City" />
            <Input mt="4" placeholder="State" />
            <Input mt="4" placeholder="ZIP code" />
          </Flex>

          <Input mt="4" placeholder="Phone" />
          <Flex>
            <Box p="4">
              <Link to="/cart">
                <Text fontWeight="semibold" fontSize="20">
                  Return to cart
                </Text>
              </Link>
            </Box>
            <Spacer />
            <Box p="4">
              <Link to="/">
                <Button
                  pt="7"
                  pb="7"
                  pr="5"
                  pl="5"
                  bgColor="black"
                  color="white"
                  onClick={() => alert("order successfully placed")}
                >
                  Continue to shipping
                </Button>
              </Link>
            </Box>
          </Flex>
        </Box>
        <Box w="40%" borderLeft="1px solid lightgrey">
          <PayCart />
        </Box>
      </Flex>
    </>
  );
}
