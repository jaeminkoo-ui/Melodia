import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, phone, interest } = req.body;

    // Basic validation
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'Melodia Website <noreply@melodiamusic.org>',
            to: ['join@melodiamusic.org'],
            replyTo: email,
            subject: `New Join Request from ${name}`,
            html: `
        <h2>New Join Application</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Name</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Phone</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${phone || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold;">Area of Interest</td>
            <td style="padding: 8px 12px;">${interest || 'Not specified'}</td>
          </tr>
        </table>
        <br>
        <p style="color: #888; font-size: 12px;">This email was sent from the Melodia website join form.</p>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return res.status(500).json({ error: 'Failed to send email' });
        }

        return res.status(200).json({ success: true, id: data.id });
    } catch (err) {
        console.error('Server error:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
