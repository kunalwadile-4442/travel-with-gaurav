/**
 * Email templates for Dhanashree Tours and Travel
 */

const BRAND_NAME = "Dhanashree Tours and Travel";
const BRAND_COLOR = "#1466EC";

const baseStyles = `
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  max-width: 600px;
  margin: 0 auto;
`;

export function getContactFormEmailTemplate(data: {
  first_name: string;
  last_name: string;
  email: string;
  mobile_no: string;
  consultation?: string;
  project_information?: string;
}): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Form - ${BRAND_NAME}</title>
</head>
<body style="margin: 0; padding: 20px; ${baseStyles}">
  <div style="background: #fff; border-radius: 12px; border: 1px solid #e5e7eb; overflow: hidden;">
    <div style="background: ${BRAND_COLOR}; color: white; padding: 24px; text-align: center;">
      <h1 style="margin: 0; font-size: 24px; font-weight: 700;">${BRAND_NAME}</h1>
      <p style="margin: 8px 0 0 0; font-size: 14px; opacity: 0.95;">Contact Form Submission</p>
    </div>
    <div style="padding: 32px;">
      <p style="margin: 0 0 24px 0; font-size: 16px;">You have received a new contact form submission:</p>
      
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151; width: 140px;">Name</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;">${data.first_name} ${data.last_name}</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151;">Email</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;"><a href="mailto:${data.email}" style="color: ${BRAND_COLOR};">${data.email}</a></td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151;">Phone</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;">${data.mobile_no}</td>
        </tr>
        ${data.consultation ? `
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151;">Consultation</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;">${data.consultation}</td>
        </tr>
        ` : ""}
        ${data.project_information ? `
        <tr>
          <td style="padding: 12px 0; font-weight: 600; color: #374151; vertical-align: top;">Project Info</td>
          <td style="padding: 12px 0; white-space: pre-wrap;">${data.project_information}</td>
        </tr>
        ` : ""}
      </table>
      
      <p style="margin: 24px 0 0 0; font-size: 12px; color: #6b7280;">
        This email was sent from the contact form on ${BRAND_NAME} website.
      </p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

export function getPopupFormEmailTemplate(data: {
  name: string;
  email: string;
  phone: string;
  message?: string;
}): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quick Inquiry - ${BRAND_NAME}</title>
</head>
<body style="margin: 0; padding: 20px; ${baseStyles}">
  <div style="background: #fff; border-radius: 12px; border: 1px solid #e5e7eb; overflow: hidden;">
    <div style="background: ${BRAND_COLOR}; color: white; padding: 24px; text-align: center;">
      <h1 style="margin: 0; font-size: 24px; font-weight: 700;">${BRAND_NAME}</h1>
      <p style="margin: 8px 0 0 0; font-size: 14px; opacity: 0.95;">Quick Inquiry / Popup Form</p>
    </div>
    <div style="padding: 32px;">
      <p style="margin: 0 0 24px 0; font-size: 16px;">You have received a new quick inquiry:</p>
      
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151; width: 100px;">Name</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;">${data.name}</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151;">Email</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;"><a href="mailto:${data.email}" style="color: ${BRAND_COLOR};">${data.email}</a></td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151;">Phone</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;">${data.phone}</td>
        </tr>
        ${data.message ? `
        <tr>
          <td style="padding: 12px 0; font-weight: 600; color: #374151; vertical-align: top;">Message</td>
          <td style="padding: 12px 0; white-space: pre-wrap;">${data.message}</td>
        </tr>
        ` : ""}
      </table>
      
      <p style="margin: 24px 0 0 0; font-size: 12px; color: #6b7280;">
        This email was sent from the quick inquiry popup on ${BRAND_NAME} website.
      </p>
    </div>
  </div>
</body>
</html>
  `.trim();
}
