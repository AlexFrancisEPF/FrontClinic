import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';


/////////Cabinet Patient Inventaire //////////








/////////Afficher Nom Prenom ///////

function AffichageNomIMG(props){
	
	return (
	
	
	<div class="col s12 m7">
    <h2 class="header"> {props.utilisateur.age} {props.utilisateur.lastname} </h2>
    <div class="card horizontal">
      <div class="card-image">
        <img src="http://lorempixel.com/100/190/nature/6"/>
      </div>
	  </div>
	  </div>
	  
	
	);
}
function AfficherContenuUtilisateur(props){
	
	return(
	 <div class="card-content">
          <p>mail : {props.utilisateur.mail}</p>
		    <p>age : {props.utilisateur.age}</p>
        </div>
	);
	
}


	  
   
///////////////Affichage Utilisateur//////////

function AffichageUtilisateur(props){
	
	return(
	<div>
<AffichageNomIMG utilisateur={props.utilisateur} />
<AfficherContenuUtilisateur utilisateur={props.utilisateur} />

     </div>    
	);
	
	
	
}



//////////////GRAPHIQUE/////////


function SimpleAreaChart(props){
	
  	return (
    	<AreaChart width={600} height={400} data={props.data}
            margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <XAxis dataKey="timestamp"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Area type='monotone' dataKey='data' stroke='#3c4c6e' fill='#2a354d ' />
      </AreaChart>
    );
  
}

////////Patient///////////

function Patient(props){
	
	
		return(
		
		<li ><button >{props.data.firstname} is the  name, {props.data.age} is the age, is lastname {props.data.lastname}</button>   <SimpleAreaChart data={props.data.metric}/></li> 
		
		)
	
	
	
}



////////////////Liste Patient//////////////




class ListPatient extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			search : ''
			}
	}
	
	updateSearch(event) {
		this.setState({search : event.target.value.substring(0,20)});
	}
	
	 
	render(){
		let filteredData = this.props.data.filter(
		(data) => { 
	         return data.firstname.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;		
		}
		);
		return (
		<div>
				<input type="text" 
			value={this.state.search}
			onChange = {this.updateSearch.bind(this)}
			/>
		<ul >
        {filteredData.map((data) => {
         return  	<Patient data={data} key={data.id} />  
        
        })}
		</ul>

		</div>
		)
	}
	
	
}
///////////Board/////////////


class Board extends React.Component{
	 constructor(props){
		 super(props);
		this.state = {data : [{"id":"1", "age":"103","firstname":"alex", "mail" : "alex.francis@epfedu.fr ","lastname": "franck", "metric" : [{ sensor: 'airflow', data: 15, timestamp: 1, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 5, timestamp: 2, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 45, timestamp: 3, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 25, timestamp: 4, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 45, timestamp: 5, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 95, timestamp: 6, rasp_id: '1564865', owner: 'alex'}]},
  {"id":"2", "age":"112","firstname":"Paul" , "lastname": "franck", "metric" : [{ sensor: 'airflow', data: 15, timestamp: 1, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 5, timestamp: 2, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 45, timestamp: 3, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 25, timestamp: 4, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 45, timestamp: 5, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 95, timestamp: 6, rasp_id: '1564865', owner: 'alex'}]},
  {"id":"3", "age":"114","firstname":"Etienne" , "lastname": "franck", "metric" : [{ sensor: 'airflow', data: 15, timestamp: 1, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 5, timestamp: 2, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 45, timestamp: 3, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 25, timestamp: 4, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 45, timestamp: 5, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 95, timestamp: 6, rasp_id: '1564865', owner: 'alex'}]},
  {"id":"4", "age":"119","firstname":"Quentin" , "lastname": "franck", "metric" : [{ sensor: 'airflow', data: 15, timestamp: 1, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 5, timestamp: 2, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 45, timestamp: 3, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 25, timestamp: 4, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 45, timestamp: 5, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 95, timestamp: 6, rasp_id: '1564865', owner: 'alex'}]},
  {"id":"5", "age":"121","firstname":"Tibo le beau goss" , "lastname": "franck", "metric" : [{ sensor: 'airflow', data: 15, timestamp: 1, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 5, timestamp: 2, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 45, timestamp: 3, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 25, timestamp: 4, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 45, timestamp: 5, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 95, timestamp: 6, rasp_id: '1564865', owner: 'alex'}]},
  {"id":"6", "age":"124","firstname":"PO le riche" , "lastname": "franck", "metric" : [{ sensor: 'airflow', data: 15, timestamp: 1, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 5, timestamp: 2, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 45, timestamp: 3, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 25, timestamp: 4, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 45, timestamp: 5, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 95, timestamp: 6, rasp_id: '1564865', owner: 'alex'}]},
  {"id":"7", "age":"125","firstname":"Jerem" , "lastname": "franck", "metric" : [{ sensor: 'airflow', data: 15, timestamp: 1, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 5, timestamp: 2, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 45, timestamp: 3, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 25, timestamp: 4, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 45, timestamp: 5, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 95, timestamp: 6, rasp_id: '1564865', owner: 'alex'}]},
  {"id":"8", "age":"128","firstname":"Alan" , "lastname": "franck", "metric" : [{ sensor: 'airflow', data: 15, timestamp: 1, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 5, timestamp: 2, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 45, timestamp: 3, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 25, timestamp: 4, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 45, timestamp: 5, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 95, timestamp: 6, rasp_id: '1564865', owner: 'alex'}]},
  {"id":"9", "age":"129","firstname":"Une pute" , "lastname": "franck", "metric" : [{ sensor: 'airflow', data: 15, timestamp: 1, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 5, timestamp: 2, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 45, timestamp: 3, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 25, timestamp: 4, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 45, timestamp: 5, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 95, timestamp: 6, rasp_id: '1564865', owner: 'alex'}]},
  {"id":"10", "age":"131","firstname":"Une autre pute" , "lastname": "franck", "metric" : [{ sensor: 'airflow', data: 15, timestamp: 1, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 5, timestamp: 2, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 45, timestamp: 3, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 25, timestamp: 4, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 45, timestamp: 5, rasp_id: '1564865', owner: 'alex'},
{ sensor: 'airflow', data: 95, timestamp: 6, rasp_id: '1564865', owner: 'alex'}]}], patient: 8, isGeneral : true, 
	};
	
	 }
		  // update filterText in state when user types 

	 render(){
		 
		 return (
		  
		 <div>
		 <div className="Header">
		
		 </div>
		 <div className="Board">
		 <div className="LesPatients">
		 <ListPatient data={this.state.data}/>
		 </div>
		 <div>
		<AffichageUtilisateur utilisateur={this.state.data[0]} />
		</div>
		 </div>
		 </div>
		 
		 );
		 
		 
	 }
	
	
}

ReactDOM.render(
  <Board />,
  document.getElementById('root')
);
