import Navbar from './navbar'
import fetch from 'isomorphic-unfetch'
import index from '../pages';


const layout = (props)=>(
    <div>
        
        <head>
            <title>the brongondyte</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
        </head>
        <Navbar/>
        <div className="container">
        {props.children}
        </div>
    </div>
)


export default layout;