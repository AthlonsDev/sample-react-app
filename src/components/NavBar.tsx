import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import rest_image from "../assets/cutlery.png"; //Bolognese icons created by Freepik - Flaticon

const NavBar = () => {
  return (
    <Navbar className="bg-slate-100 h-16">
      <NavbarBrand>
        <img src={rest_image} className="w-8 h-8" />
        <p className="font-bold text-inherit">Restaurant API</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {/* <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  );
};

export default NavBar;
