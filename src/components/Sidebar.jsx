import { List, ListItem, ListIcon, Box, Heading, Divider, Flex, useColorModeValue, Text, Icon } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { CalendarIcon, EditIcon, AtSignIcon, SettingsIcon, StarIcon, MoonIcon } from "@chakra-ui/icons"

export default function Sidebar() {
    const activeColor = useColorModeValue("purple.500", "purple.300");
    const hoverBg = useColorModeValue("purple.50", "purple.900");
    const textColor = useColorModeValue("white", "white");
    const borderColor = useColorModeValue("purple.200", "purple.700");

    const navItems = [
        { path: "/", icon: CalendarIcon, label: "Dashboard" },
        { path: "/create", icon: EditIcon, label: "Nuovo Task" },
        { path: "/profile", icon: AtSignIcon, label: "Profilo" },
        { path: "/forms", icon: SettingsIcon, label: "Form" },
        { path: "/showcase", icon: StarIcon, label: "Showcase" },
        { path: "/theme", icon: MoonIcon, label: "Temi" }
    ];

    return (
        <Box p={5}>
            <Heading as="h3" size="md" color={useColorModeValue("white", "purple.500")} mb={6} textAlign="center">
                Menu Principale
            </Heading>
            <Divider mb={6} borderColor={borderColor} />
            
            <List color={textColor} spacing={4}>
                {navItems.map((item) => (
                    <ListItem key={item.path}>
                        <NavLink to={item.path} style={({ isActive }) => ({
                            color: isActive ? activeColor : 'inherit',
                            fontWeight: isActive ? 'bold' : 'normal',
                            display: 'block',
                            padding: '10px 14px',
                            borderRadius: '10px',
                            backgroundColor: isActive ? hoverBg : 'transparent',
                            transition: 'all 0.3s ease',
                            boxShadow: isActive ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
                        })}>
                            <Flex align="center">
                                <ListIcon as={item.icon} boxSize={5} mr={3} />
                                <Text fontSize="md">{item.label}</Text>
                            </Flex>
                        </NavLink>
                    </ListItem>
                ))}
            </List>
            
            <Divider mt={8} mb={6} borderColor={borderColor} />
            <Text fontSize="xs" textAlign="center" color={textColor} opacity={0.7}>
                Chakra UI Demo v1.0
            </Text>
        </Box>
    )
}
