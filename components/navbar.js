import Link from 'next/link';

const navbar = () =>( 
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
        <div className="container">
        <a className="navbar-brand" href="#">the brongondite</a>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link href="/"><a className="nav-link">home</a></Link>
            </li><br></br>
            <li className="nav-item">
                <Link href="/about"><a className="nav-link">about</a></Link>
            </li>
        </ul>
        </div>


        </div>
    </nav>
 
);

export default navbar