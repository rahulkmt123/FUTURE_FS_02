const form = document.getElementById("leadForm");

// Submit form
form.addEventListener("submit", async (e)=>{

e.preventDefault();

// Collect form data
const lead = {

name: document.getElementById("name").value,
email: document.getElementById("email").value,
source: document.getElementById("source").value,
status: document.getElementById("status").value,
notes: document.getElementById("notes").value

};

// Send data to backend
await fetch("http://localhost:5000/add-lead",{

method:"POST",
headers:{ "Content-Type":"application/json" },
body:JSON.stringify(lead)

});

loadLeads();

});


// Load leads
async function loadLeads(){

const res = await fetch("http://localhost:5000/leads");

const data = await res.json();

const table = document.querySelector("#leadTable tbody");

table.innerHTML="";

data.forEach(lead=>{

table.innerHTML += `
<tr>
<td>${lead.name}</td>
<td>${lead.email}</td>
<td>${lead.source}</td>
<td>${lead.status}</td>
</tr>
`;

});

}

loadLeads();