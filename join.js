var joinBtn=document.querySelector('.joinBtn'); 
var join_modal=document.querySelector('.join_modal');
var joinCloseBtn=document.querySelector(".join_close");

joinBtn.addEventListener('click', function(){
    join_modal.classList.add("join_active");
});
joinCloseBtn.addEventListener('click', function(){
    join_modal.classList.remove("join_active");
});