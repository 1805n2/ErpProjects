function gyszwj(){

var stroedt = Ext.create('Ext.data.Store', {
    data: {},
    model: 'User',
    fields: ['name', 'dizhi', 'bianma', 'bianma', 'lianxi'],
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'items'
        }
    }
});



var formpalcd = Ext.create('Ext.form.Panel', { //表单
    title: 'Simple Form',
    bodyPadding: 5,
    width: 350,
    // 将会通过 AJAX 请求提交到此URL
    // url: 'save-form.php',

    // 表单域 Fields 将被竖直排列, 占满整个宽度
    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },

    // The fields
    defaultType: 'textfield',
    items: [{
        fieldLabel: 'First Name',
        name: 'first',
        allowBlank: false
    }, {
        fieldLabel: 'Last Name',
        name: 'last',
        allowBlank: false
    }],

    // 重置 和 保存 按钮.
    buttons: [{
        text: '重置',
        handler: function () {
            this.up('form').getForm().reset();
        }
    }, {
        text: '保存',
        formBind: true, //only enabled once the form is valid
        disabled: true,
        handler: function () {
            var form = this.up('form').getForm();
            if (form.isValid()) {
                form.submit({
                    success: function (form, action) {
                        Ext.Msg.alert('保存成功', action.result.msg);
                    },
                    failure: function (form, action) {
                        Ext.Msg.alert('操作失败', action.result.msg);
                    }
                });
            }
        }
    }]
});



var fielmenu = new Ext.menu.Menu({
    items: [{
        text: '期初账款设定', handler: function () {
            Ext.Msg.alert("提示", "功能升级中,敬请期待！");
        }
    }, { text: '原产物料设定' }]
});
var fielmenu2 = new Ext.menu.Menu({
    items: [{ text: '上网' }, { text: '写信' }, { text: '历史交易查询' }, { text: '帐额数据效验' }]
});

