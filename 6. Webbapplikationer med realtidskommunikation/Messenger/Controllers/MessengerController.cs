using Messenger.Hubs;
using Messenger.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace Messenger.Controllers
{
    [ApiController]
    [Route("/api/messenger")]
    public class MessengerController : ControllerBase
    {
        private readonly IHubContext<MessengerHub> _messengerHub;

        public MessengerController(IHubContext<MessengerHub> messengerHub)
        {
            _messengerHub = messengerHub;
        }

        [HttpPost]
        public async Task<ActionResult<Message>> SendMessage([FromBody] Message newMessage)
        {
            await _messengerHub.Clients.All.SendAsync("Receive", newMessage);
            return Ok();
        }
    }
}