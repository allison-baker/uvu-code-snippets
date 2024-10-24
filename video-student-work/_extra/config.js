$(function () {
    uvu.import('data-view', '.student-projects', function () {
        $('.student-projects').dataview({
            folder: '/college-name/dept-name/program-name/student-work',
            limit: 0,
            template: {
                main: "/college-name/dept-name/program-name/student-work/_extra/template.html"
            }
        });
    });
});
