using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CRUDAPI.Models
{

    [Table("ProdCategory")]
   public class ProdCategory
   {
        [Column("ProdId")]
        [Display(Name = "ProdId")]
        public int ProductId { get; set; }

        [Column("CategoryId")]
        [Display(Name = "CategoryId")]
        public int CategoryId { get; set; }
        }

}