using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using DAL.LZX;
namespace BLL.LZX
{
    public class lzxamanage
    {
        #region 日期编号
        public static String no(String data)
        {
            return lzxServer.no(data);

        }
        #endregion
        #region 供应商
        public static IQueryable GYS()
        {
            return lzxServer.GYS();
        }
        #endregion
        #region 仓库
        public static IQueryable CK()
        {
            return lzxServer.CK();
        }
        #endregion
        #region 采购入库
        public static IQueryable list()
        {
            return lzxServer.list();
        }
        #endregion
        #region 转单入库
        public static IQueryable mike(String no)
        {
            return lzxServer.mike(no);
        }
        #endregion
        #region 转单入库明细
        public static IQueryable ruku(String no)
        {
            return lzxServer.ruku(no);
        }
        #endregion
        #region 分页显示
        public static IQueryable Show(int pakgindex)
        {
            return lzxServer.Show(pakgindex);
        }
        #endregion
        #region 有多少条
        public static int poi()
        {
            return lzxServer.poi();
        }
        #endregion
        #region 供应商所对应的采购人员与部门
        public static IQueryable Funds(int ID)
        {
            return lzxServer.Funds(ID);
        }
        #endregion
        #region 判断ADD/UPTADA
        public static int Counts(String name)
        {
            return lzxServer.Counts(name);
        }
        #endregion
        #region 物料名称
        public static IQueryable record()
        {
            return lzxServer.record();
        }
        #endregion
        #region 物料名称查询
        public static IQueryable records(String no)
        {
            return lzxServer.records(no);
        }
        #endregion
        #region 退货子
        public static int Addzi(List<t_preturn_zi> b)
        {
            return lzxServer.Addzi(b);
        }
        #endregion
        #region 退货子查看
        public static IQueryable pzi(String no)
        {
            return lzxServer.pzi(no);
        }
        #endregion
        #region 删除子表
        public static int Del(String no)
        {
            return lzxServer.Del(no);
        }
        #endregion
        #region 新增退货主
        public static int Add(t_preturn a)
        {
            return lzxServer.Add(a);
        }
        #endregion
        #region 供应商所对应的采购人员与部门
        public static IQueryable Fund(String name)
        {
            return lzxServer.Fund(name);
        }
        #endregion
        #region 仓库对应ID
        public static IQueryable CKID(String name)
        {
            return lzxServer.CKID(name);
        }
        #endregion
        #region 退货明细表
        public static IQueryable tuihuo(String no)
        {
            return lzxServer.tuihuo(no);
        }
        #endregion
        #region 修改退货主
        public static int Editzhu(t_preturn a, List<t_preturn_zi> b)
        {
            return lzxServer.Editzhu(a, b);
        }
        #endregion
    }
}
