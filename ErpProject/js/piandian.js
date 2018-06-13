function piandian() {

    var fielmenu = new Ext.menu.Menu({
        items: [{
            text: '历史交易查询', handler: function () {
                afronction();

            }
        }]
    });
    var fielmenu2 = new Ext.menu.Menu({
        items: [{ text: '销售报价转入' }, { text: '销售订单转入' }]
    });
    var fielmenu3 = new Ext.menu.Menu({
        items: [{ text: '载入盘点物料' }, { text: '批号设定' }]
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
                    items: []
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
                         { header: '账面数量', dataIndex: 'lianxi' },
                          { header: '盘点数量', dataIndex: 'lianxi' },
                           { header: '盈亏数量', dataIndex: 'lianxi' },
                            { header: '单价', dataIndex: 'lianxi' },
                             { header: '盈亏金额', dataIndex: 'lianxi' },
                              { header: '批号', dataIndex: 'lianxi' },
                               { header: '原因', dataIndex: 'lianxi' }

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
        bbar: [{ xtype: "label", text: '合计:', width: 90 },
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
            name: 'SalesMan',
            bodyPadding: 5,
            fieldLabel: '盘点人员',
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
            fieldLabel: '盘点仓库',
            width: 250,
            labelWidth: 80,
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
            fieldLabel: '增值科目',
            width: 250,
            labelWidth: 80,
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
            style: 'margin-left:9px',
            xtype: 'textfield',
            name: 'BillNo',
            style: "color:blue;margin-left:9px",
            fieldLabel: '减值科目',
            width: 250,
            labelWidth: 70,
            anchor: '100%',
        }, {
            style: 'margin-left:9px',
            xtype: 'textfield', //多行文本域
            name: 'MoneyStyle',
            fieldLabel: '凭证编号',
            labelWidth: 70,
            width: 250,
            anchor: '100%',
        }, {
            style: 'margin-left:9px',
            xtype: 'checkbox', //多行文本域
            name: 'fapiaoshifou',
            hideLabels: true,
            checkboxToggle: true,

            boxLabel: "账面数量为零载入",
            items: [{ boxLabel: "复核后自动生成发票", inputValue: 1, checked: true }]
        }, tableds, formsg
        ]



    });

    //winform窗口
    var windowst = new Ext.Window({
        width: 640,
        height: 570,
        title: "盘点单",
        closable: true,
        resizable: false, //设置是否可以改变大小
        draggable: true,
        anchor: '100%',
        items: [forms],
        bbar: [{ xtype: "splitbutton", text: '功能', width: 90, menu: fielmenu3 }],
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