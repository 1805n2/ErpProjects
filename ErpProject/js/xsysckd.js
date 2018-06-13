function xsysckd(){
var fielmenu1 = new Ext.menu.Menu({
    items: [{ text: '载入单币别账款' }, { text: '载入笔多币别账款' }]
});
var fielmenu2 = new Ext.menu.Menu({
    items: [{ text: '以下冲款' }, { text: '以下折让' }, { text: '以下空白' }]
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



var grids1 = Ext.create('Ext.grid.Panel', {
    listeners: {
        //containerdblclick: function (grid, e, eOpts) { //单击事件
        //    grid.getStore().add({ 'name': '12', 'dizhi': '', 'bianma': '', 'lianxi': '' });
        //},
        //itemcontextmenu: function () {

        //}
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

                { header: '（原单日期）', dataIndex: 'name', width: 100, },
                { header: '（原单单号）', dataIndex: 'bianma' },
                { header: '（发票号码）', dataIndex: 'lianxi' },
                { header: '（交易对象）', dataIndex: 'lianxi' },
                { header: '（交易对象名称）', dataIndex: 'lianxi' },
                { header: '（部门编号）', dataIndex: 'lianxi' },
                { header: '（部门名称）', dataIndex: 'lianxi' },
                { header: '（采购人员）', dataIndex: 'lianxi' },
                { header: '（项目名称）', dataIndex: 'lianxi' },
                { header: '（币别）', dataIndex: 'lianxi' },
                { header: '（汇率）', dataIndex: 'lianxi' },
                { header: '（原单金额）', dataIndex: 'lianxi' },
                { header: '（现行金额）', dataIndex: 'lianxi' },
                { header: '（折让金额）', dataIndex: 'lianxi' },
                { header: '（冲款金额）', dataIndex: 'lianxi' },
                { header: '（冲抵金额）', dataIndex: 'lianxi' },

    ],
    height: 130,
    width: 1650,
    autoScroll: false,

})

var filterPanel = Ext.create('Ext.panel.Panel', {
    bodyPadding: 3,  // 避免Panel中的子元素紧邻边框
    width: 1658,
    items: [grids1],

});

var grids2 = Ext.create('Ext.grid.Panel', {
    listeners: {
        //containerdblclick: function (grid, e, eOpts) { //单击事件
        //    grid.getStore().add({ 'name': '12', 'dizhi': '', 'bianma': '', 'lianxi': '' });
        //},
        //itemcontextmenu: function () {

        //}
    }, plugins: [
                Ext.create('Ext.grid.plugin.CellEditing', {
                    clicksToEdit: 1
                })
    ],
    columns: [

            { header: '（应付冲款单号）', dataIndex: 'name', width: 100, },
            { header: '（来源别）', dataIndex: 'bianma' },
            { header: '（来源单号）', dataIndex: 'lianxi' },
            { header: '（预付余额）', dataIndex: 'lianxi' },
            { header: '（部门编号）', dataIndex: 'lianxi' },
            { header: '取用预付余额', dataIndex: 'lianxi' },
            { header: '（来源摘要）', dataIndex: 'lianxi' },
    ],
    height: 130,
    width: 710,
    autoScroll: false,
})

var filterPane2 = Ext.create('Ext.panel.Panel', {
    bodyPadding: 3,  // 避免Panel中的子元素紧邻边框
    width: 710,
    items: [grids2],

});
//if (valueField == '1') {

var tableds = Ext.create('Ext.TabPanel', {
    width: "100%",
    height: 200,
    autoScroll: true,
    bodyPadding: 5,
    items: [{ title: '内容', autoScroll: true, items: [filterPanel] },
            { title: '取用预付', autoScroll: true, items: [filterPane2] },
            { title: '备注', xtype: 'textarea', name: 'Remark', fieldLabel: '备注', labelWidth: 30, }],
});
// }


var formsg = Ext.create('Ext.form.Panel', {
    bodyPadding: 5,
    height: '100%',
    layout: "column",
    baseCls: 'x-plain',
    items: [{
        xtype: 'textfield',
        name: 'Marker',
        fieldLabel: '制单人员',
        style: 'margin-left:19px',
        width: 250,
        labelWidth: 80,
        anchor: '100%',
    }, {
        style: 'margin-left:9px',
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
        style: 'margin-left:9px',
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
        style: 'color:blue',
        xtype: 'textfield',
        name: 'Customer',
        fieldLabel: '供应商',
        width: 250,
        labelWidth: 80,
        //emptyText: '请输入客户',
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
        fieldLabel: '结算方式一',
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
        style: 'margin-left:9px;color:blue',
        xtype: 'textfield',
        name: 'BillNo',
        fieldLabel: '单据号码',
        width: 250,
        labelWidth: 70,
        anchor: '100%',
    }, {
        xtype: 'textfield',
        name: 'DeliveryAddress',
        fieldLabel: '结算方式二',
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
        style: 'margin-left:9px;color:blue',
        xtype: 'textfield',
        name: 'MoneyStyle',
        fieldLabel: '币别',
        labelWidth: 70,
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
        name: 'huilv',
        fieldLabel: '汇率',
        labelWidth: 70,
        width: 250,
        anchor: '100%',
    }, {
        xtype: 'textfield',
        name: 'Ware',
        fieldLabel: '折扣率(%)',
        width: 250,
        labelWidth: 80,
        anchor: '100%',
    }, {
        fieldLabel: '应付冲款类型',
        xtype: 'combo',
        name: 'guowaimaoyi',
        style: "margin-left:9px",
        displayField: 'name',
        labelWidth: 90,
        width: 250,

        valueField: 'abbr',
        store: Ext.create('Ext.data.Store', {
            fields: ['abbr', 'name'],
            data: [
                { "abbr": "1", "name": "预付款" },
                { "abbr": "2", "name": "付款冲款" },
                { "abbr": "3", "name": "预付冲应付" }
            ]
        }),
        value: '付款冲款',
        typeAhead: true,
        mode: 'local',
        triggerAction: 'all',
        selectOnFocus: true,

    }, {
        xtype: 'textfield',
        name: 'ProveBillNo',
        fieldLabel: '终止帐月',
        width: 250,
        labelWidth: 80,
        anchor: '100%',
    }, {
        style: 'margin-left:9px',
        Text: '',
        xtype: 'textfield',
        name: 'ProveBillNo',
        fieldLabel: '凭证编号',
        width: 250,
        labelWidth: 70,
        anchor: '100%',
    },
    tableds, formsg
    ]



});

//winform窗口
var windowst = new Ext.Window({
    width: 640,
    height: 570,
    title: "应收冲款单",
    closable: true,
    resizable: false, //设置是否可以改变大小
    draggable: true,
    anchor: '100%',
    items: [forms],
    bbar: [{ xtype: "splitbutton", text: '转单', width: 90, menu: fielmenu1 },
    { xtype: "splitbutton", text: '功能', width: 90, menu: fielmenu2 }],
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