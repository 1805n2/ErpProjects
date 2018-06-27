using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace DAL.LYF
{
   public class MVCSerice
    {
        // 销售退货单显示明细
       public static IQueryable GetWLZWJ_list(string billno)
       {
           erpsystemEntities1 ent = new erpsystemEntities1();
           var v = from p in ent.billtutype
                   where p.billno == billno
                   select new
                   {
                       billno = p.billno,
                       amountatax = p.amountatax,

                       discount = p.discount,
                       fromno = p.fromno,
                       fromrow = p.fromrow,
                       lineid = p.lineid,
                       num = p.num,
                       oidprice = p.oidprice,

                       sprice = p.sprice,
                       taxamt = p.taxamt,
                       taxrate = p.taxrate,

                       wuliaoid = p.wuliaoid
                   };
           return v;
       }

       //销售退货单根据id传
       public static IQueryable GetByid(int pageIndex,int pageSize) {
           erpsystemEntities1 ent = new erpsystemEntities1();
           var v = from p in ent.billtui
                   orderby p.billno descending
                   select new
                   {
                       billno = p.billno,
                       billdate = p.billdate,
                       checkstatus = p.checkstatus,
                       ware = p.ware,
                       
                      
                       huilv = p.huilv,
                       includerate = p.includerate,
                       
                       marker = p.marker,
                       moneystyle = p.moneystyle,
                       permitter = p.permitter,
                       //storage = p.user.userno

                   };
           return v.Skip((pageIndex - 1) * pageSize).Take(pageSize) ;
              
       }
       //分页
       public  static int  GetConut(){
           erpsystemEntities1 ent =new erpsystemEntities1 ();
           return ent.billtui.Count();
       }

       //销售退货单新增
       public static int GetAdd(billtui blii, List<billtutype> list)
       {
           erpsystemEntities1 ent = new erpsystemEntities1();
           ent.billtui.Add(blii);
           if (list !=null)
           {
               foreach (var item in list)
               {
                   ent.billtutype.Add(item);
               }
           }
           return ent.SaveChanges();
       }
       //销售退货单修改
       public static int Getenid(billtui blii,List<billtutype> list) {
           erpsystemEntities1 ent = new erpsystemEntities1();
           var v = (from p in ent.billtui where p.billno == blii.billno select p).First();
               v.billno = blii.billno;
               v.billdate = blii.billdate;
               v.checkstatus = blii.checkstatus;
               //v.clientmaster = blii.clientmaster;
               v.customerid = blii.customerid;
               var data = from p in ent.billtutype where p.billno == blii.billno select p;
               foreach (var item in data)
               {
                   ent.billtutype.Remove(item);
               }
               if (list != null)
               {
                   foreach (var item in list)
                   {
                       ent.billtutype.Add(item);
                   }
               }
               return ent.SaveChanges();
       }
      
       //销售退货单删除
       public static int Getdel(string  blii)
       {
           erpsystemEntities1 ent = new erpsystemEntities1();
           var del = from p in ent.billtui where p.billno == blii select p;
           foreach (var item in del)
           {
               ent.billtui.Remove(item);
           }
           var v = from p in ent.billtutype where p.billno == blii select p;
           foreach (var item in v)
           {
               ent.billtutype.Remove(item);
           }
          
           return ent.SaveChanges();
       }
       //客户类别新增
       public static int Getcloss_Add(closstype type)
       {
           erpsystemEntities1 ent = new erpsystemEntities1();
           ent.closstype.Add(type);
           return ent.SaveChanges();
       }
       //客户类别显示
       public static IQueryable Getcloss_list(int  type)
       {
           erpsystemEntities1 ent = new erpsystemEntities1();
           var v = from p in ent.closstype
                   where p.clossid == type
                   select new
                   {
                       clossid = p.clossid,
                       clossname = p.clossname,
                       englishname = p.englishname,
                       remarks = p.remarks
                   };
           return v;
       }
       //客户类别删除
       public static int Getcloss_del(int type)
       {
           erpsystemEntities1 ent = new erpsystemEntities1();
           var f = from p in ent.closstype where p.clossid == type select p;
           foreach (var item in f)
           {
               ent.closstype.Remove(item);
           }
           
           return ent.SaveChanges();
       }
       //客户类别修改
       public static int Getcloss_Eind(closstype type)
       {
           erpsystemEntities1 ent = new erpsystemEntities1();
           var enid = (from p in ent.closstype where p.clossid == type.clossid select p).First ();
           enid.clossid = type.clossid;
           enid.clossname = type.clossname;
           enid.englishname = type.englishname;
           enid.remarks = type.remarks;
           return ent.SaveChanges();
       }
       public static string Getdae(DateTime date) {
           erpsystemEntities1 ent = new erpsystemEntities1();
           string itme = date.ToString("yyyyMMdd");
           var v = from p in ent.billtui where p.billno.Contains(itme) select p.billno;
           if (v.Count() == 0)
           {
                return itme + "001";
           }
           else {
             
                 long max = long.Parse(v.Max());
                 return (max + 1) + "";
           }
       }
       //public static IQueryable GetYdwi(string id) {
       //    erpsystemEntities1 ent = new erpsystemEntities1();
       //    var v = from p in ent.Configuration
       //            where p. == id
       //            select new
       //            {
       //            };
       //    return v;
       //}
    }
}