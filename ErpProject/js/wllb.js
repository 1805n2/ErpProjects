function wllb() {
    var forms = Ext.create('Ext.form.Panel', {
        bodyPadding: 5,
        height: '100%',
        layout: "column",
        baseCls: 'x-plain',
        items: [
        {
            xtype: 'textfield',
            name: 'Customer',
            fieldLabel: '类别编号',
            width: 250,
            labelWidth: 80,
            emptyText: '请输入类别编号',
            anchor: '100%',
        },
                {
                    xtype: 'textfield',
                    name: 'Customer',
                    fieldLabel: '类别名称',
                    width: 250,
                    labelWidth: 80,
                    emptyText: '请输入类别名称',
                    anchor: '100%',
                },
                {
                    xtype: 'textfield',
                    name: 'Customer',
                    fieldLabel: '英文名称',
                    width: 250,
                    labelWidth: 80,
                    emptyText: '请输入英文名称',
                    anchor: '100%',
                },
                {
                    xtype: 'textfield',
                    name: 'Customer',
                    fieldLabel: '存货科目',
                    width: 250,
                    labelWidth: 80,
                    emptyText: '请输入存货科目',
                    anchor: '100%',
                },
                {
                    xtype: 'textfield',
                    name: 'Customer',
                    fieldLabel: '销售收入科目',
                    width: 250,
                    labelWidth: 80,
                    emptyText: '请输入销售收入科目',
                    anchor: '100%',
                },
                {
                    xtype: 'textfield',
                    name: 'Customer',
                    fieldLabel: '销售成本科目',
                    width: 250,
                    labelWidth: 80,
                    emptyText: '请输入销售成本科目',
                    anchor: '100%',
                },
                {
                    xtype: 'textfield',
                    name: 'Customer',
                    fieldLabel: '发出商品科目',
                    width: 250,
                    labelWidth: 80,
                    emptyText: '请输入发出商品科目',
                    anchor: '100%',
                },
                {
                    xtype: 'textfield',
                    name: 'Customer',
                    fieldLabel: '赠品费用科目',
                    width: 250,
                    labelWidth: 80,
                    emptyText: '请输入赠品费用科目',
                    anchor: '100%',
                },
                {
                    xtype: 'textfield',
                    name: 'Customer',
                    fieldLabel: '其他收入科目',
                    width: 250,
                    labelWidth: 80,
                    emptyText: '请输入其他收入科目',
                    anchor: '100%',
                },
                {
                    xtype: 'textfield',
                    name: 'Customer',
                    fieldLabel: '其他费用科目',
                    width: 250,
                    labelWidth: 80,
                    emptyText: '请输入其他费用科目',
                    anchor: '100%',
                },
                {
                    xtype: 'textfield',
                    name: 'Customer',
                    fieldLabel: '其他成本科目',
                    width: 250,
                    labelWidth: 80,
                    emptyText: '请输入其他成本科目',
                    anchor: '100%',
                },
                {
                    xtype: 'textarea',
                    name: 'Remark',
                    width: 250,
                    fieldLabel: '备注',
                    labelWidth: 80,
                    anchor: '100%',
                },
        ]



    });



    var windowst = new Ext.Window({
        width: 350,
        height: 420,
        title: "物料类别设定",
        closable: true,
        resizable: false, //设置是否可以改变大小
        draggable: true,
        anchor: '100%',
        items: [forms],
    });

    return windowst;
}