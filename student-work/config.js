$(function () {
    uvu.import('data-view', '.student-projects', function () {
        $('.student-projects').dataview({
            folder: '/tm/mechatronics/students',
            limit: 0,
            template: {
                main: "/tm/mechatronics/students/_extra/template.html"
            }
        });
    });
});