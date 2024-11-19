# Student Work - Video Cards

Currently in use on [AET](https://uvu.edu/auto/aet/student-work/) and [Mechatronics](https://uvu.edu/tm/mechatronics/students/) program student work pages.

## What You Need (Examples of each included in this directory):

- config.js - Here you will declare the path to the directory that the student work page is in and the path to the template.
- datalist.csv - A comma separated list with all of the project names (title), link to the video (video), student names (students), and the year the project is from (year). The parentheses are the names of the columns, and these are the names currently in use in the template and tab setup. It's recommended not to change these to make it easier to duplicate.
- template.html - The HTML and some styling for the video cards.
- tabs.css - The styling for the tabs and the grid layout for the div that holds the cards. Can put this in the dept.css file or in a separate file linked to the student work page.

### Also Included in This Directory

- section.html - An example of how to implement this in Omni.

## How to Implement

1. Create new basic directory for the student work page within the program directory: program-name/student-work/.
2. Upload datalist.csv to the student-work directory.
3. Create \_extra folder in the student-work directory. Upload config.js and template.html to the \_extra folder.
4. Set paths in config.js. The path to the student work directory will likely be /college-name/dept-name/program-name/student-work/. The template will be in /college-name/dept-name/program-name/student-work/\_extra/template.html.
5. Set up the tabs in student-work/index.pcf. The tabs should be in their own section, set to one column. Place the section header in the header region and the tabs themselves in region one. See the example for reference.

```
<!-- SECTION 2 EXAMPLE SET UP FOR IN-PAGE TAB NAVIGATION -->
<section class="padding-top-40">
	<!-- SET SECTION TO ONE COLUMN, REMOVE BOTTOM PADDING ON SECTION -->
	<div class="container-fluid">
		<div class="row">
			<div class="col-xs-12 col-target region">
				<!-- PLACE TITLE IN HEADER REGION -->
				<h2 class="text-center uppercase">More Student Work</h2>
				<!-- END HEADER REGION -->
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-target region">
				<!-- PLACE TABS IN FIRST REGION -->
				<ul class="tabs">
					<li><a class="anchorTab active" href="#2024">2024</a></li>
					<li><a class="anchorTab" href="#2023">2023</a></li>
					<li><a class="anchorTab" href="#2022">2022</a></li>
					<li><a class="anchorTab" href="#2021">2021</a></li>
				</ul>
				<!-- END FIRST REGION -->
			</div>
		</div>
	</div>
</section>
```

6. Set up the video cards in student-work/index.pcf. In the section after the tabs, make divs with IDs corresponding to the years in the tabs. Place this code in the header region of the section. All other regions should remain empty.

```
<!-- PLACE IN HEADER REGION, MAKE SURE ID'S MATCH WHAT'S ON THE TAB NAVIGATION -->
<div id="2024">
	<div class="student-projects" data-view-folder="/college-name/dept-name/program-name/student-work" data-view-template-main="/college-name/dept-name/program-name/student-work/_extra/template.html" data-view-limit="0" data-view-filter="year==2024"></div>
</div>
<div id="2023">
	<div class="student-projects" data-view-folder="/college-name/dept-name/program-name/student-work" data-view-template-main="/college-name/dept-name/program-name/student-work/_extra/template.html" data-view-limit="0" data-view-filter="year==2023"></div>
</div>
<div id="2022">
	<div class="student-projects" data-view-folder="/college-name/dept-name/program-name/student-work" data-view-template-main="/college-name/dept-name/program-name/student-work/_extra/template.html" data-view-limit="0" data-view-filter="year==2022"></div>
</div>
<div id="2021">
	<div class="student-projects" data-view-folder="/college-name/dept-name/program-name/student-work" data-view-template-main="/college-name/dept-name/program-name/student-work/_extra/template.html" data-view-limit="0" data-view-filter="year==2021"></div>
</div>
<!-- END STUDENT WORK DIVS -->
```

## Contact Me

The tab layout should now be functional. Reach out to Al Baker ([baker.allison.m@gmail.com](mailto:baker.allison.m@gmail.com)) if you have any issues.
