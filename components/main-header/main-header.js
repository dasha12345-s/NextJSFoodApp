import Link from "next/link";
import Image from "next/image";
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import MainHeaderBackgroud from "./main-header-backgroud";

export default function MainHeader(){
  console.log('LOOK')
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
          <Link href='/meals'> Browse Meals </Link>
        </li>
        <li>
          <Link href='/meals'> Foodies Community </Link>
        </li>
      </ul>
    </nav>
  </header>
   </>
  )
}