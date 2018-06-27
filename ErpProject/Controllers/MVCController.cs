using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Models;
using BLL.LYF;

namespace ErpProject.Controllers.LYF
{
    public class MVCController : Controller
    {
        //
        // GET: /MVC/

        public ActionResult GetIndex()
        {
            return View();
        }
        public ActionResult GetWLZWJ_list(string billno)
        {
            return Json(MVCManager.GetWLZWJ_list(billno), JsonRequestBehavior.AllowGet);
        }
        //新增
        public ActionResult GetAdd(billtui blii, List<billtutype> list)
        {
            return Json(MVCManager.GetAdd(blii, list), JsonRequestBehavior.AllowGet);
        }
        //根据id传
        public ActionResult GetByid( int pageIndex, int pageSize)
        {
            var aa=MVCManager.GetByid( pageIndex, pageSize);
            //var tmp=aa.
            return Json(aa,JsonRequestBehavior.AllowGet);
        }
        //修改
        public ActionResult Getenid(billtui blii, List<billtutype> list)
        {
            return Json(MVCManager.Getenid(blii, list), JsonRequestBehavior.AllowGet);
        }
        //客户类别新增
        public ActionResult Getcloss_Add(closstype type)
        {
            return Json(MVCManager.Getcloss_Add(type), JsonRequestBehavior.AllowGet);
        }
        //分页
        public ActionResult GetConut()
        {
            return Json(MVCManager.GetConut(), JsonRequestBehavior.AllowGet);
        }
        //客户类别显示
        public ActionResult Getcloss_list(int type)
        {
            return Json(MVCManager.Getcloss_list(type), JsonRequestBehavior.AllowGet);
        }
        //客户类别删除
        public ActionResult Getcloss_del(int type)
        {
            return Json(MVCManager.Getcloss_del(type), JsonRequestBehavior.AllowGet);
        }
        //客户类别修改
        public ActionResult Getcloss_Eind(closstype type)
        {
            return Json(MVCManager.Getcloss_Eind(type), JsonRequestBehavior.AllowGet);
        }
        //销售退货单删除
        public ActionResult Getdel(string blii)
        {
            return Json(BLL.LYF.MVCManager.Getdel(blii), JsonRequestBehavior.AllowGet);
        }
        public ActionResult Getdae(DateTime date) 
        {
            return Json(MVCManager.Getdae(date), JsonRequestBehavior.AllowGet);
        }
    }
}