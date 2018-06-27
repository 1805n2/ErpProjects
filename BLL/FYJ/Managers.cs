using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using DAL.FYJ;
namespace BLL.FYJ
{
   public class Managers
    {
       public static IQueryable GetXunjias(int pageIndex, int pageSize)
       {
           return Services.GetXunjias(pageIndex, pageSize);
       }
       public static IQueryable GetStorage(int pageIndex, int pageSize)
       {
           return Services.GetStorage( pageIndex, pageSize);
       }
       public static int GetStorageRows()
       {
           return Services.GetStorageRows();
       }
       public static int GetUnitRow()
       {
           return Services.GetUnitRow();
       }
       public static IQueryable GetUnit(int pageIndex, int pageSize)
       {
           return Services.GetUnit(pageIndex, pageSize);
       }
       public static IQueryable GetGYS()
       {
           return Services.GetGYS();
       }
       public static IQueryable GetXunjiaDetail(string id)
       {
           return Services.GetXunjiaDetail(id);
       }
       public static int UpdateXunjia(buysearchmaster info, List<buysearchdetails> list)
       {
           return Services.UpdateXunjia(info, list);
       }
       
       public static IQueryable GetWuliao()
       {
           return Services.GetWuliao();
       }
       public static int AddXunjia(buysearchmaster info, List<buysearchdetails> list)
       {
           return Services.AddXunjia(info, list);
       }
       public static int Delxunjia(string id)
       {
           return Services.Delxunjia(id);
       }
       public static IQueryable GetOrderss(int pageIndex, int pageSize)
       {
           return Services.GetOrderss(pageIndex, pageSize);
       }
       public static IQueryable GetOrdersDetail(string id)
       {
           return Services.GetOrdersDetail(id);

       }
       public static int AddOrders(orders info, List<orderdetails> list)
       {
           return Services.AddOrders(info, list);
       }
       public static int DelOrder(string id)
       {
           return Services.DelOrder(id);
       }
       public static int UpdateOrders(orders info, List<orderdetails> list)
       {
           return Services.UpdateOrders(info, list);
       }
       public static string GetTime(DateTime time)
       {
           return Services.GetTime(time);
       }
       public static int GetOrdernum()
       {
           return Services.GetOrdernum();
       }
       public static int XunjiaRow()
       {
           return Services.XunjiaRow();
       }
       public static string GetTimes(DateTime time)
       {
           return Services.GetTimes(time);
       }
       public static IQueryable zdtXunjias()
       {
           return Services.zdtXunjias();
       }
       public static IQueryable GetOrders()
       {
           return Services.GetOrders();
       }
       public static IQueryable GetXunjia()
       {
           return Services.GetXunjia();
       }
       public static int ShenHeXunjia(string id)
       {
           return Services.ShenHeXunjia(id);
       }
       public static int ShenHedingdan(string id)
       {
           return Services.ShenHedingdan(id);
       }
       public static int fShenHeXunjia(string id)
       {
           return Services.fShenHeXunjia(id);
       }
       public static int fShenHedingdan(string id)
       {
           return Services.fShenHedingdan(id);
       }
    }
}
