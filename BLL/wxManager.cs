using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using DAL;
namespace BLL
{
    public class wxManager
    {
        public static IQueryable GetBuyType()
        {
            return wxService.GetBuyType();
        }
        public static IQueryable GetBuyTypeId(int id)
        {
            return wxService.GetBuyTypeId(id);
        }
    }
}
