function cgddls(){
var fielmenu = new Ext.menu.Menu({
    items: [{
        text: '历史交易查询', handler: function () {
            afronction();

        }
    }]
});
var fielmenu2 = new Ext.menu.Menu({
    items: [{ text: '采购请购单转入' }, { text: '销售订单转入' }]
});
var fielmenu3 = new Ext.menu.Menu({
    items: [{ text: '批次变更单价' }]
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
				     header: '（单别）',
				     xtype: 'rownumberer',
				     dataIndex: 'lh',
				     width: 50,
				     sortable: false
				 },

        		{ header: '日期', dataIndex: 'name', width: 100, },
       			 {
       			     header: '单号', dataIndex: 'dizhi', width: 120, editor: {
       			         xtype: 'textfield',
       			         listeners: {
       			             focus: function (grid, e, eOpts) {
       			                 windows2.show();
       			             }

       			         }
       			     }
       			 },
       				 { header: '币别', dataIndex: 'bianma' },
					 { header: '汇率', dataIndex: 'lianxi' },
					 { header: '物料编号', dataIndex: 'lianxi' },
					 { header: '物料名称', dataIndex: 'lianxi' },
					 { header: '规格型号', dataIndex: 'lianxi' },
					 { header: '数量', dataIndex: 'lianxi' },
					 { header: '单位', dataIndex: 'lianxi' },
					 { header: '折扣前单价', dataIndex: 'lianxi' },
					 { header: '折数(%)', dataIndex: 'lianxi' },
					 { header: '单价', dataIndex: 'lianxi' },

					 { header: '单价是', dataIndex: 'lianxi' },
					 { header: '备注', dataIndex: 'lianxi' },
					 { header: '金额', dataIndex: 'lianxi' },


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

});

var tableds = Ext.create('Ext.TabPanel', {
    width: "100%",
    height: 230,
    autoScroll: true,
    bodyPadding: 5,
    items: [{ title: '内容', autoScroll: true, items: [filterPanel] },

    ],
});


var formsg = Ext.create('Ext.form.Panel', {

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
    title: "采购订单历史交易查询",
    closable: true,
    resizable: false, //设置是否可以改变大小
    draggable: true,
    anchor: '100%',
    items: [forms],
    bbar: [
    ],
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
