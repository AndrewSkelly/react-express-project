import React from 'react'
import styles from './dashbaord.module.css';
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react"
import { Button, useToast } from "@chakra-ui/react"
import { Box, Grid } from "@chakra-ui/react"

function Dashboard() {
    const toast = useToast()
    return (
        <>
            <div className={styles.dashboard}>
            </div>
            <Button
                onClick={() =>
                    toast({
                        title: "Account created.",
                        description: "We've created your account for you.",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                    })
                }
            >
                Show Toast
            </Button>

            <Grid templateColumns="repeat(12, 1fr)" gap={1}>
                <Box w="100%">
                    <CircularProgress size="100px" thickness="10px" value={60} color="green.400">
                        <CircularProgressLabel>60%</CircularProgressLabel>
                    </CircularProgress>
                </Box>
                <Box w="100%">
                    <CircularProgress size="100px" thickness="10px" value={34} color="red.400">
                        <CircularProgressLabel>34%</CircularProgressLabel>
                    </CircularProgress>
                </Box>
                <Box w="100%">
                    <CircularProgress size="100px" thickness="10px" value={32} color="yellow.400">
                        <CircularProgressLabel>32%</CircularProgressLabel>
                    </CircularProgress>
                </Box>
            </Grid>
        </>
    )
}

export default Dashboard