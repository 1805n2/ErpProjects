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
    
    public partial class rk_zhubiao
    {
        public rk_zhubiao()
        {
            this.dsassignbuysub = new HashSet<dsassignbuysub>();
            this.rk_minxi = new HashSet<rk_minxi>();
        }
    
        public string rk_id { get; set; }
        public string rk_danjuid { get; set; }
        public System.DateTime rk_date { get; set; }
        public string rk_name { get; set; }
        public string rk_address { get; set; }
        public string rk_type { get; set; }
        public string rk_are { get; set; }
        public string rk_depot { get; set; }
        public string rk_currency { get; set; }
        public string rk_exchange { get; set; }
        public string rk_cgbuyer { get; set; }
        public string rk_branch { get; set; }
        public string rk_zdbuyer { get; set; }
        public string rk_fhbuyer { get; set; }
        public string rk_project { get; set; }
        public string rk_beizhu { get; set; }
        public int rk_zhuantai { get; set; }
    
        public virtual ICollection<dsassignbuysub> dsassignbuysub { get; set; }
        public virtual ICollection<rk_minxi> rk_minxi { get; set; }
        public virtual storage storage { get; set; }
    }
}
