async function postData(url = '', data = {}) {
            let body = JSON.stringify(data);
            let httpRequest = {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *client
                body: body  // body data type must match "Content-Type" header
            };
            const response = await fetch(url, httpRequest);
            return response; // parses JSON response into native JavaScript objects
        };
        
        const saveStudent = async(firstName, lastName, age) => {
            let student = {firstName: firstName, lastName: lastName, age: age};
            let response = await postData(
                "http://localhost:3000/api/students", 
                student);
            if (response.ok) {
                alert("hi new student was saved correctly");
            }
        };
        
        // saveStudent("venya", "brodetskiy", 29);

        const handleClick = () => {
            let firstName = document.getElementById("firstName").value;
            let lastName = document.getElementById("lastName").value;
            let age = document.getElementById("age").value;

            console.log(firstName, lastName, age);
            saveStudent(firstName, lastName, age);
        }