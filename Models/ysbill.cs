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
    
    public partial class ysbill
    {
        public ysbill()
        {
            this.khls = new HashSet<khls>();
            this.qydetail = new HashSet<qydetail>();
        }
    
        public int customerid { get; set; }
        public string ysbillid { get; set; }
        public System.DateTime fsbilldate { get; set; }
        public string yscurrname { get; set; }
        public float ysexchrate { get; set; }
        public string ysone { get; set; }
        public string ystwo { get; set; }
        public string ysthree { get; set; }
        public float ysmoney1 { get; set; }
        public float ysmoney2 { get; set; }
        public Nullable<float> ysmoney3 { get; set; }
        public int yszd { get; set; }
        public int yssh { get; set; }
        public int checkstatus { get; set; }
    
        public virtual clientmaster clientmaster { get; set; }
        public virtual ICollection<khls> khls { get; set; }
        public virtual ICollection<qydetail> qydetail { get; set; }
        public virtual user user { get; set; }
        public virtual user user1 { get; set; }
    }
}
