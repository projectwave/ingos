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
        PhoneCode: '.js-phone-code-container'
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

    function _activateDatepicker() {
        $('input[name="daterange"]').daterangepicker({
            timePicker: true,
            locale: {
                format: 'DD-MM-YYYY'
            },
            startDate: '2013-01-01',
            endDate: '2013-12-31'
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
        $(selector.fileUploader).uploadFile({
            dragDropStr: "<div class='custom-drag-and-drop__text'>Перетащите файлы сюда<br/> <span>или</span></div>",
            uploadStr:"Выберите файлы"
        });
    }

    function _highCharts(){
        Highcharts.setOptions({
            lang: {
                loading: 'Загрузка...',
                months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
                shortMonths: ['ЯНВ', 'ФЕВ', 'МАРТ', 'АПР', 'МАЙ', 'ИЮН', 'ИЮЛ', 'АВГ', 'СЕНТ', 'ОКТ', 'НОЯБ', 'ДЕК'],
                exportButtonTitle: "Экспорт",
                printButtonTitle: "Печать",
                rangeSelectorFrom: "С",
                rangeSelectorTo: "По",
                rangeSelectorZoom: "Период",
                downloadPNG: 'Скачать PNG',
                downloadJPEG: 'Скачать JPEG',
                downloadPDF: 'Скачать PDF',
                downloadSVG: 'Скачать SVG',
                printChart: 'Напечатать график'
            }
        });

        Highcharts.chart('unit-trust-detalization', {
            chart: {
                type: 'spline',
                spacingLeft: 0
            },
            title: false,
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: {
                    day: '%d <br> %b'
                },
                tickWidth: 0,
                labels: {
                    overflow: 'justify',
                    style: {
                        color: '#8c9196'
                    },
                    y: 25
                }
            },
            yAxis: {
                title: false,
                tickWidth: 0,
                lineWidth: 1,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                labels: {
                    style: {
                        color: '#8c9196'
                    }
                }
            },
            tooltip: {
                valueSuffix: '$'
            },
            plotOptions: {
                spline: {
                    lineWidth: 3,
                    marker: {
                        enabled: false
                    },
                    pointStart: Date.UTC(2015, 4, 15),
                    pointInterval: 24 * 3600 * 1000 // one day
                }
            },
            series: [{
                name: 'Опиф',
                color: '#00adeb',
                data: [29.9, 71.5, 106.4, 129.2, 144.0]
            }, {
                name: 'Индекс облигаций ММВБ',
                color: '#ff6961',
                data: [9.9, 1.5, 16.4, 29.2, 14.0]
            }],
            legend: {align: 'top', verticalAlign: 'top', x: 65, y: -10, borderWidth: 0}

        });
    }

    function _onDocumentClick() {

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

    function bind() {

        //_activateDatepicker();

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

        _highCharts();

    }

    function init() {
        bind();
    }

    return {
        init: init
    };

})(document, jQuery);