const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: "secret_aUUvcAFLGCTYoqABMEzAc7AwmrzHMijHTHIV1hhx4xF",
});

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Only POST requests are allowed' });
  }
  try {
    const { name, email, subject, message } = JSON.parse(req.body);
    await notion.pages.create({
      parent: {
        database_id: "b657b44a257c4969861b30071c0423a1",
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email,
        },
        Subject: {
          rich_text: [
            {
              text: {
                content: subject,
              },
            },
          ],
        },
        Message: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
      },
    });
    res.status(201).json({ msg: 'Success' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Failed' });
  }
};
