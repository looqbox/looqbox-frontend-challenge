import {
    Input,
    InputGroup,
    InputRightElement,
    IconButton,
  } from "@chakra-ui/react";
  import { SearchIcon } from "@chakra-ui/icons";
  
  interface SearchBarProps {
    searchQuery: string;
    handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  }
  
  export const SearchBar = ({
    searchQuery,
    handleSearchChange,
    handleKeyPress,
  }: SearchBarProps) => {
    return (
      <InputGroup size="lg" width="400px" shadow="lg">
        <Input
          placeholder="Pesquisar Pokémon"
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
          borderRadius="full"
          focusBorderColor="teal.500"
          bg="gray.50"
          _placeholder={{ color: "gray.500" }}
          _hover={{ bg: "white", borderColor: "teal.400" }}
          _focus={{
            bg: "white",
            borderColor: "teal.500",
            boxShadow: "0 0 0 2px rgba(72, 187, 120, 0.6)",
          }}
          transition="all 0.3s ease"
        />
        <InputRightElement>
          <IconButton
            aria-label="Search Pokémon"
            icon={<SearchIcon />}
            variant="ghost"
            size="lg"
            borderRadius="full"
            colorScheme="teal"
            _hover={{ backgroundColor: "teal.100" }}
            _active={{ backgroundColor: "teal.200" }}
            boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
          />
        </InputRightElement>
      </InputGroup>
    );
  };
  