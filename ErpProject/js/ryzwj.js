function ryzwj(){
var fielmenu = new Ext.menu.Menu({
    items: [{ text: '人员相片设定' }, { text: '经历资料设定' }
    , { text: '证照资料设定' }, { text: '学历资料设定' }
    , { text: '亲属资料设定' }, { text: '人员参保状况' }
    , { text: '人员合同状况' }]
});


var grids = Ext.create('Ext.grid.Panel', {
    listeners: {
        containerdblclick: function (grid, e, eOpts) { //单击事件
            grid.getStore().add({ 'name': '', 'dizhi': '', 'bianma': '', 'lianxi': '' });

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

        		{ header: '地址编号', dataIndex: 'name', editor: { xtype: 'textfield' } },
       			{ header: '地址', dataIndex: 'dizhi', flex: 1, editor: { xtype: 'textfield' } },
       				  { header: '邮政编码', dataIndex: 'bianma', editor: { xtype: 'textfield' } },
					 { header: '联系人', dataIndex: 'lianxi', editor: { xtype: 'textfield' } },
    ],
    height: 130,
    width: '100%',
    autoScroll: false,

});


var formpalcd = Ext.create('Ext.form.Panel', { //表单
    bodyPadding: 5,
    width: '100%',
    // 将会通过 AJAX 请求提交到此URL
    // url: 'save-form.php',
    // 表单域 Fields 将被竖直排列, 占满整个宽度
    layout: 'column',
    defaults: {
        anchor: '100%'
    },

    // The fields
    defaultType: 'textfield',
    items: [{
        xtype: 'textfield',
        name: 'supplierId',
        fieldLabel: '人员编号',
        labelWidth: 70

    }, {
        style: 'margin-left:9px',
        xtype: 'textfield',
        name: 'accountBelong',
        fieldLabel: '所属部门',
        labelWidth: 70,
        anchor: '100%',
    }, {
        xtype: 'textfield',
        name: 'supplierFullName',
        fieldLabel: '人员姓名',
        labelWidth: 70,
        anchor: '100%',
    }, {
        style: 'margin-left:9px',
        xtype: 'textfield',
        name: 'genre',
        fieldLabel: '性别',
        labelWidth: 70,
        vtype: 'url',//只能输入网址
        anchor: '100%',
    }, {
        xtype: 'textfield',
        name: 'supplierSimName',
        fieldLabel: '英文姓名',
        labelWidth: 70,
        regex: /^[\u4E00-\u9FA5]+$/,//自定义正则表达式,(只能输入汉字);
        regexText: '叫你输入汉字啊,SB吗？',//提示
        anchor: '100%',
    }, {
        style: 'margin-left:9px',
        xtype: 'textfield', //多行文本域
        name: 'area',
        fieldLabel: '身份证号',
        labelWidth: 70,
        anchor: '100%',
    }

, {
    xtype: "tabpanel",
    width: '100%',
    height: '270px',
    items: [{
        title: '基本资料',
        bodyPadding: 5,
        layout: "column",
        items: [{
            xtype: 'textfield',
            width: '120',
            name: 'responsible',
            fieldLabel: '出生日期',
            labelWidth: 70
        }, {
            xtype: 'textfield',
            name: 'purchaseName',
            fieldLabel: '政治面貌',
            style: 'margin-left:19px',
            labelWidth: 70
        }, {
            xtype: 'textfield',
            name: 'linkMan',
            fieldLabel: '婚姻状况',
            labelWidth: 70
        }, {
            xtype: 'textfield',
            name: 'taxNo',
            fieldLabel: '入职日期',
            style: 'margin-left:19px',
            labelWidth: 70
        },
{
    xtype: 'textfield',
    name: 'telephoneone',
    fieldLabel: '血型',
    labelWidth: 70
}, {
    xtype: 'textfield',
    name: 'capitalization',
    fieldLabel: '转正日期',
    style: 'margin-left:19px',
    labelWidth: 70
}, {
    xtype: 'textfield',
    fieldLabel: '籍贯',
    labelWidth: 70
}, {
    xtype: 'textfield',
    fieldLabel: '试用期长',
    style: 'margin-left:19px',
    labelWidth: 70
}, {
    xtype: 'textfield',
    fieldLabel: '国籍',
    labelWidth: 70
}, {
    xtype: 'textfield',
    fieldLabel: '离职日期',
    style: 'margin-left:19px',
    labelWidth: 70
}, {
    xtype: 'textfield',
    fieldLabel: '民族',
    labelWidth: 70
}, {
    xtype: 'textfield',
    fieldLabel: '技术职称',
    style: 'margin-left:19px',
    labelWidth: 70
}
, {
    xtype: 'textfield',
    fieldLabel: '中文职务',
    labelWidth: 70
}
, {
    xtype: 'textfield',
    fieldLabel: '英文职务',
    style: 'margin-left:19px',
    labelWidth: 70
}
, {
    xtype: 'textfield',
    fieldLabel: '联系邮编',
    labelWidth: 70
}
, {
    xtype: 'textfield',
    fieldLabel: '联系地址',
    style: 'margin-left:19px',
    labelWidth: 70
}
, {
    xtype: 'textfield',
    fieldLabel: '联系电话',
    labelWidth: 70
}
, {
    xtype: 'textfield',
    fieldLabel: '移动电话',
    style: 'margin-left:19px',
    labelWidth: 70
}]
    }, {
        title: '其他资料',
        bodyPadding: 5,
        layout: "column",
        items: [{
            xtype: 'textfield',
            fieldLabel: '最高学历',
            style: 'margin-left:19px',
            labelWidth: 70
        }, {
            xtype: 'textfield',
            fieldLabel: '到期日期',
            style: 'margin-left:19px',
            labelWidth: 70
        }
    , {
        xtype: 'textfield',
        fieldLabel: '学位',
        style: 'margin-left:19px',
        labelWidth: 70
    }
    , {
        xtype: 'textfield',
        fieldLabel: '入境日期',
        style: 'margin-left:19px',
        labelWidth: 70
    }
    , {
        xtype: 'textfield',
        fieldLabel: '毕业学校',
        style: 'margin-left:19px',
        labelWidth: 70
    }
    , {
        xtype: 'textfield',
        fieldLabel: '护照号码',
        style: 'margin-left:19px',
        labelWidth: 70
    }
    , {
        xtype: 'textfield',
        fieldLabel: '所学专业',
        style: 'margin-left:19px',
        labelWidth: 70
    }
    , {
        xtype: 'textfield',
        fieldLabel: '合同起始日期',
        style: 'margin-left:19px',
        labelWidth: 80
    }
    , {
        xtype: 'textfield',
        fieldLabel: '外语水平',
        style: 'margin-left:19px',
        labelWidth: 70
    }
    , {
        xtype: 'textfield',
        fieldLabel: '合同终止日期',
        style: 'margin-left:19px',
        labelWidth: 80
    }
    , {
        xtype: 'textfield',
        fieldLabel: '体检日期',
        style: 'margin-left:19px',
        labelWidth: 70
    }
    , {
        xtype: 'textfield',
        fieldLabel: '合同期（长）',
        style: 'margin-left:19px',
        labelWidth: 80
    }

        ]

    }, {
        title: '通讯资料',
        bodyPadding: 5,
        layout: "column",
        items: [{
            xtype: 'textfield',
            fieldLabel: '电子邮件',
            style: 'margin-left:19px',
            labelWidth: 70
        }, {
            xtype: 'textfield',
            fieldLabel: '现电话',
            style: 'margin-left:19px',
            labelWidth: 70
        }
    , {
        xtype: 'textfield',
        fieldLabel: '户籍电话',
        style: 'margin-left:19px',
        labelWidth: 70
    }
    , {
        xtype: 'textfield',
        fieldLabel: '现邮编',
        style: 'margin-left:19px',
        labelWidth: 70
    }
    , {
        xtype: 'textfield',
        fieldLabel: '户籍邮编',
        style: 'margin-left:19px',
        labelWidth: 70
    }
    , {
        xtype: 'textfield',
        fieldLabel: '现住址',
        style: 'margin-left:19px',
        labelWidth: 70
    }
    , {
        xtype: 'textfield',
        fieldLabel: '户籍地址',
        style: 'margin-left:19px',
        labelWidth: 70
    }
    , {
        xtype: 'textfield',
        fieldLabel: '紧急联系人',
        style: 'margin-left:19px',
        labelWidth: 70
    }
    , {
        xtype: 'textfield',
        fieldLabel: '家庭电话',
        style: 'margin-left:19px',
        labelWidth: 70
    }
    , {
        xtype: 'textfield',
        fieldLabel: '紧急联系邮编',
        style: 'margin-left:19px',
        labelWidth: 80
    }
    , {
        xtype: 'textfield',
        fieldLabel: '家庭邮编',
        style: 'margin-left:19px',
        labelWidth: 70
    }
    , {
        xtype: 'textfield',
        fieldLabel: '紧急联系电话',
        style: 'margin-left:19px',
        labelWidth: 80
    }, {
        xtype: 'textfield',
        fieldLabel: '家庭住址',
        style: 'margin-left:19px',
        labelWidth: 70
    }, {
        xtype: 'textfield',
        fieldLabel: '紧急联系地址',
        style: 'margin-left:19px',
        labelWidth: 80
    }

        ]

    }, {
        title: '备注',
        bodyPadding: 5,
        layout: "column",
        items: [{
            xtype: 'textfield',
            fieldLabel: '自定义栏一',
            labelWidth: 70
        }
    , {
        xtype: 'textfield',
        fieldLabel: '自定义栏四',
        style: 'margin-left:19px',
        labelWidth: 70
    }, {
        xtype: 'textfield',
        fieldLabel: '自定义栏二',
        labelWidth: 70
    }, {
        xtype: 'textfield',
        fieldLabel: '自定义栏五',
        style: 'margin-left:19px',
        labelWidth: 70
    }, {
        xtype: 'textfield',
        fieldLabel: '自定义栏三',
        labelWidth: 70
    }
    , {
        xtype: 'textfield',
        fieldLabel: '自定义栏六',
        style: 'margin-left:19px',
        labelWidth: 70
    }
        , {
            xtype: 'textarea',
            name: 'meMo',
            fieldLabel: '备注',
            width: 470,
            labelWidth: 70,
            height: '100%'
        }]
    }]
}]
});



var mainWindow = new Ext.Window({

    width: 600,
    height: 428,
    title: "人员主文件设定",
    closable: true,
    resizable: false, //设置是否可以改变大小
    draggable: true, //设
    items: [formpalcd],
    bbar: [{ xtype: "splitbutton", text: '设定', width: 90, menu: fielmenu }],
});

function fromaction() {
    alert(Ext.encode(formpalcd.getForm().getValues()));// 序列化表单
}

return mainWindow;
}