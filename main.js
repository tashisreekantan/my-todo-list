function loadTodoList() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
          let content = document.getElementById("content");
          content.innerHTML='';
          let table = document.createElement('table');
          let thead = document.createElement('thead');
          let tr = document.createElement('tr');
          let th1 = document.createElement('th');
          th1.innerHTML = 'ID';
          let th2 = document.createElement('th');
          th2.innerHTML = 'Title';
          let th3 = document.createElement('th');
          th3.innerHTML = 'Completed';
          tr.appendChild(th1);
          tr.appendChild(th2);
          tr.appendChild(th3);
          thead.appendChild(tr);
          table.appendChild(thead);
          let tbody = document.createElement('tbody');
          let completedTasks = 0;
          for (let i = 0; i < data.length; i++) {
            let todo = data[i];
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            td1.innerHTML = todo.id;
            let td2 = document.createElement('td');
            td2.innerHTML = todo.title;
            let td3 = document.createElement('td');
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.completed;
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                  completedTasks++;
                  if (completedTasks >= 95) {
                    alert('Congrats. 5 Tasks have been Successfully Completed');
                  }
                } else {
                  completedTasks--;
                }
              });
              td3.appendChild(checkbox);
              tr.appendChild(td1);
              tr.appendChild(td2);
              tr.appendChild(td3);
              tbody.appendChild(tr);
              if (todo.completed) {
                completedTasks++;
              }
            }
            table.appendChild(tbody);
            content.appendChild(table);
          });
      }
      
      function logout() {
        window.location.href = 'index.html';
      }