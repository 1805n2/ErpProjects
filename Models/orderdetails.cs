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
    
    public partial class orderdetails
    {
        public string orderid { get; set; }
        public int oline { get; set; }
        public string osperid { get; set; }
        public string ospername { get; set; }
        public string oprodsize { get; set; }
        public string ounitname { get; set; }
        public Nullable<int> onum { get; set; }
        public Nullable<float> osperprice { get; set; }
        public Nullable<float> oszheshu { get; set; }
        public Nullable<float> oprice { get; set; }
        public Nullable<float> omoney { get; set; }
        public Nullable<float> otaxrate { get; set; }
        public Nullable<float> otaxmoney { get; set; }
        public Nullable<float> otaxmoneys { get; set; }
        public System.DateTime ostoragedate { get; set; }
        public Nullable<int> oisprent { get; set; }
        public string oremark { get; set; }
        public string origintype { get; set; }
        public string originno { get; set; }
        public Nullable<int> oweinum { get; set; }
    
        public virtual orders orders { get; set; }
        public virtual wlzwj wlzwj { get; set; }
    }
}
