const logoutBtn = document.getElementById("logout-btn");
function clearLocalStorage(){
    localStorage.clear();
}


logoutBtn.addEventListener("click", () => {
    
    clearLocalStorage();
    
    
});
