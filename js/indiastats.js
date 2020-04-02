
let confirmed_cases = document.getElementById("total_cases");
let critical_cases = document.getElementById("total_critical");
let recovered_cases = document.getElementById("total_recovered");
let deaths = document.getElementById("total_deaths");
let update = document.getElementById("update");
let table = document.getElementById("state_stat");


fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "3be46b11dfmsh2492a2093f5dc46p1a0912jsn487c52ae45af"
	}
})
.then(response => response.json().then(data => {
	console.log(data);
	 let countries_stat = data.countries_stat;

    for(let i = 0; i<countries_stat.length;i++){
        
        if( countries_stat[i].country_name == "India"){
       var a = countries_stat[i].cases;
       a = a.replace(",","");
	var z = new CountUp('total_cases',0,Number(a));
	z.start();
        var b = countries_stat[i].serious_critical;
        b = b.replace(",","");
	var y = new CountUp('total_critical',0,Number(b));
	y.start();
	var c = countries_stat[i].total_recovered;
	c = c.replace(",","");
	var x = new CountUp('total_recovered',0,Number(c));
	x.start();
	var d = countries_stat[i].deaths;
        d = d.replace(",","");
	var w = new CountUp('total_deaths',0,Number(d));
	w.start(); 
       
        
    }

}}))
.catch(err => {
	console.log(err);
});

fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api_india", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
		"x-rapidapi-key": "3be46b11dfmsh2492a2093f5dc46p1a0912jsn487c52ae45af"
	}
})
.then(response => response.json().then(data => {
	// console.log(data);
	// console.log(data.total_values);

	
	update.innerHTML = data.total_values.lastupdatedtime;

	let state_stats = data.state_wise;
	
	var j = 0;
	for( i in state_stats){
		// console.log(state_stats[i].state);
		let row = table.insertRow(j+1);
		let statename = row.insertCell(0);
		let confirm = row.insertCell(1);
		let active = row.insertCell(2);
		let death = row.insertCell(3);
		let recover = row.insertCell(4);
		if(state_stats[i].state != undefined){

		statename.innerHTML = state_stats[i].state;
		confirm.innerHTML = state_stats[i].confirmed;
		active.innerHTML = state_stats[i].active;
		death.innerHTML = state_stats[i].deaths;
		recover.innerHTML = state_stats[i].recovered;
		j++;
	}
}}))
.catch(err => {
	console.log(err);
});