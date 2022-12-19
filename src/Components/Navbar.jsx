import { Box, Image, Flex, Spacer, Select } from "@chakra-ui/react";
import { GrFacebookOption, GrInstagram } from "react-icons/gr";
import { BsPerson, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import OffCart from "./offcart";
export default function Navbar() {
  return (
    <>
      <Box mt="-8" mr="10">
        <Flex>
          <Box></Box>
          <Spacer />
          <Box p="3">
            <a href="https://www.instagram.com/tannergoods/">
              <GrInstagram />
            </a>
          </Box>
          <Box p="3">
            <a href="https://facebook.com/tannergoods">
              <GrFacebookOption />
            </a>
          </Box>
          <Box>
            <Select>
              <option value="option1">USD $</option>
              <option value="option2">AUD $</option>
              <option value="option3">CAD $</option>
              <option value="option2">JPY $</option>
              <option value="option3">KRW $</option>
            </Select>
          </Box>
        </Flex>
      </Box>
      <Box mb="10">
        <hr />
      </Box>
      <Flex>
        <Box ml="20">
          <Link to="/">
            <Image
              src="https://cdn.shopify.com/s/files/1/0044/9802/files/Tanner-Goods-Mazama-Logo_150x.png?v=1600190052"
              alt=".."
            />
          </Link>
        </Box>
        <Spacer />
        <Box p="3">
          <div class="dropdown">
            <button class="dropbtn">
              <Link to="/">Tanner Goods</Link>
            </button>
          </div>
        </Box>
        <Box p="3">
          <div class="dropdown">
            <button class="dropbtn">Mazama Wares</button>
            <div class="dropdown-content">
              <Link to="/glassware">Glassware</Link>
              <Link to="/tableware">Tableware</Link>
              <Link to="/ceramicware">Ceramic Mugs</Link>
            </div>
          </div>
        </Box>
        <Box p="3">
          <div class="dropdown">
            <button class="dropbtn">Featured Collections</button>
            <div class="dropdown-content">
              <Link to="/bestseller">Best Sellers</Link>
              <Link to="/newarrival">New Arrivals</Link>
              <Link to="/everyday">Everyday Carry</Link>
              <Link to="/apothecary">Apothecary</Link>
              <Link to="/apparel">Apparel</Link>
              <Link to="/summer">Summer Accessories</Link>
              <Link to="/lightweight">Lightweight Goods</Link>
            </div>
          </div>
        </Box>
        <Box p="3">
          <div class="dropdown">
            <button class="dropbtn">
              <Link to="/finalsale">Final Sale</Link>
            </button>
          </div>
        </Box>
        <Spacer />
        <Box p="4">
          <Link to="login">
            <BsPerson />
          </Link>
        </Box>
        <Box p="4">
          <BsSearch />
        </Box>
        <Box p="2">
          <OffCart />
        </Box>
      </Flex>
    </>
  );
}
