import  Layout from "../components/layout";
import  Prices from "../components/prices";
const index = (props) => (
    <Layout>
<div>

    
<h1>bit coin</h1>
 
<Prices  bpi={props.bpi}></Prices>
</div>
</Layout>
);

index.getInitialProps= async () =>{
    const res = await fetch ('https://api.coindesk.com/v1/bpi/currentprice.json');
     
    const data = await res.json();

    return {
        bpi: data.bpi
    }

}

export default index;

 