$(function () {
    $(".documents-slider__inner").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 1,
              }
            },
           
          ]
      });


      $(".our-silder").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
       
      });



      $('.questions-accardion__btn').on('click', function(){
        $(this).next().slideToggle(500); 
     });

   
        Fancybox.bind("[data-fancybox]", {
            // Your custom options
          });
   
    
      
})



window.addEventListener('DOMContentLoaded', () => {


    const menu = document.querySelector(".menu");
    const mobile = document.querySelector(".nav-icon");

    if(mobile){
        mobile.addEventListener("click", function () {
            this.classList.toggle("nav-icon--active");
            menu.classList.toggle("nav--active");
          });
    }
   

    
    const modalBtn = document.querySelectorAll('.btn-click');
    const modal = document.querySelector('.modal');
    const modalCloseBtn = document.querySelector('.modal__close');


    if(modalBtn){
        modalBtn.forEach(btn =>{
            btn.addEventListener('click', ()=>{
                modal.classList.add('show-modal');
                modal.classList.remove('hide-modal');
                document.body.style.overflow = 'hidden';
            })
        });
    }
   

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



        const accardionBtn = document.querySelectorAll('.questions-accardion__btn');

        if(accardionBtn){
        accardionBtn.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('btn-active');
            })
        })
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




        const tabsItemAudit = document.querySelector('.tabs-audit__item');
        const tabsItemBtnAudit = document.querySelectorAll('.tab-audit__item-btn');
        const tabsContentAudit = document.querySelectorAll('.tabs-audit__content');

        function tabsHideAudit(){
            tabsContentAudit.forEach(item => {
                item.classList.add('hide-audit');
                item.classList.remove('show-audit');
            });

            tabsItemBtnAudit.forEach(btn =>{
                btn.classList.remove('active-audit');
            })
        }
        function tabsShowAudit(i){
            tabsContentAudit[i].classList.add('show-audit');
            tabsContentAudit[i].classList.remove('hide-audit');
            tabsItemBtnAudit[i].classList.add('active-audit');
        }

        if(tabsItemAudit && tabsItemBtnAudit && tabsContentAudit){
            tabsItemAudit.addEventListener('click', (e)=>{
                const target = e.target;
    
                if(target && target.classList.contains('tab-audit__item-btn')){
                    tabsItemBtnAudit.forEach((item, i)=>{
                        if(target == item){
                            tabsHideAudit();
                            tabsShowAudit(i);
                        }
    
                    })
    
                }
            })
    
            tabsHideAudit();
            tabsShowAudit(0);
        }
       

        const autsorsingaBtn = document.querySelector('.autsorsinga-detailing__btn');
        const autsorsingaBlock = document.querySelector('.autsorsinga-block__inner');

        if(autsorsingaBtn && autsorsingaBlock){
            autsorsingaBtn.addEventListener('click', () => {
                autsorsingaBlock.classList.toggle('autsorsinga-open');
            })
    
        }

        const apiTitle = document.querySelector('.api-box__title');
        const apiContent = document.querySelector('.api-box__content');
       
        if(apiTitle && apiContent){
            apiTitle.addEventListener('click', () => {
                apiContent.classList.toggle('api-open');
            })
        }

        const templatesTitle = document.querySelector('.templates-box__title');
        const templatesContent = document.querySelector('.templates-box__content');
       
        if(templatesTitle && templatesContent){
            templatesTitle.addEventListener('click', () => {
                templatesContent.classList.toggle('templates-open');
            })
        }
       
})