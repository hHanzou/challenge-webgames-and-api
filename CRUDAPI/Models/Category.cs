using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CRUDAPI.Models
{

    [Table("Category")]
   public class Category
   {
        [Column("Id")]
        [Display(Name = "Id")]
        public int CategoryId { get; set; }

        [Column("Name")]
        [Display(Name = "Name")]
        public string CategoryName { get; set; }
        }

}