var mainWindow = new Ext.Window({

    width: 500,
    height: 450,
    title: "供应商主文件",
    closable: true,
    resizable: false, //设置是否可以改变大小
    draggable: true, //设置是否可以拖动
    //	tbar: [
    //{ xtype: 'button', text: '新增',width:60 },{ xtype: 'button', text: '保存',width:60 },{ xtype: 'button', text: '上一条',width:60 },
    // { xtype: 'button', text: '下一条',width:60 },{ xtype: 'button', text: '复核',width:60 },{ xtype: 'button', text: '取消复核',width:60 },{ xtype: 'button', text: '刷新',width:60 }
    //],
    bbar: [{ xtype: "splitbutton", text: '设定', width: 90, menu: fielmenu }, { xtype: "splitbutton", text: '功能', width: 90, menu: fielmenu2 }],
    items: [{
        layout: "column",
        xtype: "form",
        height: 150,
        itemCls: 'required',
        items: [{
            xtype: 'textfield',
            name: 'photo',
            fieldLabel: '供应商编号',
            labelWidth: 70

        }, {
            style: 'margin-left:9px',
            xtype: 'textfield',
            name: 'photo',
            fieldLabel: '账款归属',
            labelWidth: 70,
            anchor: '100%',
        }, {
            xtype: 'textfield',
            vtype: 'email',   //电子邮件
            emptyText: '必须输入正确的邮件地址', //检验提示
            name: 'photo',
            fieldLabel: '供应商全称',
            labelWidth: 70,
            anchor: '100%',
        }, {
            style: 'margin-left:9px',
            xtype: 'textfield',
            name: 'photo',
            fieldLabel: '类别',
            labelWidth: 70,
            vtype: 'url',//只能输入网址
            anchor: '100%',
        }, {
            xtype: 'textfield',
            name: 'photo',
            fieldLabel: '供应商简称',
            labelWidth: 70,
            regex: /^[\u4E00-\u9FA5]+$/,//自定义正则表达式,(只能输入汉字);
            regexText: '叫你输入汉字啊,SB吗？',//提示
            anchor: '100%',
        }, {
            style: 'margin-left:9px',
            xtype: 'textfield', //多行文本域
            name: 'photo',
            fieldLabel: '地区',
            labelWidth: 70,
            anchor: '100%',
        }, {
            xtype: 'textfield',
            name: 'photo',
            fieldLabel: '英文全称',
            regex: /^[A-Za-z]+$/,//自定义正则表达式,(只能输入汉字);
            regexText: '叫你输入英文列啊,SB吗？',//提示
            labelWidth: 70,
            anchor: '100%',
        }, {
            style: 'margin-left:9px',
            xtype: 'numberfield',  //数值
            name: 'photo',
            fieldLabel: '币别',
            labelWidth: 70,
            anchor: '100%',
        }, {
            xtype: 'datefield', //日期
            name: 'photo',
            fieldLabel: '英文简称',
            regex: /^[A-Za-z]+$/,//自定义正则表达式,(只能输入汉字);
            regexText: '叫你输入英文列啊,SB吗？',//提示
            labelWidth: 70,
            anchor: '100%',
        }]

    }, {
        xtype: "tabpanel",
        items: [{
            title: "基本资料",
            xtype: 'form',
            style: 'padding-top:5px',
            height: '200px',
            layout: "column",
            items: [{
                xtype: 'textfield',
                width: '120',
                name: 'photo',
                fieldLabel: '负责人',
                labelWidth: 70
            }, {
                xtype: 'textfield',
                name: 'photo',
                fieldLabel: '采购人',
                style: 'margin-left:19px',
                labelWidth: 70
            }, {
                xtype: 'textfield',
                name: 'photo',
                fieldLabel: '联系人',
                labelWidth: 70
            }, {
                xtype: 'textfield',
                name: 'photo',
                fieldLabel: '税务登记号',
                style: 'margin-left:19px',
                labelWidth: 70
            },
        {
            xtype: 'textfield',
            name: 'photo',
            fieldLabel: '联系电话',
            labelWidth: 70
        }, {
            xtype: 'textfield',
            name: 'photo',
            fieldLabel: '资本额',
            style: 'margin-left:19px',
            labelWidth: 70
        }, {
            xtype: 'textfield',
            name: 'photo',
            fieldLabel: '联系电话二',
            labelWidth: 70
        }, {
            xtype: 'textfield',
            name: 'photo',
            fieldLabel: '行业别',
            style: 'margin-left:19px',
            labelWidth: 70
        }, {
            xtype: 'textfield',
            name: 'photo',
            fieldLabel: '银行账号',
            labelWidth: 70
        }, {
            xtype: 'textfield',
            name: 'photo',
            fieldLabel: '开户银行',
            labelWidth: 70
        }, {
            xtype: 'textfield',
            name: 'photo',
            fieldLabel: '电子邮件',
            style: 'margin-left:19px',
            labelWidth: 70
        }, {
            xtype: 'textfield',
            name: 'photo',
            fieldLabel: '网址',
            labelWidth: 70
        }, {
            xtype: 'textfield',
            name: 'photo',
            fieldLabel: '传真号码',
            style: 'margin-left:19px',
            labelWidth: 70
        }]
        }, {
            title: "采购信息",
            xtype: 'form',
            style: 'padding-top:5px',
            height: '200px',
            items: [
            {
                xtype: 'datefield',
                name: 'photo',
                fieldLabel: '最近采购入库日',
                labelWidth: 90
            }, {
                xtype: 'datefield',
                name: 'photo',
                fieldLabel: '最近采购退货日',
                labelWidth: 90,
            }, {
                fieldLabel: '单价是否含税',
                xtype: 'combo',
                name: 'tzfs',
                displayField: 'name',
                labelWidth: 90,
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
                xtype: 'datefield',
                name: 'photo',
                fieldLabel: '终止交易日',
                labelWidth: 90,
            }
            ]

        }, {
            title: "付款信息",
            xtype: 'form',
            layout: "column",
            style: 'padding-top:5px',
            height: '200px',
            items: [{
                xtype: 'label',
                text: '额度设定',
                style: 'border-bottom:1px solid blue',
            }, {
                xtype: 'label',
                text: '账款信息',
                margin: '0 190',
                style: 'border-bottom:1px solid blue;',
            },
            {
                xtype: 'textfield',
                width: '120',
                name: 'photo',
                margin: "2",
                fieldLabel: '账款额度',
                labelWidth: 60
            }, {
                xtype: 'textfield',
                width: '120',
                name: 'photo',
                margin: "2",
                fieldLabel: '期初预付款',
                labelWidth: 70
            }, {
                xtype: 'textfield',
                width: '120',
                name: 'photo',
                margin: "2",
                fieldLabel: '剩余额度',
                labelWidth: 60
            }, {
                xtype: 'textfield',
                width: '120',
                name: 'photo',
                margin: "2",
                fieldLabel: '期初应付款',
                labelWidth: 70
            }, {
                xtype: 'textfield',
                width: '120',
                name: 'photo',
                margin: "2",
                fieldLabel: '发票类型',
                labelWidth: 60
            }, {
                xtype: 'textfield',
                width: '120',
                name: 'photo',
                margin: "2",
                fieldLabel: '期末预付款',
                labelWidth: 70
            }, {
                xtype: 'textfield',
                width: '120',
                name: 'photo',
                margin: "2",
                fieldLabel: '每月结算日',
                labelWidth: 70
            }, {
                fieldLabel: '信用等级',
                xtype: 'combo',
                name: 'tzfs',
                displayField: 'name',
                labelWidth: 63,
                valueField: 'abbr',
                store: Ext.create('Ext.data.Store', {
                    fields: ['abbr', 'name'],
                    data: [
                        { "abbr": "A", "name": "A" },
                        { "abbr": "B", "name": "B" },
                        { "abbr": "C", "name": "C" },
                        { "abbr": "D", "name": "D" },
                        { "abbr": "E", "name": "E" },
                        { "abbr": "F", "name": "F" }
                    ]
                }),
                value: 'A',
                typeAhead: true,
                mode: 'local',
                triggerAction: 'all',
                selectOnFocus: true,

            }, {
                xtype: 'textfield',
                width: '120',
                name: 'photo',
                margin: "2",
                fieldLabel: '期末应付款',
                labelWidth: 70
            }
            ]
        }, {
            title: "地址",
            xtype: "grid",
            store: stroedt,
            plugins: [
                    Ext.create('Ext.grid.plugin.CellEditing', {
                        clicksToEdit: 1
                    })
            ],
            autoScroll: true,
            columns: [
            { header: '地址编号', dataIndex: 'name' },
             { header: '地址', dataIndex: 'dizhi', flex: 1, editor: { xtype: 'textfield', } },
                 { header: '邮政编码', dataIndex: 'bianma' },
                 { header: '联系人', dataIndex: 'lianxi' },
                 { header: '联系人职称', dataIndex: 'lianxi' },
                 { header: '联系电话', dataIndex: 'lianxi' },
                 { header: '传真号码', dataIndex: 'lianxi' },
                 { header: '行走路线', dataIndex: 'lianxi' },
                 { header: '备注', dataIndex: 'lianxi' },
            ],
            height: 230,
            width: 488,
            listeners: {
                containerdblclick: function (grid, e, eOpts) { //单击事件
                    grid.getStore().add({ 'name': '', 'dizhi': '', 'bianma': '', 'lianxi': '' });

                }

            }
        }, {
            title: "其他",
            height: 200,
            items: [{
                xtype: 'textarea',
                grow: true,
                name: 'message',
                margin: "0 0 0 20",
                fieldLabel: '备注',
                width: 400,
                labelWidth: 30,
            }]
        }]
    }],

});



