function cgxj() {
    var pageIndex = 1;
    var pageSize = 1;
    var pageCount = 0;
    function Delxunjia() {
        $.ajax({
            url: "/FYJ/Delxunjia",
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: "{id:'" + Ext.getCmp("stunum").getValue() + "'}",
            success: function (result) {
                if (result > 0) {
                    alert('删除成功');
                    XunjiaRow();
                }

            }

        });
    }
    function Search() {


        $.ajax({
            type: "post",
            url: "/FYJ/GetXunjias",
            data: "{pageIndex:" + pageIndex + ",pageSize:" + pageSize + "}",
            contentType: "application/json",
            success: function (result) {

                $.each(result, function (index, data) {
                    var date = data.stoydate;
                    var da = new Date(parseInt(date.replace("/Date(", "").replace(")/", "").split("+")[0]));
                    var n = da.getFullYear();
                    var y = da.getMonth() + 1;
                    var r = da.getDate();
                    if (y < 10) {
                        y = "0" + y;
                    }
                    if (r < 10) {
                        r = "0" + r;
                    }
                    var ppp = n + "-" + y + "-" + r;
                    Ext.getCmp("gys").setValue(data.stopname);

                    Ext.getCmp("stoydate").setValue(ppp);


                    var dates = data.stodate;

                    var das = new Date(parseInt(dates.replace("/Date(", "").replace(")/", "").split("+")[0]));
                    var ns = das.getFullYear();
                    var ys = das.getMonth() + 1;
                    var rs = das.getDate();
                    if (ys < 10) {
                        ys = "0" + ys;
                    }
                    if (rs < 10) {
                        rs = "0" + rs;
                    }
                    var ppps = ns + "-" + ys + "-" + rs;
                    Ext.getCmp("stodate").setValue(ppps);
                    Ext.getCmp("stunum").setValue(data.stunum);
                    Ext.getCmp("sremark").setValue(data.sremark);
                    Ext.getCmp("saddress").setValue(data.saddress);

                    Ext.getCmp("soshort").setValue("RMB");

                    Ext.getCmp("sotaxrate").setValue(data.sotaxrate);
                    Ext.getCmp("stosaddress").setValue(data.stosaddress);
                    Ext.getCmp("stomake").setValue(data.stomake);
                    Ext.getCmp("sremark").setValue(data.sremark);
                    Ext.getCmp("stobuy").setValue(data.stobuy);
                  
                    Ext.getCmp("stodep").setValue(data.stodep);
                    if (data.stostate == "未审核"||data.stostate == null) {
                        Ext.getCmp("stoshen").setValue("");
                    } else {
                        Ext.getCmp("stoshen").setValue(data.stoshen);
                    }
                    GetXunjiaDetail(data.stunum);
                    if (data.stoistax == 1) {
                        Ext.getCmp("stoistax").setValue("未税");
                    } else {
                        Ext.getCmp("stoistax").setValue("含税");
                    }
                    //Ext.getCmp("sodate").setValue(ConvertTime(data.sodate));


                    state();





                });


            }, error: function (ex) {
                alert(ex.responseTest);
            }
        });
    }
    function GetTimes(time) {

        $.ajax({
            type: "post",
            url: "/FYJ/GetTimes",
            data: "{time:'" + time + "'}",
            contentType: "application/json",
            success: function (result) {

                Ext.getCmp("stunum").setValue(result);


            }, error: function (ex) {
                alert(ex.responseTest);
            }
        });
    }
    function GetXunjiaDetail() {
        $.ajax({
            type: "post",

            url: "/FYJ/GetXunjiaDetail",
            data: "{id:'" + Ext.getCmp("stunum").getValue() + "'}",
            contentType: "application/json",
            success: function (result) {
                datas = result;
                grids.store.loadData(datas);
            }
        });
    }

    function state() {
        Ext.getCmp('btnBack').disabled = false;
        Ext.getCmp('btnNext').disabled = false;
        //$("#btnBack").removeAttr("disabled");
        //$("#btnNext").removeAttr("disabled");
        if (pageIndex == 1) {
            alert("这是第一页");
            Ext.getCmp('btnBack').disabled = true;

        }
        if (pageIndex == pageCount) {
            alert("这是最后一页");
            Ext.getCmp('btnNext').disabled = true;
        }
    }
    function XunjiaRow() {
        $.ajax({
            type: "post",
            url: "/FYJ/XunjiaRow",
            data: "{}",
            dataType: "json",
            contentType: "application/json",
            success: function (result) {

                pageCount = result;
                Search();
            }


        });
    }
    var datas = {};
    Ext.onReady(function () {
        XunjiaRow();

    });
    function ShenHeXunjia() {
        $.ajax({
            url: "/FYJ/ShenHeXunjia",
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: "{id:'" + Ext.getCmp("stunum").getValue() + "'}",
            success: function (result) {
                if (result > 0) {
                    alert('已审核');
                   
                }
                else {
                    alert('已经审核过了');
                    return ;
                }
            }

        });
    }
    function fShenHeXunjia() {
        $.ajax({
            url: "/FYJ/fShenHeXunjia",
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: "{id:'" + Ext.getCmp("stunum").getValue() + "'}",
            success: function (result) {
                if (result > 0) {
                    alert('已取消审核');

                }

            }

        });
    }

    function AddXunjia() {



        var arr = []; //序列化表格
        var sni = grids.store.data;
        sni.each(function (record) {
            arr.push(record.data);
        })
        //alert(Ext.encode(arr));


        var arrys = JSON.stringify(arr);

        var trm1 = Ext.getCmp("stodate").getValue().getFullYear();
        var trm2 = Ext.getCmp("stodate").getValue().getMonth() + 1;
        var trm3 = Ext.getCmp("stodate").getValue().getDate();
        var time = trm1 + "-" + trm2 + "-" + trm3;



        var trm1s = Ext.getCmp("stoydate").getValue().getFullYear();
        var trm2s = Ext.getCmp("stoydate").getValue().getMonth() + 1;
        var trm3s = Ext.getCmp("stoydate").getValue().getDate();
        var times = trm1s + "-" + trm2s + "-" + trm3s;

        $.ajax({
            url: "/FYJ/AddXunjia",
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: "{info:{osperid:" + 1 + ",stodate:'" + time + "',stopname:'" + Ext.getCmp("gys").getValue() + "',saddress:'" + Ext.getCmp("saddress").getValue() + "',stunum:'" + Ext.getCmp("stunum").getValue() + "',stoydate:'" + times + "',stoshort:'" + Ext.getCmp("soshort").getValue() + "',stoistax:'" + Ext.getCmp("stoistax").getValue() + "',sotaxrate:'" + Ext.getCmp("sotaxrate").getValue() + "',sremark:'" + Ext.getCmp("sremark").getValue() + "',stosaddress:'" + Ext.getCmp("stosaddress").getValue() + "',stomake:'" + Ext.getCmp("stomake").getValue() + "',stobuy:'" + Ext.getCmp("stobuy").getValue() + "',stodep:'" + Ext.getCmp("stodep").getValue() + "',stoshen:'" + Ext.getCmp("stomake").getValue() + "'},list:" + arrys + "}",
            success: function (result) {
                alert('新增成功');
                XunjiaRow();
            }

        });

    }
    function UpdateXunjia() {

        var arr = []; //序列化表格
        var sni = grids.store.data;
        sni.each(function (record) {
            arr.push(record.data);
        })
        //alert(Ext.encode(arr));


        var arrys = JSON.stringify(arr);


        var trm1 = Ext.getCmp("stodate").getValue().getFullYear();
        var trm2 = Ext.getCmp("stodate").getValue().getMonth() + 1;
        var trm3 = Ext.getCmp("stodate").getValue().getDate();
        var time = trm1 + "-" + trm2 + "-" + trm3;



        var trm1s = Ext.getCmp("stoydate").getValue().getFullYear();
        var trm2s = Ext.getCmp("stoydate").getValue().getMonth() + 1;
        var trm3s = Ext.getCmp("stoydate").getValue().getDate();
        var times = trm1s + "-" + trm2s + "-" + trm3s;
        $.ajax({
            url: "/FYJ/UpdateXunjia",
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: "{info:{osperid:" + 1 + ",stodate:'" + time + "',stopname:'" + Ext.getCmp("gys").getValue() + "',saddress:'" + Ext.getCmp("saddress").getValue() + "',stunum:'" + Ext.getCmp("stunum").getValue() + "',stoydate:'" + times + "',stoshort:'" + Ext.getCmp("soshort").getValue() + "',stoistax:'" + Ext.getCmp("stoistax").getValue() + "',sotaxrate:'" + Ext.getCmp("sotaxrate").getValue() + "',sremark:'" + Ext.getCmp("sremark").getValue() + "',stosaddress:'" + Ext.getCmp("stosaddress").getValue() + "',stomake:'" + Ext.getCmp("stomake").getValue() + "',stobuy:'" + Ext.getCmp("stobuy").getValue() + "',stodep:'" + Ext.getCmp("stodep").getValue() + "'},list:" + arrys + "}",
            success: function (result) {
                alert('修改成功');
                XunjiaRow();
            }

        });
    }
    var fielmenu = new Ext.menu.Menu({
        items: [{
            text: '历史交易查询', handler: function () {
                zylishijiaoyi();

            }
        }]
    });
    var fielmenu2 = new Ext.menu.Menu({
        items: [{ text: '采购请购单转入' }, { text: '销售订单转入' }]
    });
    var fielmenu3 = new Ext.menu.Menu({
        items: [{
            text: '新增', handler: function () {
                AddXunjia();
            }
        }, {
            text: '删除', handler: function () {
                Delxunjia();

            },
        }, {
            text: '修改', handler: function () {
                UpdateXunjia();

            },
        }, {
            text: '审核', handler: function () {
                ShenHeXunjia();

            },
        }, {
            text: '反审核', handler: function () {
                fShenHeXunjia();

            },
        }

        ]
    });

    var stroedt = Ext.create('Ext.data.Store', {
        model: 'User',
        fields: ['name', 'dizhi', 'bianma', 'bianma', 'lianxi'],
        data: {
            'items': [
                { 'name': '10111', "dizhi": "北京", "bianma": "40016", "lianxi": "李忠" },
                { 'name': '10112', "dizhi": "上海", "bianma": "68016", "lianxi": "朱经理" },
                { 'name': '10113', "dizhi": "天津", "bianma": "408973", "lianxi": "周总" },
                { 'name': '10114', "dizhi": "重庆", "bianma": "404567", "lianxi": "刘经理" }
            ]
        },
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                root: 'items'
            }
        }
    });


    function zylishijiaoyi() {
        var forms = Ext.create('Ext.form.Panel', {
            bodyPadding: 5,
            height: '100%',
            layout: "column",
            baseCls: 'x-plain',
            items: [
            {
                xtype: 'textfield',
                name: 'Customer',
                fieldLabel: '供应商',
                width: 250,
                labelWidth: 80,
                emptyText: '请输入供应商',
                anchor: '100%',
            }, {
                xtype: "button",
                id: "btn1",
                text: "资料输出",
                style: 'margin-left:18px;',
            },
        {
            xtype: "button",
            id: "btn2",
            text: "取回",
            style: 'margin-left:8px;',
        }, tableds, formsg
            ]



        });

        //winform窗口
        var windowst = new Ext.Window({
            width: 640,
            height: 320,
            title: "采购询价历史交易查询",
            closable: true,
            resizable: false, //设置是否可以改变大小
            draggable: true,
            anchor: '100%',
            items: [forms],
            bbar: [
            ],
        });


        return zywindowst;
    }

    var grids = Ext.create('Ext.grid.Panel', {

        listeners: {
            containerdblclick: function (grid, e, eOpts) { //单击事件
                grid.getStore().add({ 'name': '12', 'dizhi': '', 'bianma': '', 'lianxi': '' });

            },
            itemcontextmenu: function () {

                e.preventDefault();
                new Ext.menu.Menu({
                    items: []
                }

                ).showAt(e.getXY());
            }
        }, plugins: [
                    Ext.create('Ext.grid.plugin.CellEditing', {
                        clicksToEdit: 1
                    })
        ],

        store: {
            fields: ['line', 'swuid', 'swuname', 'smodel', 'sunit', 'snum', 'szprice', 'szheshu', 'sprice', 'smoney', 'sdacess', 'sdtaxmoney', 'sdtaxmoneys', 'szengping', 'sfenremark', 'sorigintype', 'soriginid'],
            data: datas,
            autoload: true,


        },
        columns: [
                     {
                         header: '（栏号）',
                         xtype: 'rownumberer',
                         dataIndex: 'line',
                         width: 50,
                         sortable: false
                     },

                    {
                        header: '物料编号', id: 'swuid', dataIndex: 'swuid', width: 100, editor: {
                            xtype: 'textfield',
                            listeners: {
                                focus: function (grid, e, eOpts) {
                                    wuliaozhuwenjian().show();
                                }

                            }
                        }
                    },
                     {
                         header: '物料名称', id: 'swuname', dataIndex: 'swuname', width: 120, editor: {
                             xtype: 'textfield',

                         }
                     },
                         {
                             header: '规格型号', dataIndex: 'smodel', editor: {
                                 xtype: 'textfield',

                             }
                         },
                         {
                             header: '单位名称', dataIndex: 'sunit', editor: {
                                 xtype: 'textfield',

                             }
                         },
                         {
                             header: '数量', dataIndex: 'snum', editor: {
                                 xtype: 'textfield',

                             }
                         },
                         {
                             header: '折扣前单价', dataIndex: 'szprice', editor: {
                                 xtype: 'textfield',

                             }
                         },
                         {
                             header: '折数(%)', dataIndex: 'szheshu', editor: {
                                 xtype: 'textfield',

                             }
                         },
                         {
                             header: '单价', dataIndex: 'sprice', editor: {
                                 xtype: 'textfield',

                             }
                         },
                         {
                             header: '金额', dataIndex: 'smoney', editor: {
                                 xtype: 'textfield',

                             }
                         },
                         {
                             header: '税率', dataIndex: 'sdacess', editor: {
                                 xtype: 'textfield',

                             }
                         },
                         {
                             header: '税额', dataIndex: 'sdtaxmoney', editor: {
                                 xtype: 'textfield',

                             }
                         },
                         {
                             header: '含税金额', dataIndex: 'sdtaxmoneys', editor: {
                                 xtype: 'textfield',

                             }
                         },

                         {
                             header: '赠品', dataIndex: 'szengping', editor: {
                                 xtype: 'textfield',

                             }
                         },
                         {
                             header: '分录备注', dataIndex: 'sfenremark', editor: {
                                 xtype: 'textfield',

                             }
                         },
                         {
                             header: '来源单别', dataIndex: 'sorigintype', editor: {
                                 xtype: 'textfield',

                             }
                         },
                         {
                             header: '来源单号', dataIndex: 'soriginid', editor: {
                                 xtype: 'textfield',

                             }
                         },

        ],
        height: 130,
        width: 1971,
        autoScroll: false,

    })

    var filterPanel = Ext.create('Ext.panel.Panel', {
        bodyPadding: 6,  // 避免Panel中的子元素紧邻边框
        width: 1985,
        height: 170,
        items: [grids],
        bbar: [{ xtype: "label", text: '总计:', width: 90 },
        { xtype: "textfield", disabled: true, width: 90, margin: '0 180', value: '0.00' },
        { xtype: "textfield", disabled: true, width: 90, margin: '0', value: '0.00' },
        { xtype: "textfield", disabled: true, width: 90, margin: '0 40 0 30', value: '0.00' },
        { xtype: "textfield", disabled: true, width: 90, margin: '0 0 0 0', value: '0.00' }],
    });

    var tableds = Ext.create('Ext.TabPanel', {
        width: "100%",
        height: 230,
        autoScroll: true,
        bodyPadding: 5,
        items: [{ title: '内容', autoScroll: true, items: [filterPanel] },
        {
            title: '备注',
            items: [{
                xtype: 'textfield',
                name: 'SalesMan',
                bodyPadding: 5,
                fieldLabel: '表头条文',
                width: 250,
                labelWidth: 80,
                anchor: '100%',
            }, {
                xtype: 'textfield',
                name: 'Marker',
                fieldLabel: '自定栏一',
                style: 'margin-left:320px;margin-top:-30px;',
                width: 250,
                labelWidth: 80,
                anchor: '100%',
            }, {
                xtype: 'textfield',
                name: 'ProdDepart',
                fieldLabel: '表尾条文',
                width: 250,
                labelWidth: 80,
                anchor: '100%',
            }, {
                xtype: 'textfield',
                name: 'Permitter',
                fieldLabel: '自定栏二',
                style: 'margin-left:320px;margin-top:-30px;',
                width: 250,
                labelWidth: 80,
                anchor: '100%',
            }, {
                xtype: 'textarea',
                name: 'ProdProject',
                fieldLabel: '备注',
                width: 580,
                labelWidth: 80,
                anchor: '100%',
                id: 'sremark',

            }]
        }
        ],
    });


    var formsg = Ext.create('Ext.form.Panel', {
        bodyPadding: 5,
        height: '100%',
        layout: "column",
        baseCls: 'x-plain',
        items: [{
            xtype: 'textfield',
            name: 'SalesMan',
            bodyPadding: 5,
            fieldLabel: '送货地址',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
            id: 'stosaddress',
        }, {
            xtype: 'textfield',
            name: 'Marker',
            fieldLabel: '制单人员',
            style: 'margin-left:19px',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
            id: 'stomake',
        }, {
            xtype: 'textfield',
            name: 'ProdDepart',
            fieldLabel: '采购人员',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
            id: 'stobuy',
        }, {
            xtype: 'textfield',
            name: 'Permitter',
            fieldLabel: '复核人员',
            style: 'margin-left:19px',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
            id: 'stoshen',
            readOnly: true,
        }, {
            xtype: 'textfield',
            name: 'ProdProject',
            fieldLabel: '所属部门',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
            id: 'stodep',
        }, {
            xtype: 'box', //或者xtype: 'component',      
            width: 100, //图片宽度      
            height: 100, //图片高度  
            id: 'shimg',
            style:'display:none',
            autoEl: {
                tag: 'img',    //指定为img标签      
                src: '../img.jpg'    //指定url路径      
            }
        }, {
            xtype: "button",
            id: "btnBack",
            text: "上一页",
            style: 'margin-left:18px;',
            listeners: {
                "click": function () {
                    pageIndex--;
                    Search();
                }
            }
        }
     , {
         xtype: "button",
         id: "btnNext",
         text: "下一页",
         style: 'margin-left:18px;',
         listeners: {
             "click": function () {
                 pageIndex++;
                 Search();
             }
         }
     }],
    });


    var forms = Ext.create('Ext.form.Panel', {
        bodyPadding: 5,
        height: '100%',
        layout: "column",
        baseCls: 'x-plain',
        items: [
        {
            xtype: 'textfield',
            name: 'Customer',
            fieldLabel: '供应商',
            width: 250,
            labelWidth: 80,
            emptyText: '请输入供应商',
            anchor: '100%',

            id: 'gys',
            listeners: {
                focus: function (grid, e, eOpts) {
                    kehuzhuwenjian().show();
                }

            }
        }, {
            xtype: 'textfield',
            fieldLabel: '客户id',
            id: 'kehuid',
            width: 250,
            labelWidth: 80,
            hidden: true,
            anchor: '100%'
        }, {
            style: 'margin-left:9px;color:black',
            xtype: 'datefield',
            name: 'BillDate',
            fieldLabel: '单据日期',
            format: 'Y-m-d',
            width: 250,
            labelWidth: 70,
            anchor: '100%',
            id: 'stodate',
            listeners: {
                blur: function () {

                    var trm1 = Ext.getCmp("stodate").getValue().getFullYear();
                    var trm2 = Ext.getCmp("stodate").getValue().getMonth() + 1;
                    var trm3 = Ext.getCmp("stodate").getValue().getDate();
                    var time = trm1 + "-" + trm2 + "-" + trm3;

                    GetTimes(time); //失去焦点事件
                },
                focus: function () {
                    //获取焦点
                }
            }
        }, {

            xtype: 'textfield',
            name: 'DeliveryAddress',
            fieldLabel: '供应商地址',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
            id: 'saddress',
        }, {

            xtype: 'textfield',
            name: 'BillNo',
            style: "margin-left:9px",
            fieldLabel: '单据号码',
            width: 250,
            labelWidth: 70,
            anchor: '100%',
            id: 'stunum',
        }, {
            style: 'margin-left:9px;',
            xtype: 'datefield',
            name: 'BillDate',
            fieldLabel: '有效日期',
            format: 'Y-m-d',
            width: 250,
            labelWidth: 70,
            anchor: '100%',
            id: 'stoydate',
        }, {
            style: 'margin-left:2px',
            xtype: 'textfield', //多行文本域
            name: 'MoneyStyle',
            fieldLabel: '币别',
            labelWidth: 70,
            width: 250,
            anchor: '100%',
            id: 'soshort',
        }, {
            fieldLabel: '单价是否含税',
            xtype: 'combo',
            name: 'IncludeRate',
            displayField: 'name',
            labelWidth: 80,
            width: 250,
            valueField: 'abbr',
            store: Ext.create('Ext.data.Store', {
                fields: ['abbr', 'name'],
                data: [
                    { "abbr": "含税", "name": "含税" },
                    { "abbr": "未税", "name": "未税" }

                ]
            }),
            value: '含税',
            typeAhead: true,
            mode: 'local',
            triggerAction: 'all',
            selectOnFocus: true,
            id: 'stoistax',
        }, {
            style: 'margin-left:9px',
            xtype: 'textfield', //多行文本域
            name: 'huilv',
            fieldLabel: '汇率',
            labelWidth: 70,
            width: 250,
            anchor: '100%',
            id: 'sotaxrate',
        }, tableds, formsg
        ]



    });

    //winform窗口
    var windowst = new Ext.Window({
        width: 640,
        height: 570,
        title: "采购询价单",
        closable: true,
        resizable: false, //设置是否可以改变大小
        draggable: true,
        anchor: '100%',
        items: [forms],
        bbar: [{ xtype: "splitbutton", text: '查询', width: 90, menu: fielmenu },
        { xtype: "splitbutton", text: '转单', width: 90, menu: fielmenu2 },
        { xtype: "splitbutton", text: '功能', width: 90, menu: fielmenu3 }],
    });

    var windows2 = new Ext.Window({
        width: 400,
        height: 300,
        title: "物料选择",
        closable: true,
        resizable: false, //设置是否可以改变大小
        draggable: true,
        closeAction: "hide",
    });

    function kehuzhuwenjian() {
        var obj = {};
        $.ajax({
            url: "/FYJ/GetGYS",
            data: "",
            contentType: "application.json",
            async: false,
            success: function (bb) {
                obj = bb;
            },
            error: function (xhr) {
                alert("错误信息" + xhr.responseText)
            }
        });
        var userStore = Ext.create('Ext.data.Store',
        {
            data: obj,
            fields: [
             'gid', 'gnname'
            ]
        });
        var kehuname = Ext.create('Ext.grid.Panel', {
            renderTo: Ext.getBody(),
            columns: [
                        { text: '（供应商编号）', dataIndex: 'gid', width: 80, },
                         {
                             text: '（供应商简称）', dataIndex: 'gnname', width: 120, editor: {
                                 xtype: 'textfield'
                             }
                         }
            ],
            listeners: {
                itemdblclick: function (dataview,
               record, item, index, e) {
                    Ext.getCmp("gys").setValue(record.get("gnname"));
                    Ext.getCmp("kehuid").setValue(record.get("gid"));
                    kehuwindowst.close();
                }
            },
            store: userStore,
            height: 130,
            width: 480,
            autoScroll: false
        });
        var kehu = Ext.create('Ext.form.Panel', {
            bodyPadding: 5,
            height: '100%',
            layout: "column",
            baseCls: 'x-plain',
            closeAction: 'destroy',
            items: [
            {
                name: 'news.status',
                allowBlank: false,
                xtype: 'textfield',
                editable: false,
                mode: 'local',
                triggerAction: 'all',
                value: 1

            }, {
                style: 'margin-left:180px',
                xtype: 'button',
                text: '确定',
                width: 70,
            }, {
                xtype: 'button',
                text: '取回',
                width: 70,
            }, {
                autoScroll: true, items: [kehuname]
            },

            ]


        });
        var kehuwindowst = new Ext.Window({
            width: 500,
            height: 225,
            title: "供应商主文件",
            closable: true,
            resizable: false, //设置是否可以改变大小
            draggable: true,
            anchor: '100%',
            items: [kehu],
        });

        return kehuwindowst;

    }

    function wuliaozhuwenjian() {
        var obj = {};
        $.ajax({
            url: "/FYJ/GetWuliao",
            data: "",
            contentType: "application.json",
            async: false,
            success: function (bb) {
                obj = bb;
            },
            error: function (xhr) {
                alert("错误信息" + xhr.responseText)
            }
        });
        var userStore = Ext.create('Ext.data.Store',
        {
            data: obj,
            fields: [
             'matid', 'matname'
            ]
        });
        var kehuname = Ext.create('Ext.grid.Panel', {
            renderTo: Ext.getBody(),
            columns: [
                        { text: '（物料编号）', dataIndex: 'matid', width: 80, },
                         {
                             text: '（物料名称）', dataIndex: 'matname', width: 120, editor: {
                                 xtype: 'textfield'
                             }
                         }
            ],
            listeners: {
                itemdblclick: function (dataview, record, item, index, e) {
                    Ext.getCmp("swuname").setValue(record.get("matname"));
                    Ext.getCmp("swuid").setValue(record.get("matid"));
                    kehuwindowsts.close();
                }
            },
            store: userStore,
            height: 130,
            width: 480,
            autoScroll: false
        });
        var kehus = Ext.create('Ext.form.Panel', {
            bodyPadding: 5,
            height: '100%',
            layout: "column",
            baseCls: 'x-plain',
            closeAction: 'destroy',
            items: [
            {
                name: 'news.status',
                allowBlank: false,
                xtype: 'textfield',
                editable: false,
                mode: 'local',
                triggerAction: 'all',
                value: 1

            }, {
                style: 'margin-left:180px',
                xtype: 'button',
                text: '确定',
                width: 70,
            }, {
                xtype: 'button',
                text: '取回',
                width: 70,
            }, {
                autoScroll: true, items: [kehuname]
            },

            ]


        });
        var kehuwindowsts = new Ext.Window({
            width: 500,
            height: 225,
            title: "物料文件",
            closable: true,
            resizable: false, //设置是否可以改变大小
            draggable: true,
            anchor: '100%',
            items: [kehus],
        });

        return kehuwindowsts;

    }



    function afronction() {

        var song = Ext.encode(forms.getForm().getValues());
        Ext.Ajax.request(
             {
                 //被用来向服务器发起请求默认的url  
                 url: "",
                 //请求时发送后台的参数,既可以是Json对象，也可以直接使用“name = value”形式的字符串  
                 params: [{}],
                 //请求时使用的默认的http方法  
                 method: "post",
                 //请求成功时回调函数  
                 success: function () {
                     Ext.ux.Toast.msg("信息提示", "成功删除所选记录！");
                 },
                 //请求失败时回调函数  
                 failure: function () {
                     Ext.ux.Toast.msg("信息提示", "信息删除出错，请联系管理员!");
                 }
             }
    );
        alert(song);// 序列化表单
    }

    return windowst;

}

