import { SimpleGrid, Box, Text, Card, CardBody, CardHeader, CardFooter } from "@chakra-ui/react"
import { useLoaderData } from "react-router-dom"


export default function Dashboard() {
  const tasks = useLoaderData()

  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
      {tasks && tasks.map((task) => (
        <Card key={task.id}>
          <CardHeader>
            <Text>{task.title}</Text>
          </CardHeader>
          <CardBody>
            <Text>{task.description}</Text>
          </CardBody>
          
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
