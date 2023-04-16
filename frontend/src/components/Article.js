import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleDoubleLeft, faAngleRight, faAngleDoubleRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
const API_URL = process.env['REACT_APP_API_URL'];

const Article = (props) => {
  const [article, setArticle] = useState({});
  const { article_id } = props.match.params;
  const page = 1; // Or use useState to handle pagination

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`${API_URL}/articles/${article_id}/?format=json&page=${page}`);
        setArticle(response.data);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, [article_id, page]);

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};
function formatDate(date) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return new Intl.DateTimeFormat('en-UK', options).format(date);
}
const generateArticleURL = (article) => {
  const article_id = article.article_id;
  const article_slug = article.title.replace(/ /g, '-').toLowerCase();
  return `/articles/${article_id}/${article_slug}`;
};

function ArticleSnippet(props) {
  const date = new Date(props.article.published_date);
	return ( <div>
    <span className="text-base font-medium leading-tight text-gray-500 dark:text-white">{formatDate(date)}</span>
				<h4 className="mb-4 text-2xl font-bold tracking-tight text-purple-600 dark:text-purple-400 ">
				<a className='mr-3' href={generateArticleURL(props.article)} target="_blank" rel="noopener noreferrer">{props.article.title}
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
      const response = await axios.get(`${API_URL}/articles/?format=json&page=${page}`);
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
          <ArticleSnippet key={article.article_id} article={article} />
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
				<button onClick={() => props.setPage(1)} className="page-link block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" aria-label="First">
				<span aria-hidden="true"><FontAwesomeIcon icon={faAngleLeft} /><FontAwesomeIcon icon={faAngleDoubleLeft}/></span>
			</button>
			</li>
			<li className="page-item">
				<button onClick={() => props.setPage(props.page + 1)} className="page-link px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" aria-label="Previous">
				<span aria-hidden="true"><FontAwesomeIcon icon={faAngleDoubleLeft}/></span>
				</button>
			</li>
			{ props.page > 2 &&
			<React.Fragment>
				<li className="page-item">
					<button className="page-link px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => props.setPage(props.page - 2)}>{props.page - 2}</button>
				</li>
			</React.Fragment>
			}

	{ props.page > 1 &&
			<React.Fragment>
				<li className="page-item">
					<button className="page-link px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => props.setPage(props.page - 1)}>{props.page - 1}</button>
				</li>
			</React.Fragment>
			}
			<li className="page-item active">
				<button className="page-link px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" href="/articles/page/{props.page}/">{props.page}</button>
			</li>
			{ props.page < props.last_page &&
			<React.Fragment>
				<li className="page-item">
					<button className="page-link px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => props.setPage(props.page + 1)}>{props.page + 1}</button>
				</li>
				<li className="page-item disabled px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
					<span aria-hidden="true">&nbsp;…&nbsp;</span>
				</li>
				<li className="page-item">
					<button className="page-link px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => props.setPage(props.last_page)}>{props.last_page}</button>
				</li>
				<li className="page-item">
					<button onClick={() => props.setPage(props.page + 1)} className="page-link px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" aria-label="Next">
					<span aria-hidden="true"><FontAwesomeIcon icon={faAngleRight}/></span>
					</button>
				</li>
				<li className="page-item">
					<button onClick={() => props.setPage(props.last_page)} className="page-link block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" aria-label="Last">
					<span aria-hidden="true"><FontAwesomeIcon icon={faAngleDoubleRight} /> <FontAwesomeIcon icon={faAngleRight} 
          /></span>
					</button>
				</li>
			</React.Fragment>
			}
		</ul>
    </nav>
)}
export {Article,ArticlesList,ArticleSnippet,Pagination}
