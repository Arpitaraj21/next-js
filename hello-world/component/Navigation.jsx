import Link from "next/link";

export default function Navigation(){
    return(
       <header>
        <div>Arpita</div>
        <nav>
            <ul>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <a href="/service/address">Service</a>
                </li>
            </ul>
        </nav>
       </header>
    )
}