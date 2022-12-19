import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Checkbox,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
export default function Filter() {
  return (
    <>
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        Filter
      </button>

      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            <Text fontWeight="semibold" fontSize="30">
              Filter
            </Text>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div class="">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton mt="7">
                    <Box flex="1" textAlign="left">
                      BRAND
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Checkbox>NORDEN</Checkbox>
                  <br />
                  <Checkbox>SALT & STONES</Checkbox>
                  <br />
                  <Checkbox>TANNER GOODS</Checkbox>
                  <br />
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton mt="7">
                    <Box flex="1" textAlign="left">
                      PRODUCT TYPE
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Checkbox>APOTHECARY</Checkbox>
                  <br />
                  <Checkbox>APPERAL</Checkbox>
                  <br />
                  <Checkbox>GLASSWARE</Checkbox>
                  <br />
                  <Checkbox>TABLEWARE</Checkbox>
                  <br />
                  <Checkbox>CERAMICWARE</Checkbox>
                  <br />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton mt="7">
                    <Box flex="1" textAlign="left">
                      SIZE
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Checkbox>SMALL</Checkbox>
                  <br />
                  <Checkbox>MEDIUM</Checkbox>
                  <br />
                  <Checkbox>LARGE</Checkbox>
                  <br />
                  <Checkbox>20 PACK</Checkbox>
                  <br />
                  <Checkbox>2 PACK</Checkbox>
                  <br />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton mt="7">
                    <Box flex="1" textAlign="left">
                      PRICE
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <RangeSlider
                    aria-label={["min", "max"]}
                    defaultValue={[20, 50]}
                  >
                    <RangeSliderTrack>
                      <RangeSliderFilledTrack />
                    </RangeSliderTrack>
                    <RangeSliderThumb index={0} />
                    <RangeSliderThumb index={1} />
                  </RangeSlider>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
