import { Disclosure } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

type NavbarProps = {
	current: string
}

const navigation = [
	{ name: 'About', href: '/', current: false },
	{ name: 'Skills', href: '/skills', current: false },
	{ name: 'Projects', href: '/projects', current: false },
	{ name: 'Blog', href: '/blog', current: false },
	{ name: 'Contact', href: '/contact', current: false }
]

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

const setCurrent = (current: string) => {
	for (let nav of navigation) {
		if (nav.name === current) {
			nav.current = true;
		}
	}
}

const Navbar: React.FC<NavbarProps> = ({ current }) => {

	setCurrent(current)

	return (
		<Disclosure as="nav" className="bg-blue-500">
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
						<div className="relative flex items-center justify-between h-16">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-gray hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									{open ? (
										<XIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<MenuIcon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="">
								<p className="text-2xl text-gray-100 font-extrabold">Austin Edger</p>
								<p className="text-sm font-medium text-gray-200">Software Engineer</p>
							</div>
							<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
								<div className="hidden sm:block sm:ml-6">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className={classNames(
													item.current ? 'bg-blue-400 text-white' : 'text-white hover:bg-blue-400 hover:text-white',
													'px-3 py-2 rounded-md text-sm font-medium'
												)}
												aria-current={item.current ? 'page' : undefined}
											>
												{item.name}
											</a>
										))}
									</div>
								</div>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								<button
									type="button"
									className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
								>
									<BellIcon className="h-6 w-6" aria-hidden="true" />
								</button>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navigation.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className={classNames(
										item.current ? 'bg-blue-400 text-white' : 'text-gray-300 hover:bg-blue-400 hover:text-white',
										'block px-3 py-2 rounded-md text-base font-medium'
									)}
									aria-current={item.current ? 'page' : undefined}
								>
									{item.name}
								</a>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}

export default Navbar