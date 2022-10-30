import { Logo } from "./Logo";
import { NavItems } from "./NavItems";
import { NavItem } from "./NavItem";
import { AiOutlineApi,AiFillGithub } from "react-icons/ai";
import {Nav} from './NavStyles'

export const Navbar = () => {
    return (
        <Nav>
            <Logo />
            <NavItems>
                <NavItem icon={<AiOutlineApi/>} />
                <NavItem icon={<AiFillGithub/>} />
            </NavItems>
        </Nav>
    );
};
