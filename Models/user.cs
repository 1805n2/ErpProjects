//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的。
//
//    手动更改此文件可能会导致应用程序中发生异常行为。
//    如果重新生成代码，则将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class user
    {
        public user()
        {
            this.billtui = new HashSet<billtui>();
            this.billtui1 = new HashSet<billtui>();
            this.buysearchmaster = new HashSet<buysearchmaster>();
            this.caigouqinggou = new HashSet<caigouqinggou>();
            this.dingdanzhu = new HashSet<dingdanzhu>();
            this.dingdanzhu1 = new HashSet<dingdanzhu>();
            this.orders = new HashSet<orders>();
            this.returnods = new HashSet<returnods>();
            this.saleck = new HashSet<saleck>();
            this.saleck1 = new HashSet<saleck>();
            this.x_documents = new HashSet<x_documents>();
            this.x_documents1 = new HashSet<x_documents>();
            this.ysbill = new HashSet<ysbill>();
            this.ysbill1 = new HashSet<ysbill>();
            this.ysckbill = new HashSet<ysckbill>();
            this.ysckbill1 = new HashSet<ysckbill>();
        }
    
        public int userid { get; set; }
        public string pwd { get; set; }
        public string userno { get; set; }
    
        public virtual ICollection<billtui> billtui { get; set; }
        public virtual ICollection<billtui> billtui1 { get; set; }
        public virtual ICollection<buysearchmaster> buysearchmaster { get; set; }
        public virtual ICollection<caigouqinggou> caigouqinggou { get; set; }
        public virtual ICollection<dingdanzhu> dingdanzhu { get; set; }
        public virtual ICollection<dingdanzhu> dingdanzhu1 { get; set; }
        public virtual ICollection<orders> orders { get; set; }
        public virtual ICollection<returnods> returnods { get; set; }
        public virtual ICollection<saleck> saleck { get; set; }
        public virtual ICollection<saleck> saleck1 { get; set; }
        public virtual ICollection<x_documents> x_documents { get; set; }
        public virtual ICollection<x_documents> x_documents1 { get; set; }
        public virtual ICollection<ysbill> ysbill { get; set; }
        public virtual ICollection<ysbill> ysbill1 { get; set; }
        public virtual ICollection<ysckbill> ysckbill { get; set; }
        public virtual ICollection<ysckbill> ysckbill1 { get; set; }
    }
}
