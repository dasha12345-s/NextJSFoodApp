import Link from "next/link";
import logoImg from '@/assets/logo.png'

export default function MainHeader(){
  return <header>
    <Link href='/'>
      <img src={logoImg.src} alt='A plate with food'/>
      NextLevel Food
    </Link>

    <nav>
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
}