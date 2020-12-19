# ASGM Front End Prototype

A.S.G.M. or Artisanal Small-Scale Gold Mining is a common practice in the Amazon rainforest that has been shown to contribute to alarming levels of deforestation and loss of biodiversity. The ASGM lab at Wake Forest University is an interdisciplinary lab combining researchers from the Computer Science and Biology departments. The ASGM-WFU lab utilizes machine learning algorithms that are deployed to automated drones to monitor areas of known and/or rapidly developing deforestation. The site that is presented in this repo is a prototype for a front end that will be later ported over to React JS in the future. This site will be used by the ASGM researchers in order to automate the ML workflow. Theis front end, although simple in appearance, connected to very complex and robust AWS backend.

## Getting Started

Feel free to clone this repo, but know that there will be no further development seeing that we are moving the front end to React JS and the AWS backend will be disconnected for security reasons.

### Prerequisites

In order to download the dependencies in package.json please run

```
npm -i
```

You will need to have NodeJS installed.

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Deployment

CI/CD is covered by linking this repo to AWS CodePipeline. There is a rule set so that when a pull request is approved and merged into main, the updated main is automatically deployed to the S3 bucket that is hosting the site. CloudWatch still needs to be manually invalidated (clearing the cache) using "/\*" to refresh the entire site. Single pages can also be invalidated by using the specific file name. We may look to set up auto-invalidation on the React front end once there is a significant amount of code coverage/ testing.

## Built With

- [Vue](https://vuejs.org/) - The web framework used
- [jQuerry](https://jquery.com/) - Additional web framework
- [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser
- [NPM](https://www.npmjs.com/) - Dependency Management
- [ESLint](https://www.npmjs.com/package/eslint) - Linter

## Authors

- [**Robert Cullen-Keel**](https://github.com/motoroboto)
- [**Dexter Garner**](https://github.com/johndexteriv)
- [**Reed Taylor**](https://github.com/reedtlr)
- [**Thomas Tutchings**](https://github.com/tutchings)
- [**Tom Nisbet**](https://github.com/TRNisbet)
- [**Bennett Gould**](https://github.com/bpgould)

## License

This project is licensed under the MIT License.

## Acknowledgments

-This was done to fulfill a project for the [UNC Full Stack Web Development Bootcamp](https://bootcamp.unc.edu/coding/) in partnership with the WFU-ASGM lab.

## Contributing

Please contact [Bennett Gould](https://github.com/bpgould) if you are interested in contributing to this project or have questions about the code.
