// Built-in Libraries
import Link from 'next/link'
import { useRouter } from 'next/router'

const BottomNav = () => {
  const router = useRouter();

  return (
    <nav className="sticky inset-x-0 bottom-0 bg-white shadow">
      <ul className="flex flex-row justify-evenly">
        <li className={`w-full text-center hover:text-green-400` + (router.asPath == "/" ? ` text-green-400` : ``)}>
          <Link href="/">
            <a className="flex flex-col p-2">
              <i className="text-3xl bi bi-house"></i>
              <span className="text-sm">Home</span>
            </a>
          </Link>
        </li>
        <li className={`w-full text-center hover:text-green-400` + (router.asPath == "/record" ? ` text-green-400` : ``)}>
          <Link href="/record">
            <a className="flex flex-col p-2">
              <i className="text-3xl bi bi-clipboard"></i>
              <span className="text-sm">Record</span>
            </a>
          </Link>
        </li>
        <li className={`w-full text-center hover:text-green-400` + (router.asPath == "/config" ? ` text-green-400` : ``)}>
          <Link href="/config">
            <a className="flex flex-col p-2">
              <i className="text-3xl bi bi-gear"></i>
              <span className="text-sm">Config</span>
            </a>
          </Link>
        </li>
      </ul>
		</nav>
  )
}

export default BottomNav;