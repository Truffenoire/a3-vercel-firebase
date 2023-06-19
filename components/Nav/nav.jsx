import Link from "next/link"


export default function nav() {
  return (
    <nav>
        <ul className="flex flex-row justify-around">
            <li><Link href="/">one</Link></li>
            <li><Link href="/">two</Link></li>
            <li><Link href="blog">admin</Link></li>
        </ul>
    </nav>
  )
}
