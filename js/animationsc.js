const addToCartButtons = document.getElementsByClassName("invidueel_section_right_block_button");
const shoppingModal = document.getElementById("js--shoppingModal");
let modalIsOpen = false;

for(let i = 0; i < addToCartButtons.length; i++){
    addToCartButtons[i].onclick = function(){
        if(modalIsOpen === false){
            shoppingModal.style.display = "flex";
            modalIsOpen = true;
            setTimeout(function(){
                shoppingModal.style.display = "none";
                modalIsOpen = false;
            },2000);
        }
    }
}