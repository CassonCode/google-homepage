  const clearIcon = document.querySelector(".clear-search-icon");
  const searchBar = document.querySelector(".searchbar");

  searchBar.addEventListener("keyup", () => {
    if(searchBar.value){   // if(searchBar.value && clearIcon.style.visibility != "visible"){
      clearIcon.style.visibility = "visible";
    } 
    else {   // else if(!searchBar.value) {
      clearIcon.style.visibility = "hidden";
    }
  });

  clearIcon.addEventListener("click", () => {
    searchBar.value = "";
    clearIcon.style.visibility = "hidden";
  })