function Query() {


    var obj = {};
    $.ajax({
        url: "/FYJ/GetXunjia",
        data: "",
        contentType: "application.json",
        async: false,
        success: function (bb) {
            obj = bb;
        }, error: function (ex) {
            alert(ex.responseText);
        }
    });
    var userStore = Ext.create('Ext.data.Store', {

        data: obj,
        fileds: ['saddress', 'stopname']
    });
    var kehuname = Ext.create('Ext.grid.Panel', {
        renderTo: Ext.getBody(),
        columns: [
                {
                    header: '（栏号）',
                    xtype: 'rownumberer',
                    dataIndex: 'lh',
                    width: 50,
                    sortable: false
                },

               { header: '物料编号', dataIndex: 'saddress', width: 100, },
                {
                    header: '物料名称', dataIndex: 'stopname', width: 120, editor: {
                        xtype: 'textfield',
                        listeners: {
                            focus: function (grid, e, eOpts) {
                                windows2.show();
                            }

                        }
                    }
                },
                    { header: '规格型号', dataIndex: 'bianma' },
                    { header: '单位名称', dataIndex: 'lianxi' },
                    { header: '数量', dataIndex: 'lianxi' },
                    { header: '折扣前单价', dataIndex: 'lianxi' },
                    { header: '折数(%)', dataIndex: 'lianxi' },
                    { header: '单价', dataIndex: 'lianxi' },
                    { header: '金额', dataIndex: 'lianxi' },
                    { header: '税率', dataIndex: 'lianxi' },
                    { header: '税额', dataIndex: 'lianxi' },
                    { header: '含税金额', dataIndex: 'lianxi' },

                    { header: '赠品', dataIndex: 'lianxi' },
                    { header: '分录备注', dataIndex: 'lianxi' },
                    { header: '来源单别', dataIndex: 'lianxi' },
                    { header: '来源单号', dataIndex: 'lianxi' },

        ],
        store: userStore,
        height: 130,
        width: 480,
        autoScroll: false

    });

    //Ext.Ajax.request( { 
    //    url: '/FYJ/GetXunjia',
    //    method : 'post', 
    //    params : { 
    //        //saddress: document.getElementById('Customer').value

    //    },success : function(response, options) { 
    //        var o = Ext.util.JSON.decode(response.responseText); 
    //        alert(o.msg); 
    //    }, 
    //    failure : function() { 
    //    } 
    //}); 
}



function ConvertTime(sj) {
    var date = new Date(parseInt(sj.substr(6)));
    return date.toLocaleDateString();
}
