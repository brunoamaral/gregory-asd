import React from 'react';

// ./components/Home.js
import { ArticlesList } from './Article';
import Nav from './Nav';
import NameForm from './NameForm';
import { Header } from "./Header";
const Home = () => {
	return (
		<>
			<Nav />
			<Header />
			<ArticlesList />
			<NameForm />
		</>
	);
};

export default Home;
