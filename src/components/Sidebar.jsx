import { List, ListItem, ListIcon, Box, Heading, Divider, Flex, useColorModeValue } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { CalendarIcon, EditIcon, AtSignIcon } from "@chakra-ui/icons"


export default function Sidebar() {
    const activeColor = useColorModeValue("purple.500", "purple.300");
    const hoverBg = useColorModeValue("purple.50", "purple.900");

    return (
        <Box p={5}>
            <Heading as="h3" size="md" color="purple.500" mb={6}>Menu</Heading>
            <Divider mb={6} />
            
            <List color="white" spacing={4}>
                <ListItem>
                    <NavLink to="/" style={({ isActive }) => ({
                        color: isActive ? activeColor : 'inherit',
                        fontWeight: isActive ? 'bold' : 'normal',
                        display: 'block',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        backgroundColor: isActive ? hoverBg : 'transparent'
                    })}>
                        <Flex align="center">
                            <ListIcon as={CalendarIcon} />
                            Dashboard
                        </Flex>
                    </NavLink>
                </ListItem>
                
                <ListItem>
                    <NavLink to="/create" style={({ isActive }) => ({
                        color: isActive ? activeColor : 'inherit',
                        fontWeight: isActive ? 'bold' : 'normal',
                        display: 'block',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        backgroundColor: isActive ? hoverBg : 'transparent'
                    })}>
                        <Flex align="center">
                            <ListIcon as={EditIcon} />
                            New Task
                        </Flex>
                    </NavLink>
                </ListItem>
                
                <ListItem>
                    <NavLink to="/profile" style={({ isActive }) => ({
                        color: isActive ? activeColor : 'inherit',
                        fontWeight: isActive ? 'bold' : 'normal',
                        display: 'block',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        backgroundColor: isActive ? hoverBg : 'transparent'
                    })}>
                        <Flex align="center">
                            <ListIcon as={AtSignIcon} />
                            Profile
                        </Flex>
                    </NavLink>   
                </ListItem>
            </List>
        </Box>
    )
}
