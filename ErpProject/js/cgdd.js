
function cgdd() {
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
        items: [{ text: '批次变更单价' }, { text: '单况状态切换' }]
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
                grid.getStore().add({ 'name': '12', 'dizhi': '', 'bianma': '', 'lianxi': '' });

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
                    }]
                }

                ).showAt(e.getXY());
            }
        }, plugins: [
                    Ext.create('Ext.grid.plugin.CellEditing', {
                        clicksToEdit: 1
                    })
        ],
        columns: [
                     {
                         header: '（栏号）',
                         xtype: 'rownumberer',
                         dataIndex: 'lh',
                         width: 50,
                         sortable: false
                     },

                    { header: '物料编号', dataIndex: 'name', width: 100, },
                     {
                         header: '物料名称', dataIndex: 'dizhi', width: 120, editor: {
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
                     { header: '预入库日', dataIndex: 'lianxi' },
                         { header: '未入库量', dataIndex: 'lianxi' },
                         { header: '赠品', dataIndex: 'lianxi' },
                         { header: '分录备注', dataIndex: 'lianxi' },
                         { header: '来源单别', dataIndex: 'lianxi' },
                         { header: '来源单号', dataIndex: 'lianxi' },

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
        }, {
            xtype: 'textfield',
            name: 'Marker',
            fieldLabel: '制单人员',
            style: 'margin-left:19px',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
        }, {
            xtype: 'textfield',
            name: 'ProdDepart',
            fieldLabel: '所属部门',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
        }, {
            xtype: 'textfield',
            name: 'Permitter',
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
            name: 'Customer',
            fieldLabel: '供应商',
            width: 250,
            labelWidth: 80,
            emptyText: '请输入供应商',
            anchor: '100%',
        }, {
            style: 'margin-left:9px;color:blue',
            xtype: 'datefield',
            name: 'BillDate',
            fieldLabel: '单据日期',

            width: 250,
            labelWidth: 70,
            anchor: '100%',
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
            style: "color:blue;margin-left:9px",
            fieldLabel: '单据号码',
            width: 250,
            labelWidth: 70,
            anchor: '100%',
        }, {
            xtype: 'textfield',
            name: 'DeliveryAddress',
            fieldLabel: '采购订单类型',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
        }, {
            style: 'margin-left:9px',
            xtype: 'textfield', //多行文本域
            name: 'MoneyStyle',
            fieldLabel: '币别',
            labelWidth: 70,
            width: 250,
            anchor: '100%',
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

        }, {
            style: 'margin-left:9px',
            xtype: 'textfield', //多行文本域
            name: 'huilv',
            fieldLabel: '汇率',
            labelWidth: 70,
            width: 250,
            anchor: '100%',
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

        }, {
            fieldLabel: '送货地址',
            xtype: 'combo',
            name: 'IncludeRate',
            displayField: 'name',
            labelWidth: 80,
            width: 260,


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
}
