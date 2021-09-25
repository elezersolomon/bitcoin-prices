class Prices extends React.Component{
    state={
        currency:'USD',
    }
    curr=""
  changeCurrency = (e)=> {
      console.log(e.target.value)
     this.setState({currency: e.target.value})
     console.log(this.state.currency);
  } 
render() {
    let list="";
    if (this.state.currency==='USD'){
      list= <div>
        bitcoin rate for {this.props.bpi.description}:- <span className="badge badge-primary">{this.props.bpi.USD.code}</span>
        <strong>{this.props.bpi.USD.rate}</strong>
    </div>
    }
    else if(this.state.currency==='GBP'){
      list=  <div>
                bitcoin rate for {this.props.bpi.description}:- <span className="badge badge-primary">{this.props.bpi.GBP.code}</span>
                <strong>{this.props.bpi.GBP.rate}</strong>
            </div>
    }
    else if(this.state.currency==='EUR'){
        
        list= <div>
           
                bitcoin rate for {this.props.bpi.description}:- <span className="badge badge-primary">{this.props.bpi.EUR.code}</span>
                <strong>{this.props.bpi.EUR.rate}</strong>

                </div>     

    }

    return (
        <div>
            <li  className='list-group-item' >
                <p>check current bit coin prices  <select onChange={this.changeCurrency}><option>USD</option><option>GBP</option><option>EUR</option></select></p>
                 {list}

            </li>
            </div>
            )
}



}


export default Prices