using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
namespace DAL.KW
{
 public   class CaigouyufuService
    {
        public static IQueryable showzhu(int PageIndex)
        {
            erpsystemEntities1 xe = new erpsystemEntities1();
            var v = from p in xe.t_store_advance
                    orderby p.Bill_advance descending
                    select new
                    {
                        Bill_advance = p.Bill_advance,
                        Coin_stop = p.Coin_stop,
                        Compound_human_ID = p.td_personnel_table.Personal_name,
                        Bumenbianhao = p.department.Departmentname,
                        Deposit_rate = p.Deposit_rate,
                        Document_date = p.Document_date,
                        Exchange_rate = p.Exchange_rate,
                        Money1 = p.Money1,
                        Money2 = p.Money2,
                        Settle_accounts1 = p.Settle_accounts1,
                        Settle_accounts2 = p.Settle_accounts2,
                        Single_person_ID = p.td_personnel_table1.Personal_name,
                        Supplier_ID = p.funds.FulName,
                        Termination_month = p.Termination_month.Value,
                        supid = p.Supplier_ID,
                        perid = p.Single_person_ID != null ? p.Single_person_ID : null,
                        compuid = p.Compound_human_ID != null ? p.Compound_human_ID : null,
                        bianhao = p.department.Bumenbianhao
                    };
            return v.Skip((PageIndex - 1) * 1).Take(1);
        }

        public static int count()
        {
            erpsystemEntities1 xe = new erpsystemEntities1();
            var v = from p in xe.t_store_advance select p;
            return v.Count();
        }

        public static IQueryable yufuzi(string advanid)
        {
            erpsystemEntities1 xe = new erpsystemEntities1();
            var v = from p in xe.t_store_advancepay
                    where p.Bill_advancepay == advanid
                    select new
                    {
                        Amount_dvanced = p.Amount_dvanced,
                        Source_date = p.Source_date,
                        Source_name = p.Source_name,
                        summary = p.summary
                    };
            return v;
        }

        public static IQueryable cxcgdd(int gysid)
        {
            erpsystemEntities1 xe = new erpsystemEntities1();
            var v = from p in xe.purchasing_ordermain
                    where p.Individual_ondition == 0 && p.Audit_status == 1 && p.Supplier_Id == gysid
                    select new
                    {
                        Bill_number = p.Bill_number,
                        Document_date = p.Document_date
                    };
            return v;
        }
        public static string zdbh(string time)
        {
            erpsystemEntities1 xe = new erpsystemEntities1();
            string date = Convert.ToDateTime(time).ToString("yyyyMMdd");
            var v = from p in xe.t_store_advance where p.Bill_advance.Contains(date) select p.Bill_advance;
            if (v.Count() > 0)
            {
                return (long.Parse(v.Max()) + 1).ToString();
            }
            return date + "001";
        }

        public static int xz(t_store_advance tsa, List<t_store_advancepay> list)
        {
            erpsystemEntities1 xe = new erpsystemEntities1();
            tsa.Single_person_ID = 1;
            xe.t_store_advance.Add(tsa);
            if (list != null)
            {
                int i = 0;
                foreach (var item in list)
                {
                    item.Bill_advancepay = tsa.Bill_advance;
                    item.Line_advancepay = ++i;
                    xe.t_store_advancepay.Add(item);
                }
            }
            return xe.SaveChanges();
        }

        public static int xg(t_store_advance tsa, List<t_store_advancepay> list)
        {
            erpsystemEntities1 xe = new erpsystemEntities1();
            var v = (from p in xe.t_store_advance where p.Bill_advance == tsa.Bill_advance select p).First();
            v.Document_date = tsa.Document_date;
            v.Supplier_ID = tsa.Supplier_ID;
            v.Coin_stop = tsa.Coin_stop;
            v.Settle_accounts1 = tsa.Settle_accounts1;
            v.Settle_accounts2 = tsa.Settle_accounts2;
            v.Money1 = tsa.Money1;
            v.Money2 = tsa.Money2;
            v.Exchange_rate = tsa.Exchange_rate;
            v.Deposit_rate = tsa.Deposit_rate;
            v.Termination_month = tsa.Termination_month;
            v.Single_person_ID = tsa.Single_person_ID;
            v.Compound_human_ID = tsa.Compound_human_ID;
            v.Audit_status = tsa.Audit_status;
            var s = from c in xe.t_store_advancepay where c.Bill_advancepay == tsa.Bill_advance select c;
            if (s.Count() > 0)
            {
                foreach (var item in s)
                {
                    xe.t_store_advancepay.Remove(item);
                }
            }
            if (list != null)
            {
                foreach (var item in list)
                {
                    xe.t_store_advancepay.Add(item);
                }
            }
            return xe.SaveChanges();
        }

        public static int pd(string tsaid)
        {
            erpsystemEntities1 xe = new erpsystemEntities1();
            var v = from p in xe.t_store_advance where p.Bill_advance.Contains(tsaid) select p;
            if (v.Count() > 0)
            {
                v = v.Where(p => p.Audit_status != 0);
                if (v.Count() > 0)
                {
                    return 3;
                }
                return 2;
            }
            return 1;
        }

        public static IQueryable gyscx()
        {
            erpsystemEntities1 xe = new erpsystemEntities1();
            var v = from p in xe.funds
                    select new
                    {
                        ID = p.ID,
                        FulName = p.FulName
                    };
            return v;
        }

        public static int shenhe(string djbh, int jine, int gysid)
        {
            erpsystemEntities1 xe = new erpsystemEntities1();
            var v = from p in xe.t_store_advance where p.Bill_advance == djbh select p;
            var s = (from p in xe.funds where p.ID == gysid select p).First();
            string je = s.CurAdvRecv;
            var sum = int.Parse(je) + jine;
            s.CurAdvRecv = sum.ToString();
            if (v.Count() > 0)
            {
                t_store_advance td = v.First();
                td.Audit_status = 1;
                td.Compound_human_ID = 2;
            }
            return xe.SaveChanges();
        }
    }
}
