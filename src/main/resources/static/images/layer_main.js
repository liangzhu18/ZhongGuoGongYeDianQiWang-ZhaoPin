(function($) {
    var oDefaultSettings = {
        'id'                   : 'layer_main',
        'text_id'              : 'layer_main_text',
        'code_id'              : 'layer_main_code',
        'under_id'             : 'layer_main_under',
        'save_type'            : '1',
        'save_text_type'       : '1',
        'save_under_text_type' : '1',
        'save_code_type'       : '1',

        'data'                 : '',
        'data_length'          : '1',
        'data_struct_type'     : '1',
        'data_map'             : '',
        'data_navigation'      : '',
        'data_multiple'        : false,
        'data_parent_click'    : true,
        'data_add_error_alert' : false,

        'data_init'            : '',
        'data_click'           : '',
        'data_multiple_max'    : 5,
        'data_row_num'         : 3,
        'data_type'            : '',
        'layer_id'             : 'layer_main_id',
        'layer_before_open'    : '',
        'layer_after_open'     : '',
        'layer_after_close'    : '',
        'layer_type'           : '1',
        'language'             : 'c',
        'selected_class'       : 'on',
        'init_class'           : 'panel_ct2',
        'place_holder_class'   : 'placeholder'
    }


    $.fn.funtypeLayer = function (options)
    {
        var oSettings = {};

        var oSelfSettings = {
            'id'             : 'funtype',
            'text_id'        : 'funtype_text',
            'code_id'        : 'funtype_code',
            'under_id'       : 'funtype_under',
            'layer_id'       : 'funtype_layer_id',
            'data'           : ft,
            'data_map'       : oFTM,
            'data_navigation': aFTN,
            'init_class'     : 'panel_ct2 con_l'
        };

        oSelfSettings.data_type = 'funtype';  //��������: ˽�б���, ���ɸ���

        return this.each(function () {
            if (options)
            {
                $.extend(oSettings, oDefaultSettings, oSelfSettings, options);
            }

            oSettings = jQuery.commonLayer.init(oSettings);

            $(this).bind('click', oSettings, oSettings.data_click);
        });
    }


    $.fn.indtypeLayer = function (options)
    {
        var oSettings = {};

        var oSelfSettings = {
            'id'             : 'indtype',
            'text_id'        : 'indtype_text',
            'code_id'        : 'indtype_code',
            'under_id'       : 'indtype_under',
            'layer_id'       : 'indtype_layer_id',
            'data'           : it,
            'data_navigation': aITN,
            'init_class'     : 'panel_ct2 con_l'
        };

        oSelfSettings.data_type = 'indtype';  //��������: ˽�б���, ���ɸ���

        return this.each(function () {
            if (options)
            {
                $.extend(oSettings, oDefaultSettings, oSelfSettings, options);
            }

            oSettings = jQuery.commonLayer.init(oSettings);

            $(this).bind('click', oSettings, oSettings.data_click);
        });
    }


    $.fn.certLayer = function (options)
    {
        var oSettings = {};

        var oSelfSettings = {
            'id'             : 'cert',
            'text_id'        : 'cert_text',
            'code_id'        : 'cert_code',
            'under_id'       : 'cert_under',
            'layer_id'       : 'cert_layer_id',
            'data'           : cert,
            'data_navigation': aCertN,
            'init_class'     : 'panel_ct2 con_m'
        };

        oSelfSettings.data_type = 'cert';  //��������: ˽�б���, ���ɸ���

        return this.each(function () {
            if (options)
            {
                $.extend(oSettings, oDefaultSettings, oSelfSettings, options);
            }

            oSettings = jQuery.commonLayer.init(oSettings);

            $(this).bind('click', oSettings, oSettings.data_click);
        });
    }


    $.fn.itskillLayer = function (options)
    {
        var oSettings = {};

        var oSelfSettings = {
            'id'             : 'itskill',
            'text_id'        : 'itskill_text',
            'code_id'        : 'itskill_code',
            'under_id'       : 'itskill_under',
            'layer_id'       : 'itskill_layer_id',
            'data'           : itskill,
            'data_navigation': aItskillN,
            'init_class'     : 'panel_ct2 con_m'
        };

        oSelfSettings.data_type = 'itskill';  //��������: ˽�б���, ���ɸ���

        return this.each(function () {
            if (options)
            {
                $.extend(oSettings, oDefaultSettings, oSelfSettings, options);
            }

            oSettings = jQuery.commonLayer.init(oSettings);

            $(this).bind('click', oSettings, oSettings.data_click);
        });
    }


    $.fn.majorLayer = function (options)
    {
        var oSettings = {};

        var oSelfSettings = {
            'id'             : 'major',
            'text_id'        : 'major_text',
            'code_id'        : 'major_code',
            'under_id'       : 'major_under',
            'layer_id'       : 'major_layer_id',
            'data'           : major,
            'data_map'       : oMajorM,
            'data_navigation': aMajorN
        };

        oSelfSettings.data_type = 'major';  //��������: ˽�б���, ���ɸ���

        return this.each(function () {
            if (options)
            {
                $.extend(oSettings, oDefaultSettings, oSelfSettings, options);
            }

            oSettings = jQuery.commonLayer.init(oSettings);

            $(this).bind('click', oSettings, oSettings.data_click);
        });
    }


    //������Ϣ-��ס��/������Ϣ-����/��ְ����-����
    $.fn.areaLayer = function (options)
    {
        var oSettings = {};

        var oSelfSettings = {
            'id'             : 'area',
            'text_id'        : 'area_text',
            'code_id'        : 'area_code',
            'under_id'       : 'area_under',
            'layer_id'       : 'area_layer_id',
            'data'           : area,
            'data_length'    : '2',
            'data_map'       : oAreaM,
            'data_navigation': aAreaN,
            'data_row_num'   : 7,
            'special_type'   : '',  //��������: 1: ����/����: �������⴦�� 2: ����Ƶ��: ���ų������⴦��
            'init_class'     : 'panel_ct con_m',          //�������ݵ�class, ���Ƶ����Ŀ��
            'show_ip_location'     : false              //��ʾIP��λ�ĳ���
        };

        oSelfSettings.data_type = 'area';  //��������: ˽�б���, ���ɸ���

        return this.each(function () {
            if (options)
            {
                $.extend(oSettings, oDefaultSettings, oSelfSettings, options);
            }

            oSettings = jQuery.commonLayer.init(oSettings);

            switch (oSettings.special_type)
            {
                case '1':  //��дgetCenterRightCenterContent
                    oSettings.getCenterRightCenterContent = getOverSeasCenterRightCenterContent;
                    break;

                case '2':  //��дgetRightContent
                    oSettings.getCenterRightCenterContent = getSpecialAreaRightCenterContent;
                    break;
            }
            
            if(oSettings.show_ip_location)
            {
                //��дafterOpen����
                oSettings.layer_before_open = function(){return;};
                
                //��дbeforeOpen����
                oSettings.layer_after_open = setIpLocationAreaRightCenterContent;
            }

            $(this).bind('click', oSettings, oSettings.data_click);
        });

        function getOverSeasAllCountryContent(oSettings, iNavigationId)
        {
            var aHotCountry = ['361001','361002','361003','361004','361005','362001','362002','362003','362004','362005','362019','362020','362021','362022','362023','363001','363002','363004','364001','364002','364012','365001','365002'];

            var sContent = '<strong class="name">' + lang[oSettings.data_type]['layer_hot_country'] + '</strong>' + '<table><tbody>';

            //ÿ����ʾ3����¼, ����Ĳ���
            $.each(aHotCountry, function (i, value) {
                if (0 == i%oSettings.data_row_num)
                {
                    sContent += '<tr>';
                }

                sContent += '<td class="js_more"><em id="' + oSettings.center_right_list_category + '_' + value + '" data-value="' + value + '" class="' + jQuery.commonLayer.getSelectedClass(oSettings, value) + '">' +��oSettings.data[value] + '</em></td>';

                if ((oSettings.data_row_num - 1) === i%oSettings.data_row_num)
                {
                    sContent += '</tr>';
                }
            });

            sContent +=    '</tbody></table>';

            return sContent;
        }


        function getOverSeasCenterRightCenterContent(oSettings, iNavigationId)  //���������Ҳ�: ��ʾ��ָ�����������Ĵ���
        {
            switch (iNavigationId)
            {
                case '360000':
                    var sContent = '<div id="' + oSettings.center_right_list + '_' + iNavigationId + '" class="' + oSettings.center_right_list + ' de d3">' + getOverSeasAllCountryContent(oSettings, iNavigationId) + 
                                    '<strong class="name">' + lang[oSettings.data_type]['layer_continents'] + '</strong>' + 
                                    '<table><tbody>';

                    //ÿ����ʾ3����¼, ����Ĳ���
                    $.each(jQuery.commonLayer.getBigCategoryByNavigation(oSettings, iNavigationId), function (i, value) {
                        if (0 == i%oSettings.data_row_num)
                        {
                            sContent += '<tr>';
                        }

                        sContent += '<td class="js_more"><em id="' + oSettings.center_right_list_category + '_' + iNavigationId + '_' + value + '" data-value="' + value + '" class="' + jQuery.commonLayer.getSelectedClass(oSettings, value) + '">' +��oSettings.data[value] + '</em></td>';

                        if ((oSettings.data_row_num - 1) === i%oSettings.data_row_num)
                        {
                            sContent += '</tr>';
                        }
                    });

                    sContent +=    '</tbody></table>' + 
                               '</div>';
                    break;

                default:
                    var sContent = jQuery.commonLayer.getCenterRightCenterContent(oSettings, iNavigationId);
                    break;
            }

            return sContent;
        }

        function getSpecialAreaRightCenterContent(oSettings, iNavigationId)  //���������Ҳ�: ��ʾ��ָ�����������Ĵ���
        {
            switch (iNavigationId)
            {
                case '000000':
                    var sContent = '<div id="' + oSettings.center_right_list + '_' + iNavigationId + '" class="' + oSettings.center_right_list + ' de d3">' + 
                                       '<table><tbody>';

                    //ÿ����ʾ3����¼, ����Ĳ���
                    $.each(jQuery.commonLayer.getBigCategoryByNavigation(oSettings, iNavigationId), function (i, value) {
                        if (0 == i%oSettings.data_row_num)
                        {
                            sContent += '<tr>';
                        }

                        sContent += '<td class="js_more"><em id="' + oSettings.center_right_list_category + '_' + iNavigationId + '_' + value + '" data-value="' + value + '" data-navigation="' + iNavigationId + '" class="' + jQuery.commonLayer.getSelectedClass(oSettings, value) + '">' +��oSettings.data[value] + '</em></td>';

                        if ((oSettings.data_row_num - 1) === i%oSettings.data_row_num)
                        {
                            sContent += '</tr>';
                        }
                    });


                    //û�������ط�ʹ��, �Ȳ����в��
                    var sPecialAreaValue = '01';

                    sContent +=    '</tbody></table></div><div id="work_position_special_area_zhusanjiao" class="de dn">' + 
                                   '<table><tbody><tr><td class="js_more"><em id="' + oSettings.center_right_list_category + '_' + iNavigationId + '_' + sPecialAreaValue + '" data-value="' + sPecialAreaValue + '" class="' + jQuery.commonLayer.getSelectedClass(oSettings, sPecialAreaValue) + '">' +��oSettings.data[sPecialAreaValue] + '</em><i class="c_666">' + lang[oSettings.data_type]['layer_special'] + '</i></td></tr></tbody></table>' + 
                               '</div>';
                    break;

                default:
                    var sContent = jQuery.commonLayer.getCenterRightCenterContent(oSettings, iNavigationId);
                    break;
            }

            return sContent;
        }
        
        function setIpLocationAreaRightCenterContent(oSettings)  //���������Ҳ�: ��ʾ��ǰ��λ����
        {
            if($('#' + oSettings.id + '_ip_location').length == 0)
            {
                //�������ȡ��ǰ��λIP
                $.getJSON('http://i.51job.com/userset/ajax/getClientAreaByIp.php?rand='+ Math.random() + '&jsoncallback=?', {}, function(data){
                    if(data.jobareacode != '000000')
                    {//�ܶ�λ������ʾ
                
                        //���˹������й���Ϊ����
                        data.jobareacode = data.jobareacode.substring(0, 2) == '36' ? '360000' : data.jobareacode;
                        //�����м���������
                        data.jobareacode = data.jobareacode.substring(0, 4) + '00';
                        //���˼���ֱϽ���µ���
                        if($.inArray(data.jobareacode.substring(0, 2) + '0000', jQuery.commonSelect.sMunicipalityArea.split(',')) > -1)
                        {
                            data.jobareacode = data.jobareacode.substring(0, 2) + '0000';
                        }

                        //�ж��Ƿ���ѡ�иõص�
                        bLocationSelected = $.inArray(data.jobareacode, jQuery.commonSelect.oCurrentSelected.area) == -1 ? false : true;
                        
                        sContent = '<div class="dtit" name="location_relate_div">��ǰ��λ����</div>';
                        sContent += '<div class="de d1" id="' + oSettings.id + '_ip_location" name="location_relate_div"><table><tbody><tr><td><em id="' + oSettings.id + '_ip_location_000000_' + data.jobareacode + '" data-value="' + data.jobareacode + '" ' + (bLocationSelected ? 'class="on"' : '') + '>' + oSettings.data[data.jobareacode] + '</em></td></tr></tbody></table></div>';
                        sContent += '<div class="dtit" name="location_relate_div">���ų���</div>';
                        
                        $('#' + oSettings.center_right).prepend(sContent);
                        
                        if (oSettings.data_multiple)  //�󶨶�����ѡԪ�ص��¼�
                        {
                            //����ѡ��Ԫ��ɾ���¼�
                            $('#' + oSettings.multiple_selected).find('.ttag').bind('click', oSettings, jQuery.commonLayer.deleteSelectEvent);

                            //�󶨱����¼�
                            $('#' + oSettings.bottom_save).bind('click', oSettings, jQuery.commonLayer.saveEvent);
                        }

                        //�󶨵����ർ���¼�
                        $('#' + oSettings.center_left).find('li').bind('click', oSettings, jQuery.commonLayer.showCenterRightCenterEvent);
                        
                        //׷����ർ���¼�,��ʾ/���ض�λ����
                        $('#' + oSettings.center_left).find('li').bind('click', function(){
                            if($(this).attr('data-value') == '000000')
                            {
                                $("div[name='location_relate_div']").show();
                            }
                            else
                            {
                                $("div[name='location_relate_div']").hide();
                            }
                        });
                        
                        //���Ҳ�������¼�
                        $('#' + oSettings.center_right).find('td em').bind('click', oSettings, jQuery.commonLayer.getSelectEvent);

                        //��ȡ��, �ر��¼�
                        $('.' + oSettings.close).bind('click', oSettings, jQuery.commonLayer.closeEvent);
                    }
                    else
                    {
                        if (oSettings.data_multiple)  //�󶨶�����ѡԪ�ص��¼�
                        {
                            //����ѡ��Ԫ��ɾ���¼�
                            $('#' + oSettings.multiple_selected).find('.ttag').bind('click', oSettings, jQuery.commonLayer.deleteSelectEvent);

                            //�󶨱����¼�
                            $('#' + oSettings.bottom_save).bind('click', oSettings, jQuery.commonLayer.saveEvent);
                        }

                        //�󶨵����ർ���¼�
                        $('#' + oSettings.center_left).find('li').bind('click', oSettings, jQuery.commonLayer.showCenterRightCenterEvent);

                        //���Ҳ�������¼�
                        $('#' + oSettings.center_right).find('td em').bind('click', oSettings, jQuery.commonLayer.getSelectEvent);

                        //��ȡ��, �ر��¼�
                        $('.' + oSettings.close).bind('click', oSettings, jQuery.commonLayer.closeEvent);
                    }
                });
            }
        }
    }
})(jQuery);