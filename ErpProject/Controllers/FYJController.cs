using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Models;
using BLL.FYJ;
namespace ErpProject.Controllers
{
    public class FYJController : Controller
    {
        //
        // GET: /FYJ/

       //仓库页面
        public ActionResult wareHouse()
        {
            return View();
        }
        //计量单位页面
        public ActionResult jldw()
        {
            return View();
        }
        //询价页面
        public ActionResult Xunjia()
        {
            return View();
        }
        //采购询价交易记录查询
        public ActionResult BuyHistorySearch()
        {
            return View();
        }
        //采购订单
        public ActionResult Buyorder()
        {
            return View();
        }
        //采购订单交易记录查询
        public ActionResult BuyorderHistorySearch()
        {
            return View();
        }
        public ActionResult Ge()
        {
            return View();
        }
        public ActionResult GetXunjias(int pageIndex, int pageSize)
        {
            return Json(Managers.GetXunjias(pageIndex, pageSize), JsonRequestBehavior.AllowGet);
        }
        public ActionResult GetStorage(int pageIndex, int pageSize)
        {
            return Json(Managers.GetStorage(pageIndex,pageSize), JsonRequestBehavior.AllowGet);
        }
        public ActionResult GetStorageRows()
        {
            return Json(Managers.GetStorageRows(), JsonRequestBehavior.AllowGet);
        }
        public ActionResult GetUnit(int pageIndex, int pageSize)
        {
            return Json(Managers.GetUnit(pageIndex, pageSize), JsonRequestBehavior.AllowGet);
        }
        public ActionResult GetUnitRow()
        {
            return Json(Managers.GetUnitRow(), JsonRequestBehavior.AllowGet);
        }
        public ActionResult GetGYS()
        {
            return Json(Managers.GetGYS(), JsonRequestBehavior.AllowGet);
        }
        public ActionResult GetXunjiaDetail(string id)
        {
            return Json(Managers.GetXunjiaDetail(id), JsonRequestBehavior.AllowGet);
        }
        public ActionResult UpdateXunjia(buysearchmaster info, List<buysearchdetails> list)
        {
            return Json(Managers.UpdateXunjia(info, list), JsonRequestBehavior.AllowGet);
        }
        public ActionResult Delxunjia(string id)
        {
            return Json(Managers.Delxunjia(id), JsonRequestBehavior.AllowGet);
        }
        public ActionResult GetWuliao()
        {
            return Json(Managers.GetWuliao(), JsonRequestBehavior.AllowGet);
        }
        public ActionResult AddXunjia(buysearchmaster info, List<buysearchdetails> list)
        {
            return Json(Managers.AddXunjia(info, list), JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetOrderss(int pageIndex, int pageSize)
        {
            return Json(Managers.GetOrderss(pageIndex, pageSize), JsonRequestBehavior.AllowGet);
        }
        public ActionResult GetOrdersDetail(string id)
        {
            return Json(Managers.GetOrdersDetail(id), JsonRequestBehavior.AllowGet);

        }
        public ActionResult AddOrders(orders info, List<orderdetails> list)
        {
            return Json(Managers.AddOrders(info, list), JsonRequestBehavior.AllowGet);
        }
        public ActionResult DelOrder(string id)
        {
            return Json(Managers.DelOrder(id), JsonRequestBehavior.AllowGet);
        }
        public ActionResult UpdateOrders(orders info, List<orderdetails> list)
        {
            return Json(Managers.UpdateOrders(info, list), JsonRequestBehavior.AllowGet);
        }
        public ActionResult GetTime(DateTime time)
        {
            return Json(Managers.GetTime(time), JsonRequestBehavior.AllowGet);
        }
        public ActionResult GetOrdernum()
        {
            return Json(Managers.GetOrdernum(), JsonRequestBehavior.AllowGet);
        }
        public ActionResult XunjiaRow()
        {
            return Json(Managers.XunjiaRow(), JsonRequestBehavior.AllowGet);
        }
        public ActionResult GetTimes(DateTime time)
        {
            return Json(Managers.GetTimes(time), JsonRequestBehavior.AllowGet);
        }
        public ActionResult Get()
        {
            return View();
        }
        public ActionResult zdtXunjias()
        {
            return Json(Managers.zdtXunjias(), JsonRequestBehavior.AllowGet);
        }
        public ActionResult GetOrders()
        {
            return Json(Managers.GetOrders(), JsonRequestBehavior.AllowGet);
        }
        public ActionResult GetXunjia()
        {
            return Json(Managers.GetXunjia(), JsonRequestBehavior.AllowGet);
        }
        public ActionResult ShenHeXunjia(string id)
        {
            return Json(Managers.ShenHeXunjia(id), JsonRequestBehavior.AllowGet);
        }
        public ActionResult ShenHedingdan(string id)
        {
            return Json(Managers.ShenHedingdan(id), JsonRequestBehavior.AllowGet);
        }
        public ActionResult fShenHeXunjia(string id)
        {
            return Json(Managers.fShenHeXunjia(id), JsonRequestBehavior.AllowGet);
        }
        public ActionResult fShenHedingdan(string id)
        {
            return Json(Managers.fShenHedingdan(id), JsonRequestBehavior.AllowGet);
        }
    }
}
