function cgyfckd(){
var fielmenu = new Ext.menu.Menu({
    items: [{
        text: '载入单币别账款', handler: function () {
            afronction();

        }
    }]
});
var fielmenu = new Ext.menu.Menu({
    items: [{ text: '载入单币别账款' }, { text: '载入多币别账款' }]
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
				     width: 150,
				     sortable: false
				 },

        		{ header: '单别', dataIndex: 'name', width: 155, },
       			 {
       			     header: '原单日期', dataIndex: 'dizhi', width: 155, editor: {
       			         xtype: 'textfield',
       			         listeners: {
       			             focus: function (grid, e, eOpts) {
       			                 windows2.show();
       			             }

       			         }
       			     }
       			 },
       				 { header: '原单单号', dataIndex: 'bianma' },
					 { header: '发票号码', dataIndex: 'lianxi' },
					 { header: '交易对象', dataIndex: 'lianxi' },
					 { header: '交易对象名称', dataIndex: 'lianxi' },
					 { header: '部门编号', dataIndex: 'lianxi' },
					 { header: '部门名称', dataIndex: 'lianxi' },
					 { header: '采购人员', dataIndex: 'lianxi' },
					 { header: '项目名称', dataIndex: 'lianxi' },
					 { header: '币别', dataIndex: 'lianxi' },
					 { header: '汇率', dataIndex: 'lianxi' },
					 { header: '原单金额', dataIndex: 'lianxi' },
					 { header: '现行金额', dataIndex: 'lianxi' },
					 { header: '折让金额', dataIndex: 'lianxi' },
					 { header: '冲款金额', dataIndex: 'lianxi' },
					 { header: '冲抵金额', dataIndex: 'lianxi' }

    ],

    // 					 columns: [
    //				 {header: '预付金额',
    //	                    		xtype: 'rownumberer',
    //	                    		dataIndex: 'lh', 
    //	                    		width: 150,
    //								sortable: false
    //      					},
    //					
    //      		{ header: '来源别',  dataIndex: 'name', width: 155,},
    //     			 { header: '来源单号', dataIndex: 'dizhi',width: 155,editor: { xtype:'textfield',
    //				 	listeners:{
    //						focus:function(grid, e, eOpts){
    //								windows2.show();
    //								}
    //							
    //					}
    //				 } },
    //     				 { header: '摘要', dataIndex: 'bianma' ,width: 155},
    //					 
    // 					 ],
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
    items: [{ title: '内容', autoScroll: true, items: [filterPanel] }, { title: '备注', xtype: 'textarea', name: 'Remark', fieldLabel: '备注', labelWidth: 30, }],
});


var formsg = Ext.create('Ext.form.Panel', {
    bodyPadding: 5,
    height: '100%',
    layout: "column",
    baseCls: 'x-plain',
    items: [{
        xtype: 'textfield',
        name: 'Marker',
        fieldLabel: '所属部门',
        style: 'margin-left:0px',
        width: 250,
        labelWidth: 80,
        anchor: '100%',
    }, {
        xtype: 'textfield',
        name: 'ProdDepart',
        fieldLabel: '制单人员',
        style: 'margin-left:19px',
        width: 250,
        labelWidth: 80,
        anchor: '100%',
    }, {
        xtype: 'textfield',
        name: 'Permitter',
        fieldLabel: '所属项目',
        style: 'margin-left:0px',
        width: 250,
        labelWidth: 80,
        anchor: '100%',
    }, {
        xtype: 'textfield',
        name: 'ProdProject',
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
	    fieldLabel: '供应商地址',
	    width: 250,
	    labelWidth: 80,

	    anchor: '100%',
	}, {
	    style: 'margin-left:9px',
	    xtype: 'datefield',
	    name: 'BillDate',
	    fieldLabel: '单据日期',

	    width: 250,
	    labelWidth: 70,
	    anchor: '100%',
	}, {
	    xtype: 'textfield',
	    name: 'DeliveryAddress',
	    fieldLabel: '转账方式一',
	    width: 150,
	    labelWidth: 80,
	    labeltext: '转账',
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
	    style: "margin-left:9px",
	    fieldLabel: '单据号码',
	    width: 250,
	    labelWidth: 70,
	    anchor: '100%',
	}, {
	    xtype: 'textfield',
	    name: 'DeliveryAddress',
	    fieldLabel: '转账方式二',

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
	    xtype: 'textfield', //多行文本域
	    name: 'MoneyStyle',
	    fieldLabel: '币别',
	    labelWidth: 70,
	    width: 250,
	    anchor: '100%',
	}, {
	    xtype: 'textfield',
	    name: 'DeliveryAddress',
	    fieldLabel: '转账方式三',
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
	    xtype: 'textfield', //多行文本域
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
	    style: "margin-left:9px",
	    fieldLabel: '应付冲款类型',
	    xtype: 'combo',
	    name: 'IncludeRate',
	    displayField: 'name',
	    labelWidth: 70,
	    width: 250,
	    valueField: 'abbr',
	    store: Ext.create('Ext.data.Store', {
	        fields: ['abbr', 'name'],
	        data: [
                { "abbr": "预付款", "name": "预付款" },
                { "abbr": "付款冲款", "name": "付款冲款" },
                { "abbr": "预付冲应付", "name": "预付冲应付" }
	        ]
	    }),
	    value: '预付款',
	    typeAhead: true,
	    mode: 'local',
	    triggerAction: 'all',
	    selectOnFocus: true,

	}, {
	    //style:'margin-left:9px;color:blue',
	    xtype: 'datefield',
	    name: 'BillDate',
	    fieldLabel: '终止日期',
	    width: 250,
	    labelWidth: 80,
	    anchor: '100%',
	}, {
	    style: "margin-left:9px",
	    xtype: 'textfield',
	    name: 'ProveBillNo',
	    fieldLabel: '凭证单号',
	    width: 250,
	    labelWidth: 70,
	    anchor: '100%',
	}, tableds, formsg
    ]



});

//winform窗口
var windowst = new Ext.Window({
    width: 640,
    height: 570,
    title: "?采购应付冲款单",
    closable: true,
    resizable: false, //设置是否可以改变大小
    draggable: true,
    anchor: '100%',
    items: [forms],
    bbar: [{ xtype: "splitbutton", text: '功能', width: 90, menu: fielmenu },
    { xtype: "splitbutton", text: '自动计算', width: 90, menu: fielmenu2 }],
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
