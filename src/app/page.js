import Link from 'next/link'


export default function Home() {

  return (
    <div>
      <div>
      <Link href={'/accounts/Login'} >Login</Link>
      </div>
      <Link href={'/accounts/Signup'} >Signup</Link>
    </div>
  )
}
