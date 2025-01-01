const fetchUsersDetais = async () => {
  try {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("postId");
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const userDetailData = await response.json();
    console.log(userDetailData);
    displayUserDetails(userDetailData);
  } catch (error) {
    console.error("Kullanıcı postlarını alırken bir hata oluştu:", error);
  }
};

const displayUserDetails = (userDetail) => {
  const detailsContainer = document.getElementById("detailsContainer")
  userDetail.forEach((user) => {
    const userDetailCard=`<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${user.title}</h5>
    <p class="card-text">${user.body}</p>
    <p class="card-text">${user.id}</p>
  </div>
</div>
    `;
    detailsContainer.innerHTML += userDetailCard;
  });
}

window.onload = () => {
  fetchUsersDetais();
};
