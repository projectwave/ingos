'use strict';

//  SigningIn actions
var commonActions = (function (document, $) {
    var $doc = $(document);

    var selector = {
        form: {
            element: '.js-form-validate',
            changeManager: '#form-reason-to-change-manager'
        },
        modal: {
            changeManager: '#modal-change-personal-manager',
            newManager: '#modal-new-personal-manager'
        },

        chat: {
            startManagerChat: '.js-start-manager-chat',
            managerArea: '#chat-manager-area',
            messagesThread: '#chat-thread',
            textarea: '#chat-textarea'
        },
        slidingMenuItem: '.sliding-menu__item',
        slidingMenuTitle: '.js-sliding-menu-title',
        nextElToggler: '.js-toggle-next-el',
        openModal: '.js-open-modal',
        closeModal: '.js-close-modal',
        datepickerIcon: 'data-range-input__icon',
        datepickerValue: 'data-range-input__value',
        fileUploader: '#fileUploader',
        showPhoneCode: '.js-show-sms-verification',
        PhoneCode: '.js-phone-code-container',
        showDatepicker: '.js-show-datepicker',
        Datepicker: '.js-datepicker'
    };

    var className = {
        active:   'is-active',
        visible:  'is-visible',
        hover:    'is-hover'
    };

    var $form = $(selector.form.element);

    $.each($form, function(){
        var $form = $(this);

        $form.parsley()
            .on('form:error', _focusOnFirstFieldError)
            .on('form:submit', _onFormSubmit);
    });

    if($(selector.form.changeManager).length) {
        $(selector.form.changeManager).parsley().on('form:submit', function(){
            $(selector.modal.changeManager).modal('hide');

            setTimeout(function(){
                $(selector.modal.newManager).modal('show');
            }, 200);

            return false;
        });
    }

    function _showDatepicker() {
        $(selector.showDatepicker).on('click', function(){

            var datepickerIcon = $(this),
                datePicker = $(selector.Datepicker),
                topIconPos = datepickerIcon.offset().top,
                leftIconPos = datepickerIcon.offset().left,
                bottomIconPos = topIconPos + datepickerIcon.outerHeight() + 16,
                rightIconPos = leftIconPos + datepickerIcon.outerWidth() + 5,
                datepickerWidth = datePicker.outerWidth();

            datePicker.css('top', bottomIconPos);
            datePicker.css('left', rightIconPos - datepickerWidth);
            datePicker.toggleClass('_show');
        });

        $(document).mouseup(function(e)
        {
            var datePicker = $(selector.Datepicker),
            datePickerIcon = $(selector.showDatepicker)

            if (!datePicker.is(e.target) && !datePickerIcon.is(e.target) && datePicker.has(e.target).length === 0)
            {
                datePicker.removeClass('_show')
            }
        });
    }

    function _startManagerChat() {
        $(selector.chat.startManagerChat).on('click', function(){
            $(selector.modal.newManager).modal('hide');

            $('html, body').animate({
                scrollTop: $(selector.chat.managerArea).offset().top
            }, 250);
        });

        $(selector.chat.messagesThread).animate({
           scrollTop: $(selector.chat.messagesThread)[0].scrollHeight
        }, 0);

        $(selector.chat.textarea).focus();
    }

    function _onFormSubmit(e) {
        if(e.validationResult = false) {
            return false;
        }
    }

    function _focusOnFirstFieldError() {
        var $form = this.$element;
        var $firstInvalidField = $form.find('.parsley-error:first');
        var errors = $firstInvalidField.parsley().getErrorsMessages().join(';');
    }

    function _bindModals() {
        $(selector.openModal).on('click', function(){
            var $targetId = $(this).attr('data-target-id');
            var $modalSelector = '#' + $targetId;
            var $modalEl = $($modalSelector);

            $modalEl.on('shown.bs.modal', function () {
                var $modalFormInputs = $modalEl.find('.form-control');

                if($modalFormInputs.length) {
                    $modalFormInputs[0].focus();
                }
            });

            if($modalEl.length) {
                $modalEl.modal('show');
            }

        });
    }

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

    function _tabsInlined() {
        $('.js-inner-tab-link').on("click", function(e) {
            e.preventDefault();

            $('.js-inner-tab-link').removeClass(className.active);
            $('.inner-tab-container').removeClass(className.visible);
            $(this).addClass(className.active);
            $($(this).attr('href')).addClass(className.visible);

            if($(this).attr('data-target-title')) {
                var $textForTitle = $(this).attr('data-target-title');
                var $titleToReplace = $('.js-title-to-replace');

                $titleToReplace.html($textForTitle);
            }
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

    function _uploadFile() {
        if($(selector.fileUploader).length) {
            $(selector.fileUploader).uploadFile({
                dragDropStr: "<div class='custom-drag-and-drop__text'>Перетащите файлы сюда<br/> <span>или</span></div>",
                uploadStr: "Выберите файлы"
            });
        }
    }

    function _formControlHacks() {
        var $parentEl = $('.form-controls-group__item');
        var $formControl = $('.form-control');
        var $currentEl;

        $parentEl.on('mouseover', function(){
           $(this).addClass(className.hover);
           $currentEl = $(this);
        }).on('mouseout', function(){
            $currentEl.removeClass(className.hover);
        });

        $formControl.on('focus', function(){
            $(this).parent().addClass(className.active);
        }).on('blur', function() {
            $(this).parent().removeClass(className.active);
        }).on('keydown', function(){
            $(this).removeClass('parsley-error');
        });
    }

    function _initCustomFormElements() {
        if($('select').length){
            $('select').selectric();
        }
    }

    function _maximizeTable() {
        $('.fullscreen-link').on('click', function(){
            var $currentLink = $(this);
            var $closestTable = $currentLink.parent().parent().next().find('table');

            console.log($closestTable);
        });
    }

    function _showSmsVerification() {
        $(selector.showPhoneCode).on('click', function(){
            $(selector.PhoneCode).addClass('_show-phone-code');
        });
    }

    function _colorModePanel(){
        $('.js-close-color-mode-panel').on('click', function(){
            $('.js-color-mode-panel').removeClass('_show');
        });
        $('.js-show-color-mode-panel').on('click', function(){
            $('.js-color-mode-panel').addClass('_show');
        });
        $(document).mouseup(function(e) {
            if (!$('.color-mode-panel__container').is(e.target) && $('.color-mode-panel').has(e.target).length === 0) {
                $('.js-color-mode-panel').removeClass('_show');
            }
        });
        $('.js-save-color-mode').on('click', function(){
            $('html').removeClass();

            var colorSchemeMode = '_' + $('input[name=color-scheme-mode]:checked').val(),
                imageMode = '_' + $('input[name=image-mode]:checked').val(),
                fontMode = '_' + $('input[name=font-mode]:checked').val(),
                fontSizeMode = '_' + $('.js-font-chooser-value').text(),
                colorModeClasses = colorSchemeMode + ' ' + imageMode + ' ' + fontMode + ' ' + fontSizeMode;

            $('html').addClass(colorModeClasses);
        });
    }

    function _plusMinusFontSizeMode(){
        var minFontSize = $('.js-font-chooser-minus').data('min-font-size')
        var maxFontSize = $('.js-font-chooser-plus').data('max-font-size')

        $('.js-font-chooser-minus').on('click', function(){
            var $currentFont = $('.js-font-chooser-value').text().replace('pt','');;
            if($currentFont <= maxFontSize && $currentFont != minFontSize ){
                $currentFont--;
            }
            $('.js-font-chooser-value').text($currentFont + 'pt');
        });
        $('.js-font-chooser-plus').on('click', function(){
            var $currentFont = $('.js-font-chooser-value').text().replace('pt','');;
            if($currentFont >= minFontSize && $currentFont != maxFontSize ){
                $currentFont++;
            }
            $('.js-font-chooser-value').text($currentFont + 'pt');
        });
    }

    function bind() {

        _showDatepicker();

        _maximizeTable();

        _initCustomFormElements();

        _formControlHacks();

        _bindModals();

        if($(selector.chat.managerArea).length) {
            _startManagerChat();
        }

        _toggleNextEl();

        _addHoverState();

        _tabs();

        _tabsInlined();

        _slidingMenu();

        if($('input[data-validate-strength]').length) {
            $('input[data-validate-strength]').passwordStrength();
        }

        _uploadFile();

        _showSmsVerification();

        _colorModePanel();

        _plusMinusFontSizeMode();

    }

    function init() {
        bind();
    }

    return {
        init: init
    };

})(document, jQuery);