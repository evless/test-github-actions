module.exports = {
    "dataSource": "commits",
    "prefix": "",
    "includeMessages": "commits",
    "changelogFilename": "CHANGELOG.md",
    "onlyMilestones": false,
    "groupBy": false,
    template: {
        commit: ({ message, url }) => `- [${message}](${url})`,
        issue: "- {{labels}} {{name}} [{{text}}]({{url}})",
        changelogTitle: "# Изменения\n\n",
    }
}