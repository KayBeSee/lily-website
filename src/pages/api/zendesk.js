import axios from "axios";
// import zendesk from "node-zendesk";

// const zendeskClient = zendesk.createClient({
//   username: process.env.ZENDESK_USERNAME,
//   token: process.env.ZENDESK_TOKEN,
//   remoteUri: process.env.ZENDESK_REMOTE_URI,
// });

async function handler(req, res) {
  const { ticket, requester } = req.body;

  const base64 = new Buffer(
    `${process.env.ZENDESK_USERNAME}:${process.env.ZENDESK_TOKEN}`
  );

  try {
    const resp = await axios.post(
      `${process.env.ZENDESK_REMOTE_URI}/requests`,
      {
        request: {
          comment: ticket.comment,
          requester: {
            name: requester.name,
            email: requester.email,
          },
        },
      },
      {
        headers: {
          Authorization: `Basic ${base64.toString("base64")}`,
        },
      }
    );

    // const resp = await zendeskClient.requests.create({
    //   request: {
    //     comment: ticket.comment,
    //     requester: {
    //       name: requester.name,
    //       email: requester.email,
    //     },
    //   },
    // });
    res.json(resp.data.request);
  } catch (e) {
    console.log("e: ", e);
    res.status(500).json({ message: e.message });
  }
}

export default handler;
