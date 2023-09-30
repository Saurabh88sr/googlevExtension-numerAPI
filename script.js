
        // Define a variable 'a'
        let a = "Hello";

        document.getElementById("numberFact").textContent = a;

        function numberFact() {


            // Fetch data from the Numbers API
            fetch('http://numbersapi.com/random')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text(); // We use .text() instead of .json() for this API
                })
                .then(data => {
                    // Display the fetched data in the 'numberFact' element
                    document.getElementById("numberFact").innerHTML = data;
                    var res = data.split(' ')[0];
                    console.log(res);
                    document.getElementById("number").innerHTML = `Number ${res}`;
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                    document.getElementById("numberFact").textContent = "Error fetching data.";
                });
        }
        
        reloded = document.getElementById('reload');
        reload.addEventListener('click', numberFact);
        numberFact();