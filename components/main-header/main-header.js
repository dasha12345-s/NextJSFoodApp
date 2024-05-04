import Link from "next/link";
import Image from "next/image";
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import MainHeaderBackgroud from "./main-header-backgroud";
import NavLink from "./nav-link";

export default function MainHeader(){

  return(
   <>
    <MainHeaderBackgroud />
    <header className={classes.header}>
    <Link className={classes.logo} href='/'>
      <Image src={logoImg} alt='A plate with food' priority />
      NextLevel Food
    </Link>

    <nav className={classes.nav}>
      <ul>
        <li>
        <NavLink href='/meals'> Browse Meals </NavLink>
        </li>
        <li>
        <NavLink href='/community'> Foodies Community </NavLink>
        </li>
      </ul>
    </nav>
  </header>
   </>
  )
}