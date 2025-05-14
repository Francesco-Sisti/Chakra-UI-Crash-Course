import { SimpleGrid, Box, Text, Card, CardBody, CardHeader, CardFooter, Flex, Avatar, Button, HStack, Divider } from "@chakra-ui/react"
import { useLoaderData } from "react-router-dom"
import { ViewIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons"

export default function Dashboard() {
  const tasks = useLoaderData()

  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
      {tasks && tasks.map((task) => (
        <Card key={task.id}>
          <CardHeader>
            <Flex justifyContent="space-between" alignItems="center">
              <Box>
                <Avatar src={task.img} />
              </Box>
              <Box>
                <Text fontWeight="bold">{task.title}</Text>
                <Text>by {task.author}</Text>
              </Box>
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>{task.description}</Text>
          </CardBody>

          <Divider borderColor="gray.400" />

          <CardFooter>
            <HStack>
              <Button leftIcon={<ViewIcon />} variant="ghost">View Task</Button>
              <Button leftIcon={<EditIcon />} variant="ghost">Edit Task</Button>
            </HStack>
          </CardFooter>
          
        </Card>
      ))}
    </SimpleGrid>
  )
}
export const taskLoader = async () => {
  const response = await fetch("http://localhost:3000/tasks")
  const data = await response.json()
  return data
}
