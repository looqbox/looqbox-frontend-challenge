import {
    Flex,
    Box,
    SkeletonCircle,
    SkeletonText,
    Skeleton,
    Stack,
} from '@chakra-ui/react';
import React from 'react';

export default function ShimmerEffect() {
    return (
        <Flex alignItems="center" justifyContent="center" h="100vh">
            <Box
                padding="6"
                boxShadow="lg"
                bg="white"
                w="95%"
                h="95%"
                borderRadius="20px"
            >
                <SkeletonCircle size="20" />
                <SkeletonText mt="4" noOfLines={4} spacing="4" />
                <SkeletonText mt="8" size="40" noOfLines={4} spacing="4" />

                <Stack mt="12">
                    <Skeleton height="50px" />
                    <Skeleton height="50px" />
                    <Skeleton height="50px" />
                </Stack>
            </Box>
        </Flex>
    );
}
