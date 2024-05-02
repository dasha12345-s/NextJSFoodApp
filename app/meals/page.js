import Link from "next/link";

export default function Meals(){
  return(
    <main>
      <h1>List of meals</h1>
      <p>
      <Link href='/meals/item-1'> Item-1
      </Link>
      </p>
      <p>
      <Link href='/meals/item-2'> Item-2
      </Link>
      </p>
    </main>
  )
}