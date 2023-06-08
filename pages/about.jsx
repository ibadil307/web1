import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function About() {
	return (
		<>
			<Head>
			  <title>About</title>
			</Head>

			<Navbar />

			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">About</h1>
			      <p className="description">
			      	 Halo! Perkenalkan, saya Muhammad Ibadil Mukhlasin. Saya adalah seorang mahasiswa aktif di Politeknik Negeri Tanah Laut, tengah menempuh studi di jurusan D4 Teknologi Rekayasa Komputer. Saya memiliki ketertarikan yang mendalam dalam bidang perangkat keras dan perangkat lunak. Sebagai mahasiswa, saya telah belajar dan memperoleh pemahaman yang kuat tentang instalasi, konfigurasi, dan pemeliharaan perangkat jaringan seperti router, switch, dan access point. 
				</p> 
				<p className="description"> 
				Saya juga telah mengembangkan keterampilan dalam menggunakan aplikasi dan melakukan pemecahan masalah pada sistem operasi. Selama studi saya, saya telah terlibat dalam berbagai proyek yang melibatkan implementasi jaringan komputer dan instalasi sistem operasi. Hal ini telah memberi saya kesempatan untuk mengembangkan pemahaman praktis tentang perangkat keras dan perangkat lunak serta kemampuan dalam menghadapi tantangan yang mungkin timbul.
				</p>
				<p className="description"> 
				Saya adalah seorang yang tekun, antusias, dan berorientasi pada detail. Saya senang mempelajari hal-hal baru dan selalu siap untuk menghadapi tantangan baru dalam bidang perangkat keras dan perangkat lunak. Saya percaya bahwa penggabungan pengetahuan teknis dan keterampilan interpersonal dapat membantu saya dalam meraih kesuksesan di dunia profesional. Saya senang berkolaborasi dengan orang-orang yang memiliki minat dan komitmen yang sama dalam bidang ini. 
				</p>
				<p className="description"> 
				Jika Anda memiliki proyek menarik atau peluang kerja yang sesuai dengan keahlian saya, saya sangat berharap dapat berdiskusi lebih lanjut dan berkontribusi pada kemajuan perusahaan atau tim Anda. Terima kasih telah meluangkan waktu untuk membaca "About Me" saya. Jika Anda memiliki pertanyaan atau ingin berhubungan, jangan ragu untuk menghubungi saya melalui informasi kontak yang tercantum di bawah ini. Terima kasih atas perhatian Anda.
			      </p>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default About;
