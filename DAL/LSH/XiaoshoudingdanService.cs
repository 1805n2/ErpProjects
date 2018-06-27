using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;


namespace DAL.LSH
{
   public  class XiaoshoudingdanService
    {
        /// <summary>
        /// 查询客户的所有
        /// </summary>
        /// <returns></returns>
        public List<userinfo> select()
        {
            erpsystemEntities1 db = new erpsystemEntities1();
            return db.userinfo.ToList();
        }
        /// <summary>
        /// 插主表
        /// </summary>
        /// <returns></returns>
        public List<salesorder> selectzhu()
        {
            erpsystemEntities1 db = new erpsystemEntities1();
            return db.salesorder.ToList();
        }

        public userinfo selectid(int id)
        {
            erpsystemEntities1 db = new erpsystemEntities1();
            return db.userinfo.Find(id);
        }
        /// <summary>
        /// 物料主表
        /// </summary>
        /// <returns></returns>
        public List<record> wuliaoselect()
        {
            erpsystemEntities1 db = new erpsystemEntities1();
            return db.record.ToList();
        }

        public record wuliaoid(string ProdID)
        {
            erpsystemEntities1 db = new erpsystemEntities1();
            return db.record.Find(ProdID);
        }

        public List<quotedprice> selectzhuan()
        {
            erpsystemEntities1 db = new erpsystemEntities1();
            db.quotedprice.Where(x => x.Shenhe == 2 && (x.youxiaoriqi > DateTime.Now || x.youxiaoriqi == null));
            return db.quotedprice.ToList();
        }

        public List<quotationdetails> selectdanjuid(string Receiptnumber)
        {
            erpsystemEntities1 db = new erpsystemEntities1();
            return db.quotationdetails.Where(x => x.Receiptnumber.Equals(Receiptnumber)).ToList(); ;
        }


        public bool add(salesorder info)
        {
            erpsystemEntities1 db = new erpsystemEntities1();
            db.salesorder.Add(info);

            return db.SaveChanges() > 0;
        }

        public bool delete(string Documentnumber)
        {
            using (erpsystemEntities1 db = new erpsystemEntities1())
            {
                db.Database.ExecuteSqlCommand("delete from orderdetails where Documentnumber='" + Documentnumber + "'");
                var id = db.salesorder.Find(Documentnumber);
                if (id != null)
                {
                    id.orderdetails.Clear();
                    db.salesorder.Remove(id);
                }
                return db.SaveChanges() > 0;
            }
        }


        public List<salesorder> GetAll()
        {
            erpsystemEntities1 db = new erpsystemEntities1();
            return db.salesorder.ToList();
        }

        public salesorder selectid(string Documentnumber)
        {
            erpsystemEntities1 db = new erpsystemEntities1();
            return db.salesorder.Find(Documentnumber);
        }


        public bool update(salesorder info)
        {
            using (erpsystemEntities1 db = new erpsystemEntities1())
            {
                db.Database.ExecuteSqlCommand("delete from orderdetails where Documentnumber='" + info.Documentnumber + "'");
                var info1 = db.salesorder.Find(info.Documentnumber);
                if (info1 != null)
                {
                    info1.Customer = info.Customer;
                    info1.BillDate = info.BillDate;
                    info1.Documentnumber = info.Documentnumber;
                    info1.yesandno = info.yesandno;
                    info1.Singlecondition = info.Singlecondition;
                    info1.exchangerate = info.exchangerate;
                    info1.Ordertype = info.Ordertype;
                    info1.Businesspersonnel = info.Businesspersonnel;
                    info1.Producer = info.Producer;
                    info1.bumenbianhao = info.bumenbianhao;
                    info1.Compoundstaff = info.Compoundstaff;
                    info1.Totalamount = info.Totalamount;
                    info1.isshenhe = info.isshenhe;
                    info1.orderdetails = info.orderdetails;
                    return db.SaveChanges() > 0;
                }
                else
                {
                    return false;
                }
            }
        }

        public bool update1(salesorder info)
        {
            
            using (erpsystemEntities1 db = new erpsystemEntities1())
            {
                var info1 = db.salesorder.Find(info.Documentnumber);
                if (info1 != null)
                {
                    info1.Documentnumber = info.Documentnumber;
                    info1.isshenhe = "已审核";
                    info1.Compoundstaff = 1;
                    return db.SaveChanges() > 0;
                }
                else
                {
                    return false;
                }
            }
        }
    }
}
