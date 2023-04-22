using CRUDAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CRUDAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GamesController : ControllerBase
    {
        private readonly Context _context;

        public GamesController(Context context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Game>>> GetAllAsync(){
            return await _context.Games.ToListAsync();
        }

        [HttpGet("{GameId}")]
        public async Task<ActionResult<Game>> GetGameByIdAsync(int GameId){
            Game game = await _context.Games.FindAsync (GameId);

            if (game ==  null)
                return NotFound();

            return game;    
        }

        [HttpPost]
        public async Task<ActionResult<Game>> SaveGameAsync(Game game){
            await _context.Games.AddAsync(game);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> UpdateGameAsync(Game game){
            _context.Games.Update(game);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("{GameId}")]
        public async Task<ActionResult> DeleteGameAsync(int GameId){
            Game game = await _context.Games.FindAsync(GameId);
            _context.Remove(game);
            await _context.SaveChangesAsync();

            return Ok();
        }

    }


}