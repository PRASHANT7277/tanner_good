import { Box, Heading, Image } from "@chakra-ui/react";

import Aimage from "../Images/f.png";

export default function Footer() {
  return (
    <Box>
      <Box id="footer">
        <Box className="fdiv">
          <Heading as="h4" mb="30px" size="sm" fontWeight="">
            TANNER GOODS
          </Heading>
          <Image
            src="https://cdn.shopify.com/s/files/1/0044/9802/files/Screen_Shot_2022-06-22_at_10.47.25_AM_dc739504-3089-4838-9762-c0f9145b4cff_360x.png?v=1655920706"
            alt=".."
          />
          <h5>In a world where we are overwhelmed by</h5>
          <h5>products made to break down or go out of</h5>
          <h5>style, we aim to go against that grain.</h5>
          <h5>
            <a href="https://www.tannergoods.com/pages/about-us">About Us</a>
          </h5>
          <Box w="18%" ml="41%" mt="-2">
            <hr />
          </Box>
          <h5>
            <a href="https://www.tannergoods.com/blogs/journal">Journal</a>
          </h5>
          <Box w="13%" ml="43%" mt="-2">
            <hr />
          </Box>
        </Box>

        <Box className="fdiv">
          <Heading as="h4" mb="30px" size="sm" fontWeight="">
            SUPPORT
          </Heading>

          <h5>
            <a href="https://help.tannergoods.com/contact/contact-form-BJ7jzKoLP">
              Contact us
            </a>
          </h5>
          <h5>
            <a href="https://www.tannergoods.com/pages/shipping-information">
              Shipping
            </a>
          </h5>
          <h5>
            <a href="https://www.tannergoods.com/pages/returns">
              Return & Exchange
            </a>
          </h5>
          <h5>
            <a href="https://www.tannergoods.com/pages/repairs-replacements">
              Replacements & Repairs
            </a>
          </h5>
          <h5>
            <a href="https://www.tannergoods.com/pages/repairs-replacements">
              {" "}
              Warranty Info
            </a>
          </h5>
          <h5>
            <a href="https://tannergoods.wholesale.shopifyapps.com/">
              Wholesale
            </a>
          </h5>
          <h5>
            <a href="https://www.tannergoods.com/blogs/opportunities">
              Careers
            </a>
          </h5>
        </Box>
        <Box className="fdiv">
          <Heading as="h4" mb="30px" size="sm" fontWeight="">
            SHOP
          </Heading>

          <h5>
            <a href="https://bellavitaorganic.com/blogs/bellavita-blogs">
              Mazama
            </a>
          </h5>
          <h5>
            <a href="https://bellavitaorganic.com/blogs/news-media">
              Best Sellers
            </a>
          </h5>
          <h5>
            <a href="https://bellavitaorganic.com/pages/terms-and-conditions">
              New Arrivals
            </a>
          </h5>
          <h5>
            <a href="https://bellavitaorganic.com/pages/privacy-policy">
              Wallets
            </a>
          </h5>
          <h5>
            <a href="https://bellavitaorganic.com/pages/refund-and-return">
              Belts
            </a>
          </h5>
          <h5>
            <a href="https://bellavitaorganic.com/pages/shipping-policy">
              Bags
            </a>
          </h5>
          <h5>
            <a href="https://bellavitaorganic.com/pages/shipping-policy">
              Final Sale
            </a>
          </h5>
        </Box>
        <Box className="fdiv">
          <Heading as="h4" mb="30px" size="sm" fontWeight="">
            STAY IN THE LOOP
          </Heading>

          <h5>Subscribe to the Tanner Goods | Mazama</h5>
          <h5>newsletter and save 10% on your first order! Plus,</h5>
          <h5>receive first access to our very popular sample</h5>
          <h5>sales.</h5>
          <h5>
            <a href="https://tg.attn.tv/p/9Im/landing-page">Subscribe</a>
          </h5>
          <Box w="20%" ml="40%" mt="-2">
            <hr />
          </Box>
        </Box>
      </Box>
      <Box>
        <Image src={Aimage} alt="image" />
      </Box>
    </Box>
  );
}
