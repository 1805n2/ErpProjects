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
    
    public partial class dsdsadjustmain
    {
        public dsdsadjustmain()
        {
            this.dsdsadjustsub = new HashSet<dsdsadjustsub>();
        }
    
        public int tjbillnoid { get; set; }
        public int tjbillno { get; set; }
        public System.DateTime billdete { get; set; }
        public Nullable<int> iscsubject { get; set; }
        public Nullable<int> decsubject { get; set; }
        public Nullable<int> voucheckno { get; set; }
        public int adjust { get; set; }
        public string meno { get; set; }
        public Nullable<int> udefyi { get; set; }
        public Nullable<int> udefer { get; set; }
        public string maker { get; set; }
        public string permitter { get; set; }
        public int auditstatus { get; set; }
    
        public virtual ICollection<dsdsadjustsub> dsdsadjustsub { get; set; }
    }
}
