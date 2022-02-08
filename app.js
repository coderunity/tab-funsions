
const tap_manu = document.querySelectorAll('.abu_tab .tap_manu ul a');
const tap_manu_all = document.querySelectorAll('.abu_tab .tap-content');

tap_manu.forEach(item => {

    item.addEventListener('click', function(e){

        e.preventDefault();
        
        tap_manu.forEach(item =>{
            item.classList.remove('active');
        });

        item.classList.add('active');


        const tab_contant = document.querySelector(this.getAttribute('href'));
        tap_manu_all.forEach(item =>{
            item.classList.remove('active');
        });

        tab_contant.classList.add('active');


    });

});