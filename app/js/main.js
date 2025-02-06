$(function () {
    $(".documents-slider__inner").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        
      });
      
      
})


window.addEventListener('DOMContentLoaded', () => {


    

    const modalBtn = document.querySelectorAll('.btn-click');
    const modal = document.querySelector('.modal');
    const modalCloseBtn = document.querySelector('.modal__close');



    modalBtn.forEach(btn =>{
        btn.addEventListener('click', ()=>{
            modal.classList.add('show-modal');
            modal.classList.remove('hide-modal');
            document.body.style.overflow = 'hidden';
        })
    });

    modalCloseBtn.addEventListener('click', ()=>{
            modal.classList.add('hide-modal');
            modal.classList.remove('show-modal');
            document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e)=>{
        if(e.target == modal){
            modal.classList.add('hide-modal');
            modal.classList.remove('show-modal');
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', (e)=>{
        if(e.code == 'Escape' && modal.classList.contains('show-modal')){
            modal.classList.add('hide-modal');
            modal.classList.remove('show-modal');
            document.body.style.overflow = '';
        }
    })



    const btn = document.querySelector('.btnUp');

        btn.addEventListener('click', ()=>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth' 

            });
        });
        function up() {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 690){
            btn.classList.add('btnUp-visible');
            }else{
            btn.classList.remove('btnUp-visible');
            }
        })
        }
        up();


        const header = document.querySelector(".header__inner");

        if (header) {
          window.addEventListener("scroll", () => {
            if (window.scrollY > 10) {
              header.classList.add("header-bg");
            } else {
              header.classList.remove("header-bg");
            }
          });
        }

        // Маска для Инпута
        var element = document.getElementById('input-mask');
        var element1 = document.getElementById('input-mask1');
        
        var maskOptions = {
            mask: '+{7}(000)000-00-00'
        };

        if(element){
            var mask = IMask(element, maskOptions);
        }
        if(element1){
            var mask1 = IMask(element1, maskOptions);
        }



        const tabsItem = document.querySelector('.tabs__item');
        const tabsItemBtn = document.querySelectorAll('.tabs__item-btn');
        const tabsContent = document.querySelectorAll('.tabs__content');

        function tabsHide(){
            tabsContent.forEach(item => {
                item.classList.add('hide-tabs');
                item.classList.remove('show-tabs');
            });

            tabsItemBtn.forEach(btn =>{
                btn.classList.remove('active-tabs');
            })
        }
        function tabsShow(i){
            tabsContent[i].classList.add('show-tabs');
            tabsContent[i].classList.remove('hide-tabs');
            tabsItemBtn[i].classList.add('active-tabs');
        }

       if(tabsItem && tabsItemBtn && tabsContent){
        tabsItem.addEventListener('click', (e)=>{
            const target = e.target;
            
            if(target && target.classList.contains('tabs__item-btn')){
                tabsItemBtn.forEach((item, i)=>{
                    if(target == item){
                        tabsHide();
                        tabsShow(i);
                    }
                
                })
            
            }
        })

        tabsHide();
        tabsShow(0);
    
       }
            

       
})