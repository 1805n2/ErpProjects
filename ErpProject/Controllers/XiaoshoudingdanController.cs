using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BLL.LSH;
using Models;

namespace ErpProject.Controllers
{
    public class XiaoshoudingdanController : Controller
    {
        //
        // GET: /Xiaoshoudingdan/

        //public ActionResult Index()
        //{
        //    return View();
        //}
        ///// <summary>
        ///// 查所有客户
        ///// </summary>
        ///// <returns></returns>
        //public ActionResult selectUserinfo()
        //{
        //    List<userinfo> list = XiaoshoudingdanManager.select();
        //    var list1 = list.Select(x => new
        //    {
        //        x.userid,
        //        x.username,
        //    }).ToList();
        //    return Json(list1, JsonRequestBehavior.AllowGet);
        //}

        ///// <summary>
        ///// 流水码
        ///// </summary>
        ///// <param name="BillDate"></param>
        ///// <returns></returns>
        //public ActionResult riqi(DateTime BillDate)
        //{
        //    var list = XiaoshoudingdanManager.selectzhu().Where(x => x.BillDate.ToString("yyyy-MM-dd") == BillDate.ToString("yyyy-MM-dd"));
        //    var count = (list.Count() + 1).ToString();
        //    var id = BillDate.ToString("yyyyMMdd") + count.PadLeft(3, '0');
        //    return Json(id, JsonRequestBehavior.AllowGet);
        //}

        //public ActionResult selectid(int userid)
        //{
        //    var info = XiaoshoudingdanManager.selectid(userid);
        //    var info1 = new
        //    {
        //        info.td_personnel_table.Personal_name,
        //        info.td_personnel_table.department1.Departmentname,
        //        info.td_personnel_table.department,
        //        info.td_personnel_table.Personnel
        //    };
        //    return Json(info1, JsonRequestBehavior.AllowGet);
        //}
        ///// <summary>
        ///// 物料
        ///// </summary>
        ///// <returns></returns>
        //public ActionResult wuliaoselect()
        //{
        //    List<record> list = XiaoshoudingdanManager.wuliaoselect();
        //    var list1 = list.Select(x => new
        //    {
        //        x.ProdID,
        //        x.ProdName,
        //    }).ToList();
        //    return Json(list1, JsonRequestBehavior.AllowGet);
        //}

        //public ActionResult zhuandan()
        //{
        //    List<quotedprice> list = XiaoshoudingdanManager.selectzhuan();
        //    var list1 = list.Select(x => new
        //    {

        //        x.Receiptnumber,
        //        Documentdate = x.Documentdate.ToString("yyyy-MM-dd"),
        //        quotationdetails = x.quotationdetails.Select(z => new
        //        {
        //            z.Wuliaobianhao,
        //            z.Wuliaomingcheng,
        //            z.guigexinghao,
        //            z.Danweimingcheng,
        //            z.Shuliang,
        //            z.Zhekoqian,
        //            z.Zheshu,
        //            z.danjia,
        //            z.Jine,
        //            z.Suilv,
        //            z.Suie,
        //            z.Hangsuijine,
        //            z.Columnno,
        //            z.beizhu
        //        })
        //    }).ToList();
        //    return Json(list1, JsonRequestBehavior.AllowGet);
        //}


        //public ActionResult selectdanjuid(string Receiptnumber)
        //{
        //    List<quotationdetails> list = XiaoshoudingdanManager.selectdanjuid(Receiptnumber);

        //    var list1 = list.Select(x => new
        //    {
        //        Yuchukuri = "",
        //        x.Columnno,
        //        x.Receiptnumber,
        //        x.Wuliaobianhao,
        //        x.Wuliaomingcheng,
        //        x.guigexinghao,
        //        x.Danweimingcheng,
        //        x.Shuliang,
        //        x.Zhekoqian,
        //        x.Zheshu,
        //        x.danjia,
        //        x.Jine,
        //        x.Suilv,
        //        x.Suie,
        //        x.Hangsuijine,
        //        x.beizhu,

        //    });
        //    return Json(list1, JsonRequestBehavior.AllowGet);
        //}

        //public bool add(salesorder info)
        //{
        //    bool b = XiaoshoudingdanManager.add(info);
        //    return b;
        //}

        //public bool delete(string Documentnumber)
        //{
        //    bool b = XiaoshoudingdanManager.delete(Documentnumber);
        //    return b;
        //}


        //public ActionResult GetAll(int pageindex)
        //{
        //    xiangmuEntities xe = new xiangmuEntities();
        //    List<salesorder> list = XiaoshoudingdanManager.GetAll();
        //    int pagesize = 1;
        //    var list1 = list.Skip((pageindex - 1) * pagesize).Take(pagesize).Select(x => new
        //    {
        //        wy = list.Count % pagesize == 0 ? list.Count / pagesize : list.Count / pagesize + 1,
        //        x.Customer,
        //        kehu = x.userinfo.username,
        //        BillDate = x.BillDate.ToString("yyyy-MM-dd"),
        //        x.Documentnumber,
        //        x.yesandno,
        //        x.Singlecondition,
        //        x.exchangerate,
        //        x.Ordertype,
        //        x.Businesspersonnel,
        //        Personal_name = from p in xe.td_personnel_table where p.Personnel == x.Businesspersonnel select p.Personal_name,
        //        Producer = from p in xe.td_personnel_table where p.Personnel == x.Producer select p.Personal_name,
        //        bumenbianhao = from p in xe.department where p.Bumenbianhao == x.bumenbianhao select p.Departmentname,
        //        x.department.Departmentname,
        //        Compoundstaff = from p in xe.td_personnel_table where p.Personnel == x.Compoundstaff select p.Personal_name,
        //        x.Totalamount,
        //        x.isshenhe,
        //        orderdetails = x.orderdetails.Select(z => new
        //        {
        //            z.id,
        //            Wuliaobianhao = z.Materialnumber,
        //            Wuliaomingcheng = from p in xe.record where p.ProdID == z.Materialnumber select p.ProdName,
        //            guigexinghao = from p in xe.record where p.ProdID == z.Materialnumber select p.ProdSize,
        //            Shuliang = z.num,
        //            Danweimingcheng = z.Unitname,
        //            Zhekoqian = z.zkqunitprice,
        //            Zheshu = z.Foldnumber,
        //            danjia = z.UnitPrice,
        //            Jine = z.UnitPrice * z.num,
        //            Suilv = z.taxrate,
        //            Suie = z.Taxamount,
        //            Hangsuijine = z.Hanshuijine,
        //            Yuchukuri = z.Yuchukuri.ToString("yyyy-MM-dd"),
        //            z.Weichukunum,
        //            z.Laiyuandanbie,
        //            z.Laiyuandanhao,
        //            beizhu = from p in xe.quotationdetails where p.Wuliaobianhao == z.Materialnumber select p.beizhu,
        //        })
        //    }).FirstOrDefault();

        //    return Json(list1, JsonRequestBehavior.AllowGet);
        //}

        //public ActionResult save(salesorder info)
        //{
        //    var result = false;
        //    var id = XiaoshoudingdanManager.selectid(info.Documentnumber);
        //    if (id == null)
        //    {
        //        result = XiaoshoudingdanManager.add(info);
        //    }
        //    else
        //    {
        //        result = XiaoshoudingdanManager.update(info);
        //    }

        //    return Json(result, JsonRequestBehavior.AllowGet);
        //}

        //public ActionResult update1(salesorder info)
        //{
        //    var info1 = XiaoshoudingdanManager.update1(info);
        //    return Json(info1, JsonRequestBehavior.AllowGet);
        //}

    }
}
