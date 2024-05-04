'use client'

export default function Error({error}){
  return(
    <main className='error'>
      <h1>An error occurred!</h1>
      <p> Faild to fetch meal data. Try again later</p>
    </main>
  )
}