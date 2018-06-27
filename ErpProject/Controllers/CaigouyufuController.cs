using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Models;
using BLL;
namespace ErpProject.Controllers
{
    public class CaigouyufuController : Controller
    {
        //
        // GET: /Caigouyufu/
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult showzhu(int PageIndex)
        {
            return Json(BLL.KW.CaigouyufuManager.showzhu(PageIndex), JsonRequestBehavior.AllowGet);
        }
        public ActionResult yufuzi(string advanid)
        {
            return Json(BLL.KW.CaigouyufuManager.yufuzi(advanid), JsonRequestBehavior.AllowGet);
        }
        public ActionResult count()
        {
            return Json(BLL.KW.CaigouyufuManager.count(), JsonRequestBehavior.AllowGet);
        }
        public ActionResult cxcgdd(int gysid)
        {
            return Json(BLL.KW.CaigouyufuManager.cxcgdd(gysid), JsonRequestBehavior.AllowGet);
        }
        public ActionResult zdbh(string time)
        {
            return Json(BLL.KW.CaigouyufuManager.zdbh(time), JsonRequestBehavior.AllowGet);
        }
        public ActionResult xg(t_store_advance tsa, List<t_store_advancepay> list)
        {
            return Json(BLL.KW.CaigouyufuManager.xg(tsa, list), JsonRequestBehavior.AllowGet);
        }
        public ActionResult xz(t_store_advance tsa, List<t_store_advancepay> list)
        {
            return Json(BLL.KW.CaigouyufuManager.xz(tsa, list), JsonRequestBehavior.AllowGet);
        }
        public ActionResult pd(string tsaid)
        {
            return Json(BLL.KW.CaigouyufuManager.pd(tsaid), JsonRequestBehavior.AllowGet);
        }
        public ActionResult gyscx()
        {
            return Json(BLL.KW.CaigouyufuManager.gyscx(), JsonRequestBehavior.AllowGet);
        }
        public ActionResult shenhe(string djbh, int jine, int gysid)
        {
            return Json(BLL.KW.CaigouyufuManager.shenhe(djbh, jine, gysid), JsonRequestBehavior.AllowGet);
        }

    }
}
