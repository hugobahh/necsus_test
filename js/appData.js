 async function getData(){
   //Api publica para ller datos
   const sURL = 'https://dummyjson.com/users';
   const regs = await fetch(sURL);
   const data = await regs.json();
   console.log('Data: ', data);
   let tab='';
   data.users.forEach(function(user){
     tab += '<tr><td>${user.firstName}</td><td>${user.lasttName}</td><td>${user.age}</td><td>${user.gender}</td><td>${user.email}</td></tr>';
   })
   
   document.getElementById('tbody').innerHTML = tab.toString();
   $('#myTable').DataTable({
     "data": data.users,
       "columns": [
          { "data": 'firstNmae'},
          { "data": 'lastName' },
          { "data": 'age' },
          { "data": 'gender' },
          { "data": 'email' },
       ],
       "columnDefs":[{
          "targets": "_all",
          "defaultContent": "-"
       }]
   })

  }
