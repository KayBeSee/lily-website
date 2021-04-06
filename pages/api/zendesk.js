import zendesk from "node-zendesk";

const zendeskClient = zendesk.createClient({
  username: process.env.ZENDESK_USERNAME,
  token: process.env.ZENDESK_TOKEN,
  remoteUri: process.env.ZENDESK_REMOTE_URI,
});

async function handler(req, res) {
  const { ticket, requester } = req.body;
  try {
    const resp = await zendeskClient.requests.create({
      request: {
        comment: ticket.comment,
        requester: {
          name: requester.name,
          email: requester.email,
        },
      },
    });

    res.json(resp);
  } catch (e) {
    console.log("e: ", e);
    res.status(500).json({ message: e.message });
  }
}

export default handler;
