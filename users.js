const fetchUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const userDate = await response.json();
        console.log(userDate);
        displayUsers(userDate);
    } catch (error) {
        console.error("Kullanıcıları yüklerken bir hata oluştu:")
    }
};

const displayUsers = (users) => {
    const container = document.getElementById("user-cards");
    users.forEach((user)=> {
        container.innerHTML += `
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${user.name}</h5>
    <div class="user-detailes">
     <p class="card-text"><i class="fa-solid fa-user"></i>${user.username}</p>
     <p class="card-text"><i class="fa-solid fa-location-dot"></i>${user.address.city},${user.address.street}</p>
     <p class="card-text"><i class="fa-solid fa-building"></i>${user.company.name}</p>
     <p class="card-text"><i class="fa-solid fa-square-envelope"></i>${user.email}</p>
     <p class="card-text"><i class="fa-solid fa-phone"></i>${user.phone}</p>
    </div>
    <a href="details.html?postId=${user.id}" class="btn btn-primary">View Profile</a>
  </div>
</div>
        `; 
    });
    
};

document.getElementById("searchForm").addEventListener("submit",(event) => {
    event.preventDefault()
    const userIdInput = Number(document.getElementById("searchInput").value);

    if (userIdInput >= 1 && userIdInput <= 10 ) {
        window.location.href = `posts.html?postId=${userIdInput}`
    } else {
        alert("Bir hata oluştu.Girilen değeri kontrol et!")
    }
});

window.onload = () => {
    fetchUsers();
    document.getElementById("searchInput").value = ""
};