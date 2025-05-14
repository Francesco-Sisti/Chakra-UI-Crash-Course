import { List, ListItem, ListIcon } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { CalendarIcon, EditIcon, AtSignIcon } from "@chakra-ui/icons"


export default function Sidebar() {
return (
    <List color="white" spacing={4} >
        <ListItem>
            <NavLink to="/">
                <ListIcon as={CalendarIcon} />
                Dashboard
            </NavLink>

            <NavLink to="/create">
                <ListIcon as={EditIcon} />
                New Task
            </NavLink>

            <NavLink to="/profile">
                <ListIcon as={AtSignIcon} />
                Profile
            </NavLink>   
        </ListItem>
    </List>
)
}
