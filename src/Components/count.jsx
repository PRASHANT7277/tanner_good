import { Box, Button } from "@chakra-ui/react";

export default function Count({ HandleCount, qty, id, price, aprice }) {
  return (
    <>
      <Box display="flex" h="42px">
        <Button
          bgColor="white"
          fontSize="25px"
          disabled={qty === 1}
          onClick={() => HandleCount(id, -1, qty, price, aprice)}
        >
          -
        </Button>
        <Button bgColor="white" fontSize="15px">
          {qty}
        </Button>
        <Button
          bgColor="white"
          fontSize="25px"
          onClick={() => HandleCount(id, +1, qty, price, aprice)}
        >
          +
        </Button>
      </Box>
    </>
  );
}
