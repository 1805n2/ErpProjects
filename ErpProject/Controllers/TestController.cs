using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Models;
using BLL;
namespace ErpProject.Controllers
{
    public class TestController : Controller
    {
        //
        // GET: /Test/

        public ActionResult Index()//首页
        {
            return View();
        }
        public ActionResult GetBuyType()
        {
            return Json(wxManager.GetBuyType(), JsonRequestBehavior.AllowGet);
        }
        public ActionResult GetBuyTypeId(int id)
        {
            return Json(wxManager.GetBuyTypeId(id), JsonRequestBehavior.AllowGet);
        }

    }
}
