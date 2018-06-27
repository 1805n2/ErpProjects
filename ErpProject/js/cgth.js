function cgth() {
    var to = {};
    var pakgindex = 1;
    var pakecount = 0;
    $.ajax({
        type: "POST",
        url: "/LZX/poi",
        data: "{}",
        dataType: "json",
        contentType: "application/json",
        async: false,
        success: function (result) {
            pakecount = result;
            local();
        },
        error: function (ex) {
            alert("Error" + ex.responseText);
        }
    });
    Ext.onReady(function () {
        count();
    });
    function local() {
        
        $.ajax({
            type: "POST",
            url: "/LZX/Show",
            data: "{pakgindex:'" + pakgindex + "'}",
            dataType: "json",
            contentType: "application/json",
            success: function (result) {
                $.each(result, function (index, data) {
                    Ext.getCmp('Coin_stop').setValue(data.CoinId);
                    Ext.getCmp("dd_hetongshijian").setValue(data.Pdata);
                    Ext.getCmp('ID').setValue(data.supplierid);
                    Ext.getCmp('Affiliated_department').setValue(data.Affiliated_department);
                    Ext.getCmp('foreign_trade').setValue(data.foreign_trade);
                    Ext.getCmp('price_include').setValue((data.PriceOfTax == "0" ? "未税" : "含税"));
                    Ext.getCmp('storehouseID').setValue((data.storehouseID == "0" ? "否" : "是"));
                    Ext.getCmp('exchange_rate').setValue(data.ExchRate);
                    Ext.getCmp('storehouse').setValue(data.warehouseid);
                    Ext.getCmp('BillNo').setValue(data.Pbillno);
                    Ext.getCmp('Certificate_number').setValue(data.Certificate_number);
                    Ext.getCmp('Procurement_staff').setValue(data.Pesonner);
                    Ext.getCmp('personnel').setValue(data.personnel);
                    Ext.getCmp('Auditor').setValue(data.Auditor);
                    Ext.getCmp('Affiliated_department').setValue(data.bumenbianhao);

                });
                tuihuo();
            },
            error: function (ex) {
                alert("Error" + ex.responseText);
            }
        });
    }
    function count() {
        $.ajax({
            type: "POST",
            url: "/LZX/poi",
            data: "{}",
            dataType: "json",
            contentType: "application/json",
            async: false,
            success: function (result) {
                pakecount = result;
                local();
            },
            error: function (ex) {
                alert("Error" + ex.responseText);
            }
        });
    }
    function tuihuo() {
        var BillNo = Ext.getCmp('BillNo').getValue();
        $.ajax({
            type: "POST",
            url: "/LZX/tuihuo",
            data: "{name:'" + BillNo + "'}",
            dataType: "json",
            contentType: "application/json",
            async: false,
            success: function (result) {
                to = result;
                grids.store.loadData(to);
            },
            error: function (ex) {
                alert("Error" + ex.responseText);
            }
        });
    }
    function no() {
        var gedt = Ext.util.Format.date(Ext.getCmp('dd_hetongshijian').getValue(), 'Y-m-d');
        $.ajax({
            type: "POST",
            url: "/LZX/no",
            data: "{data:'" + gedt + "'}",
            dataType: "json",
            contentType: "application/json",
            async: false,
            success: function (result) {
                Ext.getCmp('BillNo').setValue(result);
            },
            error: function (ex) {
                alert("Error" + ex.responseText);
            }
        });
    }


    function Addzhu() {
        var Pdata = Ext.util.Format.date(Ext.getCmp('dd_hetongshijian').getValue(), 'Y-m-d');
        var name = Ext.getCmp('ID').getValue();

        var CoinId = Ext.getCmp('Coin_stop').getValue();

        var Pbillno = Ext.getCmp('BillNo').getValue();


        var supplierid;
        var bumenbianhao;
        var Pesonner;

        var personnel = 1;
        var PriceOfTax = (Ext.getCmp('price_include').getValue() == "未税" ? 0 : 1);
        var Auditor = Ext.getCmp('Auditor').getValue();
        var ExchRate = Ext.getCmp('exchange_rate').getValue();
        var CKID = Ext.getCmp('storehouse').getValue();
        var warehouseid;
        var storehouseID = (Ext.getCmp('storehouseID').getValue() == "否" ? 0 : 1);

        $.ajax({
            type: "POST",
            url: "/LZX/CKID",
            data: "{name:'" + CKID + "'}",
            dataType: "json",
            contentType: "application/json",
            async: false,
            success: function (result) {
                $.each(result, function (index, data) {
                    warehouseid = data.Warehousenumber
                });
            },
            error: function (ex) {
                alert("Error" + ex.responseText);
            }
        });

        $.ajax({
            type: "POST",
            url: "/LZX/Fund",
            data: "{name:'" + name + "'}",
            dataType: "json",
            contentType: "application/json",
            async: false,
            success: function (result) {
                $.each(result, function (index, data) {
                    supplierid = data.ID,
                    bumenbianhao = data.department,
                    Pesonner = data.PersonID
                });
            },
            error: function (ex) {
                alert("Error" + ex.responseText);
            }
        });
        $.ajax({
            type: "POST",
            url: "/LZX/Add",
            data: "{a:{Pbillno:'" + Pbillno + "',supplierid:'" + supplierid + "','Pdata':'" + Pdata + "','PriceOfTax':'" + PriceOfTax + "','storehouseID':'" + storehouseID + "','CoinId':'" + CoinId + "','ExchRate':'" + ExchRate + "','warehouseid':'" + warehouseid + "','Pesonner':'" + Pesonner + "','bumenbianhao':'" + bumenbianhao + "','personnel':'" + personnel + "','Auditor':'1','job':'1'}}",
            dataType: "json",
            contentType: "application/json",
            async: false,
            success: function (result) {
                Add();
            },
            error: function (ex) {
                alert("Error" + ex.responseText);
            }
        });


    }
    function Add() {
        var records = grids.getStore();
        var count = records.getCount();
        var billno = Ext.getCmp('BillNo').getValue();
        var infol;
        var ie = [];
        for (var i = 0; i < count ; i++) {
            var record = records.getAt(i);
            if (record.data.Material_number != "") {
                infol = {
                    Pbillno: billno,
                    Hid: i + 1,
                    matterid: record.data.Material_number,
                    COUNT: record.data.quantity,
                    outside: '退货表',
                    Billnonum: billno,
                }
                ie[i] = infol;
            }
        }
        $.ajax({
            type: "POST",
            url: "/LZX/Addzi",
            data: "{b:" + JSON.stringify(ie) + "}",
            dataType: "json",
            contentType: "application/json",
            async: false,
            success: function (result) {
                alert("ADD  ok!");
                count();
                Ext.getCmp('xia').enable();
                Ext.getCmp('top').enable();
                if (pakgindex == 1) {
                    Ext.getCmp('top').disable();
                }
                if (pakgindex == pakecount) {
                    Ext.getCmp('xia').disable();
                }
            },
            error: function (ex) {
                alert("Error" + ex.responseText);
            }
        });
    }
    function pzi() {
        var get = Ext.getCmp('BillNo').getValue();
        $.ajax({
            type: "POST",
            url: "/LZX/pzi",
            data: "{no:'" + get + "'}",
            dataType: "json",
            contentType: "application/json",
            async: false,
            success: function (result) {
                m = result;
                grids.store.loadData(m);
            },
            error: function (ex) {
                alert("Error" + ex.responseText);
            }
        });
    }


    function Editzhu() {
        var Pdata = Ext.util.Format.date(Ext.getCmp('dd_hetongshijian').getValue(), 'Y-m-d');
        var name = Ext.getCmp('ID').getValue();

        var CoinId = Ext.getCmp('Coin_stop').getValue();

        var Pbillno = Ext.getCmp('BillNo').getValue();


        var supplierid;
        var bumenbianhao;
        var Pesonner;

        var personnel = 1;
        var PriceOfTax = (Ext.getCmp('price_include').getValue() == "未税" ? 0 : 1);
        var Auditor = Ext.getCmp('Auditor').getValue();
        var ExchRate = Ext.getCmp('exchange_rate').getValue();
        var CKID = Ext.getCmp('storehouse').getValue();
        var warehouseid;
        var storehouseID = (Ext.getCmp('storehouseID').getValue() == "否" ? 0 : 1);



        var records = grids.getStore();
        var count = records.getCount();
        var billno = Ext.getCmp('BillNo').getValue();
        var infol;
        var ie = [];
        for (var i = 0; i < count ; i++) {
            var record = records.getAt(i);
            if (record.data.Material_number != "") {
                infol = {
                    Pbillno: billno,
                    Hid: i + 1,
                    matterid: record.data.Material_number,
                    COUNT: record.data.quantity,
                    outside: '退货表',
                    Billnonum: billno,
                }
                ie[i] = infol;
            }
        }
        $.ajax({
            type: "POST",
            url: "/LZX/CKID",
            data: "{name:'" + CKID + "'}",
            dataType: "json",
            contentType: "application/json",
            async: false,
            success: function (result) {
                $.each(result, function (index, data) {
                    warehouseid = data.Warehousenumber
                });
            },
            error: function (ex) {
                alert("Error" + ex.responseText);
            }
        });

        $.ajax({
            type: "POST",
            url: "/LZX/Fund",
            data: "{name:'" + name + "'}",
            dataType: "json",
            contentType: "application/json",
            async: false,
            success: function (result) {
                $.each(result, function (index, data) {
                    supplierid = data.ID,
                    bumenbianhao = data.department,
                    Pesonner = data.PersonID
                });
            },
            error: function (ex) {
                alert("Error" + ex.responseText);
            }
        });
        $.ajax({
            type: "POST",
            url: "/LZX/Editzhu",
            data: "{a:{Pbillno:'" + Pbillno + "',supplierid:'" + supplierid + "','Pdata':'" + Pdata + "','PriceOfTax':'" + PriceOfTax + "','storehouseID':'" + storehouseID + "','CoinId':'" + CoinId + "','ExchRate':'" + ExchRate + "','warehouseid':'" + warehouseid + "','Pesonner':'" + Pesonner + "','bumenbianhao':'" + bumenbianhao + "','personnel':'" + personnel + "','Auditor':'1','job':'1'},b:" + JSON.stringify(ie) + "}",
            dataType: "json",
            contentType: "application/json",
            async: false,
            success: function (result) {
                alert("Edit OK!");
                count();
                Ext.getCmp('xia').enable();
                Ext.getCmp('top').enable();
                if (pakgindex == 1) {
                    Ext.getCmp('top').disable();
                }
                if (pakgindex == pakecount) {
                    Ext.getCmp('xia').disable();
                }
            },
            error: function (ex) {
                alert("Error" + ex.responseText);
            }
        });

    }
    function Editzi() {

    }
    var fielmenu2 = new Ext.menu.Menu({
        items: [{
            text: '采购入库转入',
            listeners: {
                click: function () {
                    Ext.QuickTips.init();
                    ruku().show();
                }
            }

        }]
    });
    var fielmenu3 = new Ext.menu.Menu({
        items: [{ text: '批号设定' }, { text: '条码打印' }, { text: '批次变更单价' }]
    });




    var grids = Ext.create('Ext.grid.Panel', {

        listeners: {
            containerdblclick: function (grid, e, eOpts) { //单击事件

                if (Ext.getCmp('BillNo').getValue() != "") {
                    grid.getStore().add({ 'quantity': '0' });
                } else {
                    alert("请输入单据编号");
                }
            },

            itemcontextmenu: function (t, record, item, index, e, eOpts) {

                e.preventDefault();
                Ext.create('Ext.menu.Menu', {
                    width: 50,
                    height: 50,
                    margin: '0 0 10 0',
                    items: [{
                        text: '删除',
                        handler: function () {
                            var records = grids.getStore();
                            records.removeAt(index);
                        }
                    }]
                }).showAt(e.getXY());
            }
        }, plugins: [
                    Ext.create('Ext.grid.plugin.CellEditing', {
                        clicksToEdit: 1
                    })
        ],
        store: {
            fields: ['pop', 'Material_number', 'name_of_material', 'specifications', 'unit', 'quantity', 'price', 'money', 'Source_list', 'number', 'Entry_remarks'],
            data: to,
            autoLoad: true
        },
        columns:
            [
                     {
                         header: '（栏号）',
                         xtype: 'rownumberer',
                         dataIndex: 'pop',
                         width: 70,
                         sortable: false, editor: {
                             xtype: 'textfield',
                         }
                     },

                    { header: '物料编号', dataIndex: 'Material_number', width: 150, },
                     {
                         header: '物料名称', dataIndex: 'name_of_material', width: 190, editor: {
                             xtype: 'textfield',
                             id: 'mka',
                             listeners: {
                                 focus: function (grid, e, eOpts) {
                                     wuliao().show();
                                 }

                             }
                         }
                     },
                         { header: '规格型号', dataIndex: 'specifications', editor: {xtype: 'textfield',}},
                         { header: '单位名称', dataIndex: 'unit', editor: { xtype: 'textfield', } },
                         {
                             header: '数量', dataIndex: 'quantity', editor: {
                                 xtype: 'numberfield',
                                 id: 'count',
                                 listeners: {
                                     "blur": function (grid, rowIndex, columnIndex, e) {
                                         var a = Ext.getCmp('count').getValue();
                                         var b = Ext.getCmp('prices').getValue();

                                     }

                                 }
                             }
                         },
                         {
                             header: '单价', dataIndex: 'price', editor: {
                                 xtype: 'numberfield',
                                 readOnly: true,
                                 id: 'prices', editor: { xtype: 'textfield', }
                             }
                         },
                         {
                             header: '金额', dataIndex: 'money', editor: {
                                 xtype: 'textfield',
                                 readOnly: true,
                                 id: 'mata', editor: { xtype: 'textfield', }
                             }
                         },
                         { header: '来源单别', dataIndex: 'Source_list', editor: {xtype: 'textfield',}},
{ header: '来源单号', dataIndex: 'number',editor: {xtype: 'textfield',} },
                         { header: '分录备注', dataIndex: 'Entry_remarks', editor: { xtype: 'textfield', } },
                         { header: 'ID', dataIndex: 'Tid', editor: { xtype: 'textfield', } }
            ],
        height: 130,
        width: 1551,
        autoScroll: false,

    })
    var filterPanel = Ext.create('Ext.panel.Panel', {
        bodyPadding: 6,  // 避免Panel中的子元素紧邻边框
        width: 1551,
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
        items: [{ title: '内容', autoScroll: true, items: [filterPanel] }, { title: '备注', xtype: 'textarea', name: 'Remark', fieldLabel: '备注', labelWidth: 30, }],
    });


    var formsg = Ext.create('Ext.form.Panel', {
        bodyPadding: 5,
        height: '100%',
        layout: "column",
        baseCls: 'x-plain',
        items: [{
            xtype: 'textfield',
            name: 'Procurement_staff',
            id: 'Procurement_staff',
            bodyPadding: 5,
            fieldLabel: '业务人员',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
        }, {
            xtype: 'textfield',
            name: 'personnel',
            id: 'personnel',
            fieldLabel: '制单人员',
            style: 'margin-left:19px',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
        }, {
            xtype: 'textfield',
            name: 'Affiliated_department',
            id: 'Affiliated_department',
            fieldLabel: '所属部门',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
        }, {
            xtype: 'textfield',
            name: 'Auditor',
            id: 'Auditor',
            fieldLabel: '复核人员',
            style: 'margin-left:19px',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
        }, {
            xtype: 'textfield',
            name: 'ProdProject',
            fieldLabel: '所属项目',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
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
            name: 'ID',
            fieldLabel: '供应商',
            id: 'ID',
            width: 250,
            labelWidth: 80,
            emptyText: '请输入供应商',
            anchor: '100%',
            enableKeyEvents: true,
            listeners: {
                render: function (p) {
                    Ext.QuickTips.init();
                    Ext.QuickTips.register({
                        target: p.el,
                        text: '按F4弹出供应商主文件',
                    });
                },
                keyup: function (textFieId, e) {
                    if (e.getKey() == 115) {
                        gys().show();

                    }
                }
            }
        }, {
            style: 'margin-left:9px;color:blue',
            xtype: 'datefield',
            id: 'dd_hetongshijian',
            name: 'Document_date',
            fieldLabel: '单据日期',
            format: 'Y-m-d',
            width: 250,
            labelWidth: 70,
            anchor: '100%',
            listeners: {
                "blur": function () {
                    no();
                }
            }
        }, {
            xtype: 'textfield',
            name: 'DeliveryAddress',
            fieldLabel: '供应商地址',
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
            name: 'BillNo',
            id: 'BillNo',
            style: "color:blue;margin-left:9px",
            fieldLabel: '单据号码',
            width: 250,
            labelWidth: 70,
            anchor: '100%',
        }, {
            xtype: 'textfield',
            name: 'foreign_trade',
            id: 'foreign_trade',
            fieldLabel: '国外贸易',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
        }, {
            style: 'margin-left:9px',
            xtype: 'textfield', //多行文本域
            name: 'Coin_stop',
            id: 'Coin_stop',
            fieldLabel: '币别',
            labelWidth: 70,
            width: 250,
            anchor: '100%',
        }, {
            fieldLabel: '单价是否含税',
            xtype: 'combo',
            name: 'price_include',
            id: 'price_include',
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
            value: '未税',
            typeAhead: true,
            mode: 'local',
            triggerAction: 'all',
            selectOnFocus: true,

        }, {
            style: 'margin-left:9px',
            xtype: 'textfield', //多行文本域
            name: 'exchange_rate',
            id: 'exchange_rate',
            fieldLabel: '汇率',
            labelWidth: 70,
            width: 250,
            anchor: '100%',
        }, {
            xtype: 'textfield',
            name: 'storehouse',
            id: 'storehouse',
            fieldLabel: '仓库',
            width: 250,
            style: "color:blue",
            labelWidth: 80,
            anchor: '100%',
            enableKeyEvents: true,
            listeners: {
                render: function (p) {
                    Ext.QuickTips.init();
                    Ext.QuickTips.register({
                        target: p.el,
                        text: '按F4弹出仓库主文件',
                    });
                },
                keyup: function (textFieId, e) {
                    if (e.getKey() == 115) {
                        ck().show();
                    }
                }
            }
        }, {
            fieldLabel: '重新入库',
            xtype: 'combo',
            name: 'storehouseID',
            id: 'storehouseID',
            style: "margin-left:9px",
            displayField: 'name',
            labelWidth: 70,
            width: 250,

            valueField: 'abbr',
            store: Ext.create('Ext.data.Store', {
                fields: ['abbr', 'name'],
                data: [
                    { "abbr": "是", "name": "是" },
                    { "abbr": "否", "name": "否" }

                ]
            }),
            value: '否',
            typeAhead: true,
            mode: 'local',
            triggerAction: 'all',
            selectOnFocus: true,

        }, {
            xtype: 'textfield',
            name: 'Certificate_number',
            id: 'Certificate_number',
            fieldLabel: '凭证单号',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
        }, {
            style: 'margin-left:9px',
            xtype: 'checkbox', //多行文本域
            name: 'fapiaoshifou',
            hideLabels: true,
            checkboxToggle: true,

            boxLabel: "复核后自动生成发票",
            items: [{ boxLabel: "复核后自动生成发票", inputValue: 1, checked: true }]
        }, tableds, formsg
        ]



    });

    function get_MsgIds() {
        var recs = grids.getSelectionModel().getSelections();// 获取选择行(一行或多行)的数据集  
        var list = [];
        if (recs.length != 0) {
            for (var i = 0 ; i < recs.length ; i++) {
                var rec = recs[i];// 取得一行  
                list.push(rec.get('MsgId'))// 取得该行中的某个属性的值  
            }
        }
        return list;
    }

    //winform窗口
    var 采购退货单 = new Ext.Window({
        width: 640,
        height: 570,
        title: "采购退货单",
        closable: true,
        resizable: false, //设置是否可以改变大小
        draggable: true,
        anchor: '100%',
        items: [forms],
        bbar: [
		{ xtype: "splitbutton", text: '转单', width: 90, menu: fielmenu2 },
		{ xtype: "splitbutton", text: '功能', width: 90, menu: fielmenu3 },
        {
            xtype: "button", text: '保存', width: 90, id: 'downSelectBtn',
            listeners: {
                click: function () {
                    var tValue = Ext.getCmp('BillNo').getValue();
                    $.ajax({
                        type: "POST",
                        url: "/LZX/Counts",
                        data: "{name:'" + tValue + "'}",
                        dataType: "json",
                        contentType: "application/json",
                        async: false,
                        success: function (result) {
                            if (result > 0) {
                                Editzhu();
                            } else {
                                Addzhu();
                            }
                        },
                        error: function (ex) {
                            alert("Error" + ex.responseText);
                        }
                    });
                }
            }
        }, {
            xtype: "button", text: '新增', width: 90, listeners: {
                click: function () {
                    forms.getForm().reset();
                    to = {};
                    grids.store.loadData(to);
                }
            }
        }, {
            xtype: "button", text: '上一页', width: 90, id: 'top', listeners: {
                click: function () {
                    count();
                    pakgindex--;
                    Ext.getCmp('top').enable();
                    Ext.getCmp('xia').enable();
                    if (pakgindex == 1) {
                        Ext.getCmp('top').disable();
                    } if (pakgindex == pakecount) {
                        Ext.getCmp('xia').disable();
                    }
                }
            }
        }, {
            xtype: "button", text: '下一页', width: 90, id: 'xia', listeners: {
                click: function () {
                    count();
                    pakgindex++;
                    Ext.getCmp('xia').enable();
                    Ext.getCmp('top').enable();
                    if (pakgindex == pakecount) {
                        Ext.getCmp('xia').disable();
                    }
                    if (pakgindex == 1) {
                        Ext.getCmp('top').disable();
                    }
                }
            }
        }, {
            xtype: "button", text: '删除', width: 90, listeners: {
                click: function () {
                    var data = Ext.getCmp('BillNo').getValue();
                    if (data != "") {
                        $.ajax({
                            type: "POST",
                            url: "/LZX/Del",
                            data: "{no:'" + data + "'}",
                            dataType: "json",
                            contentType: "application/json",
                            async: false,
                            success: function (result) {
                                if (result > 0) {
                                    alert("Del  OK");
                                    pakgindex = 1;
                                    count();
                                }
                            },
                            error: function (ex) {
                                alert("Error" + ex.responseText);
                            }
                        });
                    }
                }
            }
        }
        ],
    });
    Ext.getCmp('xia').enable();
    Ext.getCmp('top').enable();
    if (pakgindex == 1) {
        Ext.getCmp('top').disable();
    }
    if (pakgindex == pakecount) {
        Ext.getCmp('xia').disable();
    }
    function wuliao() {

        var ment = {};
        $.ajax({
            type: "POST",
            url: "/LZX/record",
            data: "{}",
            dataType: "json",
            async: false,
            contentType: "application/json",
            success: function (result) {
                ment = result;
            },
            error: function (ex) {
                alert("Error" + ex.responseText);
            }
        });
        var userStore = Ext.create('Ext.data.Store',

{

    // 直接使用data指定数据

    data: ment,

    fields: [

         'ProdID', 'ClassID', 'MajorSupplierName', 'ProdName'

    ]

});
        var wlname = Ext.create('Ext.grid.Panel', {
            id: 'gridTest',

            columns: [
                        { header: '（物料编号）', dataIndex: 'ProdID', width: 150, },
                         {
                             header: '（物料名称）', dataIndex: 'ProdName', width: 170, editor: {
                                 xtype: 'textfield',
                             }
                         }


            ],

            renderTo: Ext.getBody(),
            height: 130,
            width: 480,
            autoScroll: false,
            store: userStore,
            listeners: {
                itemdblclick: function (dataview, record, item, index, e) {
                    windows2.close();
                    $.ajax({
                        type: "POST",
                        url: "/LZX/records",
                        data: "{no:'" + record.get("ProdID") + "'}",
                        dataType: "json",
                        async: false,
                        contentType: "application/json",
                        success: function (result) {
                            to = result;
                            var records = grids.getStore();
                            var count = records.getCount();
                            if (count > 1) {
                                records.insert(count - 1, to);
                            } else {
                                grids.store.loadData(to);
                            }
                        },
                        error: function (ex) {
                            alert("Error" + ex.responseText);
                        }
                    });

                }
            }
        })

        var wls = Ext.create('Ext.form.Panel', {
            bodyPadding: 5,
            height: '100%',
            layout: "column",
            baseCls: 'x-plain',
            closeAction: 'destroy',
            items: [
            {
                name: 'news.status',
                id: 'socrd',
                allowBlank: false,
                xtype: 'combo',
                editable: false,
                mode: 'local',
                triggerAction: 'all',
                emptyText: '请选择',
                store: ['物料名称', '物料类别', '供应商名称'],
                value: 1,
                listeners: {
                    select: function (combo, record, index) {
                        var xzname = Ext.getCmp("socrd").value;
                        if (xzname == '物料名称') {
                            var bColum = [
                                { header: '（物料编号）', dataIndex: 'ProdID', width: 150, },
                             { header: '（物料名称）', dataIndex: 'ProdName', width: 170 }
                            ];
                            Ext.getCmp('gridTest').reconfigure(wlname.store, bColum);
                        } else if (xzname == '物料类别') {
                            var bColum = [
                                { header: '（物料编号）', dataIndex: 'ProdID', width: 150, },
                             { header: '（物料类别）', dataIndex: 'ClassID', width: 170 }
                            ];
                            Ext.getCmp('gridTest').reconfigure(wlname.store, bColum);
                        } else if (xzname == '供应商名称') {
                            var bColum = [
                                { header: '（物料编号）', dataIndex: 'ProdID', width: 150, },
                             { header: '（供应商名称）', dataIndex: 'MajorSupplierName', width: 170 }
                            ];
                            Ext.getCmp('gridTest').reconfigure(wlname.store, bColum);
                        }
                    }
                }


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
                autoScroll: true, items: [wlname]
            },

            ]


        });
        //winform窗口
        var windows2 = new Ext.Window({
            width: 500,
            height: 225,
            title: "物料选择",
            closable: true,
            resizable: false, //设置是否可以改变大小
            draggable: true,
            closeAction: "hide",
            anchor: '100%',
            items: [wls],
        });
        return windows2;
    };



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



    //仓库窗体  
    function ck() {
        var ment = {};
        $.ajax({
            type: "POST",
            url: "/LZX/CK",
            data: "{}",
            dataType: "json",
            async: false,
            contentType: "application/json",
            success: function (result) {
                ment = result;
            },
            error: function (ex) {
                alert("Error" + ex.responseText);
            }
        });
        var userStore = Ext.create('Ext.data.Store',

{

    // 直接使用data指定数据

    data: ment,

    fields: [

         'Warehousenumber', 'Warehousename'

    ]

});



        var ckname = Ext.create('Ext.grid.Panel', {
            columns: [
                     {
                         header: '（仓库编号）', dataIndex: 'Warehousenumber', width: 100,

                     },
                        {
                            header: '（仓库名称）', dataIndex: 'Warehousename', width: 100,

                        }
            ],
            height: 130,
            width: 480,
            autoScroll: false,
            store: userStore,
            listeners: {
                itemdblclick: function (dataview, record, item, index, e) {
                    ckwindowst.close();
                    Ext.getCmp('storehouse').setValue(record.get("Warehousename"));

                }
            }
        })


        var cks = Ext.create('Ext.form.Panel', {
            bodyPadding: 5,
            height: '100%',
            layout: "column",
            baseCls: 'x-plain',
            closeAction: 'destroy',
            items: [
            {
                name: 'news.status',
                allowBlank: false,
                xtype: 'combo',
                editable: false,
                mode: 'local',
                triggerAction: 'all',
                store: ['仓库编号', '仓库名称'],
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
                autoScroll: true, items: [ckname]
            },

            ]


        });

        //winform窗口
        var ckwindowst = new Ext.Window({
            width: 500,
            height: 225,
            title: "仓库设定",
            closable: true,
            resizable: false, //设置是否可以改变大小
            draggable: true,
            anchor: '100%',
            items: [cks],
        });
        return ckwindowst;


    };

    //供应商窗体
    function gys() {
        var ment = {};
        $.ajax({
            type: "POST",
            url: "/LZX/GYS",
            data: "{}",
            dataType: "json",
            async: false,
            contentType: "application/json",
            success: function (result) {
                ment = result;
            },
            error: function (ex) {
                alert("Error" + ex.responseText);
            }
        });
        var userStore = Ext.create('Ext.data.Store',

{

    // 直接使用data指定数据

    data: ment,

    fields: [

         'ID', 'FundsAttribution', 'ShortName'

    ]

});



        var gysname = Ext.create('Ext.grid.Panel', {
            columns: [
                     {
                         header: '（供应商序号）', dataIndex: 'ID', width: 100,

                     },
                        {
                            header: '（供应商编号）', dataIndex: 'FundsAttribution', width: 100,

                        },
                         {
                             header: '（供应商简称）', dataIndex: 'ShortName', width: 120, editor: {
                                 xtype: 'textfield',
                             }
                         },
            ],
            height: 130,
            width: 480,
            autoScroll: false,
            store: userStore,
            listeners: {
                itemdblclick: function (dataview, record, item, index, e) {
                    gyswindowst.close();
                    Ext.getCmp('ID').setValue(record.get("ShortName"));
                    $.ajax({
                        type: "POST",
                        url: "/LZX/Funds",
                        data: "{ID:" + record.get("ID") + "}",
                        dataType: "json",
                        async: false,
                        contentType: "application/json",
                        success: function (result) {
                            $.each(result, function (index, data) {
                                Ext.getCmp('Procurement_staff').setValue(data.PersonID);
                                Ext.getCmp('Affiliated_department').setValue(data.department);
                            });
                        },
                        error: function (ex) {
                            alert("Error" + ex.responseText);
                        }
                    });
                }
            }
        })


        var gyss = Ext.create('Ext.form.Panel', {
            bodyPadding: 5,
            height: '100%',
            layout: "column",
            baseCls: 'x-plain',
            closeAction: 'destroy',
            items: [
            {
                name: 'news.status',
                allowBlank: false,
                xtype: 'combo',
                editable: false,
                mode: 'local',
                triggerAction: 'all',
                store: ['供应商编号', '账款归属', '账款归属', '供应商名称', '类别', '类别名称', '地区', '地区名称', '币别'],
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
                autoScroll: true, items: [gysname]
            },

            ]


        });

        //winform窗口
        var gyswindowst = new Ext.Window({
            width: 500,
            height: 225,
            title: "供应商主文件",
            closable: true,
            resizable: false, //设置是否可以改变大小
            draggable: true,
            anchor: '100%',
            items: [gyss],
        });
        return gyswindowst;


    };


    //入库表窗体
    function ruku() {

        var ment = {};
        $.ajax({
            type: "POST",
            url: "/LZX/list",
            data: "{}",
            dataType: "json",
            async: false,
            contentType: "application/json",
            success: function (result) {

                $.each(result, function (a, b) {
                    b.Document_date = new Date(parseInt(b.Document_date.substring(6))).toLocaleDateString();
                })
                ment = result;
            },
            error: function (ex) {
                alert("Error" + ex.responseText);
            }
        });
        var userStore = Ext.create('Ext.data.Store',

{

    // 直接使用data指定数据

    data: ment,

    fields: [

         'Bill_number', 'Document_date', 'storehouse', 'ID'

    ]

});
        var rkname = Ext.create('Ext.grid.Panel', {
            id: 'gridTest',

            columns: [
                        { header: '（单据编号）', dataIndex: 'Bill_number', width: 80, },
                         {
                             header: '（单据日期）', dataIndex: 'Document_date', width: 120, editor: {
                                 xtype: 'textfield',
                             }
                         }


            ],

            renderTo: Ext.getBody(),
            height: 130,
            width: 480,
            autoScroll: false,
            store: userStore,
            listeners: {
                itemdblclick: function (dataview, record, item, index, e) {
                    rkwindowst.close();
                    $.ajax({
                        type: "POST",
                        url: "/LZX/mike",
                        data: "{no:'" + record.get("Bill_number") + "'}",
                        dataType: "json",
                        async: false,
                        contentType: "application/json",
                        success: function (result) {
                            $.each(result, function (index, data) {
                                var stateDate = new Date(parseInt(data.Document_date.substring(6))).toLocaleDateString();
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
                                Ext.getCmp('Coin_stop').setValue(data.Coin_stop);
                                Ext.getCmp("dd_hetongshijian").setValue(c);


                                Ext.getCmp('ID').setValue(data.ID);
                                Ext.getCmp('Affiliated_department').setValue(data.Affiliated_department);
                                Ext.getCmp('foreign_trade').setValue(data.foreign_trade);

                                Ext.getCmp('price_include').setValue(data.price_include);

                                Ext.getCmp('exchange_rate').setValue(data.exchange_rate);

                                Ext.getCmp('storehouse').setValue(data.storehouse);

                                Ext.getCmp('Certificate_number').setValue(data.Certificate_number);
                                Ext.getCmp('Procurement_staff').setValue(data.Procurement_staff);
                                Ext.getCmp('Producer').setValue(data.Producer);
                                Ext.getCmp('Auditor').setValue(data.Auditor);
                            });
                        },
                        error: function (ex) {
                            alert("Error" + ex.responseText);
                        }
                    });
                    $.ajax({
                        type: "POST",
                        url: "/LZX/ruku",
                        data: "{no:'" + record.get("Bill_number") + "'}",
                        dataType: "json",
                        async: false,
                        contentType: "application/json",
                        success: function (result) {
                            to = result;
                            grids.store.loadData(to);
                        },
                        error: function (ex) {
                            alert("Error" + ex.responseText);
                        }
                    });

                }
            }
        })

        var rks = Ext.create('Ext.form.Panel', {
            bodyPadding: 5,
            height: '100%',
            layout: "column",
            baseCls: 'x-plain',
            closeAction: 'destroy',
            items: [
            {
                name: 'news.status',
                id: 'socrd',
                allowBlank: false,
                xtype: 'combo',
                editable: false,
                mode: 'local',
                triggerAction: 'all',
                emptyText: '请选择',
                store: ['单据日期', '仓库名称', '供应商名称'],
                value: 1,
                listeners: {
                    select: function (combo, record, index) {
                        var xzname = Ext.getCmp("socrd").value;
                        if (xzname == '单据日期') {
                            var bColum = [
                                { header: '（单据编号）', dataIndex: 'Bill_number', width: 80, },
                             { header: '（单据日期）', dataIndex: 'Document_date', width: 120 }
                            ];
                            Ext.getCmp('gridTest').reconfigure(rkname.store, bColum);
                        } else if (xzname == '仓库名称') {
                            var bColum = [
                                { header: '（单据编号）', dataIndex: 'Bill_number', width: 80, },
                             { header: '（仓库名称）', dataIndex: 'storehouse', width: 120 }
                            ];
                            Ext.getCmp('gridTest').reconfigure(rkname.store, bColum);
                        } else if (xzname == '供应商名称') {
                            var bColum = [
                                { header: '（单据编号）', dataIndex: 'Bill_number', width: 80, },
                             { header: '（供应商名称）', dataIndex: 'ID', width: 120 }
                            ];
                            Ext.getCmp('gridTest').reconfigure(rkname.store, bColum);
                        }
                    }
                }


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
                autoScroll: true, items: [rkname]
            },

            ]


        });
        //winform窗口
        var rkwindowst = new Ext.Window({
            width: 500,
            height: 225,
            title: "采购入库表",
            closable: true,
            resizable: false, //设置是否可以改变大小
            draggable: true,
            anchor: '100%',
            items: [rks],
        });

        return rkwindowst;
    };


    return 采购退货单;
}
