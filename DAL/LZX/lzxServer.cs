using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
namespace DAL.LZX
{
    public class lzxServer
    {
        #region 新增退货主
        public static int Add(t_preturn a)
        {
            erpsystemEntities1 stu = new erpsystemEntities1();
            stu.t_preturn.Add(a);
            return stu.SaveChanges();
        }
        #endregion
        #region 新增退货主子
        public static int Addzi(List<t_preturn_zi> b)
        {
            erpsystemEntities1 stu = new erpsystemEntities1();
            if (b != null)
            {
                foreach (var item in b)
                {
                    stu.t_preturn_zi.Add(item);
                }
            }
            return stu.SaveChanges();
        }
        #endregion
        #region 供应商查询
        public static IQueryable GYS()
        {
            erpsystemEntities1 stu = new erpsystemEntities1();
            var v = (from p in stu.funds
                     select new
                     {
                         ID = p.ID,
                         FundsAttribution = p.FundsAttribution,
                         ShortName = p.ShortName
                     });
            return v;
        }

        #endregion
        #region 日期编号
        public static String no(String data)
        {
            if (data != "")
            {
                DateTime date = Convert.ToDateTime(data);
                String time = date.ToString("yyyyMMdd");
                erpsystemEntities1 stu = new erpsystemEntities1();
                var v = (from p in stu.t_preturn where p.Pbillno.Contains(time) select p.Pbillno);
                if (v.Count() > 0)
                {
                    long max = long.Parse(v.Max());
                    return (max + 1) + "";
                }
                return time + "001";

            }
            return "";
        }
        #endregion
        #region 仓库
        public static IQueryable CK()
        {
            erpsystemEntities1 stu = new erpsystemEntities1();
            var v = (from p in stu.warehousetable
                     select new
                     {
                         Warehousenumber = p.Warehousenumber,
                         Warehousename = p.Warehousename
                     });
            return v;
        }
        #endregion.
        #region 采购入库
        public static IQueryable list()
        {
            erpsystemEntities1 stu = new erpsystemEntities1();
            var v = (from p in stu.td_inventory_list
                     where p.examine == "1"
                     select new
                     {
                         Bill_number = p.Bill_number,
                         Document_date = p.Document_date,
                         storehouse = (from pp in stu.warehousetable where p.storehouse == pp.Warehousenumber select pp.Warehousename),
                         ID = (from pp in stu.department where p.ID == pp.Bumenbianhao select pp.Departmentname)

                     });
            return v;
        }
        #endregion
        #region 转单入库
        public static IQueryable mike(String no)
        {
            erpsystemEntities1 stu = new erpsystemEntities1();
            var v = (from p in stu.td_inventory_list
                     where p.Bill_number == no
                     select new
                     {
                         Document_date = p.Document_date,
                         ID = (from pp in stu.department where p.ID == pp.Bumenbianhao select pp.Departmentname),
                         Affiliated_department = p.Affiliated_department,
                         Bill_number = p.Bill_number,
                         foreign_trade = p.foreign_trade,
                         Coin_stop = p.Coin_stop,
                         price_include = p.price_include,
                         exchange_rate = p.exchange_rate,
                         storehouse = (from pp in stu.warehousetable where p.storehouse == pp.Warehousenumber select pp.Warehousename),
                         Certificate_number = p.Certificate_number,
                         Procurement_staff = p.Procurement_staff,
                         Producer = p.Producer,
                         Auditor = p.Auditor
                     });
            return v;
        }
        #endregion
        #region 转单入库明细表
        public static IQueryable ruku(String no)
        {
            erpsystemEntities1 stu = new erpsystemEntities1();
            var v = (from p in stu.td_purchase
                     where p.Bill_number == no
                     select new
                     {
                         Material_number = p.Material_number,
                         name_of_material = p.name_of_material,
                         specifications = p.specifications,
                         unit = p.unit,
                         quantity = p.quantity,
                         price = p.price,
                         money = p.money,
                         Source_list = p.Source_list,
                         number = p.number,
                         Entry_remarks = p.Entry_remarks

                     });
            return v;
        }
        #endregion
        #region 显示页面
        public static IQueryable Show(int pakgindex)
        {
            erpsystemEntities1 stu = new erpsystemEntities1();
            var v = (from p in stu.t_preturn
                     where p.job == 1
                     orderby p.Pbillno
                     select new
                     {
                         supplierid = (from pp in stu.funds where p.supplierid == pp.ID select pp.ShortName),
                         Pdata = p.Pdata,
                         Pbillno = p.Pbillno,
                         PriceOfTax = p.PriceOfTax,
                         storehouseID = p.storehouseID,
                         CoinId = p.CoinId,
                         warehouseid = (from pp in stu.warehousetable where p.warehouseid == pp.Warehousenumber select pp.Warehousename),
                         ExchRate = p.ExchRate,
                         Pesonner = (from pp in stu.td_personnel_table where p.Pesonner == pp.Personnel select pp.Personal_name),
                         bumenbianhao = (from pp in stu.department where p.bumenbianhao == pp.Bumenbianhao select pp.Departmentname),
                         personnel = (from pp in stu.td_personnel_table where p.personnel == pp.Personnel select pp.Personal_name),
                         Auditor = (from pp in stu.td_personnel_table where p.Auditor == pp.Personnel select pp.Personal_name)
                     });
            return v.Skip((pakgindex - 1) * 1).Take(1);
        }
        #endregion
        #region 数据有多少
        public static int poi()
        {
            erpsystemEntities1 stu = new erpsystemEntities1();
            var v = (from p in stu.t_preturn
                     where p.job == 1
                     select p).Count();
            return v;
        }
        #endregion
        #region 供应商所对应的采购人员与部门
        public static IQueryable Funds(int ID)
        {
            erpsystemEntities1 stu = new erpsystemEntities1();
            var v = (from p in stu.funds
                     where p.ID == ID
                     select new
                     {
                         PersonID = (from pp in stu.td_personnel_table where p.PersonID == pp.Personnel select pp.Personal_name),
                         department = (from c in stu.department where (from pp in stu.td_personnel_table where p.PersonID == pp.Personnel select pp.department).Contains(c.Bumenbianhao) select c.Departmentname)
                     });
            return v;
        }
        #endregion
        #region 判断ADD/UPTADA
        public static int Counts(String name)
        {
            erpsystemEntities1 stu = new erpsystemEntities1();
            var v = (from p in stu.t_preturn
                     where p.Pbillno == name
                     select p).Count();

            return v;
        }
        #endregion
        #region 物料名称
        public static IQueryable record()
        {
            erpsystemEntities1 stu = new erpsystemEntities1();
            var v = (from p in stu.record
                     select new
                     {
                         ProdID = p.ProdID,
                         ClassID = (from pp in stu.material_name where p.ClassID == pp.ClassID select pp.ClassName),
                         MajorSupplierName = p.MajorSupplierName,
                         ProdName = p.ProdName
                     });
            return v;
        }
        #endregion
        #region 物料名称查询
        public static IQueryable records(String no)
        {
            erpsystemEntities1 stu = new erpsystemEntities1();
            var v = (from p in stu.record
                     where p.ProdID == no
                     select new
                     {
                         Material_number = p.ProdID,
                         name_of_material = p.ProdName,
                         ClassID = (from pp in stu.material_name where p.ClassID == pp.ClassID select pp.ClassName),
                         specifications = p.ProdSize,
                         unit = p.StdUnitName,
                         price = p.SuggestPrice,
                         quantity = 0
                     });
            return v;
        }
        #endregion
        #region 删除
        public static int Del(String no)
        {
            erpsystemEntities1 stu = new erpsystemEntities1();
            var c = (from p in stu.t_preturn_zi where p.Pbillno == no select p);
            foreach (var items in c)
            {
                stu.t_preturn_zi.Remove(items);
            }
            var v = (from p in stu.t_preturn where p.Pbillno == no select p);
            foreach (var items in v)
            {
                stu.t_preturn.Remove(items);
            }
            return stu.SaveChanges();
        }
        #endregion
        #region 查看子表
        public static IQueryable pzi(String no)
        {
            erpsystemEntities1 stu = new erpsystemEntities1();
            var v = (from p in stu.t_preturn_zi
                     where p.Bill_number == no
                     select new
                     {
                         Tid = p.Tid
                     });
            return v;
        }
        #endregion
        #region 供应商所对应的采购人员与部门
        public static IQueryable Fund(String name)
        {
            erpsystemEntities1 stu = new erpsystemEntities1();
            var v = (from p in stu.funds
                     where p.ShortName == name
                     select new
                     {
                         ID = p.ID,
                         PersonID = p.PersonID,
                         department = (from c in stu.department where (from pp in stu.td_personnel_table where p.PersonID == pp.Personnel select pp.department).Contains(c.Bumenbianhao) select c.Bumenbianhao)
                     });
            return v;
        }
        #endregion
        #region 仓库
        public static IQueryable CKID(String name)
        {
            erpsystemEntities1 stu = new erpsystemEntities1();
            var v = (from p in stu.warehousetable
                     select new
                     {
                         Warehousenumber = p.Warehousenumber
                     });
            return v;
        }
        #endregion.
        #region 退货明细表
        public static IQueryable tuihuo(String no)
        {
            erpsystemEntities1 stu = new erpsystemEntities1();
            var v = (from p in stu.t_preturn_zi
                     where p.Pbillno == no
                     select new
                     {
                         Material_number = (from pp in stu.record where p.matterid == pp.ProdID select pp.ProdID),
                         name_of_material = (from pp in stu.record where p.matterid == pp.ProdID select pp.ProdName),
                         ClassID = (from c in stu.material_name where (from pp in stu.record where p.matterid == pp.ProdID select pp.ClassID).Contains(c.ClassID) select c.ClassName),
                         specifications = (from pp in stu.record where p.matterid == pp.ProdID select pp.ProdSize),
                         unit = (from pp in stu.record where p.matterid == pp.ProdID select pp.StdUnitName),
                         price = (from pp in stu.record where p.matterid == pp.ProdID select pp.SuggestPrice),
                         quantity = p.COUNT,
                         Tid = p.Tid,
                         Source_list = p.outside,
                         number = p.Pbillno
                     });
            return v;
        }
        #endregion.
        #region 修改退货主
        public static int Editzhu(t_preturn a, List<t_preturn_zi> b)
        {
            erpsystemEntities1 stu = new erpsystemEntities1();
            var v = (from p in stu.t_preturn where p.Pbillno == a.Pbillno select p).First();
            v.Pbillno = a.Pbillno;
            v.supplierid = a.supplierid;
            v.Pdata = a.Pdata;
            v.PriceOfTax = a.PriceOfTax;
            v.storehouseID = a.storehouseID;
            v.CoinId = a.CoinId;
            v.ExchRate = a.ExchRate;
            v.warehouseid = a.warehouseid;
            var c = (from p in stu.t_preturn_zi where p.Pbillno == a.Pbillno select p);
            foreach (var items in c)
            {
                stu.t_preturn_zi.Remove(items);
            }

            if (b != null)
            {

                foreach (var item in b)
                {
                    stu.t_preturn_zi.Add(item);
                }
            }
            return stu.SaveChanges();
        }
        #endregion
    }
}
