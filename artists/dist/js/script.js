//кнопка з меню
jQuery('.header-humb').on('click', function(){
	jQuery('.menu').toggleClass('opened');
})





// slider-1
let slider;

$(document).ready(function(){
	slider = $('.your-class').slick({
    //к-сть показу слайдів
		slidesToShow: 1,
    // автоматичний рух слайдів
		autoplay: true,
    //швидкість руху
		autoplaySpeed: 2000,
    //бокові стрілки з класами
		prevArrow: "<img src='icons/arrow-1.svg' class='prev' alt='1'>",
		nextArrow: "<img src='icons/arrow-2.svg' class='next' alt='2'>",
	});
});


//slider-2
let slide;

$(document).ready(function(){
	slide = $('.your').slick({
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: "<img src='icons/arrow-1.svg' class='prev' alt='1'>",
		nextArrow: "<img src='icons/arrow-2.svg' class='next' alt='2'>",
	});
});




//таб-1
 var $tabs = function (target) {
      var
        _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
        _eventTabsShow,
        _showTab = function (tabsLinkTarget) {
          var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
          tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
          tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__link_active');
          tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__pane_show');
          // якщо наступна вкладка дорівнює активній,то завершуємо роботу
          if (tabsLinkTarget === tabsLinkActive) {
            return;
          }
          // видаляємо класи в поточних активних елементів
          if (tabsLinkActive !== null) {
            tabsLinkActive.classList.remove('tabs__link_active');
          }
          if (tabsPaneShow !== null) {
            tabsPaneShow.classList.remove('tabs__pane_show');
          }
          // додаємо класи до елементів(в залежності від вибраної вкладки)
          tabsLinkTarget.classList.add('tabs__link_active');
          tabsPaneTarget.classList.add('tabs__pane_show');
          document.dispatchEvent(_eventTabsShow);
        },
        _switchTabTo = function (tabsLinkIndex) {
          var tabsLinks = _elemTabs.querySelectorAll('.tabs__link');
          if (tabsLinks.length > 0) {
            if (tabsLinkIndex > tabsLinks.length) {
              tabsLinkIndex = tabsLinks.length;
            } else if (tabsLinkIndex < 1) {
              tabsLinkIndex = 1;
            }
            _showTab(tabsLinks[tabsLinkIndex - 1]);
          }
        };

      _eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });

      _elemTabs.addEventListener('click', function(e) {
        var target = e.target.closest('.tabs__link');
        // закінчуємо виконання функції,якщо натиснули не по ссилці
        if (!target) {
          return;
        }
        // відміняємо стандартні дії
        e.preventDefault();
        _showTab(target);
      });

      return {
        showTab: function (target) {
          _showTab(target);
        },
        switchTabTo: function (index) {
          _switchTabTo(index);
        }
      }

    };

    $tabs('.tabs');




 //фіксоване меню приховується при прокрутці
window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  //якщо прокрутити на 80px вниз,приховається гамбургер(меню з 3-ох ліній)
  if(scrolled >= 80)
    document.querySelector(".header-humb").style.display = 'none';
  else if(scrolled<=80){
    document.querySelector(".header-humb").style.display = 'block';
  }
}