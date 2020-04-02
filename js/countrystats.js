
//Decalring the Different Variable and Objects
let new_cases = document.getElementById("new_case");
let new_death = document.getElementById("new_death");
let total_death = document.getElementById("total_death");
let total_recovered = document.getElementById("total_recovered");
let total_cases = document.getElementById("total_cases");
let table = document.getElementById('countries_stat')
// Fetching the Data from the server

fetch("https://public-us.opendatasoft.com/api/records/1.0/search/?dataset=country-flags&facet=country",{
	"method" : "GET",

}).then( response=> response.json().then(data =>{
	console.log(data);
}))
.catch(err => {
	console.log(err);
});

fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "3be46b11dfmsh2492a2093f5dc46p1a0912jsn487c52ae45af"
	}
})
.then(response => response.json().then( data =>{
	// import { CountUp } from 'countup.js';If you want to include a JS file in a JS you can use jQuery.getScript() for that
total_cases.innerHTML = 0;
    new_cases.innerHTML = 0;
    new_death.innerHTML = 0;
    total_death.innerHTML = 0;
    total_recovered.innerHTML = 0;
	console.log(data);
	var a = data.total_cases;
	
	a = a.replace(",","");
	var c = new CountUp('total_cases',0,Number(a));
	c.start();
	var b =  data.new_cases;
	
	b = b.replace(",","");
	// console.log(a);
	var d = new CountUp('new_case',0,Number(b));
	d.start();
	a =  data.new_deaths;
	
	a = a.replace(",","");
	console.log(a);
	var e = new CountUp('new_death',0,Number(a));
	e.start();
	a =  data.total_deaths;
	a = a.replace(",","");
	console.log(a);
	var f = new CountUp('total_death',0,Number(a));
	f.start();
	a =  data.total_recovered;
	a = a.replace(",","");
	console.log(a);
	var g = new CountUp('total_recovered',0,Number(a));
	g.start();
	// total_cases.innerHTML = data.total_cases;
    // new_cases.innerHTML = data.new_cases;
    // new_death.innerHTML = data.new_deaths;
    // total_death.innerHTML = data.total_deaths;
    // total_recovered.innerHTML = data.total_recovered;
}))
.catch(err => {
	console.log(err);
});


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
//Getting all the country statistic using a loop
    for(let i = 0; i<countries_stat.length;i++){
        // console.log(countries_stat[i]);
        //we will start by inserting the new rows inside our table
 
        let row = table.insertRow(i+1);
        let country_name = row.insertCell(0);
        let cases = row.insertCell(1);
        let deaths = row.insertCell(2);
        let serious_critical = row.insertCell(3);
        let recovered_per_country = row.insertCell(4);
        country_name.innerHTML = countries_stat[i].country_name;
        cases.innerHTML = countries_stat[i].cases;
        deaths.innerHTML = countries_stat[i].deaths;
        serious_critical.innerHTML = countries_stat[i].serious_critical;
        recovered_per_country.innerHTML = countries_stat[i].total_recovered;

}}))
.catch(err => {
	console.log(err);
});