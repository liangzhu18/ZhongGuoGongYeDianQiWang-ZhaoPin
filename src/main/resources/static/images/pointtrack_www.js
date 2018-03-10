var trackPoints = {
    'searchOfHome': {                           //��������������ȡ��ֻ��Ϊ��ʶ�������ܻ��õ�
        trackType: '3',                             //1������¼����� 2���������������ʱ������3:�ֶ����ýӿڷ��������� �ش���4���ֶ����°���㣬������ģ�屻�滻֮��֮ǰ�󶨵����ʧЧ����������°�����bindTrack�������а�
        elementsStr: '',       //Ҫ�󶨵�Ԫ��ɸѡstr������'#id.class',����jqueryѡ�����﷨�� �ش�
        paramsRank: ["logCode", "webId", "seId", "domain", "pageCode", "accountId", "guid", "ip", "cusParam"],   //�����ַ�����ƴ��˳�򣬱ش�
        params: {
        //�����󴫵ݵĲ�������˳����д��������ȡֵ��ʽ���⣬��Ϊ��'',�¸������������⴦�� �ش�
            logCode: "17",
            webId: "2",
            seId: "4",
            domain: 'www.51job.com'
        },
        dealParamsBeforeEvent: function(params){
        //�������⴦�������������⴦��󣬻Ὣ�÷������صĲ����ϲ���params�����У����ǵ�ԭ������ ���Բ�����Ĭ�Ϸ���ԭ�������顣
            params['pageCode'] = $("#language").val() == "e" ? "02" : "01";
            params['accountId'] = window.cfg.tracedata.accountid;
            params['guid'] = window.cfg.tracedata.guid;
            params['ip'] = window.cfg.tracedata.ip;
            
            return params;
        },
        dealParamsAfterEvent: function(params, e){
        //����¼�֮�����¼��������  ���Բ�����Ĭ�Ϸ���ԭ�������顣
            return params;
        },
        rankParamsToStr: function(params, rankArr){
        //�������������ƴ���ַ���  ���Բ���
            var paramsStr = "";
            $.each(rankArr, function(i, n){
                paramsStr += n + "=" + encodeURIComponent(params[n]) + "&";
            });
            return ["_trackSearch", paramsStr.substr(0, paramsStr.length - 1)];
        },
        requestFunc: function(params){
        //���õĺ����� ���Բ�����Ĭ��_tkd.push()
            _tkd.push(params);
        }
    },
    'recommendKeywordClick': {
        trackType: '1',
        elementsStr: "p[track-type='recommendKeyword']>a",
        paramsRank: ["logCode", "webId", "accountId", "guid", "ip", "domain", "pageCode", "actionType", "recType", "seKw", "recKws", "clickKw"],
        params: {
            logCode: "15",
            webId: "2",
            domain: 'www.51job.com',
            actionType: '2'
        },
        dealParamsBeforeEvent: function(params){
            params['pageCode'] = $("#language").val() == "e" ? "02" : "01";
            params['accountId'] = window.cfg.tracedata.accountid;
            params['guid'] = window.cfg.tracedata.guid;
            params['ip'] = window.cfg.tracedata.ip;
            params['seKw'] = window.cfg.tracedata.searchkeyword;
            params['recType'] = $("p[track-type='recommendKeyword']").length == 0 ? "":$("p[track-type='recommendKeyword']").attr("recommend-type");
            var recKws = "";
            $("p[track-type='recommendKeyword']>a").each(function(){
                recKws += $(this).text() + ",";
            });
            params['recKws'] = recKws.substr(0, recKws.length-1);
            return params;
        },
        dealParamsAfterEvent: function(params, e){
            params['clickKw'] = $(e).text();
            return params;
        }
    },
    'recommendKeywordAll': {
        trackType: '2',
        elementsStr: "",
        paramsRank: ["logCode", "webId", "accountId", "guid", "ip", "domain", "pageCode", "actionType", "recType", "seKw", "recKws", "clickKw"],
        params: {
            logCode: "15",
            webId: "2",
            domain: 'www.51job.com',
            actionType: '1',
            clickKw: ''
        },
        dealParamsBeforeEvent: function(params){
            params['pageCode'] = $("#language").val() == "e" ? "02" : "01";
            params['accountId'] = window.cfg.tracedata.accountid;
            params['guid'] = window.cfg.tracedata.guid;
            params['ip'] = window.cfg.tracedata.ip;
            params['seKw'] = window.cfg.tracedata.searchkeyword;
            params['recType'] = $("p[track-type='recommendKeyword']").length > 0 ? $("p[track-type='recommendKeyword']").attr("recommend-type") : "";
            var recKws = "";
            $("p[track-type='recommendKeyword']>a").each(function(){
                recKws += $(this).text() + ",";
            });
            params['recKws'] = recKws.substr(0, recKws.length-1);
            return params;
        }
    },
    'industryKeyword': {
        trackType: '1',
        elementsStr: "a[track-type='indKeyword'],a[track-type='indSubKeyword'],a[track-type='companyKeyword']",
        paramsRank: ["logCode", "webId", "ip", "guid", "domain", "pageCode", "eventType","traceName", "cusParam"],
        params: {
            logCode: "81",
            webId: "2",
            domain: 'www.51job.com'
        },
        dealParamsBeforeEvent: function(params){
            params['pageCode'] = $("#language").val() == "e" ? "02" : "01";
            params['guid'] = window.cfg.tracedata.guid;
            params['ip'] = window.cfg.tracedata.ip;
            params['cusParam'] = "1" + String.fromCharCode(22) + window.cfg.tracedata.accountid;
            
            return params;
        },
        dealParamsAfterEvent: function(params, e){
            if($(e).attr("track-type") == "indKeyword")
            {
                params['eventType'] = "1";
                params['traceName'] = $.trim($(e).text());
            }
            if($(e).attr("track-type") == "indSubKeyword")
            {
                params['eventType'] = "2";
                params['traceName'] = $.trim($(e).siblings("p.tie").find("a").text()) + "-" + $.trim($(e).children("span").text());
            }
            if($(e).attr("track-type") == "companyKeyword")
            {
                params['eventType'] = "3";
                params['traceName'] = $.trim($(e).text());
            }
            return params;
        }
    },
    'trackButtonClick': {
        trackType: '1',
        elementsStr: "[track-type='trackButtonClick']",
        paramsRank: ["logCode", "webId", "version", "logTime", "ip", "guid", "domain", "pageCode", "eventType","traceName", "cusParam"],
        params: {
            logCode: "81",
            webId: "2",
            version: "1",
            domain: 'www.51job.com',
            traceName: ''
        },
        dealParamsBeforeEvent: function(params){
            params['pageCode'] = $("#language").val() == "e" ? "02" : "01";
            params['guid'] = window.cfg.tracedata.guid;
            params['ip'] = window.cfg.tracedata.ip;
            params['cusParam'] = "1" + String.fromCharCode(22) + window.cfg.tracedata.accountid;
            
            return params;
        },
        dealParamsAfterEvent: function(params, e){
            params['eventType'] = $(e).attr('event-type');
            params['logTime'] = new Date().getTime() + d_system_client_time;
            return params;
        }
    },
    'trackButtonClickNew': {
        trackType: '1',
        elementsStr: "[track-type='trackButtonClickNew']",
        paramsRank: ["VerType", "webId", "version", "logTime", "ip", "guid", "domain", "pageCode", "eventType","traceName", "cusParam"],
        params: {
            VerType: "81",
            webId: "2",
            version: "1",
            domain: 'www.51job.com',
            traceName: ''
        },
        dealParamsBeforeEvent: function(params){
            params['ip'] = trackConfig.ip;
            params['guid'] = trackConfig.guid;
            params['pageCode'] = $("#pageCode").val();
            
            return params;
        },
        dealParamsAfterEvent: function(params, e){
            params['eventType'] = $(e).attr('event-type');
            params['logTime'] = new Date().getTime() + d_system_client_time;
            params['cusParam'] = ["1", trackConfig.accountid, "51job_web", trackConfig.partner, typeof($(e).attr("track-resumeid")) == 'undefined' ? '' : $(e).attr("track-resumeid"), ''].join(String.fromCharCode(22));
            return params;
        }
    },
}