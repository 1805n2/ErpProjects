using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Models;
using BLL.LZX;
namespace ErpProject.Controllers
{
    public class LZXController : Controller
    {
        //
        // GET: /LZX/

        public ActionResult Index()
        {
            return View();
        }
        #region 单据日期
        public ActionResult no(String data)
        {
            return Json(lzxamanage.no(data), JsonRequestBehavior.AllowGet);
        }
        #endregion
        #region 供应商查询
        public ActionResult GYS()
        {
            return Json(lzxamanage.GYS(), JsonRequestBehavior.AllowGet);
        }
        #endregion
        #region 仓库查询
        public ActionResult CK()
        {
            return Json(lzxamanage.CK(), JsonRequestBehavior.AllowGet);
        }
        #endregion
        #region 采购入库
        public ActionResult list()
        {
            return Json(lzxamanage.list(), JsonRequestBehavior.AllowGet);
        }
        #endregion
        #region 转单入库
        public ActionResult mike(String no)
        {
            return Json(lzxamanage.mike(no), JsonRequestBehavior.AllowGet);
        }
        #endregion
        #region 转单入库明细
        public ActionResult ruku(String no)
        {
            return Json(lzxamanage.ruku(no), JsonRequestBehavior.AllowGet);
        }
        #endregion
        #region 分页显示
        public ActionResult Show(int pakgindex)
        {
            return Json(lzxamanage.Show(pakgindex), JsonRequestBehavior.AllowGet);
        }
        #endregion
        #region 有多少条
        public ActionResult poi()
        {
            return Json(lzxamanage.poi(), JsonRequestBehavior.AllowGet);
        }
        #endregion
        #region 供应商所对应的采购人员与部门
        public ActionResult Funds(int ID)
        {
            return Json(lzxamanage.Funds(ID), JsonRequestBehavior.AllowGet);
        }
        #endregion
        #region 判断ADD/UPTADA
        public ActionResult Counts(String name)
        {
            return Json(lzxamanage.Counts(name), JsonRequestBehavior.AllowGet);
        }
        #endregion
        #region 物料名称
        public ActionResult record()
        {
            return Json(lzxamanage.record(), JsonRequestBehavior.AllowGet);
        }
        #endregion
        #region 物料名称
        public ActionResult records(String no)
        {
            return Json(lzxamanage.records(no), JsonRequestBehavior.AllowGet);
        }
        #endregion
        #region 退货子
        public ActionResult Addzi(List<t_preturn_zi> b)
        {
            return Json(lzxamanage.Addzi(b), JsonRequestBehavior.AllowGet);
        }
        #endregion
        #region 退货子查看
        public ActionResult pzi(String no)
        {
            return Json(lzxamanage.pzi(no), JsonRequestBehavior.AllowGet);
        }
        #endregion
        #region 删除子表
        public ActionResult Del(String no)
        {
            return Json(lzxamanage.Del(no), JsonRequestBehavior.AllowGet);
        }
        #endregion
        #region 供应商所对应的采购人员与部门
        public ActionResult Fund(String name)
        {
            return Json(lzxamanage.Fund(name), JsonRequestBehavior.AllowGet);
        }
        #endregion
        #region 新增退货主
        public ActionResult Add(t_preturn a)
        {
            return Json(lzxamanage.Add(a), JsonRequestBehavior.AllowGet);
        }
        #endregion
        #region 仓库对应ID
        public ActionResult CKID(String name)
        {
            return Json(lzxamanage.CKID(name), JsonRequestBehavior.AllowGet);
        }
        #endregion
        #region 退货明细表
        public ActionResult tuihuo(String name)
        {
            return Json(lzxamanage.tuihuo(name), JsonRequestBehavior.AllowGet);
        }
        #endregion
        #region 修改退货主
        public ActionResult Editzhu(t_preturn a, List<t_preturn_zi> b)
        {
            return Json(lzxamanage.Editzhu(a, b), JsonRequestBehavior.AllowGet);
        }
        #endregion
    }
}
