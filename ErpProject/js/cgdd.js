

function cgdd() {
    var pageIndex = 1;
    var pageSize = 1;
    var pageCount = 0;
    var osperid = 0;
    var datas = [];
    Ext.onReady(function () {

        GetOrdernum();
    });
    function ShenHedingdan() {
        $.ajax({
            url: "/FYJ/ShenHedingdan",
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: "{id:'" + Ext.getCmp("ostoid").getValue() + "'}",
            success: function (result) {
                if (result > 0) {
                    alert('已审核');

                }

            }

        });
    }
    function fShenHedingdan() {
        $.ajax({
            url: "/FYJ/fShenHedingdan",
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: "{id:'" + Ext.getCmp("ostoid").getValue() + "'}",
            success: function (result) {
                if (result > 0) {
                    alert('已取消审核');

                }

            }

        });
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
    var zp = "";
    function GetddDetail(id) {

        $.ajax({
            type: "post",
            url: "/FYJ/GetOrdersDetail",
            data: "{id:'" + id + "'}",

            contentType: "application/json",
            success: function (result) {

                datas = result;
                $.each(datas, function (index, data) {
                    if (data.oisprent == 0) {
                        zp = "是";
                    } else {
                        zp = "否";
                    }
                   
                    data.ostoragedate = new Date(parseInt(data.ostoragedate.substr(6))).toLocaleDateString().toString("yyyy-MM-dd");
                })
                grids.store.loadData(datas);
            }
        });
    }
    function GetOrdernum() {
        $.ajax({
            type: "post",
            url: "/FYJ/GetOrdernum",
            data: "{}",
            dataType: "json",
            contentType: "application/json",
            success: function (result) {
                pageCount = result;
                Searchdd();
            }


        });
    }
    function state() {
        Ext.getCmp('btnBack').disabled = false;
        Ext.getCmp('btnNext').disabled = false;
      
        if (pageIndex == 1) {
            alert("这是第一页");
            Ext.getCmp('btnBack').disabled = true;

        }
        if (pageIndex == pageCount) {
            alert("这是最后一页");
            Ext.getCmp('btnNext').disabled = true;
        }
    }
    function DelOrder() {
        $.ajax({
            url: "/FYJ/DelOrder",
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: "{id:'" + Ext.getCmp("ostoid").getValue() + "'}",
            success: function (result) {
                if (result > 0) {
                    alert('删除成功');
                    GetOrdernum();
                }

            }

        });
    }
    function addSales() {

        var arr = []; //序列化表格
        var sni = grids.store.data;
        sni.each(function (record) {
            arr.push(record.data);
        })
        //alert(Ext.encode(arr));
        var stm1 = Ext.getCmp("ostoid").getValue();//单据编号
        var stm2 = Ext.getCmp("gys").getValue();//

        var arrys = JSON.stringify(arr);

        var trm1 = Ext.getCmp("ostodate").getValue().getFullYear();
        var trm2 = Ext.getCmp("ostodate").getValue().getMonth() + 1;
        var trm3 = Ext.getCmp("ostodate").getValue().getDate();
        var time = trm1 + "-" + trm2 + "-" + trm3;

        $.ajax({
            url: "/FYJ/AddOrders",
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: "{info:{osperid:" + 1 + ",ostodate:'" + time + "',osperaddress:'" + Ext.getCmp("osperaddress").getValue() + "',ostoid:'" + Ext.getCmp("ostoid").getValue() + "',ospername:'" + Ext.getCmp("gys").getValue() + "',otype:'" + Ext.getCmp("otype").getValue() + "',osunittax:'" + Ext.getCmp("osunittax").getValue() + "',ostate:'" + Ext.getCmp("ostate").getValue() + "',ossongaddress:'" + Ext.getCmp("ossongaddress").getValue() + "',oscaidep:'" + Ext.getCmp("oscaidep").getValue() + "',ospercai:'" + Ext.getCmp("ospercai").getValue() + "',ostomemake:'" + Ext.getCmp("ostomemake").getValue() + "',ostoemcheck:'" + Ext.getCmp("ostoemcheck").getValue() + "',oxiangmu:'" + Ext.getCmp("oxiangmu").getValue() + "',obibie:'" + Ext.getCmp("obibie").getValue() + "',osunittax:'" + Ext.getCmp("osunittax").getValue() + "'},list:" + arrys + "}",
            success: function (result) {
                alert('新增成功');
                GetOrdernum();
            }

        });

    }
    function UpdateOrders() {
        var arr = []; //序列化表格
        var sni = grids.store.data;
        sni.each(function (record) {
            arr.push(record.data);
        })
        //alert(Ext.encode(arr));
        var stm1 = Ext.getCmp("ostoid").getValue();//单据编号
        var stm2 = Ext.getCmp("gys").getValue();//
        var trm1 = Ext.getCmp("ostodate").getValue().getFullYear();
        var trm2 = Ext.getCmp("ostodate").getValue().getMonth() + 1;
        var trm3 = Ext.getCmp("ostodate").getValue().getDate();
        var time = trm1 + "-" + trm2 + "-" + trm3;
        var arrys = JSON.stringify(arr);


        $.ajax({
            url: "/FYJ/UpdateOrders",
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: "{info:{osperid:" + 1 + ",ostodate:'" + time + "',osperaddress:'" + Ext.getCmp("osperaddress").getValue() + "',ostoid:'" + Ext.getCmp("ostoid").getValue() + "',ospername:'" + Ext.getCmp("gys").getValue() + "',otype:'" + Ext.getCmp("otype").getValue() + "',osunittax:'" + Ext.getCmp("osunittax").getValue() + "',ostate:'" + Ext.getCmp("ostate").getValue() + "',ossongaddress:'" + Ext.getCmp("ossongaddress").getValue() + "',oscaidep:'" + Ext.getCmp("oscaidep").getValue() + "',ospercai:'" + Ext.getCmp("ospercai").getValue() + "',ostomemake:'" + Ext.getCmp("ostomemake").getValue() + "',ostoemcheck:'" + Ext.getCmp("ostoemcheck").getValue() + "',oxiangmu:'" + Ext.getCmp("oxiangmu").getValue() + "',obibie:'" + Ext.getCmp("obibie").getValue() + "',osunittax:'" + Ext.getCmp("osunittax").getValue() + "'},list:" + arrys + "}",
            success: function (result) {
                alert('修改成功');
                GetOrdernum();
            }

        });

    }

    var fielmenu = new Ext.menu.Menu({
        items: [{
            text: '历史交易查询', handler: function () {
                afronction();

            }
        }]
    });
    var fielmenu2 = new Ext.menu.Menu({
        items: [{ text: '采购询价单转入' }, { text: '销售订单转入' }, { text: '采购请购转入' }, { text: '转采购入库单' }]
    });
    var fielmenu3 = new Ext.menu.Menu({
        items: [{
            text: '新增', handler: function () {
                addSales();
            }
        }, {
            text: '删除', handler: function () {
                DelOrder();

            },
        }, {
            text: '修改', handler: function () {
                UpdateOrders();

            },
        }, {
            text: '审核', handler: function () {
                ShenHedingdan();

            },
        }, {
            text: '反审核', handler: function () {
                fShenHedingdan();

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



    var grids = Ext.create('Ext.grid.Panel', {
        listeners: {
            containerdblclick: function (grid, e, eOpts) { //单击事件
                grid.getStore().add({
                    'name': '1',
                    'dizhi': '2',
                    'bianma': '',
                    'lianxi': ''
                });

            },

            itemcontextmenu: function () {

                e.preventDefault();
                new Ext.menu.Menu({
                    items: [{
                        xtype: 'textfield',
                        text: 'Lost',
                        pressed: false,
                        handler: function () {
                            alert();
                        }
                    }, {
                        xtype: '',
                        text: '娓呴櫎鏂规',
                        pressed: false,
                        handler: function () { }
                    }, {
                        xtype: '',
                        text: '閫夋嫨鏂规',
                        pressed: false,
                        menu: new Ext.menu.Menu({
                            items: [{
                                text: '棰勮鏂规',
                                pressed: false
                            }]
                        }),
                        handler: function () { }
                    }, {
                        xtype: '',
                        text: '瀵煎嚭鑷矱xcel',
                        pressed: false,
                        handler: function () { }
                    }, {
                        xtype: '',
                        text: '缃戞牸鎵撳嵃',
                        pressed: false,
                        handler: function () { }
                    }]
                }

                ).showAt(e.getXY());
            }
        },
        plugins: [
            Ext.create('Ext.grid.plugin.CellEditing', {
                clicksToEdit: 1
            })
        ],
        store: {
            //, 'swuid', 'swuname', 'smodel', 'sunit', 'snum', 'szprice', 'szheshu', 'sprice', 'smoney', 'sdacess', 'sdtaxmoney', 'sdtaxmoneys', 'szengping', 'sfenremark', 'sorigintype', 'soriginid'
            fields: ['oline', 'osperid', 'ospername', 'oprodsize', 'ounitname', 'osperprice', 'oszheshu', 'oprice', 'omoney', 'otaxrate', 'otaxmoney', 'otaxmoneys', 'ostoragedate', 'oweinum', 'oisprent', 'oremark', 'origintype', 'originno', 'oweinum'],
            data: datas,
            autoload: true,
        },
        columns: [
                     {
                         header: '（栏号）',
                         //xtype: 'rownumberer',
                         dataIndex: 'oline',
                         width: 50,
                         sortable: true
                     },


                    {
                        header: '物料编号', dataIndex: 'osperid', width: 100, editor: {
                            xtype: 'textfield', listeners: {
                                focus: function (grid, e, eOpts) {
                                    wuliaozhuwenjian().show();
                                }

                            }

                        }
                    },
                     {
                         header: '物料名称', dataIndex: 'ospername', width: 150, editor: {
                             xtype: 'textfield',

                         }
                     },
                         {
                             header: '规格型号', dataIndex: 'oprodsize', editor: {
                                 xtype: 'textfield',

                             }
                         },
                         {
                             header: '单位名称', dataIndex: 'ounitname', editor: {
                                 xtype: 'textfield',

                             }
                         },
                         {
                             header: '数量', dataIndex: 'onum', editor: {
                                 xtype: 'textfield',

                             }
                         },
                         {
                             header: '折扣前单价', dataIndex: 'osperprice', editor: {
                                 xtype: 'textfield',

                             }
                         },
                         {
                             header: '折数(%)', dataIndex: 'oszheshu', editor: {
                                 xtype: 'textfield',

                             }
                         },
                         {
                             header: '单价', dataIndex: 'oprice', editor: {
                                 xtype: 'textfield',

                             }
                         },
                         {
                             header: '金额', dataIndex: 'omoney', editor: {
                                 xtype: 'textfield',

                             }
                         },
                         {
                             header: '税率', dataIndex: 'otaxrate', editor: {
                                 xtype: 'textfield',

                             }
                         },
                         {
                             header: '税额', dataIndex: 'otaxmoney', editor: {
                                 xtype: 'textfield',

                             }
                         },
                         {
                             header: '含税金额', dataIndex: 'otaxmoneys', editor: {
                                 xtype: 'textfield',

                             }
                         },
                        {
                            header: '预入库日', dataIndex: 'ostoragedate', editor: {
                                xtype: 'textfield',

                            }
                        },
                         {
                             header: '未入库量', dataIndex: 'oweinum', editor: {
                                 xtype: 'textfield',

                             }
                         },
                         {
                             header: '赠品', dataIndex: 'oisprent', id: 'oisprent', editor: {
                                 xtype: 'textfield',

                             }
                         },
                         {
                             header: '分录备注', dataIndex: 'oremark', editor: {
                                 xtype: 'textfield',

                             }
                         },
                         {
                             header: '来源单别', dataIndex: 'origintype', editor: {
                                 xtype: 'textfield',

                             }
                         },
                         {
                             header: '来源单号', dataIndex: 'originno', editor: {
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
            }]
        }, {
            title: '账款',
            items: [{
                xtype: 'textfield',
                name: 'SalesMan',
                bodyPadding: 5,
                fieldLabel: '账款归属',
                width: 250,
                labelWidth: 80,
                anchor: '100%',
            }, {
                style: 'margin-left:9px;',
                xtype: 'datefield',
                name: 'BillDate',
                fieldLabel: '付款日期',
                style: 'margin-left:320px;margin-top:-30px;',
                width: 250,
                labelWidth: 70,
                anchor: '100%',
            }, {
                fieldLabel: '付款条件',
                xtype: 'combo',
                name: 'IncludeRate',
                displayField: 'name',
                labelWidth: 80,
                width: 250,
                valueField: 'abbr',
                store: Ext.create('Ext.data.Store', {
                    fields: ['abbr', 'name'],
                    data: [
                        { "abbr": "货到", "name": "货到" },
                        { "abbr": "次月", "name": "次月" },
                        { "abbr": "月结", "name": "月结" },
                        { "abbr": "其它", "name": "其它" },

                    ]
                }),
                value: '货到',
                typeAhead: true,
                mode: 'local',
                triggerAction: 'all',
                selectOnFocus: true,

            }, {
                style: 'margin-left:9px;color:blue',
                xtype: 'textfield',
                name: 'BillDate',
                fieldLabel: '',
                style: 'margin-top:-30px;margin-left:260px;',


                width: 50,
                labelWidth: 70,
                anchor: '100%',
            }, {
                style: 'margin-left:9px;color:blue',
                xtype: 'datefield',
                name: 'BillDate',
                fieldLabel: '天 账款月份',
                style: 'margin-left:320px;margin-top:-30px;',


                width: 250,
                labelWidth: 70,
                anchor: '100%',
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
            fieldLabel: '采购人员',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
            id: 'ospercai',
        }, {
            xtype: 'textfield',
            name: 'Marker',
            fieldLabel: '制单人员',
            style: 'margin-left:19px',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
            id: 'ostomemake',
        }, {
            xtype: 'textfield',
            name: 'ProdDepart',
            fieldLabel: '所属部门',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
            id: 'oscaidep',
        }, {
            xtype: 'textfield',
            name: 'Permitter',
            fieldLabel: '复核人员',
            style: 'margin-left:19px',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
            id: 'ostoemcheck',
        }, {
            xtype: 'textfield',
            name: 'ProdProject',
            fieldLabel: '所属项目',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
            id: 'oxiangmu',
        }, {
            xtype: "button",
            id: "btnBack",
            text: "上一页",
            style: 'margin-left:18px;',
            listeners: {
                "click": function () {
                    pageIndex--;
                    Searchdd();
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
                     Searchdd();
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
            anchor: '100%',
        }, {
            style: 'margin-left:9px;',
            xtype: 'datefield',
            name: 'BillDate',
            fieldLabel: '单据日期',
            format: 'Y-m-d',
            value: Ext.util.Format.date(Ext.Date.add(new Date(), Ext.Date.MONTH + 1, -1), "Y-m-d"),
            listeners: {
                blur: function () {

                    var trm1 = Ext.getCmp("ostodate").getValue().getFullYear();
                    var trm2 = Ext.getCmp("ostodate").getValue().getMonth() + 1;
                    var trm3 = Ext.getCmp("ostodate").getValue().getDate();
                    var time = trm1 + "-" + trm2 + "-" + trm3;

                    GetTime(time); //失去焦点事件
                },
                focus: function () {
                    //获取焦点
                }
            },
            width: 250,
            labelWidth: 70,
            anchor: '100%',
            id: 'ostodate',
        }, {
            xtype: 'textfield',
            name: 'DeliveryAddress',
            fieldLabel: '供应商地址',
            width: 150,
            labelWidth: 80,
            anchor: '100%',
            id: 'osperaddress',
        }, {
            xtype: 'textfield',
            name: 'dizhiton',
            width: 99,
            labelWidth: 70,
            margin: "0 1",
            anchor: '100%',
        }, {
            style: 'margin-left:9px',
            xtype: 'textfield',
            name: 'BillNo',
            style: "margin-left:9px",
            fieldLabel: '单据号码',
            width: 250,
            labelWidth: 70,
            anchor: '100%',
            id: 'ostoid',
        }, {
            xtype: 'textfield',
            name: 'DeliveryAddress',
            fieldLabel: '采购订单类型',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
            id: 'otype',
        }, {
            style: 'margin-left:9px',
            xtype: 'textfield', //多行文本域
            name: 'MoneyStyle',
            fieldLabel: '币别',
            labelWidth: 70,
            width: 250,
            anchor: '100%',
            id: 'obibie',
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
            id: 'osunittax',
        }, {
            style: 'margin-left:9px',
            xtype: 'textfield', //多行文本域
            name: 'huilv',
            fieldLabel: '汇率',
            labelWidth: 70,
            width: 250,
            anchor: '100%',
            value: '1.000',
            id: "otax",
        }, {
            fieldLabel: '单况',
            xtype: 'combo',
            name: 'IncludeRate',
            displayField: 'name',
            labelWidth: 80,
            width: 250,
            valueField: 'abbr',
            store: Ext.create('Ext.data.Store', {
                fields: ['abbr', 'name'],
                data: [
                    { "abbr": "未结案", "name": "未结案" },
                    { "abbr": "已结案", "name": "已结案" },
                    { "abbr": "无效", "name": "无效" },
                ]
            }),
            value: '未结案',
            typeAhead: true,
            mode: 'local',
            triggerAction: 'all',
            selectOnFocus: true,
            id: 'ostate',
        }, {
            fieldLabel: '送货地址',
            xtype: 'combo',
            name: 'IncludeRate',
            displayField: 'name',
            labelWidth: 80,
            width: 260,
            id: 'ossongaddress',

            valueField: 'abbr',
            store: Ext.create('Ext.data.Store', {
                fields: ['abbr', 'name'],
                data: [

                ]
            }),
            value: '',
            typeAhead: true,
            mode: 'local',
            triggerAction: 'all',
            selectOnFocus: true,

        }, tableds, formsg
        ]



    });


    //winform窗口
    var windowst = new Ext.Window({
        width: 640,
        height: 570,
        title: "采购订单",
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
    function GetTime(time) {

        $.ajax({
            type: "post",
            url: "/FYJ/GetTime",
            data: "{time:'" + time + "'}",
            contentType: "application/json",
            success: function (result) {
                Ext.getCmp("ostoid").setValue(result);



            }, error: function (ex) {
                alert(ex.responseTest);
            }
        });
    }
    function ConvertTime(sj) {
        var date = new Date(parseInt(sj.substr(6)));
        return date.toLocaleDateString();
    }
    var djbh = "";
    function Searchdd() {
        $.ajax({
            type: "post",
            url: "/FYJ/GetOrderss",
            data: "{pageIndex:" + pageIndex + ",pageSize:" + pageSize + "}",
            contentType: "application/json",
            success: function (result) {

                $.each(result, function (index, data) {
                    osperid = data.osperid;
                    Ext.getCmp("ostoid").setValue(data.ostoid);
                    Ext.getCmp("gys").setValue(data.ospername);
                    var date = data.ostodate;
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
                    Ext.getCmp("ostodate").setValue(ppp);
                    Ext.getCmp("osperaddress").setValue(data.osperaddress);


                    Ext.getCmp("otype").setValue(data.otype);

                    Ext.getCmp("obibie").setValue(data.obibie);
                    ostomemake
                    Ext.getCmp("ostate").setValue(data.ostate);
                    Ext.getCmp("ossongaddress").setValue(data.ossongaddress);


                    if (data.osunittax == 1) {
                        Ext.getCmp("osunittax").setValue("未税");
                    } else {
                        Ext.getCmp("osunittax").setValue("含税");
                    }
                    Ext.getCmp("ostomemake").setValue(data.ostomemake);
                    Ext.getCmp("ospercai").setValue(data.ospercai);
                    Ext.getCmp("oscaidep").setValue(data.oscaidep);
                    Ext.getCmp("ostoemcheck").setValue(data.ostoemcheck);
                    Ext.getCmp("oxiangmu").setValue(data.oxiangmu);
                    //Ext.getCmp("sodate").setValue(ConvertTime(data.sodate));

                    GetddDetail(data.ostoid);
                    state();
                });


            }, error: function (ex) {
                alert(ex.responseTest);
            }
        });
    }
}

