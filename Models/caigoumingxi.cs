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
    
    public partial class caigoumingxi
    {
        public int id { get; set; }
        public string matterid { get; set; }
        public string mattername { get; set; }
        public string specifications { get; set; }
        public string unitname { get; set; }
        public string sums { get; set; }
        public string reqirementdate { get; set; }
        public System.DateTime proposedate { get; set; }
        public System.DateTime journalizing { get; set; }
        public string sourceoneleave { get; set; }
        public string sourceonenumbers { get; set; }
        public string standardbidcurrencyleave { get; set; }
        public string standardbid { get; set; }
        public string standardbidmoney { get; set; }
        public string lastholepurchasecurrencyleave { get; set; }
        public string lastholepurchaseunit { get; set; }
        public string lastholepurchasebidmoney { get; set; }
        public string weisum { get; set; }
        public int lanhao { get; set; }
    
        public virtual caigouqinggou caigouqinggou { get; set; }
        public virtual wlzwj wlzwj { get; set; }
    }
}