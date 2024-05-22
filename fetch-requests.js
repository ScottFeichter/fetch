/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

// Your code here 
fetch("http://localhost:5000/products", {
    method: 'POST',
    body: "name=Caribbean2+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });


/* ============================== Phase 2 ============================== */

// Your code here 
// fetch("http://localhost:5000/products", {
//     method: 'POST',
//     body: "name=Caribbean2+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded"
//     }
//   }).then(response => console.log(response.status, response.url, response.headers.get('Content-Type')))

  fetch("http://localhost:5000/products", {
    method: 'POST',
    body: "name=Caribbean2+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  }).then(response => console.log(response.status, response.url, response.headers.get('Content-Type')))



/* ============================== Phase 3 ============================== */

// Your code here 
