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
    
    public partial class dsassignbuysub
    {
        public int billnoid { get; set; }
        public int billnoline { get; set; }
        public int serno { get; set; }
        public string fromnoid { get; set; }
        public string proid { get; set; }
        public string prodname { get; set; }
        public string prodsize { get; set; }
        public float mlamountmy { get; set; }
        public int vquantity { get; set; }
        public string sunit { get; set; }
        public string weight { get; set; }
        public string measm { get; set; }
        public float ftmlamountmy { get; set; }
    
        public virtual daassigbuymain daassigbuymain { get; set; }
        public virtual rk_zhubiao rk_zhubiao { get; set; }
        public virtual wlzwj wlzwj { get; set; }
    }
}
