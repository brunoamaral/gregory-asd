import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleDoubleLeft, faAngleRight, faAngleDoubleRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';



import 'flowbite/dist/flowbite.min.css';
import logo from './images/logo.svg';

function formatDate(date) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return new Intl.DateTimeFormat('en-UK', options).format(date);
}

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
function Article(props) {
  const date = new Date(props.article.published_date);
	return ( <div>
    <span className="text-base font-medium leading-tight text-gray-500 dark:text-white">{formatDate(date)}</span>
				<h4 className="mb-4 text-2xl font-bold tracking-tight text-purple-600 dark:text-purple-400 ">
				<a className='mr-3' href={props.article.link} target="_blank" rel="noopener noreferrer">{props.article.title}
        </a>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} color='rgb(107 114 128)' className='h-4' />
				</h4>
				<p className="font-medium text-gray-600 dark:text-gray-400">
				  {props.article.takeaways}
				</p>
				<p className="">
          <span className="badge badge-info text-white font-weight-normal">{props.article.container_title}</span>
          {props.article.ml_prediction_gnb === true ? <span className="ml-1 text-white badge badge-success font-weight-normal">AI prediction</span> : null}
          {props.article.relevant === true ? <span className="ml-1 text-white badge badge-primary font-weight-normal">manual selection</span> : null}
        </p>
				</div>

		);
}

function ArticlesList() {
	const [articles, setArticles] = useState([]);
	const [page, setPage] = useState(1);
	const [last_page, setLastPage] = useState(null);
	

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`https://api.gregory-ms.com/articles/relevant/?format=json&page=${page}`);
      setArticles(response.data.results);
			setLastPage(Math.ceil(response.data.count / 10));
    }
    fetchData();
  }, [page]);

	
	return (
		<section className='max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6'>
      <div className='items-center gap-8 lg:grid lg:grid-cols-1 xl:gap-16'>
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          <Pagination page={page} setPage={setPage} last_page={last_page} />
        </div>
        {articles.map((article) => (
          <Article key={article.article_id} article={article} />
        ))}
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          <Pagination page={page} setPage={setPage} last_page={last_page} />
        </div>
        </div>
      </section>
	);
}

function Pagination(props){
	return (
    <nav aria-label="Article navigation">
		<ul className="inline-flex items-center -space-x-px">
			<li className="page-item">
				<a onClick={() => props.setPage(1)} className="page-link block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" aria-label="First">
				<span aria-hidden="true"><FontAwesomeIcon icon={faAngleLeft} /><FontAwesomeIcon icon={faAngleDoubleLeft}/></span>
			</a>
			</li>
			<li className="page-item">
				<a onClick={() => props.setPage(props.page + 1)} className="page-link px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" aria-label="Previous">
				<span aria-hidden="true"><FontAwesomeIcon icon={faAngleDoubleLeft}/></span>
				</a>
			</li>
			{ props.page > 2 &&
			<React.Fragment>
				<li className="page-item">
					<a className="page-link px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => props.setPage(props.page - 2)}>{props.page - 2}</a>
				</li>
			</React.Fragment>
			}

	{ props.page > 1 &&
			<React.Fragment>
				<li className="page-item">
					<a className="page-link px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => props.setPage(props.page - 1)}>{props.page - 1}</a>
				</li>
			</React.Fragment>
			}
			<li className="page-item active">
				<a className="page-link px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" href="/articles/page/{props.page}/">{props.page}</a>
			</li>
			{ props.page < props.last_page &&
			<React.Fragment>
				<li className="page-item">
					<a className="page-link px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => props.setPage(props.page + 1)}>{props.page + 1}</a>
				</li>
				<li className="page-item disabled px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
					<span aria-hidden="true">&nbsp;…&nbsp;</span>
				</li>
				<li className="page-item">
					<a className="page-link px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => props.setPage(props.last_page)}>{props.last_page}</a>
				</li>
				<li className="page-item">
					<a onClick={() => props.setPage(props.page + 1)} className="page-link px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" aria-label="Next">
					<span aria-hidden="true"><FontAwesomeIcon icon={faAngleRight}/></span>
					</a>
				</li>
				<li className="page-item">
					<a onClick={() => props.setPage(props.last_page)} className="page-link block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" aria-label="Last">
					<span aria-hidden="true"><FontAwesomeIcon icon={faAngleDoubleRight} /> <FontAwesomeIcon icon={faAngleRight} 
          /></span>
					</a>
				</li>
			</React.Fragment>
			}
		</ul>
    </nav>
)}

export { Nav, ArticlesList, };
