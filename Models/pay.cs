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
    
    public partial class pay
    {
        public int dno { get; set; }
        public int oid { get; set; }
        public string listkind { get; set; }
        public Nullable<System.DateTime> nodate { get; set; }
        public string oldno { get; set; }
        public string invoicenumber { get; set; }
        public string dealman { get; set; }
        public string dealmanname { get; set; }
        public string departmentno { get; set; }
        public string department { get; set; }
        public string purchaseman { get; set; }
        public string projectname { get; set; }
        public string currency { get; set; }
        public Nullable<float> exchangerate { get; set; }
        public Nullable<float> oldnomoney { get; set; }
        public Nullable<float> money { get; set; }
        public Nullable<float> discountmoney { get; set; }
        public Nullable<float> offsetmoney { get; set; }
        public int Ischeck { get; set; }
    
        public virtual branch branch { get; set; }
    }
}
