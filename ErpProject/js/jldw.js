function jldw() {
    var pageIndex = 1;
    var pageSize = 1;
    var pageCount = 0;
    Ext.onReady(function () {

        GetUnitRow();

    });
    function GetUnitRow() {
        $.ajax({
            type: "post",
            url: "/FYJ/GetUnitRow",
            data: "{}",
            dataType: "json",
            contentType: "application/json",
            success: function (result) {

                pageCount = result;
                Search();
            }


        });
    }
    function Search() {


        $.ajax({
            type: "post",
            url: "/FYJ/GetUnit",
            data: "{pageIndex:" + pageIndex + ",pageSize:" + pageSize + "}",
            contentType: "application/json",
            success: function (result) {

                $.each(result, function (index, data) {

                    Ext.getCmp("unitid").setValue(data.unitid);
                    Ext.getCmp("unitname").setValue(data.unitname);
                    Ext.getCmp("unitremark").setValue(data.unitremark);

                    Ext.getCmp("unitengname").setValue(data.unitengname);






                    state();





                });


            }, error: function (ex) {
                alert(ex.responseTest);
            }
        });
    }
    function state() {
        Ext.getCmp('btnBack').disabled = false;
        Ext.getCmp('btnNext').disabled = false;
        //$("#btnBack").removeAttr("disabled");
        //$("#btnNext").removeAttr("disabled");
        if (pageIndex == 1) {
            alert("这是第一页");
            Ext.getCmp('btnBack').disabled = true;

        }
        if (pageIndex == pageCount) {
            alert("这是最后一页");
            Ext.getCmp('btnNext').disabled = true;
        }
    }
    var fielmenu3 = new Ext.menu.Menu({
        items: [{ text: '业务员责任绩效设定' }]
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

        ],
        columns: [


        ],

    })

    var filterPanel = Ext.create('Ext.panel.Panel', {

    });

    var tableds = Ext.create('Ext.TabPanel', {

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
            style: "margin-left:9px",
            fieldLabel: '单位编号',
            width: 250,
            labelWidth: 70,
            anchor: '100%',
            id: 'unitid',
        }, {
            xtype: 'textfield',
            name: 'DeliveryAddress',
            fieldLabel: '单位名称',
            style: "margin-left:9px",
            width: 250,
            labelWidth: 70,
            anchor: '100%',
            id: 'unitname',
        }, {

            xtype: 'textfield',
            name: 'BillNo',
            style: "margin-left:9px",
            fieldLabel: '英文名称',
            width: 250,
            labelWidth: 70,
            anchor: '100%',
            id: 'unitengname',
        }, {
            style: 'margin-left:9px',
            xtype: 'textarea',
            name: 'BillNo',
            style: "margin-left:9px",
            fieldLabel: '备注',
            width: 250,
            labelWidth: 70,
            anchor: '100%',
            id: 'unitremark',
        }, {
            xtype: "button",
            id: "btnBack",
            text: "上一页",
            style: 'margin-left:80px;',
            listeners: {
                "click": function () {
                    pageIndex--;
                    Search();
                }
            }
        }
             , {
                 xtype: "button",
                 id: "btnNext",
                 text: "下一页",
                 style: 'margin-left:80px;',
                 listeners: {
                     "click": function () {
                         pageIndex++;
                         Search();
                     }
                 }
             }, tableds, formsg
        ]



    });

    //winform窗口
    var windowst = new Ext.Window({
        width: 300,
        height: 250,
        title: "计量单位设定",
        closable: true,
        resizable: false, //设置是否可以改变大小
        draggable: true,
        anchor: '100%',
        items: [forms],

    });


    return windowst;
}
