function cgqg() {
    var fielmenu = new Ext.menu.Menu({
        items: [{
            text: '历史交易查询', handler: function () {
                afronction();

            }
        }]
    });
    var fielmenu2 = new Ext.menu.Menu({
        items: [{ text: '销售订单转入' }]
    });
    var fielmenu3 = new Ext.menu.Menu({
        items: [{ text: '单况状态切换' }]
    });
    var grids = Ext.create('Ext.grid.Panel', {//创建一个grid将数据显示出来
        listeners: {
            containerdblclick: function (grid, e, eOpts) { //单击事件
                grid.getStore().add({ 'name': '12', 'dizhi': '', 'bianma': '', 'lianxi': '' });//新增一条信息

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
                                     windows3.show();
                                 }

                             }
                         }
                     },
                         { header: '规格型号', dataIndex: 'bianma' },
                         { header: '单位名称', dataIndex: 'lianxi' },
                         { header: '数量', dataIndex: 'lianxi' },
                          { header: '币别', dataIndex: 'lianxi' },
                           { header: '标准进价', dataIndex: 'lianxi' },
                            { header: '标准进价金额', dataIndex: 'lianxi' },
                             { header: '币别', dataIndex: 'lianxi' },
                              { header: '单价', dataIndex: 'lianxi' },
                               { header: '进价金额', dataIndex: 'lianxi' },
                         { header: '需求日期', dataIndex: 'lianxi' },
                         { header: '建议采购日期', dataIndex: 'lianxi' },
                         { header: '未采购量', dataIndex: 'lianxi' },
                         { header: '分录备注', dataIndex: 'lianxi' },
                         { header: '来源单别', dataIndex: 'lianxi' },
                         { header: '来源单号', dataIndex: 'lianxi' }
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

    var tableds = Ext.create('Ext.TabPanel', {//选项卡
        width: "100%",
        height: 230,
        autoScroll: true,
        bodyPadding: 5,
        items: [{ title: '内容', autoScroll: true, items: [filterPanel] },
            { title: '备注', xtype: 'textarea', name: 'Remark', fieldLabel: '备注', labelWidth: 30, }],
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
            fieldLabel: '请购人员',
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
        id: 'form',
        bodyPadding: 5,
        height: '100%',
        layout: "column",
        baseCls: 'x-plain',
        items: [
        {
            xtype: 'textfield',
            name: 'Customer',
            fieldLabel: '采购请购类型',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
            id: 'typeName',
            listeners: {//点击弹出一个窗口
                focus: function (grid, e, eOpts) {
                    GetBuyType().show();//窗口显示
                }
            }
        }, {
            xtype: 'textfield',
            fieldLabel: '类型id',
            width: 250,
            hidden: true,
            labelWidth: 80,
            anchor: '100%',
            id: 'typeid',
        }, {
            style: 'margin-left:9px;color:blue',
            xtype: 'datefield',
            name: 'BillDate',
            fieldLabel: '单据日期',
            width: 250,
            labelWidth: 70,
            value: new Date(),
            id:'djDate',
            anchor: '100%',
        }, {
            xtype: 'textfield',
            name: 'DeliveryAddress',
            fieldLabel: '单况',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
        }, {
            style: 'margin-left:9px',
            xtype: 'textfield',
            name: 'BillNo',
            style: "color:blue;margin-left:9px",
            fieldLabel: '单据号码',
            id:'djnumber',
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
        title: "采购请购单",
        closable: true,
        resizable: false, //设置是否可以改变大小
        draggable: true,
        anchor: '100%',
        items: [forms],
        bbar: [{ xtype: "splitbutton", text: '转单', width: 90, menu: fielmenu2 },
            { xtype: "splitbutton", text: '功能', width: 90, menu: fielmenu3 }],
    });

    var windows2 = new Ext.Window({
        width: 400,
        height: 300,
        title: "采购请购类型设定",
        closable: true,
        resizable: false, //设置是否可以改变大小
        draggable: true,
        closeAction: "hide",

    });
    var windows3 = new Ext.Window({
        width: 400,
        height: 300,
        title: "物料主文件设定",
        closable: true,
        resizable: false, //设置是否可以改变大小
        draggable: true,
        closeAction: "hide",

    });
    function GetBuyType() {
        var obj = {};//将数据绑定到对象中
        $.ajax({//使用ajax将数据查出来
            type: "POST",
            dataType:"json",
            url: "/Test/GetBuyType",
            data: "{}",
            contentType: "application/json",
            async: false,
            success: function (result) {
                obj = result;
            }, error: function (ex) {
                alert("Error:" + ex.responseText);
            }
        });
        var userStore = Ext.create('Ext.data.Store', {//将obj中的数据取出来
            data: obj,
            fields: ['Buytypeid', 'BuytypeName']//填写数据库中需要查出的字段
        });
        var buyType = Ext.create('Ext.grid.Panel', {//创建一个grid，将查询出来的数据绑定在其中
            renderTo: Ext.getBody(),//固定的，不可修改
            columns: [
                { header: '(类型编号)', dataIndex: 'Buytypeid', width: 80,},
                { header: '(类型名称)', dataIndex: 'BuytypeName', width: 130,}
            ], listeners: {
                itemdblclick: function (dataview,
               record, item, index, e) {//点击事件，将值传到文本框中
                    Ext.getCmp("typeid").setValue(record.get("Buytypeid"));
                    Ext.getCmp("typeName").setValue(record.get("BuytypeName"));
                    caigouType.close();//当选中一条值之后关闭窗口
                //    $.ajax({//使用ajax将数据查出来
                //        type: "POST",
                //        dataType: "json",
                //        url: "/Test/GetBuyTypeId",
                //        data: "{id:" + record.get("Buytypeid") + "}",
                //        contentType: "application/json",
                //        success: function (result) {
                //            $.each(result, function (index, data) {
                //                alert(data.BuytypeName);
                //                Ext.getCmp("typeid").setValue(data.Buytypeid);
                //                Ext.getCmp("typeName").setValue(data.BuytypeName);
                //            })
                           
                //        }, error: function (ex) {
                //            alert("Error:" + ex.responseText);
                //        }
                //    });
                }
            },
            store: userStore,
            height: 130,
            width: 480,
            autoScroll: false
        });
        var caigouType = new Ext.Window({//创建一个窗口
            width: 300,
            height: 225,
            title: "采购请购类型",
            closable: true,
            resizable: false, //设置是否可以改变大小
            draggable: true,
            anchor: '100%',
            autoScroll: true,
            items: [buyType],//将创建好的内容绑定在窗口中
        });

        return caigouType;
    }
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
