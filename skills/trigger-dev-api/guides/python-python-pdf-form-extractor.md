# Python PDF form extractor example

> Source: https://trigger.dev/docs/guides/python/python-pdf-form-extractor

[​](https://trigger.dev/docs/guides/python/python-pdf-form-extractor#overview)

Overview
------------------------------------------------------------------------------------------

This demo showcases how to use Trigger.dev with Python to extract structured form data from a PDF file available at a URL.

[​](https://trigger.dev/docs/guides/python/python-pdf-form-extractor#prerequisites)

Prerequisites
----------------------------------------------------------------------------------------------------

*   A project with [Trigger.dev initialized](https://trigger.dev/docs/quick-start)
    
*   [Python](https://www.python.org/)
     installed on your local machine

[​](https://trigger.dev/docs/guides/python/python-pdf-form-extractor#features)

Features
------------------------------------------------------------------------------------------

*   A [Trigger.dev](https://trigger.dev/)
     task to trigger the Python script
*   [Trigger.dev Python build extension](https://trigger.dev/docs/config/extensions/pythonExtension)
     to install the dependencies and run the Python script
*   [PyMuPDF](https://pymupdf.readthedocs.io/en/latest/)
     to extract form data from PDF files
*   [Requests](https://docs.python-requests.org/en/master/)
     to download PDF files from URLs

[​](https://trigger.dev/docs/guides/python/python-pdf-form-extractor#github-repo)

GitHub repo
------------------------------------------------------------------------------------------------

View the project on GitHub
--------------------------

Click here to view the full code for this project in our examples repository on GitHub. You can fork it and use it as a starting point for your own project.

[​](https://trigger.dev/docs/guides/python/python-pdf-form-extractor#the-code)

The code
------------------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/guides/python/python-pdf-form-extractor#build-configuration)

Build configuration

After you’ve initialized your project with Trigger.dev, add these build settings to your `trigger.config.ts` file:

trigger.config.ts

    import { pythonExtension } from "@trigger.dev/python/extension";
    import { defineConfig } from "@trigger.dev/sdk";
    
    export default defineConfig({
      runtime: "node",
      project: "<your-project-ref>",
      // Your other config settings...
      build: {
        extensions: [\
          pythonExtension({\
            // The path to your requirements.txt file\
            requirementsFile: "./requirements.txt",\
            // The path to your Python binary\
            devPythonBinaryPath: `venv/bin/python`,\
            // The paths to your Python scripts to run\
            scripts: ["src/python/**/*.py"],\
          }),\
        ],
      },
    });
    

Learn more about executing scripts in your Trigger.dev project using our Python build extension [here](https://trigger.dev/docs/config/extensions/pythonExtension)
.

### 

[​](https://trigger.dev/docs/guides/python/python-pdf-form-extractor#task-code)

Task code

This task uses the `python.runScript` method to run the `image-processing.py` script with the given image URL as an argument. You can adjust the image processing parameters in the payload, with options such as height, width, quality, output format, etc.

src/trigger/pythonPdfTask.ts

    import { task } from "@trigger.dev/sdk";
    import { python } from "@trigger.dev/python";
    
    export const processPdfForm = task({
      id: "process-pdf-form",
      run: async (payload: { pdfUrl: string }, io: any) => {
        const { pdfUrl } = payload;
        const args = [pdfUrl];
    
        const result = await python.runScript("./src/python/extract-pdf-form.py", args);
    
        // Parse the JSON output from the script
        let formData;
        try {
          formData = JSON.parse(result.stdout);
        } catch (error) {
          throw new Error(`Failed to parse JSON output: ${result.stdout}`);
        }
    
        return {
          formData,
          stderr: result.stderr,
          exitCode: result.exitCode,
        };
      },
    });
    

### 

[​](https://trigger.dev/docs/guides/python/python-pdf-form-extractor#add-a-requirements-txt-file)

Add a requirements.txt file

Add the following to your `requirements.txt` file. This is required in Python projects to install the dependencies.

requirements.txt

    PyMuPDF==1.23.8
    requests==2.31.0
    

### 

[​](https://trigger.dev/docs/guides/python/python-pdf-form-extractor#the-python-script)

The Python script

The Python script uses PyMuPDF to extract form data from a PDF file. You can see the original script in our examples repository [here](https://github.com/triggerdotdev/examples/blob/main/python-pdf-form-extractor/src/python/extract-pdf-form.py)
.

src/python/extract-pdf-form.py

    import fitz  # PyMuPDF
    import requests
    import os
    import json
    import sys
    from urllib.parse import urlparse
    
    def download_pdf(url):
        """Download PDF from URL to a temporary file"""
        response = requests.get(url)
        response.raise_for_status()
    
        # Get filename from URL or use default
        filename = os.path.basename(urlparse(url).path) or "downloaded.pdf"
        filepath = os.path.join("/tmp", filename)
    
        with open(filepath, 'wb') as f:
            f.write(response.content)
        return filepath
    
    def extract_form_data(pdf_path):
        """Extract form data from a PDF file."""
        doc = fitz.open(pdf_path)
        form_data = {}
    
        for page_num, page in enumerate(doc):
            fields = page.widgets()
            for field in fields:
                field_name = field.field_name or f"unnamed_field_{page_num}_{len(form_data)}"
                field_type = field.field_type_string
                field_value = field.field_value
    
                # For checkboxes, convert to boolean
                if field_type == "CheckBox":
                    field_value = field_value == "Yes"
    
                form_data[field_name] = {
                    "type": field_type,
                    "value": field_value,
                    "page": page_num + 1
                }
    
        return form_data
    
    def main():
        if len(sys.argv) < 2:
            print(json.dumps({"error": "PDF URL is required as an argument"}), file=sys.stderr)
            return 1
    
        url = sys.argv[1]
    
        try:
            pdf_path = download_pdf(url)
            form_data = extract_form_data(pdf_path)
    
            # Convert to JSON for structured output
            structured_output = json.dumps(form_data, indent=2)
            print(structured_output)
            return 0
        except Exception as e:
            print(json.dumps({"error": str(e)}), file=sys.stderr)
            return 1
    
    if __name__ == "__main__":
        sys.exit(main())
    

[​](https://trigger.dev/docs/guides/python/python-pdf-form-extractor#testing-your-task)

Testing your task
------------------------------------------------------------------------------------------------------------

1.  Create a virtual environment `python -m venv venv`
2.  Activate the virtual environment, depending on your OS: On Mac/Linux: `source venv/bin/activate`, on Windows: `venv\Scripts\activate`
3.  Install the Python dependencies `pip install -r requirements.txt`
4.  Copy the project ref from your [Trigger.dev dashboard](https://cloud.trigger.dev/)
     and add it to the `trigger.config.ts` file.
5.  Run the Trigger.dev CLI `dev` command (it may ask you to authorize the CLI if you haven’t already).
6.  Test the task in the dashboard by providing a valid PDF URL.
7.  Deploy the task to production using the Trigger.dev CLI `deploy` command.

[​](https://trigger.dev/docs/guides/python/python-pdf-form-extractor#learn-more-about-using-python-with-trigger-dev)

Learn more about using Python with Trigger.dev
----------------------------------------------------------------------------------------------------------------------------------------------------------------------

Python build extension
----------------------

Learn how to use our built-in Python build extension to install dependencies and run your Python code.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/guides/python/python-crawl4ai)
[DALL·E image generationThis example will show you how to generate an image using DALL·E 3 and text using GPT-4o with Trigger.dev.\
\
Next](https://trigger.dev/docs/guides/examples/dall-e3-generate-image)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
