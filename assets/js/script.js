function ready() {
    //--------- Меню
    const menu = document.querySelector('.menu');
    const overlay = document.querySelector('.overlay');
    const topMenu = document.querySelector('.topMenu');
    const topPanel = document.querySelector('.topPanel');

    const closeMenu = (e) => {
        topPanel.closest('.topPanel').classList.toggle('active');
        topMenu.classList.toggle('active');
    }
 

    menu.addEventListener('click', e => {
        closeMenu(e);
    });
    overlay.addEventListener('click', e => {
        closeMenu(e);
    });
    //----------------------------------------
    
    // ------- Элементы закрытия попапа
    let overlayPopup = document.querySelectorAll('.overlayPopup');
    let popupModal = document.querySelectorAll('.popupModal');
    let closeBtnPopup = document.querySelectorAll('.closeBtnPopup');

    const closeAllPopup = (element) => {
        element.forEach((elem) => {
            elem.addEventListener('click', e => {
                for(var i = 0; i < popupModal.length; i++) {
                    popupModal[i].classList.remove('active');
                }
            })
        })
    } 
    closeAllPopup(overlayPopup);
    closeAllPopup(closeBtnPopup);
    //инициализация pop-up
    const activePopupUpdate = (el) => {
        let popup = document.querySelector(el);
        popup.classList.add('active');
    }
    const closePopupUpdate = (el) => {
        let popup = document.getElementById(el);
        popup.classList.remove('active');
    }

    if(popupModal.length > 0) {
        document.getElementById('popup-1').addEventListener('click', e => {
            e.preventDefault();
            activePopupUpdate('#popupModal-1');//активировать pop-up
        });    
    }
    //---------------------

    // --------- Кастомовые селекты на странице
    /* Look for any elements with the class "custom-select": */
    const customSelect = (select, count) => {
        x = document.getElementsByClassName(select);
        l = x.length;
        for (i = 0; i < l; i++) {
            selElmnt = x[i].getElementsByTagName("select")[0];
            ll = selElmnt.length;
            /* For each element, create a new DIV that will act as the selected item: */
            a = document.createElement("div");
            a.setAttribute("class", "select-selected");
            a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
            a.setAttribute("value", selElmnt.options[selElmnt.selectedIndex].value);
            x[i].appendChild(a);
            /* For each element, create a new DIV that will contain the option list: */
            b = document.createElement("div");
            b.setAttribute("class", "select-items select-hide");
            for (j = count; j < ll; j++) {
                /* For each option in the original select element,
                create a new DIV that will act as an option item: */
                c = document.createElement("div");
                c.innerHTML = selElmnt.options[j].innerHTML;
                c.classList.add('status');
                c.addEventListener("click", function(e) {
                    /* When an item is clicked, update the original select box,
                    and the selected item: */
                    var y, i, k, s, h, sl, yl;
                    s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                    sl = s.length;
                    h = this.parentNode.previousSibling;
                    for (i = 0; i < sl; i++) {
                        if (s.options[i].innerHTML == this.innerHTML) {
                            s.selectedIndex = i;
                            h.innerHTML = this.innerHTML;
                            y = this.parentNode.getElementsByClassName("same-as-selected");
                            yl = y.length;
                            for (k = 0; k < yl; k++) {
                                y[k].removeAttribute("class");
                            }
                            this.setAttribute("class", "same-as-selected");
                            break;
                        }
                    }
                    h.click();
                });
                b.appendChild(c);
            }
            x[i].appendChild(b);
            a.addEventListener("click", function(e) {
                /* When the select box is clicked, close any other select boxes,
                and open/close the current select box: */
                e.stopPropagation();
                closeAllSelect(this);
                this.nextSibling.classList.toggle("select-hide");
                this.classList.toggle("select-arrow-active");
            });
        }

        function closeAllSelect(elmnt) {
            /* A function that will close all select boxes in the document,
            except the current select box: */
            var x, y, i, xl, yl, arrNo = [];
            x = document.getElementsByClassName("select-items");
            y = document.getElementsByClassName("select-selected");
            xl = x.length;
            yl = y.length;
            for (i = 0; i < yl; i++) {
                if (elmnt == y[i]) {
                    arrNo.push(i)
                } else {
                    y[i].classList.remove("select-arrow-active");
                }
            }
            for (i = 0; i < xl; i++) {
                if (arrNo.indexOf(i)) {
                    x[i].classList.add("select-hide");
                }
            }
        }
        /* If the user clicks anywhere outside the select box,
        then close all select boxes: */
        document.addEventListener("click", closeAllSelect);
    }
    customSelect('customSelect', 0);


    let placeholder = document.querySelectorAll('.placeholder');
    let inputs = document.querySelectorAll('.label input');
    let popups = document.querySelector('.popups');

    // placeholder.forEach(element => {
    //     element.addEventListener('click', e => {
    //         e.currentTarget.classList.add('active')
    //     })
    // });
    document.addEventListener('click', e => {
        let curEl = e.target;
        if(curEl.classList.contains('placeholder')) {
            if(curEl.nextElementSibling.value !== '' || !curEl.closest('label').querySelector('.placeholder').classList.contains('active')) {
                curEl.classList.add('active');
                console.log('test');
            }
            
            //if(curEl.nextElementSibling.value !== '' || curEl.classList.contains('placeholder'))
        } else {
            inputs.forEach(input => {
                if(input.value === '') {
                    for(var i = 0; i < inputs.length; i++) {
                        if(inputs[i].closest('label').querySelector('.placeholder').classList.contains('active')) {
                            inputs[i].closest('label').querySelector('.placeholder').classList.remove('active');
                        }
                    }                    
                }
            });
        }
        inputs.forEach(input => {
            if(input.value === '') {
                for(var i = 0; i < inputs.length; i++) {
                    // if(inputs[i].closest('label').querySelector('.placeholder').classList.contains('active')) {
                    //     inputs[i].closest('label').querySelector('.placeholder').classList.remove('active');
                    // }
                }
                
                // if(input.closest('label').querySelector('.placeholder')) {
                //     console.log(input.closest('label').querySelector('.placeholder').classList.contains('.active'));
                //     if(input.closest('label').querySelector('.placeholder').classList.contains('.active')) {
                //         input.closest('label').querySelector('.placeholder').classList.remove('active');
                //     }
                // }
                //if(input.closest('label').querySelector('.placeholder')) {
                //    input.closest('label').querySelector('.placeholder').classList.remove('active');
                //}
                //input.closest('label').querySelector('.placeholder').classList.remove('active');
            }
        });
    })
}

document.addEventListener("DOMContentLoaded", ready);
