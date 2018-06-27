using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using DAL.LYF;

namespace BLL.LYF
{
  public  class MVCManager
    {
        // 物料显示
      public static IQueryable GetWLZWJ_list(string billno)
      {
          
          return MVCSerice.GetWLZWJ_list(billno);
      }
         //根据id传
      public static IQueryable GetByid(int pageIndex,int pageSize) 
      {
          return MVCSerice.GetByid(pageIndex, pageSize);
      }
         //新增
      public static int GetAdd(billtui blii, List<billtutype> list)
      {
          return MVCSerice.GetAdd(blii, list);
      }
      //修改
      public static int Getenid(billtui blii, List<billtutype> list)
      {
          return MVCSerice.Getenid(blii, list);
      }
      //客户类别新增
      public static int Getcloss_Add(closstype type)
      {
          return MVCSerice.Getcloss_Add(type);
      }
        //分页
      public static int GetConut( ) {
          return MVCSerice.GetConut();
      }
      //客户类别修改
      public static int Getcloss_Eind(closstype type)
      {
          return MVCSerice.Getcloss_Eind(type);
      }
      //客户类别删除
      public static int Getcloss_del(int type)
      {
          return MVCSerice.Getcloss_del(type);
      }
       //客户类别显示
      public static IQueryable Getcloss_list(int type)
      {
          return MVCSerice.Getcloss_list(type);
      }
       //销售退货单删除
      public static int Getdel(string blii)
      {
          return MVCSerice.Getdel(blii);
      }
      //时间
      public static string Getdae(DateTime date) {
          return MVCSerice.Getdae(date);
      }
    }
}