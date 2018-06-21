using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
namespace DAL
{
    public class wxService
    {
        public static IQueryable GetBuyType()
        {
            erpsystemEntities e = new erpsystemEntities();
            
            var v = from p in e.buytype
                    select new
                    {
                        Buytypeid=p.Buytypeid,
                        BuytypeName=p.BuytypeName
                    };
            return v;
        }
        public static IQueryable GetBuyTypeId(int id)
        {
            erpsystemEntities e = new erpsystemEntities();
            var v = from p in e.buytype
                    where id==p.Buytypeid
                    select new
                    {
                        Buytypeid = p.Buytypeid,
                        BuytypeName = p.BuytypeName
                    };
            return v;
        }
        //public static string GetByBillno(DateTime date)
        //{
        //    erpsystemEntities e = new erpsystemEntities();
        //    var v = from p in e.caigouqinggou
        //            select new
        //            {

        //            };
        //    return v;
        //}
    }
}
