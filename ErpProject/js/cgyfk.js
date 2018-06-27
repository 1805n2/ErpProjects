function caigouyufukuan() {
    var datas = {};
    var PageIndex = 1;
    Ext.onReady(function () {
        showzhu();
    });
    function sjgs(shijian) {
        var stateDate = new Date(parseInt(shijian.substring(6))).toLocaleDateString();
        var reg = /[\u4e00-\u9fa5]/g;
        var time = stateDate.replace(reg, "-").substr(0, stateDate.replace(reg, "-").length - 1);
        var a = time.split('-');
        var c = "";
        $.each(a, function (index, b) {
            if (b.length == 1) {
                b = 0 + '' + b;
            }
            if (index == 2) {
                c = c + b;
            } else {
                c = c + b + "-";
            }
        })
        return c;
    }
    function showzhu() {
        $.ajax({
            type: "POST",
            url: "Caigouyufu/showzhu",
            data: "{PageIndex:" + PageIndex + "}",
            dataType: "json",
            contentType: "application/json",
            success: function (res) {
                $.each(res, function (index, data) {
                    Ext.getCmp('Bill_advance').setValue(data.Bill_advance);
                    Ext.getCmp('Coin_stop').setValue(data.Coin_stop);
                    Ext.getCmp('Compound_human_ID').setValue(data.Compound_human_ID);
                    Ext.getCmp('Bumenbianhao').setValue(data.Bumenbianhao);
                    Ext.getCmp('Deposit_rate').setValue(data.Deposit_rate);
                    Ext.getCmp('Document_date').setValue(sjgs(data.Document_date));
                    Ext.getCmp('Exchange_rate').setValue(data.Exchange_rate);
                    Ext.getCmp('Money1').setValue(data.Money1);
                    Ext.getCmp('Money2').setValue(data.Money2);
                    Ext.getCmp('Settle_accounts1').setValue(data.Settle_accounts1);
                    Ext.getCmp('Settle_accounts2').setValue(data.Settle_accounts2);
                    Ext.getCmp('Single_person_ID').setValue(data.Single_person_ID);
                    Ext.getCmp('Supplier_ID').setValue(data.Supplier_ID);
                    Ext.getCmp('Termination_month').setValue(sjgs(data.Termination_month));
                    Ext.getCmp('gysid').setValue(data.supid);
                    Ext.getCmp('perid').setValue(data.perid);
                    Ext.getCmp('compuid').setValue(data.compuid);
                    Ext.getCmp('bianhao').setValue(data.bianhao);
                    yufuzi(data.Bill_advance);
                })
            },
            error: function (ex) {
                alert("Error:" + ex.responseText);
            }
        })
    }
    function syy() {
        if (PageIndex <= 1) {
            return;
        }
        PageIndex--;
        showzhu();
    }
    function xyy() {
        $.ajax({
            type: "POST",
            url: "Caigouyufu/count",
            data: "{}",
            dataType: "json",
            contentType: "application/json",
            success: function (res) {
                if (PageIndex >= res) {
                    return;
                }
                PageIndex++;
                showzhu();
            },
            error: function (ex) {
                alert("Error:" + ex.responseText);
            }
        })
    }
    function yufuzi(advanid) {
        $.ajax({
            type: "POST",
            url: "Caigouyufu/yufuzi",
            data: "{advanid:" + advanid + "}",
            dataType: "json",
            contentType: "application/json",
            success: function (res) {
                datas = res;
                grids.store.loadData(datas);
            },
            error: function (ex) {
                alert("Error:" + ex.responseText);
            }
        })
    }
    //function cxdb() {
    //    $.ajax({
    //        type: "POST",
    //        url: "Caigouyufu/cxcgdd",
    //        data: "{}",
    //        dataType: "json",
    //        contentType: "application/json",
    //        success: function (res) {
    //            $.each(res, function () {

    //            })
    //        },
    //        error: function (ex) {
    //            alert("Error:" + ex.responseText);
    //        }
    //    })
    //}

    function shenhe() {

        var djbh = Ext.getCmp('Bill_advance').getValue();
        var money1 = Ext.getCmp('Money1').getValue();
        var money2 = Ext.getCmp('Money2').getValue();
        var jine = parseInt(money1) + parseInt(money2);
        var gysid = Ext.getCmp('gysid').getValue();
        $.ajax({
            type: "POST",
            url: "/Caigouyufu/shenhe",
            data: "{djbh:'" + djbh + "',jine:'" + jine + "',gysid:'" + gysid + "'}",
            dataType: "json",
            contentType: "application/json",
            success: function (res) {
                if (res > 0) {
                    showzhu();
                }
            },
            error: function (ex) {
                alert("Error:" + ex.responseText);
            }
        })
    }
    var fielmenu = new Ext.menu.Menu({
        items: [
            {
                text: '载入单币别账款',
                listeners: {
                    click: function () {
                        datas = [{ 'Amount_dvanced': '5000', 'Source_name': '啊大大', 'Source_date': '20180609001', 'summary': '萨达四大四大' }]
                        grids.store.loadData(datas);
                    }
                }
            },
            {
                text: '载入多币别账款',
                listeners: {
                    click: function () {
                        var jjj = [];
                        for (var i = 0; i < grids.store.data.length; i++) {
                            jjj.push(grids.store.getAt(i).data);
                        }
                        alert(jjj.length);
                    }
                }
            },
            {
                text: '载入预付'
            }
        ]
    });
    var fielmenu2 = new Ext.menu.Menu({
        items: [{
            text: '以下冲款'
        }, {
            text: '以下折让'
        }, {
            text: '以下空白'
        }]
    });
    var fielmenu3 = new Ext.menu.Menu({
        items: [{
            text: '物料组合设定'
        }, {
            text: '批次变更单价'
        }]
    });

    var stroedt = Ext.create('Ext.data.Store', {
        model: 'User',
        fields: ['name', 'dizhi', 'bianma', 'bianma', 'lianxi'],
        data: {
            'items': [{
                'name': '10111',
                "dizhi": "北京",
                "bianma": "40016",
                "lianxi": "李忠"
            },
                {
                    'name': '10112',
                    "dizhi": "上海",
                    "bianma": "68016",
                    "lianxi": "朱经理"
                },
                {
                    'name': '10113',
                    "dizhi": "天津",
                    "bianma": "408973",
                    "lianxi": "周总"
                },
                {
                    'name': '10114',
                    "dizhi": "重庆",
                    "bianma": "404567",
                    "lianxi": "刘经理"
                }
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
    var ab = ['3', '4'];
    var grids = Ext.create('Ext.grid.Panel', {
        listeners: {
            containerdblclick: function (grid, e, eOpts) { //单击事件
                grid.getStore().add({
                    'name': '12',
                    'Source_name': '采购订单',
                    'bianma': '',
                    'lianxi': ''
                });

            }
        },
        plugins: [
            Ext.create('Ext.grid.plugin.CellEditing', {
                clicksToEdit: 1
            })
        ],
        store: {//配置数据源  
            fields: ['Amount_dvanced', 'Source_name', 'Source_date', 'summary'],//定义字段  
            data: datas,
            autoLoad: true//自动加载  
        },
        columns: [{
            header: '预付金额',
            dataIndex: 'Amount_dvanced',
            width: 100,
            sortable: true,
            editor: {
                xtype: 'textfield',
                listeners: {

                }
            }, listeners: {
                click: function (a, b, c) {
                    ac = c;
                }
            }
        }, {
            header: '来源单别',
            dataIndex: 'Source_name',
            width: 200,
            sortable: true,
            listeners: {
                click: function (a, b, c) {
                    ac = c;
                }
            }
        }, {
            header: '来源单号',
            dataIndex: 'Source_date',
            width: 200,
            sortable: true,
            editor: {
                xtype: 'textfield',
                id: 'lydh',
                enableKeyEvents: true,
                listeners: {
                    render: function (field) {
                        Ext.QuickTips.init();
                        Ext.QuickTips.register({
                            target: field.el,
                            text: '按F4选择'
                        })
                    },
                    keyup: function (textField, e) {
                        if (e.getKey() == 115) {
                            var gysid = Ext.getCmp('gysid').getValue();
                            caigdd(gysid);
                            laiyuandan.show();
                        }
                    }
                }
            },
            listeners: {
                click: function (a, b, c) {
                    hh = c;
                    ac = c;
                }
            }
        }, {
            header: '摘要',
            dataIndex: 'summary',
            width: 200,
            sortable: true,
            editor: {
                xtype: 'textfield',
                listeners: {
                    "blur": function (grid, e, eOpts) {

                    }
                }
            },
            listeners: {
                click: function (a, b, c) {
                    ac = c;
                }
            }
        }
        ],
        height: 150,
        width: 703,
        autoScroll: false,
    })
    var ac = null;
    document.onkeydown = function (e) {
        if (event.keyCode == 46) {
            grids.store.removeAt(ac);
        }
    }
    function pd() {
        var id = Ext.getCmp('Bill_advance').getValue();
        $.ajax({
            type: "POST",
            url: "/Caigouyufu/pd",
            data: "{tsaid:'" + id + "'}",
            dataType: "json",
            contentType: "application/json",
            success: function (res) {
                if (res == 1) {
                    //新增
                    add();
                } else if (res == 2) {
                    //修改
                    xg();
                } else {
                    alert('该单已审核不可修改');
                    return;
                }
            },
            error: function (ex) {
                alert("Error:" + ex.responseText);
            }
        })
    }
    function add() {
        var billadid = Ext.getCmp('Bill_advance').getValue();
        var Document_date = Ext.getCmp('Document_date').getValue();
        var Supplier_ID = Ext.getCmp('gysid').getValue();
        var Coin_stop = Ext.getCmp('Coin_stop').getValue();
        var Compound_human_ID = Ext.getCmp('compuid').getValue();
        var Bumenbianhao = Ext.getCmp('bianhao').getValue();
        var Deposit_rate = Ext.getCmp('Deposit_rate').getValue();
        var Exchange_rate = Ext.getCmp('Exchange_rate').getValue();
        var Money1 = Ext.getCmp('Money1').getValue();
        var Money2 = Ext.getCmp('Money2').getValue();
        var Settle_accounts1 = Ext.getCmp('Settle_accounts1').getValue();
        var Settle_accounts2 = Ext.getCmp('Settle_accounts2').getValue();
        var Single_person_ID = Ext.getCmp('perid').getValue();
        var Termination_month = Ext.util.Format.date(Ext.getCmp('Termination_month').getValue(), 'Y-m-d');
        var jjj = [];
        for (var i = 0; i < grids.store.data.length; i++) {
            jjj.push(grids.store.getAt(i).data);
        }
        $.ajax({
            type: "POST",
            url: "/Caigouyufu/xz",
            data: "{tsa:{Bill_advance:'" + billadid + "',Document_date:'" + Document_date + "',Supplier_ID:'" + Supplier_ID + "',Coin_stop:'" + Coin_stop + "',Settle_accounts1:'" + Settle_accounts1 + "',Settle_accounts2:'" + Settle_accounts2 + "',Money1:'" + Money1 + "',Money2:'" + Money2 + "',Exchange_rate:'" + Exchange_rate + "',Deposit_rate:'" + Deposit_rate + "',Termination_month:'" + Termination_month + "',Bumenbianhao:'" + Bumenbianhao + "',Single_person_ID:'" + Single_person_ID + "',Compound_human_ID:'" + Compound_human_ID + "',Audit_status:'0'},list:" + JSON.stringify(jjj) + "}",
            dataType: "json",
            contentType: "application/json",
            success: function (res) {
                if (res > 0) {
                    alert("新增成功");
                    showzhu();
                }
            },
            error: function (ex) {
                alert("Error:" + ex.responseText);
            }
        })
    }
    function xg() {
        var billadid = Ext.getCmp('Bill_advance').getValue();
        var Document_date = Ext.getCmp('Document_date').getValue();
        var Supplier_ID = Ext.getCmp('gysid').getValue();
        var Coin_stop = Ext.getCmp('Coin_stop').getValue();
        var Compound_human_ID = Ext.getCmp('compuid').getValue();
        var Bumenbianhao = Ext.getCmp('bianhao').getValue();
        var Deposit_rate = Ext.getCmp('Deposit_rate').getValue();
        var Exchange_rate = Ext.getCmp('Exchange_rate').getValue();
        var Money1 = Ext.getCmp('Money1').getValue();
        var Money2 = Ext.getCmp('Money2').getValue();
        var Settle_accounts1 = Ext.getCmp('Settle_accounts1').getValue();
        var Settle_accounts2 = Ext.getCmp('Settle_accounts2').getValue();
        var Single_person_ID = Ext.getCmp('perid').getValue();
        var Termination_month = Ext.util.Format.date(Ext.getCmp('Termination_month').getValue(), 'Y-m-d');
        var jjj = [];
        for (var i = 0; i < grids.store.data.length; i++) {
            jjj.push(grids.store.getAt(i).data);
        }
        $.ajax({
            type: "POST",
            url: "/Caigouyufu/xg",
            data: "{tsa:{Bill_advance:'" + billadid + "',Document_date:'" + Document_date + "',Supplier_ID:'" + Supplier_ID + "',Coin_stop:'" + Coin_stop + "',Settle_accounts1:'" + Settle_accounts1 + "',Settle_accounts2:'" + Settle_accounts2 + "',Money1:'" + Money1 + "',Money2:'" + Money2 + "',Exchange_rate:'" + Exchange_rate + "',Deposit_rate:'" + Deposit_rate + "',Termination_month:'" + Termination_month + "',Bumenbianhao:'" + Bumenbianhao + "',Single_person_ID:'" + Single_person_ID + "',Compound_human_ID:'" + Compound_human_ID + "',Audit_status:'0'},list:" + JSON.stringify(jjj) + "}",
            dataType: "json",
            contentType: "application/json",
            success: function (res) {
                if (res > 0) {
                    alert("修改成功");
                    showzhu();
                }
            },
            error: function (ex) {
                alert("Error:" + ex.responseText);
            }
        })
    }
    var filterPanel = Ext.create('Ext.panel.Panel', {
        bodyPadding: 6, // 避免Panel中的子元素紧邻边框
        width: 718,
        height: 190,
        items: [grids],
        bbar: [{
            xtype: "label",
            text: '总计:',
            width: 1675
        },
            {
                xtype: "textfield",
                disabled: true,
                width: 90,
                margin: '0 0 0 0',
                value: '0.00'
            }
        ],
    });

    var tableds = Ext.create('Ext.TabPanel', {
        width: "100%",
        height: 250,
        autoScroll: true,
        bodyPadding: 5,
        items: [{
            title: '内容',
            autoScroll: true,
            items: [filterPanel]
        }, {
            title: '备注',
            xtype: 'textarea',
            name: 'Remark',
            fieldLabel: '备注',
            labelWidth: 30,
        }],
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
            id: 'Bumenbianhao',
            fieldLabel: '所属部门',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
        }, {
            xtype: 'textfield',
            name: 'Marker',
            id: 'Single_person_ID',
            fieldLabel: '制单人员',
            style: 'margin-left:19px',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
        }, {
            xtype: 'textfield',
            name: 'ProdDepart',
            fieldLabel: '所属项目',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
        }, {
            xtype: 'textfield',
            name: 'Permitter',
            id: 'Compound_human_ID',
            fieldLabel: '复核人员',
            style: 'margin-left:19px',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
        }],
    });
    function zdbh() {
        var tm = Ext.getCmp('Document_date').getValue()
        $.ajax({
            type: "POST",
            url: "/Caigouyufu/zdbh",
            data: "{time:'" + tm + "'}",
            dataType: "json",
            contentType: "application/json",
            success: function (res) {
                Ext.getCmp('Bill_advance').setValue(res)
            },
            error: function (ex) {
                alert("Error:" + ex.responseText);
            }
        })
    }
    var forms = Ext.create('Ext.form.Panel', {
        bodyPadding: 5,
        id: 'aaa',
        width: '100%',
        height: '100%',
        layout: "column",
        baseCls: 'x-plain',
        items: [{
            xtype: 'textfield',
            name: 'Customer',
            fieldLabel: '供应商',
            width: 250,
            id: 'Supplier_ID',
            labelWidth: 80,
            enableKeyEvents: true,
            listeners: {
                render: function (field) {
                    Ext.QuickTips.init();
                    Ext.QuickTips.register({
                        target: field.el,
                        text: '按F4选择客户'
                    })
                },
                keyup: function (textField, e) {
                    if (e.getKey() == 115) {
                        gyscx();
                        windows2.show();
                    }
                }
            }
        }, {
            id: 'gysid',
            xtype: 'textarea',
            width: 300,
            height: 50,
            name: 'createSql',
            hidden: true,
        }, {
            id: 'perid',
            xtype: 'textarea',
            width: 300,
            height: 50,
            name: 'createSql',
            hidden: true,
        }, {
            id: 'compuid',
            xtype: 'textarea',
            width: 300,
            height: 50,
            name: 'createSql',
            hidden: true,
        }, {
            id: 'bianhao',
            xtype: 'textarea',
            width: 300,
            height: 50,
            name: 'createSql',
            hidden: true,
        }, {
            style: 'margin-left:9px;color:blue;',
            xtype: 'textfield',
            name: 'Audit_status',
            id: 'Document_date',
            fieldLabel: '单据日期',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
            listeners: {
                blur: function () {
                    zdbh();
                }
            }
        }, {
            xtype: 'textfield',
            id: 'Settle_accounts1',
            fieldLabel: '结算方式一',
            width: 150,
            labelWidth: 80,
            anchor: '100%',
        }, {
            xtype: 'textfield',
            name: 'dizhiton',
            id: 'Money1',
            width: 99,
            labelWidth: 70,
            margin: "0 1",
            anchor: '100%',
        }, {
            style: 'margin-left:9px',
            xtype: 'textfield',
            name: 'BillNo',
            id: 'Bill_advance',
            style: "color:blue;margin-left:9px",
            fieldLabel: '单据号码',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
        }, {
            xtype: 'textfield',
            name: 'DeliveryAddress',
            id: 'Settle_accounts2',
            fieldLabel: '结算方式二',
            width: 150,
            labelWidth: 80,
            anchor: '100%',
        }, {
            xtype: 'textfield',
            name: 'dizhiton',
            id: 'Money2',
            width: 99,
            labelWidth: 70,
            margin: "0 1",
            anchor: '100%',
        }, {
            style: 'margin-left:9px',
            xtype: 'textfield', //多行文本域
            name: 'MoneyStyle',
            id: 'Coin_stop',
            fieldLabel: '币别',
            labelWidth: 80,
            width: 250,
            anchor: '100%',
        }, {
            xtype: 'textfield',
            name: 'DeliveryAddress',
            fieldLabel: '结算方式三',
            width: 150,
            labelWidth: 80,
            anchor: '100%',
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
            id: 'Exchange_rate',
            name: 'BillNo',
            style: "color:blue;margin-left:9px",
            fieldLabel: '汇率',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
        }, {
            xtype: 'textfield',
            name: 'Customer',
            id: 'Deposit_rate',
            fieldLabel: '折扣率(%)',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
        }, {
            fieldLabel: '冲款类型',
            xtype: 'combo',
            name: 'guowaimaoyi',
            style: "margin-left:9px",
            displayField: 'name',
            labelWidth: 80,
            width: 250,
            valueField: 'abbr',
            store: Ext.create('Ext.data.Store', {
                fields: ['abbr', 'name'],
                data: [{
                    "abbr": "1",
                    "name": "预付款"
                }
                ]
            }),
            value: '1',
            typeAhead: true,
            mode: 'local',
            triggerAction: 'all',
            selectOnFocus: true,
        }, {
            style: 'margin-left:9px;',
            xtype: 'datefield',
            name: 'BillDate',
            id: 'Termination_month',
            fieldLabel: '终止账月',
            width: 240,
            labelWidth: 70,
            anchor: '100%',
        }, {
            style: 'margin-left:9px',
            xtype: 'textfield',
            name: 'BillNo',
            style: "color:blue;margin-left:9px",
            fieldLabel: '凭证编号',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
        }, tableds, formsg]
    });

    //winform窗口
    var 采购预付款 = new Ext.Window({
        width: 570,
        height: 560,
        id: 'dz',
        title: "应付冲款单",
        closable: true,
        resizable: false, //设置是否可以改变大小
        draggable: true,
        anchor: '100%',
        items: [forms],
        bbar: [
            {
                xtype: "splitbutton",
                text: '审核',
                width: 90,
                menu: fielmenu,
                listeners: {
                    click: function () {
                        shenhe();
                    }
                }
            },
            {
                xtype: "splitbutton",
                text: '自动计算',
                width: 90,
                menu: fielmenu2
            },
            {
                xtype: "button",
                text: '上一页',
                width: 90,
                listeners: {
                    click: function () {
                        syy();
                    }
                }
            },
            {
                xtype: "button",
                text: '下一页',
                width: 90,
                listeners: {
                    click: function () {
                        xyy();
                    }
                }
            },
            {
                xtype: "button",
                text: '保存',
                width: 90,
                listeners: {
                    click: function () {
                        pd();
                    }
                }
            },
            {
                xtype: "button",
                text: '删除',
                width: 90
            }
        ],
    });
    var asda = [];
    function gyscx() {
        $.ajax({
            type: "POST",
            url: "/Caigouyufu/gyscx",
            data: "{}",
            dataType: "json",
            contentType: "application/json",
            success: function (res) {
                asda = res;
                jiaaa.store.loadData(asda);
            },
            error: function (ex) {
                alert("Error:" + ex.responseText);
            }
        })
    }
    function fuzhi(ID, FullName) {
        Ext.getCmp('gysid').setValue(ID);
        Ext.getCmp('Supplier_ID').setValue(FullName);
    }
    var jiaaa = Ext.create('Ext.grid.Panel', {
        store: {//配置数据源  
            fields: ['ID', 'FulName'],//定义字段  
            data: asda,
            autoLoad: true//自动加载
        },
        columns: [
             {
                 header: '供应商编号',
                 dataIndex: 'ID',
                 width: 193,
                 sortable: true,
             },
             {
                 header: '供应商名称',
                 dataIndex: 'FulName',
                 width: 193,
                 sortable: true,
             }
        ],
        listeners: {
            itemdblclick: function (dataview,
             record, item, index, e) {
                fuzhi(record.get('ID'), record.get('FulName'))
                windows2.close();
            }
        },
        height: 268,
        width: 388,
        autoScroll: false
    });
    var windows2 = new Ext.Window({
        width: 400,
        height: 300,
        title: "供应商选择",
        closable: true,
        resizable: false, //设置是否可以改变大小
        draggable: true,
        closeAction: "hide",
        items: [jiaaa]
    });
    var jg = [];
    var hh = 0;
    function caigdd(gysid) {
        $.ajax({
            type: "POST",
            url: "/Caigouyufu/cxcgdd",
            data: "{gysid:'" + gysid + "'}",
            dataType: "json",
            contentType: "application/json",
            success: function (res) {
                $.each(res, function (index, data) {
                    data.Document_date = new Date(parseInt(data.Document_date.substr(6))).toLocaleDateString();
                })
                jg = res;
                xiaosw.store.loadData(jg);
            },
            error: function (ex) {
                alert("Error:" + ex.responseText);
            }
        })
    }
    var xiaosw = Ext.create('Ext.grid.Panel', {
        store: {//配置数据源  
            fields: ['Bill_number', 'Document_date'],//定义字段  
            data: jg,
            autoLoad: true//自动加载  
        },
        columns: [
             {
                 header: '单据编号',
                 dataIndex: 'Bill_number',
                 width: 193,
                 sortable: true,
             },
             {
                 header: '单据日期',
                 dataIndex: 'Document_date',
                 width: 193,
                 sortable: true,
             }
        ],
        listeners: {
            itemdblclick: function (dataview,
             record, item, index, e) {
                usid = record.get('Bill_number');
                var record = grids.getStore().getAt(hh);
                record.set('Source_date', usid);
                record.commit();
                laiyuandan.close();
            }
        },
        height: 268,
        width: 388,
        autoScroll: false,
    });
    var laiyuandan = new Ext.Window({
        width: 400,
        height: 300,
        title: "选择单据",
        closable: true,
        resizable: false, //设置是否可以改变大小
        draggable: true,
        closeAction: "hide",
        items: [xiaosw]
    });
    function afronction() {
        Ext.Ajax.request({
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
        });
        document.getElementById("asd").value = song
        alert(song); // 序列化表单
    }

    function fromstrn() {
        //alert(Ext.encode(forms.getForm().getValues())); 序列化表单

        //var record=grids.getSelectionModel().getLastSelected(); //获取选中的一行对象

        //	var clikd=grids.getSelectionModel().getSelected();//获取选中的一行

        //	var selecto=grids.getSelectionModel().getSelection(); //选中多行 返回数组
        //for(var i=0;i<selecto.length;i++){
        //	selecto[i].get('name');
        //}

        //var cout=grids.getStore().getCount(); //获取grid行数

        //var name=record.get('name');//获取值

        //for(var i=0;i<grids.store.data.length;i++){ 
        //var grit=grids.store.getAt(i).data; //获取全部值
        //	alert(grit.bianma);
        //}
        //	}

        //var arr=[]; //序列化表格
        //var sni=grids.store.data;
        //sni.each(function(record){
        //arr.push(record.data);
        //})
        //alert(Ext.encode(arr));
        //}

        //grid.getSelectionModel().selectRow(0);//默认选中第一行

        //grid.getView().refresh(); //刷新表格

        //grids.store.removeAll();//移除全部数据

        //grids.store.removeAt(0); //删除指定的行

        //var selecto=grids.getSelectionModel().getSelection(); selecto.length>0是选中的 判断是否选中一行

        //var selecto=grids.getSelectionModel().getSelection();
        //var ston=grids.getStore(); 
        //var selectData=selecto[0];
        //var datainded=ston.indexOf(selectData);
        //grids.store.removeAt(datainded); //删除选中行

        //	var mosld=grids.getSelectionModel().getLastSelected();
        //		mosld.set('name',123); //修改选中的列
        //		mosld.commit();

    }
    return 采购预付款;
}