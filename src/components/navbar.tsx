import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Logo } from './ui/logo'

export const Navbar = () => {
  return (
    <nav className='bg-background h-16 border-b'>
      <div className='flex h-full items-center justify-between custom-container'>
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className='hidden md:block' />

        <div className='flex items-center gap-3'>
          <Button variant='outline' className='hidden sm:inline-flex'>
            Sign In
          </Button>
          <Button>Get Started</Button>

          {/* Mobile Menu */}
          <div className='md:hidden'>
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  )
}

const NavMenu = (props: any) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className='gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start'>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <a href='#'>Home</a>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <a href='#'>Blog</a>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <a href='#'>About</a>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <a href='#'>Contact Us</a>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
)

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline' size='icon'>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Logo />
        <NavMenu orientation='vertical' className='mt-12' />
      </SheetContent>
    </Sheet>
  )
}
