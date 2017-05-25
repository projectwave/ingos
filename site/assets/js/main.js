'use strict';

//  SigningIn actions
var commonActions = (function (document, $) {
    var $doc = $(document);

    var selector = {
        slidingMenuItem: '.sliding-menu__item',
        slidingMenuTitle: '.js-sliding-menu-title',
        nextElToggler: '.js-toggle-next-el'
    };

    var className = {
        active:   'is-active',
        visible:  'is-visible',
        hover:    'is-hover'
    };

    function _toggleNextEl() {
        $(selector.nextElToggler).on('click', function(){
            $(this).toggleClass(className.active);
            $(this).next().toggleClass(className.visible);
        });
    }

    function _addHoverState() {
        $('.nav-figure').on('mouseover', function(){
            $(this).addClass(className.hover);
        }).on('mouseout', function(){
            $(this).removeClass(className.hover);
        });
    }

    function _tabs() {
        $('.tabs__nav-item').on("click", function(e) {
            e.preventDefault();

            $('.tabs__nav-item').removeClass(className.active);
            $('.tab-container').removeClass(className.visible);
            $(this).addClass(className.active);
            $($(this).attr('href')).addClass(className.visible);
        });
    }

    function _slidingMenu() {
        $(selector.slidingMenuTitle).on('click', function(){
            var $activeTitleSelector = selector.slidingMenuItem + '.' +className.active;
            var $slidingMenuSection = $(this).parent();
            var $activeItems = $($activeTitleSelector);

            if($slidingMenuSection.hasClass(className.active)) {
                $slidingMenuSection.removeClass(className.active);
            }
            else {
                $slidingMenuSection.addClass(className.active);
                $activeItems.removeClass(className.active)
            }
        });
    }

    function bind() {

        $('#chat-thread').animate(
            {
            scrollTop: $('#chat-thread')[0].scrollHeight}, 0);

        _toggleNextEl();

        _addHoverState();

        _tabs();

        _slidingMenu();

        // $.fn.passwordStrength.defaults = {
        //     classes : Array('is10','is20','is30','is40','is50','is60','is70','is80','is90','is100'),
        //     targetDiv : '#password-strength-scale',
        //     cache : {}
        // }

        $('input[name="password"]').passwordStrength();
        $('input[name="password2"]').passwordStrength({targetDiv: '#password-strength-scale',classes : Array('is10','is20','is30','is40')});

    }

    function init() {
        bind();
    }

    return {
        init: init
    };

})(document, jQuery);