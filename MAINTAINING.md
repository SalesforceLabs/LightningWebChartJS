# Maintaining

## Release Process

The release process is composed by multiple standards and utilities combined together:

- [Conventional Commits](https://conventionalcommits.org/) based on the [Angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines) are used to keep standard commit messages all around the project
- [Semantic Versioning (SemVer) Specification](https://semver.org/) is used to determine the version format of each new release
- [conventional-changelog/standard-version](https://github.com/conventional-changelog/standard-version) automatizes the process of creating a new release based on the commit history
- [conventional-github-releaser/conventional-github-releaser](https://github.com/conventional-changelog/releaser-tools/tree/master/packages/conventional-github-releaser) takes care of publishing the new release on GitHub

### Pre-requisites

1. Create a new [GitHub Personal Token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)
2. Set the `CONVENTIONAL_GITHUB_RELEASER_TOKEN` environment variable with the github personal token value (you can use [direnv](https://direnv.net/))

### Releasing a new version

```sh
$ npm run release
```

This command will:

- Create a new version based on the commit types from `HEAD` and `package.json` version
- Create the changelog with all the commits from `HEAD` and the last tag version following [keepachangelog](https://keepachangelog.com/en/1.0.0/)
- Create a new commit to update the following files: `CHANGELOG.md`, `package.json` and `package-lock.json`
- Create a new tag following the SemVer Standard
- Push this tag to the remote
- Trigger the new version publication
