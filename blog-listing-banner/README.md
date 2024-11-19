# News Banner

Note: this component has been retired, since UVU is moving towards using Content Hub over individual blogs. This could potentially be reworked and linked to Content Hub instead, but for now, this works only with the old format of department blogs.

View an example on the [CET Landing Page](https://www.uvu.edu/cet/).

## What You Need (Examples of each included in this directory):

- config.js - here you will declare the path to the news blog that will be used to populate the banner.
- js-links.inc - the script link to the blog config file
- featured-stories.html - the layout for the blog listing itself. Here you will link to each of the five small static images
- blog-listing-widgets.inc and blog-post-widgets.inc - widgets for the blog posts and listings
- news.css - styling for the banner. Can have this in your global css folder at the college-level and include it in your css-links.inc that goes in each department subsite

## How to Implement

1. Creating the \_extra folder in the root of the subsite you will be implementing this in. In this folder, add the blog-listing-widgets.inc, blog-post-widgets.inc, js-links.inc, and blog-config.js.
2. Create a templates folder inside the \_extra folder and add the featured-stories.html file.
3. Update the link for the "See More Recent News" in the featured-stories.html file to link to your blog.
4. Update the image paths for the five static images on the banner to the five images you've chosen and uploaded to the subsite's images folder.
5. On the page you want the banner on, set the section to full width.
6. In one of the regions, insert a Blog Listing component.
7. Fill out the form as such:
   ![first half of blog listing form](/images/examples/blog_listing_1.png)
   ![second half of blog listing form](/images/examples/blog_listing_2.png)
8. The most recent story in the blog should now show on the left side of the banner with the title and a short description.

### Recommendations

The banner has been retired, so we no longer implement it on our pages. However, while we did use them, we often had issues with sizing of the banner. The banner stretches and shrinks based on the image of the most recent post showing on the left side, which is not ideal. Posts using a portrait orientation image will cause the banner to stretch nearly full view height. This could be fixed by specifying the height of the banner in the CSS and setting the image to cover. We also recommend using a horizontal orientation photo for the header photos of each post.

The banner is also not the most mobile responsive. We never got the chance to fix this, but please feel free to alter the CSS to make it responsive if you choose to use this element.
