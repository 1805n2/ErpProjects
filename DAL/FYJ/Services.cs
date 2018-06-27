using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace DAL.FYJ
{
    public class Services
    {
        #region 查询请购询价信息
        public static IQueryable GetXunjias(int pageIndex,int pageSize)
        {
            erpsystemEntities1 t = new erpsystemEntities1();
            var v = from p in t.buysearchmaster
                    orderby p.stunum descending
                    select new
                    {
                      
                        saddress = p.saddress,
                        sdel = p.sdel,
                        sfooter = p.sfooter,
                        sheader = p.sheader,
                        sotaxrate = p.sotaxrate,
                        sremark = p.sremark,
                        stobuy = p.stobuy,
                        stodate = p.stodate,
                        stodid = p.stodid,
                        stoistax = p.stoistax,
                        stomake = p.stomake,
                        stopid = p.stopid,
                        stopname = p.stopname,
                        store = p.store,
                        stoshen = p.stoshen,
                        soshort = p.stoshort,
                        stostate = p.stostate,
                        stoydate = p.stoydate,
                        stunum = p.stunum,
                        szione = p.szione,
                        szitwo = p.szitwo,
                        stodep = p.stodep,
                        stosaddress = p.stosaddress,
                       
                        
                    };
            return v.Skip((pageIndex-1)*pageSize).Take(pageSize);
        }
        #endregion

        public static IQueryable GetXunjia()
        {
            erpsystemEntities1 t = new erpsystemEntities1();
            var v = from p in t.buysearchmaster
                    orderby p.stoid descending
                    select new
                    {

                        saddress = p.saddress,
                        sdel = p.sdel,
                        sfooter = p.sfooter,
                        sheader = p.sheader,
                        sotaxrate = p.sotaxrate,
                        sremark = p.sremark,
                        stobuy = p.stobuy,
                        stodate = p.stodate,
                        stodid = p.stodid,
                        stoistax = p.stoistax,
                        stomake = p.stomake,
                        stopid = p.stopid,
                        stopname = p.stopname,
                        store = p.store,
                        stoshen = p.stoshen,
                        soshort = p.stoshort,
                        stostate = p.stostate,
                        stoydate = p.stoydate,
                        stunum = p.stunum,
                        szione = p.szione,
                        szitwo = p.szitwo,
                        stodep = p.stodep,
                        stosaddress = p.stosaddress,

                    };
            return v.Take(1);
        }

        #region 新增采购询价信息
        public static int AddXunjia(buysearchmaster info, List<buysearchdetails> list)
        {
            //stoshort

            info.stoid = info.stunum;
            info.stoshort = "RMB";

            erpsystemEntities1 t = new erpsystemEntities1();
            t.buysearchmaster.Add(info);
            if (list != null)
            {
                foreach (var item in list)
                {
                    item.sid = info.stunum;
                    if (item.sid == info.stunum)
                    {

                        t.buysearchdetails.Add(item);
                    }

                }
            }
            return t.SaveChanges();
        }
        #endregion




        #region 删除采购询价单
        public static int Delxunjia(string id)
        {
            erpsystemEntities1 t = new erpsystemEntities1();
            var v = (from p in t.buysearchdetails where p.sid == id select p);
            if (v != null)
            {
                foreach (var item in v)
                {
                    t.buysearchdetails.Remove(item);
                }
            }
            var vv = (from p in t.buysearchmaster where p.stunum == id select p).First();
            t.buysearchmaster.Remove(vv);
            return t.SaveChanges();
        }
        #endregion

        #region 修改询价单
        public static int UpdateXunjia(buysearchmaster info, List<buysearchdetails> list)
        {
            erpsystemEntities1 t = new erpsystemEntities1();
            var v = (from p in t.buysearchmaster where p.stunum == info.stunum select p).First();
            v.saddress = info.saddress;
            v.sdel = info.sdel;
            v.sfooter = info.sfooter;
            v.sheader = info.sheader;
            v.sotaxrate = info.sotaxrate;
            v.sremark = info.sremark;
            v.stobuy = info.stobuy;
            v.stodate = info.stodate;
            v.stodep = info.stodep;
            v.stodid = info.stodid;
            v.stoistax = info.stoistax;
            v.stomake = info.stomake;
            v.stopbid = info.stopbid;
            v.stopid = info.stopid;
            v.stopname = info.stopname;
            v.store = info.store;
            v.stosaddress = info.stosaddress;
            v.stoshen = info.stoshen;
            v.stoshort = info.stoshort;
            v.stostate = info.stostate;
            v.stoydate = info.stoydate;
            v.stunum = info.stunum;
            v.szione = info.szione;
            v.szitwo = info.szitwo;
            if (v != null)
            {
                var vv = from pp in t.buysearchdetails where pp.sid == info.stunum select pp;
                foreach (var item in vv)
                {
                    t.buysearchdetails.Remove(item);
                }
                if (list != null)
                {
                    foreach (var item in list)
                    {
                        t.buysearchdetails.Add(item);
                    }
                }
            }
            return t.SaveChanges();
        }
        #endregion

        #region 仓库查询
        public static IQueryable GetStorage(int pageIndex, int pageSize)
        {
            erpsystemEntities1 t = new erpsystemEntities1();
            var v = from p in t.storage
                    orderby p.stoid
                    select new
                    {
                        stoid = p.stoid,
                        stoname = p.stoname,
                        stophone = p.stophone,
                        storemark = p.storemark,
                        stosimplename = p.stosimplename,
                        stoaddress = p.stoaddress,
                        stoconnecter = p.stoconnecter,
                        stoenglishname = p.stoenglishname,
                        sdel = p.sdel


                    };
            return v.Skip((pageIndex - 1) * pageSize).Take(pageSize);
        }
        #endregion
        #region 仓库数量
        public static int GetStorageRows()
        {
            erpsystemEntities1 t = new erpsystemEntities1();
            return t.storage.Count();
        }
        #endregion



        #region 计量单位数量查询
        public static int GetUnitRow()
        {
            erpsystemEntities1 t = new erpsystemEntities1();
            return t.unit.Count();
        }
        #endregion
        #region 计量单位查询
        public static IQueryable GetUnit(int pageIndex, int pageSize)
        {
            erpsystemEntities1 t = new erpsystemEntities1();
            var v = from p in t.unit
                    orderby p.unitid
                    select new
                    {
                        unitdel = p.unitdel,
                        unitengname = p.unitengname,
                        unitid = p.unitid,
                        unitname = p.unitname,
                        unitremark = p.unitremark



                    };
            return v.Skip((pageIndex - 1) * pageSize).Take(pageSize);
        }
        #endregion


        #region 供应商信息

        public static IQueryable GetGYS()
        {
            erpsystemEntities1 t = new erpsystemEntities1();
            var v = from p in t.gmeans
                    select new
                    {
                        gid = p.gid,
                        gnname = p.gnname
                    };
            return v;
        }
        #endregion


        #region 物料信息
        public static IQueryable GetWuliao()
        {
            erpsystemEntities1 t = new erpsystemEntities1();
            var v = from p in t.wlzwj
                    select new
                    {

                        matid = p.matid,
                        matname = p.matname
                    };
            return v;
        }
        #endregion


        #region 询价子表查询
        public static IQueryable GetXunjiaDetail(string id)
        {
            erpsystemEntities1 t = new erpsystemEntities1();
            var v = from p in t.buysearchdetails where p.sid==id 
                    select new
                    {

                        sdacess = p.sdacess,
                        line = p.line,
                        sdtaxmoney = p.sdtaxmoney,
                        sdtaxmoneys = p.sdtaxmoneys,
                        sfenremark = p.sfenremark,
                        sid = p.sid,
                        sisdel = p.sisdel,
                        smodel = p.smodel,

                        smoney = p.smoney,
                        snum = p.snum,
                        soriginid = p.soriginid,
                        sorigintype = p.sorigintype,
                        sprice = p.sprice,
                        sunit = p.sunit,
                        swuid = p.swuid,
                        swuname = p.swuname,
                        szengping = p.szengping,
                        szheshu = p.szheshu,
                        szprice = p.szprice


                    };
            return v;
        }
        #endregion


        #region 订单查询
        public static IQueryable GetOrderss(int pageIndex,int pageSize)
        {
            erpsystemEntities1 t = new erpsystemEntities1();
            var v = from p in t.orders
                    orderby p.ostoid descending
                    select new
                    {
                        ostoid=p.ostoid,
                        obibie = p.obibie,
                        ofooter = p.ofooter,
                        oheader = p.oheader,
                        oscaidep = p.oscaidep,
                        oscaidepid = p.oscaidepid,
                        oshestate = p.oshestate,
                        osisdel = p.osisdel,
                        osperaddress = p.osperaddress,
                        ospercai = p.ospercai,
                        ospercaiid = p.ospercaiid,
                        osperid = p.osperid,
                        ospername = p.ospername,
                        osremarks = p.osremarks,
                        ossongaddress = p.ossongaddress,
                        ostate = p.ostate,
                        ostodate = p.ostodate,
                        ostoemcheck = p.ostoemcheck,
                        ostomemake = p.ostomemake,
                        ostoreorder = p.ostoreorder,
                        osunittax = p.osunittax,
                        otype = p.otype,
                        oxiangmu = p.oxiangmu,
                     
                        ozione = p.ozione,
                        ozitwo = p.ozitwo,

                    };
            return v.Skip((pageIndex-1)*pageSize).Take(pageSize);
        }
        #endregion
        public static IQueryable GetOrders()
        {
            erpsystemEntities1 t = new erpsystemEntities1();
            var v = from p in t.orders
                    orderby p.ostoid descending
                    select new
                    {
                        ostoid = p.ostoid,
                        obibie = p.obibie,
                        ofooter = p.ofooter,
                        oheader = p.oheader,
                        oscaidep = p.oscaidep,
                        oscaidepid = p.oscaidepid,
                        oshestate = p.oshestate,
                        osisdel = p.osisdel,
                        osperaddress = p.osperaddress,
                        ospercai = p.ospercai,
                        ospercaiid = p.ospercaiid,
                        osperid = p.osperid,
                        ospername = p.ospername,
                        osremarks = p.osremarks,
                        ossongaddress = p.ossongaddress,
                        ostate = p.ostate,
                        ostodate = p.ostodate,
                        ostoemcheck = p.ostoemcheck,
                        ostomemake = p.ostomemake,
                        ostoreorder = p.ostoreorder,
                        osunittax = p.osunittax,
                        otype = p.otype,
                        oxiangmu = p.oxiangmu,

                        ozione = p.ozione,
                        ozitwo = p.ozitwo,

                    };
            return v.Take(1);
        }
        #region 订单子表查询(未入库量还没有,数据模型没更新)
        public static IQueryable GetOrdersDetail(string id)
        {
            erpsystemEntities1 t = new erpsystemEntities1();
            var v = from p in t.orderdetails where p.orderid==id
                    select new
                    {
                      
                        oisprent = p.oisprent,
                        oline = p.oline,
                        omoney = p.omoney,
                        onum = p.onum,
                        oprice = p.oprice,
                        oprodsize = p.oprodsize,
                        orderid = p.orderid,
                        oremark = p.oremark,
                        originno = p.originno,
                        origintype = p.origintype,
                        osperid = p.osperid,
                        ospername = p.ospername,
                        osperprice = p.osperprice,
                        ostoragedate = p.ostoragedate,
                        oszheshu = p.oszheshu,
                        otaxmoney = p.otaxmoney,
                        otaxrate = p.otaxrate,
                        ounitname = p.ounitname,
                        otaxmoneys=p.otaxmoneys,
                        oweinum=p.oweinum
                    };
            return v;
        }
        #endregion




        #region 新增订单
        public static int AddOrders(orders info, List<orderdetails> list)
        {
            erpsystemEntities1 t = new erpsystemEntities1();
            info.orderid = info.ostoid;
         
            info.oscaidepid = "1";
            info.osisdel = 1;
            info.ospercaiid = 1;
            info.ostoreorder = 1;
            info.oshestate = "未审核";
            info.ostoreorder = 1;
            info.osunittax = 1;
            info.ostodate = DateTime.Now;
            info.osperid = "1";
            t.orders.Add(info);
            if (list != null)
            {
                //int i=0;
                foreach (var item in list)
                {
                    item.orderid =info.ostoid;
                    if (item.orderid == info.ostoid)
                  {
                      //item.oline = i + 1;
                       t.orderdetails.Add(item);
                  }
                   
                }
            }
            return t.SaveChanges();
        }
        #endregion
        

        #region 删除订单
        public static int DelOrder(string id)
        {
            erpsystemEntities1 t = new erpsystemEntities1();
            var v = from p in t.orderdetails where p.orderid == id select p;
            if (v != null)
            {
                foreach (var item in v)
                {
                    t.orderdetails.Remove(item);
                }
            }
            var vv = from pp in t.orders where pp.ostoid == id select pp;
            t.orders.Remove(vv.First());
            return t.SaveChanges();
        }
        #endregion


        #region 修改订单
        public static int UpdateOrders(orders info, List<orderdetails> list)
        {
            erpsystemEntities1 t = new erpsystemEntities1();
            var v = (from p in t.orders where p.ostoid == info.ostoid select p).First();
            v.obibie = info.obibie;
            v.ofooter = info.ofooter;
            v.oheader = info.oheader;
            v.oscaidep = info.oscaidep;
            //v.oscaidepid = info.oscaidepid;
            v.oshestate = info.oshestate;
            v.osisdel = info.osisdel;
            v.osperaddress = info.osperaddress;
            v.ospercai = info.ospercai;
            //v.ospercaiid = info.ospercaiid;
            v.osperid = info.osperid;
            v.ospername = info.ospername;
            v.osremarks = info.osremarks;
            v.ossongaddress = info.ossongaddress;
            v.ostate = info.ostate;
            v.ostodate = info.ostodate;
            v.ostoemcheck = info.ostoemcheck;
            v.ostomemake = info.ostomemake;
            v.ostoreorder = info.ostoreorder;
            v.osunittax = info.osunittax;
            v.otype = info.otype;
            v.oxiangmu = info.oxiangmu;

            v.ozione = info.ozione;
            v.ozitwo = info.ozitwo;
            var vv = from p in t.orderdetails where p.orderid == info.ostoid select p;

            if (vv != null)
            {
                foreach (var item in vv)
                {
                    t.orderdetails.Remove(item);
                }
                if (list != null)
                {
                    foreach (var item in list)
                    {
                        t.orderdetails.Add(item);
                    }
                }
            }
           
            return t.SaveChanges();
        }
        #endregion



        #region 日期生成编号 
        public static string GetTime(DateTime time)
        {
            erpsystemEntities1 t = new erpsystemEntities1();
            string times = time.ToString("yyyyMMdd");
            var v = from p in t.orders where p.ostoid.Contains(times) select p.ostoid;
            if (v.Count() == 0)
            {
                return times + "001";
            }
            else
            {
                long max = long.Parse(v.Max());
                return max + 1 + "";
            }
        } 
        #endregion
        #region 询价日期生成编号
        public static string GetTimes(DateTime time)
        {
            erpsystemEntities1 t = new erpsystemEntities1();
            string times = time.ToString("yyyyMMdd");
            var v = from p in t.buysearchmaster where p.stunum.Contains(times) select p.stunum;
            if (v.Count() == 0)
            {
                return times + "001";
            }
            else
            {
                long max = long.Parse(v.Max());
                return max + 1 + "";
            }
        }
        #endregion
        #region 订单数量
        public static int GetOrdernum()
        {
            erpsystemEntities1 t = new erpsystemEntities1();
            return t.orders.Count();
        } 
        #endregion


        #region 询价数量
        public static int XunjiaRow()
        {
            erpsystemEntities1 t = new erpsystemEntities1();
            return t.buysearchmaster.Count();
        } 
        #endregion

        #region 转单请购询价信息
        public static IQueryable zdtXunjias()
        {
            erpsystemEntities1 t = new erpsystemEntities1();
            var v = from p in t.buysearchmaster
                    orderby p.stoid descending 
                    select new
                    {

                        saddress = p.saddress,
                        sdel = p.sdel,
                        sfooter = p.sfooter,
                        sheader = p.sheader,
                        sotaxrate = p.sotaxrate,
                        sremark = p.sremark,
                        stobuy = p.stobuy,
                        stodate = p.stodate,
                        stodid = p.stodid,
                        stoistax = p.stoistax,
                        stomake = p.stomake,
                        stopid = p.stopid,
                        stopname = p.stopname,
                        store = p.store,
                        stoshen = p.stoshen,
                        soshort = p.stoshort,
                        stostate = p.stostate,
                        stoydate = p.stoydate,
                        stunum = p.stunum,
                        szione = p.szione,
                        szitwo = p.szitwo,
                        stodep = p.stodep,
                        stosaddress = p.stosaddress,

                    };
            return v;
        }
        #endregion


        #region 审核询价单
        public static int ShenHeXunjia(string id)
        {
            erpsystemEntities1 t = new erpsystemEntities1();
            var v = (from p in t.buysearchmaster where p.stunum == id select p).First();
            v.stostate = "已审核";
            return t.SaveChanges();
        } 
        #endregion

        #region 审核订单
        public static int ShenHedingdan(string id)
        {
            erpsystemEntities1 t = new erpsystemEntities1();
            var v = (from p in t.orders where p.ostoid == id select p).First();
            v.oshestate = "已审核";
            return t.SaveChanges();
        }
        #endregion
        #region 反审核询价单
        public static int fShenHeXunjia(string id)
        {
            erpsystemEntities1 t = new erpsystemEntities1();
            var v = (from p in t.buysearchmaster where p.stunum == id select p).First();
            v.stostate = "未审核";
            return t.SaveChanges();
        }
        #endregion

        #region 反审核订单
        public static int fShenHedingdan(string id)
        {
            erpsystemEntities1 t = new erpsystemEntities1();
            var v = (from p in t.orders where p.ostoid == id select p).First();
            v.oshestate = "未审核";
            return t.SaveChanges();
        }
        #endregion
    }


}
