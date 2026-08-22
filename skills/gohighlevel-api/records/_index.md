# Records

Here custom field id is the ID of your custom field and file id is a randomly generated id (or uuid)  There is support for...

## Pages in this folder

| Page | Local file | Summary |
| --- | --- | --- |
| Uploads File to customFields | [uploads-file-to-customfields.md](uploads-file-to-customfields.md) | Uploads File to customFields |
| Upload files to custom fields | [upload-files-to-custom-fields.md](upload-files-to-custom-fields.md) | Post the necessary fields for the API to upload files. The files need to be a buffer with the key '< custom_field_id >_< file_id >'. <br /> Here custom field id is the ID of your custom field and file id is a randomly generated id (or uuid) <br /> There is support for multiple file uploads as well. Have multiple fields in the format mentioned.<br />File size is limited to 50 MB.<br /><br /> The allowed file types are: <br/> <ul><li>PDF</li><li>DOCX</li><li>DOC</li><li>JPG</li><li>JPEG</li><li>PNG</li><li>GIF</li><li>CSV</li><li>XLSX</li><li>XLS</li><li>MP4</li><li>MPEG</li><li>ZIP</li><li>RAR</li><li>TXT</li><li>SVG</li></ul> <br /><br /> The API will return the updated contact object. |
| Upload File into Media Storage | [upload-file-into-media-storage.md](upload-file-into-media-storage.md) | If hosted is set to true then fileUrl is required. Else file is required. If adding a file, maximum allowed is 25 MB. For video files, the maximum allowed size is 500 MB. |
| Upload file attachments | [upload-file-attachments.md](upload-file-attachments.md) | Post the necessary fields for the API to upload files. The files need to be a buffer with the key 'fileAttachment'. <br /><br /> <b>Note:</b> One of conversationId or contactId must be provided. <br /><br /> <b>File Size Limits:</b> <ul><li>Maximum file size: 5 MB</li><li>Maximum files per upload: 5</li></ul> <br /> <b>Allowed file types:</b> <br /><br /> <b>Images:</b> JPG, JPEG, PNG, GIF, SVG, HEIC, AI <br /><br /> <b>Videos:</b> MP4, MPEG, 3GP <br /><br /> <b>Audio:</b> MP3, WAV, WAVE, AIFF, AIF, AIFC, GSM, ULAW, OGG, AAC, M4A, AMR <br /><br /> <b>Documents:</b> PDF, DOC, DOCX, TXT, CSV, XLS, XLSX, PPT, PPTX, ODT <br /><br /> <b>Archives:</b> ZIP, RAR <br /><br /> <b>Other:</b> VCF, VCARD (contact files), ICS (calendar files) <br /><br /> The API will return an object with the URLs |
| Upload CSV | [upload-csv.md](upload-csv.md) | Upload a CSV file containing social media posts for bulk scheduling |
| Update Record | [update-record.md](update-record.md) | Update a Custom Object Record by Id. Supported Objects are business and custom objects. Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0/87cpx-376296 |
| Search Object Records | [search-object-records.md](search-object-records.md) | Supported Objects are custom objects and standard objects like 'business'. Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0/87cpx-379336 |
| search-object-records-tag | [search-object-records-tag.md](search-object-records-tag.md) | Search Object Records |
| Records | [records.md](records.md) | Records |
| Record Order Payment | [record-order-payment.md](record-order-payment.md) | The 'Record Order Payment' API allows to record a payment for an order. Use this endpoint to record payment for an order and update the order status to 'Paid'. |
| Record a manual payment for an invoice | [record-a-manual-payment-for-an-invoice.md](record-a-manual-payment-for-an-invoice.md) | API to record manual payment for an invoice by invoice id |
| Get Upload Status | [get-upload-status.md](get-upload-status.md) | Get the status of all CSV imports for a location |
| Get Record By Id | [get-record-by-id.md](get-record-by-id.md) | Allows you to get a Standard Object like business and custom object record by Id |
| Get all relations By record Id | [get-all-relations-by-record-id.md](get-all-relations-by-record-id.md) | Get all relations by record Id |
| Delete Record | [delete-object-record.md](delete-object-record.md) | Delete Record By Id . Supported Objects are business and custom objects. |
| Create Record | [create-record.md](create-record.md) | Create a Custom Object Record. Supported Objects business and custom objects. Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0/87cpx-376296 |
| Records - HighLevel API | [records-highlevel-api.md](records-highlevel-api.md) | Custom objects are completely customizable objects that allow you to store and manage information tailored to your unique business needs. |