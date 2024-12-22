document.getElementById('fetchUsers').addEventListener('click', async () => {
    try {
      const response = await fetch('http://localhost:4000/api/usuarios');
      if (!response.ok) throw new Error('Error al obtener usuarios');
      
      const users = await response.json();
      const userList = document.getElementById('userList');
      userList.innerHTML = '';
  
      users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.nombre;
        userList.appendChild(li);
      });
    } catch (error) {
      console.error('Error:', error);
    }
  });
  