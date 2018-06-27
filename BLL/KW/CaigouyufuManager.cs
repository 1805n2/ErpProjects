using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using DAL;
namespace BLL.KW
{
public  class CaigouyufuManager
    {
        public static IQueryable showzhu(int PageIndex)
        {
            return DAL.KW.CaigouyufuService.showzhu(PageIndex);
        }
        public static IQueryable yufuzi(string advanid)
        {
            return DAL.KW.CaigouyufuService.yufuzi(advanid);
        }
        public static int count()
        {
            return DAL.KW.CaigouyufuService.count();
        }
        public static IQueryable cxcgdd(int gysid)
        {
            return DAL.KW.CaigouyufuService.cxcgdd(gysid);
        }
        public static int xg(t_store_advance tsa, List<t_store_advancepay> list)
        {
            return DAL.KW.CaigouyufuService.xg(tsa, list);
        }
        public static string zdbh(string time)
        {
            return DAL.KW.CaigouyufuService.zdbh(time);
        }
        public static int xz(t_store_advance tsa, List<t_store_advancepay> list)
        {
            return DAL.KW.CaigouyufuService.xz(tsa, list);
        }
        public static int pd(string tsaid)
        {
            return DAL.KW.CaigouyufuService.pd(tsaid);
        }
        public static IQueryable gyscx()
        {
            return DAL.KW.CaigouyufuService.gyscx();
        }
        public static int shenhe(string djbh, int jine, int gysid)
        {
            return DAL.KW.CaigouyufuService.shenhe(djbh, jine, gysid);
        }
    }
}