var grids = Ext.create('Ext.grid.Panel', {
    listeners: {
        containerdblclick: function (grid, e, eOpts) { //单击事件
            grid.getStore().add({ 'name': '', 'dizhi': '', 'bianma': '', 'lianxi': '' });

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
					 { header: '数量', dataIndex: 'lianxi' },
					 { header: '折扣前单价', dataIndex: 'lianxi' },
					 { header: '折数(%)', dataIndex: 'lianxi' },
					 { header: '单价', dataIndex: 'lianxi' },
					 { header: '金额', dataIndex: 'lianxi' },
					 { header: '税率', dataIndex: 'lianxi' },
					 { header: '税额', dataIndex: 'lianxi' },
					 { header: '含税金额', dataIndex: 'lianxi' },
					 { header: '批号', dataIndex: 'lianxi' },
					 { header: '物理组合', dataIndex: 'lianxi' },
					 { header: '赠品', dataIndex: 'lianxi' },
					 { header: '分录备注', dataIndex: 'lianxi' },
					 { header: '来源单别', dataIndex: 'lianxi' },
					 { header: '来源单号', dataIndex: 'lianxi' },
					 { header: '客户订单', dataIndex: 'lianxi' }
    ],
    height: 130,
    width: 1971,
    autoScroll: false,

});
return mainWindow;
}
