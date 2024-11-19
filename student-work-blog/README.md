# Student Work - Blog

Currently in use on [MCE](https://uvu.edu/cet/mce/student-work/), [ECE](https://uvu.edu/cet/ece/student-work/), and [DGM](https://uvu.edu/digitalmedia/student-work/) student work pages.

## What You Need

- Titles of projects.
- Names of students involved.
- Faculty mentor (if applicable).
- Outside sponsor/source of funding (if applicable).
- At least one photo: landscape orientation, 1200px wide. To use for the post cover photo and card photo.
- PDF, website link, PowerPoint presentation, and any other documents/resources (if applicable).

## How to Implement

1. Create blog directory in the department directory. Name it 'student-work'.
2. Create basic directories for each program. Name the directories appropriately.
3. Create folders in the docs and images folders that are named for each program. For the images/docs, the file management will be as follows: docs/program-name/year/project-name/(applicable documents) and images/program-name/year/project-name/(applicable images). Make sure that the names of the project folders match the corresponding blog post name. You can name the projects arbitrarily with a numbering system (i.e. project-01, project-02, etc.) or with a name that relates to the project content (i.e. windmill-design, tiwanaku-capstone, etc.).
4. Upload all of the images and documents to the appropriate folders.
5. Begin creating blog posts for each program, in the appropriate folders. The blog post file management will be as follows: student-work/program-name/year/(project posts). The names of the blog posts will match the names of their corresponding docs and images folders.

### Creating a Blog Post

1. Navigate to the correct directory in Omni and click the "New" button in the top right corner. Select "Blog Post" in the next pop up.
2. A form will pop up to aid in creating the blog post. Fill in the project title, a short description that will show on the card, tags (if the department is using them), a post date, relevant keywords (these are used for searching within the UVU website), and the name for the file (refer to the above naming structure). Note that the post date does not have to be the same day you create the file in Omni, you can create a post with a past date to post older projects accurately.  
   ![form to create a post](/images/examples/create_post_form.png)
3. Navigate to the "Properties" tab. Here you can see some of the information you filled in on the form, and fill in the rest of the information. If you ever need to change the project description or title, it would be here.  
   ![first part of the properties tab](/images/examples/post_properties_1.png)
4. Further down, we'll fill in the image. Do this in the properties tab instead of the initial form so that you can use a file link instead of a path. This way, if the file is ever moved or renamed, the post would just have to be republished and the link would still work. If it was a path link, someone would have to go into the properties tab again and correct the path before republishing. File links have two sets of curly braces and a series of numbers: {{f:123456}}. Paths look like "foo/bar/whiz/file_name.jpg". To create a file link, make sure to select "Production" in the dropdown along the top when you open the file select popup.  
   ![file select](/images/examples/image_select.png)
   ![second part of the properties tab](/images/examples/post_properties_2.png)
5. In the last part of the properties tab, you can adjust the layouts of the sections in the post. Usually you only need one section, so go into the dropdowns and click "Hide Section" on all sections but section one.
   ![third part of the properties tab](/images/examples/post_properties_3.png)

## Best Practices

- When linking to documents or images, make sure to have "Production" selected in the dropdown along the top of the file select popup.
- Use the class 'button-myuvu' on all buttons, to follow the styling for CET blog posts.
- Links to external websites or PDFs need to open in a new tab.
- Don't forget to add the CSS and JS included in this example directory. The CSS for the cards is required, and the dropdowns is only if you plan to use dropdowns in the same way that the current ECE and MCE capstone pages do. The JS is only if you intend to use sliders for displaying extra images on the posts. The CSS for these sliders is also included in this directory.

## Contact Me

You should now be able to implement a student work blog on your department website. If you have any questions, reach out to Al Baker [baker.allison.m@gmail.com](mailto:baker.allison.m@gmail.com).
