


// document.getElementById("states").addEventListener("select",fun);
function fun(){
fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api_india", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
		"x-rapidapi-key": "3be46b11dfmsh2492a2093f5dc46p1a0912jsn487c52ae45af"
	}
})
.then(response => response.json().then(data =>{
	// console.log(data);
	var tb = document.getElementById("state_stat");
	tb.innerHTML = "";
	tb.innerHTML = "<tr><th><center>City</center></th><th><center>Confirmed</center></th></tr>";
	let e = document.querySelector("#states");
	let confirm = document.getElementById("total_cases");
let active = document.getElementById("total_active");
let death = document.getElementById("total_deaths");
let recover = document.getElementById("total_recovered");
let update = document.getElementById("update");
let table = document.getElementById("state_stat");
	let result = e.options[e.selectedIndex].value;
	// console.log(result);
	let state_stats = data.state_wise;
	// console.log(state_stats);
	var j = 0;
	for( i in state_stats){
		// console.log(state_stats[i].state);
		// let row = table.insertRow(j+1);
		// let statename = row.insertCell(0);
		// let confirm = row.insertCell(1);
		// let active = row.insertCell(2);
		// let death = row.insertCell(3);
		// let recover = row.insertCell(4);
		if(state_stats[i].state != undefined && result != "--Select State--"){
			
			
			
			if(state_stats[i].state == result)
			{
				var a = state_stats[i].confirmed;
				a = a.replace(",","");
				var count1 = new CountUp('total_cases',0,Number(a));
				count1.start();
				var b = state_stats[i].active;
				b = b.replace(",","");
				var count2 = new CountUp('total_active',0,Number(b));
				count2.start();
				var c = state_stats[i].deaths;
				c = c.replace(",","");
				var count3 = new CountUp('total_deaths',0,Number(c));
				count3.start();
				var d = state_stats[i].recovered;
				d = d.replace(",","");
				var count4 = new CountUp('total_recovered',0,Number(d));
				count4.start(); 
		
		update.innerHTML = state_stats[i].lastupdatedtime;
		var z = 0;
		var dist_stat = state_stats[i].district;
		// console.log(dist_stat);
				for( k in dist_stat)
				{
					let row = table.insertRow(-1);
		let cityname = row.insertCell(0);
		let confirm2 = row.insertCell(1);
		cityname.innerHTML = k;
		confirm2.innerHTML = dist_stat[k].confirmed;
					// console.log(Object.keys(dist_stat)[z++]);
					// console.log(dist_stat[k].confirmed);
					
			}
			}
		
		
	}
}

}))
.catch(err => {
	console.log(err);
});

}