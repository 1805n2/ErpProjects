

function xiaoshoudinggou() {
       

    var fielmenu = new Ext.menu.Menu({
        items: [{
            text: '历史交易查询', handler: function () {
                //zywindowst.show();
                zylishijiaoyi().show();

            }
        }, {
            text: '利润预估查询', handler: function () {
                lirunyugu().show();
            }
        }]
    });
    var fielmenu2 = new Ext.menu.Menu({
        items: [{
            text: '销售报价转入', handler: function () {

            }
        }, { text: '销售出库单' }]
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
            containerdblclick: function (grid, e, eOpts) { //双击事件
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
            name: 'SalesMan',
            bodyPadding: 5,
            fieldLabel: '业务人员',
            width: 250,
            labelWidth: 80,
            id:'yewurenyuan',
            anchor: '100%',
        }, {
            xtype: 'textfield',
            name: 'Marker',
            fieldLabel: '制单人员',
            style: 'margin-left:19px',
            width: 250,
            value:'Admin',
            labelWidth: 80,
            anchor: '100%',
        }, {
            xtype: 'textfield',
            name: 'ProdDepart',
            fieldLabel: '所属部门',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
            id:'suomb',
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
            fieldLabel: '客户',
            id:'kehuname',
            width: 250,
            labelWidth: 80,
            emptyText: '请输入客户',
            anchor: '100%',
            listeners: {
                focus: function (grid, e, eOpts) {
                    kehuzhuwenjian().show();  
                }

            }
        },    {
            xtype: 'textfield',
            fieldLabel: '客户id',
            id:'kehuid',
            width: 250,
            labelWidth: 80,
            hidden:true,
            anchor: '100%'
        }, {
            style: 'margin-left:9px;color:blue',
            xtype: 'datefield',
            name: 'BillDate',
            fieldLabel: '单据日期',
            id: 'BillDate',
            value:new Date(),
            width: 250,
            labelWidth: 70,
            anchor: '100%',
        }, {
            xtype: 'textfield',
            name: 'DeliveryAddress',
            fieldLabel: '送货地址',
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
            id:'bianhao',
            labelWidth: 70,
            anchor: '100%',
        }, {
            xtype: 'textfield',
            name: 'OutWareType',
            fieldLabel: '销售订单类型',
            width: 250,
            labelWidth: 80,
            anchor: '100%',
        }, {
            style: 'margin-left:9px',
            xtype: 'textfield', //多行文本域
            name: 'MoneyStyle',
            fieldLabel: '客户订单',
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
            fieldLabel: '币别',
            labelWidth: 70,
            width: 250,
            anchor: '100%',
            value:'RMB'
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
                    { "abbr": "无效", "name": "无效" }
                ]
            }),
            value: '未结案',
            typeAhead: true,
            mode: 'local',
            triggerAction: 'all',
            selectOnFocus: true,

        }, {
            style: 'margin-left:10px',
            xtype: 'checkbox', //多行文本域
            name: 'fapiaoshifou',
            hideLabels: true,
            checkboxToggle: true,

            xtype: 'textfield',
            name: 'ProveBillNo',
            fieldLabel: '汇率',
            width: 250,
            labelWidth: 70,
            anchor: '100%',
            value:'1.0000',
            boxLabel: "复核后自动生成发票",

        }, tableds, formsg
        ]


    });
    Ext.getCmp("BillDate")
    var qq = Ext.getCmp("BillDate");
    qq.on({
        change: function () {
            var BillDate = Ext.getCmp("BillDate").getValue()
            var info = {
                BillDate: BillDate
            }

            $.ajax({
                url: "Xiaoshoudingdan/riqi",
                type: "post",
                data: JSON.stringify(info),
                contentType: "application/json",
                success: function (data) {
                    Ext.getCmp("bianhao").setValue(data);
                },
                error: function (xhr) {
                    alert("错误信息" + xhr.responseText)
                }
            });
        }
    });
    Ext.getCmp("BillDate").setValue(Ext.util.Format.date(Ext.Date.add(new Date(), Ext.Date.MONTH, -1), "Y-m-d"));
    var bb = Ext.create('Ext.grid.Panel', {


        columns: [
                     {
                         header: '（单别）',
                         xtype: 'rownumberer',
                         dataIndex: 'lh',
                         width: 50,
                         sortable: false
                     },

                    { header: '（日期）', dataIndex: 'name', width: 80, },
                     {
                         header: '（单号）', dataIndex: 'dizhi', width: 120, editor: {
                             xtype: 'textfield',

                         }
                     },
                        { header: '（币别）', dataIndex: 'bianma' },
                         { header: '（汇率）', dataIndex: 'lianxi' },
                         { header: '（物料编号）', dataIndex: 'lianxi' },
                         { header: '（物料名称）', dataIndex: 'lianxi' },
                         { header: '（规格型号）', dataIndex: 'lianxi' },
                         { header: '（数量）', dataIndex: 'lianxi' },
                         { header: '（单位）', dataIndex: 'lianxi' },
                         { header: '（折扣前单价）', dataIndex: 'lianxi' },
                         { header: '（折数%）', dataIndex: 'lianxi' },
                         { header: '（单价）', dataIndex: 'lianxi' },
                         { header: '（单价是否含税）', dataIndex: 'lianxi' },
                         { header: '（金额）', dataIndex: 'lianxi' },
                         { header: '（备注）', dataIndex: 'lianxi' },
                         { header: '分录备注', dataIndex: 'lianxi' },
                         { header: '来源单别', dataIndex: 'lianxi' },
                         { header: '来源单号', dataIndex: 'lianxi' },
                         { header: '客户订单', dataIndex: 'lianxi' }
        ],
        height: 130,
        width: 1971,
        autoScroll: false,

    })

    var lishitext = Ext.create('Ext.panel.Panel', {
        bodyPadding: 6,  // 避免Panel中的子元素紧邻边框
        width: 1985,
        height: 170,
        items: [bb],

    });

    function zylishijiaoyi() {
        var zyforms = Ext.create('Ext.form.Panel', {
            bodyPadding: 5,
            height: '100%',
            layout: "column",
            baseCls: 'x-plain',
            closeAction: 'destroy',
            items: [
            {
                xtype: 'textfield',
                name: 'DeliveryAddress',
                fieldLabel: '客户',
                width: 250,
                labelWidth: 80,
                anchor: '100%',
            }, {
                xtype: 'button',
                style: 'margin-left:180px',
                text: '资料输出',
                width: 70,
            }, {
                xtype: 'button',

                text: '取回',
                width: 70,
            }, {

                autoScroll: true, items: [lishitext]
            }
            ]


        });
       
        //winform窗口
        var zywindowst = new Ext.Window({
            width: 600,
            height: 225,
            title: "历史记录查询",
            closable: true,
            resizable: false, //设置是否可以改变大小
            draggable: true,
            anchor: '100%',
            items: [zyforms],

        });

        return zywindowst;

    };

    var lirun = Ext.create('Ext.grid.Panel', {


        columns: [
                     {
                         header: '（栏号）',
                         xtype: 'rownumberer',
                         dataIndex: 'lh',
                         width: 50,
                         sortable: false
                     },

                    { header: '（物料编号）', dataIndex: 'name', width: 80, },
                     {
                         header: '（物料名称）', dataIndex: 'dizhi', width: 120, editor: {
                             xtype: 'textfield',

                         }
                     },
                        { header: '（规格型号）', dataIndex: 'bianma' },
                         { header: '（本币金额）', dataIndex: 'lianxi' },
                         { header: '（实际成本）', dataIndex: 'lianxi' },
                         { header: '（实际毛利）', dataIndex: 'lianxi' },
                         { header: '（实际毛利率%）', dataIndex: 'lianxi' },
                         { header: '（标准成本）', dataIndex: 'lianxi' },
                         { header: '（标准毛利）', dataIndex: 'lianxi' },
                         { header: '（标准毛利率%）', dataIndex: 'lianxi' },
        ],
        height: 130,
        width: 1100,
        autoScroll: false,

    })

    var liruntext = Ext.create('Ext.panel.Panel', {
        bodyPadding: 6,  // 避免Panel中的子元素紧邻边框
        width: 1985,
        height: 170,
        items: [lirun],

    });

    function lirunyugu() {
        var zyforms1 = Ext.create('Ext.form.Panel', {
            bodyPadding: 5,
            height: '100%',
            layout: "column",
            baseCls: 'x-plain',
            closeAction: 'destroy',
            items: [
            {
                xtype: 'textfield',
                name: 'DeliveryAddress',
                fieldLabel: '单据别',
                width: 250,
                labelWidth: 80,
                anchor: '100%',
            }, {
                xtype: 'textfield',
                name: 'DeliveryAddress1',
                fieldLabel: '客户',
                width: 250,
                labelWidth: 50,
                anchor: '100%',
            }, {

                autoScroll: true, items: [lirun]
            }
            ]


        });



        var lirunwindowst = new Ext.Window({
            width: 600,
            height: 225,
            title: "利润预估查询",
            closable: true,
            resizable: false, //设置是否可以改变大小
            draggable: true,
            anchor: '100%',
            items: [zyforms1],

        });

        return lirunwindowst;

    };

    function kehuzhuwenjian() {
        var obj = {};
        $.ajax({
            url: "/Xiaoshoudingdan/selectUserinfo",
            data: "{}",
            contentType: "application.json",
            async: false,
            type:"post",
            success: function (bb) {
                obj = bb;
            },
            error: function (xhr) {
                alert("错误信息" + xhr.responseText)
            }
        });
        var userStore = Ext.create('Ext.data.Store',
        {
            data:obj,
            fields: [
             'userid', 'username'
            ]
        });
        var kehuname = Ext.create('Ext.grid.Panel', {
            renderTo: Ext.getBody(),
            columns: [
                        { text: '（客户编号）', dataIndex: 'userid', width: 80, },
                         {
                             text: '（客户简称）', dataIndex: 'username', width: 120, editor: {
                                 xtype: 'textfield'
                             }
                         }
            ],
            listeners:{
                itemdblclick:function(dataview,
               record, item, index, e) {
                    Ext.getCmp("kehuname").setValue(record.get("username"));
                    Ext.getCmp("kehuid").setValue(record.get("userid"));
                    kehuwindowst.close();
                    $.ajax({
                        url: "/Xiaoshoudingdan/selectid",
                        data: "{userid:'" + record.get("userid") + "'}",
                        type:"post",
                        contentType: "application/json",
                        success: function (bb) {
                            Ext.getCmp("yewurenyuan").setValue(bb.Personal_name);
                            Ext.getCmp("suomb").setValue(bb.Departmentname);
                        },
                        error: function (xhr) {
                            alert("错误信息" + xhr.responseText);
                        }
                    });
                }
            },
            store: userStore,
            height: 130,
            width: 480,
            autoScroll: false  
        });

       
        var kehu = Ext.create('Ext.form.Panel', {
            bodyPadding: 5,
            height: '100%',
            layout: "column",
            baseCls: 'x-plain',
            closeAction: 'destroy',
            items: [
            {
                name: 'news.status',
                allowBlank: false,
                xtype: 'textfield',
                editable: false,
                mode: 'local',
                triggerAction: 'all',
                value: 1

            }, {
                style: 'margin-left:180px',
                xtype: 'button',
                text: '确定',
                width: 70,
            }, {
                xtype: 'button',
                text: '取回',
                width: 70,
            }, {
                autoScroll: true, items: [kehuname]
            },

            ]


        });
        //kehuname.on('celldblclick', function (g, r, c, e) {
        //    var record = g.store.getAt(r);//获取行record;
        //    var val = record.get('name');//获取name列值
        //    alert(record);
        //})

        //winform窗口
        var kehuwindowst = new Ext.Window({
            width: 500,
            height: 225,
            title: "客户主文件",
            closable: true,
            resizable: false, //设置是否可以改变大小
            draggable: true,
            anchor: '100%',
            items: [kehu],
        });

        return kehuwindowst;
    };
    var 销售订购 = new Ext.Window({
        width: 640,
        height: 570,
        title: "销售订单",
        closable: true,
        resizable: false, //设置是否可以改变大小
        draggable: true,
        anchor: '100%',
        items: [forms],
        bbar: [{ xtype: "splitbutton", text: '查询', width: 90, menu: fielmenu },
		{ xtype: "splitbutton", text: '转单', width: 90, menu: fielmenu2 },
		{ xtype: "button", text: '保存', width: 90, id: 'btn' }],
       
    });
   
    var btn = Ext.getCmp("btn");
    btn.on('click', function () {
           
    })
   
 
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
    Ext.onReady(function () {
       
       
    })
    return 销售订购;
}
//1111111111111111111111111111

