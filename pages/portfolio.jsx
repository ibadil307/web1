import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function Portfolio() {
	return (
		<>
			<Head>
			  <title>Projek</title>
			</Head>

			<Navbar />

			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">Projek Saya</h1>
			      <p className="description">
			      	
			      </p>

			      <div className="portfolio-wrapper">
			      	<div className="portfolio-item">
			      		<img src="/Projek.png" className="portfolio-image" />

			      		<h4 className="portfolio-name">TALENT SCOUTING ACADEMY</h4>
			      		<div className="portfolio-category">Pelopor Teknisi Jaringan Membangun Desa di Kantor Desa Kayu Abang</div>
			      	</div>
			      	
			      	</div>
			      </div>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default Portfolio;
