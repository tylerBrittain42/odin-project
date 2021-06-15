// Converted the following function to utilize async await
function loadJson(url) {
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      });
  }
  loadJson('no-such-user.json')
    .catch(alert); // Error: 404

// SOLUTION 
async function loadJson(url) {
    const res = await fetch(url)
    if(res.status === 200){
        const json = await res.json()
        return json}
    else
          throw new Error(response.status);
};
  
  loadJson('no-such-user.json')
    .catch(alert); // Error: 404

