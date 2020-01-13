module.exports = {
    "dataSource": 'prs',
    "prefix": "",
    "includeMessages": 'commits',
    "changelogFilename": 'CHANGELOG.md',
    "onlyMilestones": false,
    "groupBy": false,
    template: {
        issue: ({ text, url, name }) => (
            `- ${name} [${text}](${url})`
        ),
        changelogTitle: '# Изменения\n\n',
    }
}