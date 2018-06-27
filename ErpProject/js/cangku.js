function cangku() {
    var pageIndex = 1;
    var pageSize = 1;
    var pageCount = 0;
    Ext.onReady(function () {

        GetStorageRows();

    });
    function GetStorageRows() {
        $.ajax({
            type: "post",
            url: "/FYJ/GetStorageRows",
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
            url: "/FYJ/GetStorage",
            data: "{pageIndex:" + pageIndex + ",pageSize:" + pageSize + "}",
            contentType: "application/json",
            success: function (result) {

                $.each(result, function (index, data) {

                    Ext.getCmp("stoId").setValue(data.stoid);
                    Ext.getCmp("stoName").setValue(data.stoname);
                    Ext.getCmp("stosimplename").setValue(data.stosimplename);

                    Ext.getCmp("stoEnglishname").setValue(data.stoenglishname);

                    Ext.getCmp("stoConnecter").setValue(data.stoconnecter);
                    Ext.getCmp("stoAddress").setValue(data.stoaddress);
                    Ext.getCmp("stoPhone").setValue(data.stophone);

                    Ext.getCmp("stoRemark").setValue(data.storemark);




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
                    items: []
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
            fieldLabel: '仓库编号',
            width: 250,
            labelWidth: 70,
            anchor: '100%',
            id: "stoId",
        }, {
            xtype: 'textfield',
            name: 'DeliveryAddress',
            fieldLabel: '仓库名称',
            style: "margin-left:9px",
            width: 250,
            labelWidth: 70,
            anchor: '100%',
            id: "stoName",
        }, {

            xtype: 'textfield',
            name: 'BillNo',
            style: "margin-left:9px",
            fieldLabel: '仓库简称',
            width: 250,
            labelWidth: 70,
            anchor: '100%',
            id: "stosimplename",
        }, {

            xtype: 'textfield',
            name: 'BillNo',
            style: "margin-left:9px",
            fieldLabel: '英文名称',
            width: 250,
            labelWidth: 70,
            anchor: '100%',
            id: "stoEnglishname",
        }, {

            xtype: 'textfield',
            name: 'BillNo',
            style: "margin-left:9px",
            fieldLabel: '联系人员',
            width: 250,
            labelWidth: 70,
            anchor: '100%',
            id: "stoConnecter",
        }, {

            xtype: 'textfield',
            name: 'BillNo',
            style: "margin-left:9px",
            fieldLabel: '联系电话',
            width: 250,
            labelWidth: 70,
            anchor: '100%',
            id: "stoPhone",
        }, {

            xtype: 'textfield',
            name: 'BillNo',
            style: "margin-left:9px",
            fieldLabel: '仓库地址',
            width: 250,
            labelWidth: 70,
            anchor: '100%',
            id: "stoAddress",
        }, {
            style: 'margin-left:9px',
            xtype: 'textarea',
            name: 'BillNo',
            style: "margin-left:9px",
            fieldLabel: '备注',
            width: 250,
            labelWidth: 70,
            anchor: '100%',
            id: "stoRemark",
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
        width: 320,
        height: 400,
        title: "仓库设定",
        closable: true,
        resizable: false, //设置是否可以改变大小
        draggable: true,
        anchor: '100%',
        items: [forms],

    });

    return windowst;

}
function QueryStorage() {
    var obj = {};
    $.ajax({
        type: "post",
        url: "/FYJ/GetStorage",
        data: "",
        contentType: "application/json",
        success: function (result) {
            obj = result;

        }, error: function (ex) {
            alert(ex.responseText);
        }

    });
    var userStore = Ext.create('Ext.form.Panel', {

        data: obj,
        fileds: ['stoid', 'stoname'],
        columns: [
              {
                  header: '（栏号）',
                  xtype: 'rownumberer',
                  dataIndex: 'lh',
                  width: 50,
                  sortable: false
              },

             { header: '物料编号', dataIndex: 'stoid', width: 100, },
              {
                  header: '物料名称', dataIndex: 'stoname', width: 120, editor: {
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

                  { header: '赠品', dataIndex: 'lianxi' },
                  { header: '分录备注', dataIndex: 'lianxi' },
                  { header: '来源单别', dataIndex: 'lianxi' },
                  { header: '来源单号', dataIndex: 'lianxi' },

        ],
        store: userStore,
        height: 130,
        width: 480,
        autoScroll: false
    });
    var kehuname = Ext.create('Ext.form.Panel', {

        renderTo: Ext.getBody(),

        columns: [
               {
                   header: '（栏号）',
                   xtype: 'rownumberer',
                   dataIndex: 'lh',
                   width: 50,
                   sortable: false
               },

              { header: '物料编号', dataIndex: 'stoid', width: 100, },
               {
                   header: '物料名称', dataIndex: 'stoname', width: 120, editor: {
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

                   { header: '赠品', dataIndex: 'lianxi' },
                   { header: '分录备注', dataIndex: 'lianxi' },
                   { header: '来源单别', dataIndex: 'lianxi' },
                   { header: '来源单号', dataIndex: 'lianxi' },

        ],
        store: userStore,
        height: 130,
        width: 480,
        autoScroll: false
    });
}