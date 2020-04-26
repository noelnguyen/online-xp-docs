---
id: introduction
title:  Online psychological experiments and surveys
sidebar_label: Online Experiments
---

This documentation site refers to the [ILCB server](https://ilc-online-test.net), how it was built and is run, and refers also to several other external resources that one can use for experimenting online.

## ILCB

The [Institute for Language, Communication and the Brain](https://www.ilcb.fr) is a French joint research institute bringing together experts in linguistics, neuroscience, psychology, medicine and computer science to understand and to model the way that language functions. The main objective of this 10-year scientific adventure is to create a generic model of the processing of language and its cerebral bases. The institutional support comes from [CNRS](http://www.cnrs.fr), [INSERM](https://www.inserm.fr), [Aix-Marseille Université](https://www.univ-amu.fr) and [Université d'Avignon](http://univ-avignon.fr).


---

## Resources

Online experiments can be written in javascript from scratch, but there are many tools, libraries or all-in-one solutions to help building, managing and promoting an online experiment.

_The list below reflects the knowledge of the researchers and IT support staff involved in the ILCB server initiative._


`Table 1`. Available tools at a glance


| Tool        |      Build      |   Manage |  Promote |
| ------------- | :-----------: | :-----: | :-----: |
| [Cubius](/docs/introduction#cubius)                      | x |   |   |
| [JsPsych](/docs/introduction#jspsych)                    | x |   |   |
| [Lab.js](/docs/introduction#labjs)                       | x |   |   |
| [OSWeb](/docs/introduction#osweb)                        | x |   |   |
| [PsychopyJs](introduction#psychopyjs)                    | x |   |   |
| [JATOS](/docs/introduction#jatos)                        |   | x |   |
| [Pavlovia](/docs/introduction#pavlovia)                  |   | x |   |
| [The experiment factory](/docs/introduction#the-experiment-factory)         | x | | |
| [Netlify](/docs/introduction#netlify)                    |   | x |   |
| [Openlab](/docs/introduction#openlab)                    |   | x |   |
| [SoSci](/docs/introduction#sosci)                        |   |   | x |
| [Sona systems](/docs/introduction#sona-systems)          |   |   | x |
| [Prolific](/docs/introduction#prolific)                  |   |   | x |
| [Mechanical Turk](/docs/introduction#mechanical-turk)    |   |   | x |
| [Labvanced](/docs/introduction#labvanced)                | x | x |   |
| [Limesurvey](/docs/introduction#limesurvey)              | x | x |   |
| [Qualtrics](/docs/introduction#qualtrics)                | x | x |   |



## Build, manage and promote an online experiment

### Cubius

[Cubius](https://github.com/lina128/cubius) is an Harvard University based solution for dynamically building static web sites to be hosted on Amazon servers.

[To top](/docs/introduction#resources)


### JsPsych

[JsPsych](https://www.jspsych.org)
is a JavaScript library for running behavioral experiments in a web browser. The library provides a flexible framework for building a wide range of laboratory-like experiments that can be run online.

[To top](/docs/introduction#resources)


### Lab.js

[Lab.js](https://lab.js.org) is a free, open, online study builder for the behavioral and cognitive sciences.

[To top](/docs/introduction#resources)


### OSWeb

[OSWeb](https://github.com/shyras/osweb/) is an online runtime for OpenSesame experiments.

[To top](/docs/introduction#resources)


### PsychopyJs

[PsychopyJs](https://www.psychopy.org) added the facility to run studies online using a high-performance, hardware-accelerated, port of the PsychoPy Python library.

[To top](/docs/introduction#resources)



### JATOS

[JATOS](http://www.jatos.org), _Just Another Tool for Online Studies_, helps you set up and run your online studies on your own server.

[To top](/docs/introduction#resources)


### Pavlovia

[Pavlovia](https://pavlovia.org), where behaviour is studied. Supported by the Wellcome Trust and the University of Nottingham.

[To top](/docs/introduction#resources)


### The experiment factory

[The experiment factory](https://expfactory.github.io) builds Docker containers ready to be deployed on servers

[To top](/docs/introduction#resources)


### Netlify

[Netlify](https://www.netlify.com) hosts studies and take care of data collection. Their service is easy to use, free for basic studies, and inexpensive for large ones.

[To top](/docs/introduction#resources)


### Openlab

Openlab](https://www.open-lab.online) takes care of running experiments and collecting, storing and managing data. The basic version of the application is available for free.

[To top](/docs/introduction#resources)


### SoSci
[SoSci](https://www.soscisurvey.de) is a solution for online questionnaires

[To top](/docs/introduction#resources)


### Sona systems

[Sona systems](http://www.sona-systems.com/participant-recruitment.aspx) virtualizes every aspect of the sign-up process, eliminating the frustration of paper-based methods and bulletin boards.

[To top](/docs/introduction#resources)


### Prolific

[Prolific](https://www.prolific.co) collects high quality responses from people around the world within minutes.

[To top](/docs/introduction#resources)


###  Mechanical Turk

[Mechanical Turk](https://www.mturk.com)is a crowdsourced market place

[To top](/docs/introduction#resources)


### Labvanced

[Labvanced](https://www.labvanced.com) is probably a cloud solution for professional web based experiments

[To top](/docs/introduction#resources)


### Limesurvey

[Limesurvey](https://www.limesurvey.org) is an open source survey software

[To top](/docs/introduction#resources)


### Qualtrics

[Qualtrics](https://www.qualtrics.com) is an online survey platform

[To top](/docs/introduction#resources)


---



## ILCB server

We opted for a cloud web server hosted by [DigitalOcean](https://www.digitalocean.com) with a [JATOS](http://www.jatos.org) experiment manager. Regular PHP/MySQL/JavaScript experiments can also be run on this server.


### How-to

### Local Setup