//namespace RJGC项目.Controllers.销售管理
//{
//    public class XiaoshoudingdanController : Controller
//    {
//        //
//        // GET: /Xiaoshoudingdan/

//        public ActionResult Index()
//        {
//            return View();
//        }
//        /// <summary>
//        /// 查所有客户
//        /// </summary>
//        /// <returns></returns>
//        public ActionResult selectUserinfo()
//        {
//            List<userinfo> list=  XiaoshoudingdanManager.select();
//            var list1 = list.Select(x => new
//            {
//                x.userid,
//                x.username,
//            }).ToList();
//            return Json(list1, JsonRequestBehavior.AllowGet);
//        }

//        /// <summary>
//        /// 流水码
//        /// </summary>
//        /// <param name="BillDate"></param>
//        /// <returns></returns>
//        public ActionResult riqi(DateTime BillDate)
//        {
//            var list = XiaoshoudingdanManager.selectzhu().Where(x => x.BillDate.ToString("yyyy-MM-dd") == BillDate.ToString("yyyy-MM-dd"));
//        var count = (list.Count()+1).ToString();
//        var id =BillDate.ToString("yyyyMMdd")+count.PadLeft(3,'0');
//        return Json(id, JsonRequestBehavior.AllowGet);
//    }

//    public ActionResult selectid(int userid)
//{
//          var info=   XiaoshoudingdanManager.selectid(userid);
//    var info1 = new
//    {
//        info.td_personnel_table.Personal_name,
//        info.td_personnel_table.department1.Departmentname

//    };
//    return Json(info1, JsonRequestBehavior.AllowGet);
//}
//}
//}
