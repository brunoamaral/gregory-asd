import logo from '../images/logo.svg';

function Nav() {
	return (
<header className="fixed w-full">
			<nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
					<div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
							<a href="/" className="flex items-center">
									<img src={logo} className="h-6 mr-3 sm:h-9" alt="Logo" />
							</a>
							<div className="flex items-center lg:order-2"></div>
							<div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
									<ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
											<li>
													<a target='_blank' rel="noreferrer noopener" href="https://gregory-ai.com/" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" aria-current="page"><span className="inline-flex items-center">Gregory AI&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"><path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" fill="grey"></path></svg>
													</span> 
												</a>
											</li>
											<li>
											<a target='_blank' rel="noopener noreferrer" href="https://gregory-ms.com/" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">
											<span className="inline-flex items-center">
												Multiple Sclerosis Research&nbsp;
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400">
													<path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" fill="grey"></path>
												</svg>
											</span>
										</a>
											</li>
									</ul>
							</div>
					</div>
			</nav>
</header> 

		);
}

export default Nav