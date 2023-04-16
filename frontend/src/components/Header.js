
function Header() {
	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16  lg:pt-28">
				<div className="">
				<h1 className="max-w-prose mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
				GregoryAi for Autism Spectrum Disorder
				</h1>
				<p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
				Gregory is an <strong className="font-medium text-purple-600 dark:text-purple-400">Artificial Intelligence research assistant</strong> that scouts trustworthy sources in any field, indexing and filtering the results into a searchable database.</p>
				<p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
				The list below is a compilation of real time results for scientific articles around Autism Spectrum Disorder found on PubMed with the search <em>"Autism Spectrum Disorder"[Title] AND "child"[Title]</em>. Text below the title is an AI summary of the abstract.
				</p>
				<div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
				<a href="https://gregory-ms.com/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-white border border-gray-200 rounded-lg sm:w-auto focus:ring-4 focus:ring-purple-500 dark:text-white dark:border-gray-700 dark:hover:bg-purple-500 dark:focus:ring-purple-500 bg-purple-600 shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 umami--click--gregoryms-usecase-header">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400">
					<path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" fill="white"></path>
					</svg>
					Gregory for MS
				</a>
				<a href="https://gregory-ms.com/gregoryai_press.zip" target="_blank" rel="noreferrer" className="umami--click--presskit-button inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-white border border-gray-200 rounded-lg sm:w-auto focus:ring-4 focus:ring-purple-500 dark:text-white dark:border-gray-700 dark:hover:bg-purple-500 dark:focus:ring-purple-500 bg-blue-600 shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
					<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" viewBox="0 0 384 512">
					<path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z" fill="White"></path>
					</svg>
					Press Kit
				</a>
				</div>
			</div>

			</div>
</section>
	)
}

export {Header}