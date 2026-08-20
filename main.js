const apiURL = "https://jsonplaceholder.typicode.com/todos/";

const loadBtn = document.getElementById("loadBtn");
const clearBtn = document.getElementById("clearBtn");
const tableContainer = document.getElementById("tableContainer");

loadBtn.addEventListener("click", function () {

    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load data");
            }

            return response.json();
        })

        .then(data => {

            let table = `
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User ID</th>
                            <th>Title</th>
                            <th>Completed</th>
                        </tr>
                    </thead>

                    <tbody>
            `;

            data.forEach(todo => {

                let status = todo.completed
                    ? '<span class="completed">Completed</span>'
                    : '<span class="not-completed">Not Completed</span>';

                table += `
                    <tr>
                        <td>${todo.id}</td>
                        <td>${todo.userId}</td>
                        <td>${todo.title}</td>
                        <td>${status}</td>
                    </tr>
                `;
            });

            table += `
                    </tbody>
                </table>
            `;

            tableContainer.innerHTML = table;
        })

        .catch(error => {
            tableContainer.innerHTML =
                `<p style="color:red;">Error: ${error.message}</p>`;
        });
});



clearBtn.addEventListener("click", function () {
    tableContainer.innerHTML = "";
});