using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.LSH;
using Models;

namespace BLL.LSH
{
   public static class XiaoshoudingdanManager
    {
        static XiaoshoudingdanService dal = new XiaoshoudingdanService();
        /// <summary>
        /// 查所有客户
        /// </summary>
        /// <returns></returns>
        public static List<userinfo> select()
        {
            return dal.select();
        }

        public static List<salesorder> selectzhu()
        {
            return dal.selectzhu();
        }

        public static userinfo selectid(int id)
        {
            return dal.selectid(id);
        }

        public static List<record> wuliaoselect()
        {
            return dal.wuliaoselect();
        }

        public static record wuliaoid(string ProdID)
        {
            return dal.wuliaoid(ProdID);
        }

        public static List<quotedprice> selectzhuan()
        {
            return dal.selectzhuan();
        }

        public static List<quotationdetails> selectdanjuid(string Receiptnumber)
        {
            return dal.selectdanjuid(Receiptnumber);
        }

        public static bool add(salesorder info)
        {
            return dal.add(info);
        }

        public static bool delete(string Documentnumber)
        {
            return dal.delete(Documentnumber);
        }

        public static List<salesorder> GetAll()
        {
            return dal.GetAll();
        }

        public static salesorder selectid(string Documentnumber)
        {
            return dal.selectid(Documentnumber);
        }

        public static bool update(salesorder info)
        {
            return dal.update(info);
        }

        public static bool update1(salesorder info)
        {
            return dal.update1(info);
        }
    }
}
