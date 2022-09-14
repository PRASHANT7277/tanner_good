import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,Box,Text
  } from '@chakra-ui/react'
export default function AccordianItem(){
return(
    <>
    <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          DESCRIPTION
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Text>Casual is our default setting, but that doesn't mean we can't clean up well when we</Text>
    <Text>  need to. And if the occasion calls for a classier wardrobe,nothing pairs with</Text>
    <Text>fresh-pressed attire like our double sided Dress belt.Made with a premium</Text>
    <Text> combination of 3 and 7 oz.Meridian English bridle leather, our Dress Belt</Text>
    <Text>features double sided, skived and sewn construction with a refined hardware </Text>
    <Text>treatment in solid brass.The edges are painted and each belt is stamped.</Text>
    <Text> with our signature makers mark.Each belt comes with a dull nickel or nickel plated</Text> 
    <Text> brass buckle with matching hardware.</Text>  
  </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          RETURNS & EXCHANGES
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Text>Tanner Goods | Mazama gladly accepts returns for refund, exchange, or</Text>
    <Text>store credit on unused, qualifying items within 30 days of receiving your purchase. </Text>
    <Text> Monogrammed items, final sale, and sample sale goods will not be eligible </Text>
    <Text>for returns and exchanges.</Text>
    <br/>
    
    <Text>If you'd like to make a return, just head over to our Returns Center and </Text>
    <Text>have your order number or email address handy.</Text>
    <br/>
    <br/>
    <text>Need more info? <a href='https://www.tannergoods.com/pages/returns'>Visit our full Returns page.</a></text>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          SHIPPING INFO
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Text fontSize='25' fontWeight='semibold'>Domestic Shipping</Text>
     <Text>For destinations in the contiguous United States we offer the following shipping options:</Text>
     <br/>
     <Text fontWeight='semibold'>Standard Shipping</Text>
     <Text>- 3-5 business days / $7.50 flat rate</Text>
     <Text>- Orders over $199 USD ship for free</Text>
     <Text>- Orders ship in 1-2 business days</Text>
     <br/>
     <Text fontWeight='semibold'>UPS 2nd Day Air</Text>
     <Text>- 2-3 business days / $10 flat rate</Text>
     <Text>- More expedited shipping options may appear at checkout</Text>
     <Text>and depend on size of package and destination.</Text>
     <br/>
     <Text fontWeight='semibold'>Orders shipping to Alaska, Hawaii, American Samoa, Guam, the</Text>
     <Text fontWeight='semibold'>Marshall Islands, Puerto Rico, and the US Virgin Islands:</Text>
     <Text>- Orders over $199 ship for free.</Text>
     <Text>- Shipping fees on orders under $199 will be calculated at checkout.</Text>
     <br/>
     <br/>
     <Text fontSize='25' fontWeight='semibold'>International Shipping</Text>
     <br/>
     <Text>Shipping costs for orders outside of the U.S. may vary depending on the destination</Text>
     <Text>and are displayed on the checkout page. Additional customs fees or duties may apply, </Text>
     <Text>depending on the destination country. We cannot estimate customs fees or duties </Text>
     <Text>at this time.</Text>
     <br/>
     <Text fontWeight='semibold'>Please note that customs/duties fees are not included in the price of shipping so </Text>
     <Text  fontWeight='semibold'>the customer accepts responsibility upon delivery if applicable.</Text>
     <br/>
     <Text>Tanner Goods | Mazama cannot make any delivery date guarantees </Text>
     <Text> for orders shipped internationaly.</Text>
     <br/>
     <Text fontWeight='semibold'>Due to the Covid-19 Pandemic, we are experiencing longer shipping times. Please be </Text>
     <Text  fontWeight='semibold'>patient with us as our crew is agile but light.</Text>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    </>
)
}