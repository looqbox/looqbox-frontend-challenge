import { Flex, Stack, IconButton, Button } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  paginate: (pageNumber: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  paginate,
}: PaginationProps) => {
  return (
    <Flex mt={6} justifyContent="center">
      <Stack direction="row" spacing={2} align="center">
        <IconButton
          icon={<ChevronLeftIcon boxSize={5} />}
          aria-label="Previous Page"
          onClick={() => paginate(currentPage - 1)}
          isDisabled={currentPage === 1}
          colorScheme="teal"
          variant="ghost"
          borderRadius="full"
          _hover={{ backgroundColor: "teal.100" }}
          _disabled={{ backgroundColor: "gray.300", cursor: "not-allowed" }}
          size="md"
        />
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            onClick={() => paginate(page)}
            colorScheme={page === currentPage ? "teal" : "gray"}
            variant={page === currentPage ? "solid" : "ghost"}
            borderRadius="50%"
            size="md"
            fontWeight="bold"
            transition="all 0.2s ease"
            _hover={{
              transform: "scale(1.1)",
              backgroundColor:
                page === currentPage ? "teal.600" : "teal.100",
            }}
            _focus={{
              outline: "none",
              boxShadow: "0 0 0 3px rgba(72, 187, 120, 0.6)",
            }}
            boxSize="40px"
          >
            {page}
          </Button>
        ))}
        <IconButton
          icon={<ChevronRightIcon boxSize={5} />}
          aria-label="Next Page"
          onClick={() => paginate(currentPage + 1)}
          isDisabled={currentPage === totalPages}
          colorScheme="teal"
          variant="ghost"
          borderRadius="full"
          _hover={{ backgroundColor: "teal.100" }}
          _disabled={{ backgroundColor: "gray.300", cursor: "not-allowed" }}
          size="md"
        />
      </Stack>
    </Flex>
  );
};
