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


### Build an online experiment

- [JsPsych](https://www.jspsych.org) is a JavaScript library for running behavioral experiments in a web browser. The library provides a flexible framework for building a wide range of laboratory-like experiments that can be run online.
- [Lab.js](https://lab.js.org) is a free, open, online study builder for the behavioral and cognitive sciences.
- [PsychopyJs](https://www.psychopy.org) added the facility to run studies online using a high-performance, hardware-accelerated, port of the PsychoPy Python library.
- [OSWseb](https://github.com/shyras/osweb/) is an online runtime for OpenSesame experiments.
- [Cubius](https://github.com/lina128/cubius) is an Harvard University based solution for dynamically building static web sites to be hosted on Amazon servers.



### Manage an online experiment

- [JATOS](http://www.jatos.org), _Just Another Tool for Online Studies_, helps you set up and run your online studies on your own server.
- [Pavlovia](https://pavlovia.org), where behaviour is studied. Supported by the Wellcome Trust and the University of Nottingham.
- [The experiment factory](https://expfactory.github.io) builds Docker containers ready to be deployed on servers
- [Netlify](https://www.netlify.com) hosts studies and take care of data collection. Their service is easy to use, free for basic studies, and inexpensive for large ones.
- [Openlab](https://www.open-lab.online) takes care of running experiments and collecting, storing and managing data. The basic version of the application is available for free.
- [SoSci](https://www.soscisurvey.de) is a solution for online questionnaires


### Recruit participants

- [Sona systems](http://www.sona-systems.com/participant-recruitment.aspx) virtualizes every aspect of the sign-up process, eliminating the frustration of paper-based methods and bulletin boards.
- [Prolific](https://www.prolific.co) collects high quality responses from people around the world within minutes.
- [Mechanical Turk](https://www.mturk.com) is a crowdsourced market place


### All-in-one solutions

- [Labvanced](https://www.labvanced.com) is probably a cloud solution for professional web based experiments
- [Limesurvey](https://www.limesurvey.org) is an open source survey software
- [Qualtrics](https://www.qualtrics.com) is an online survey platform



---



## ILCB server

We opted for a cloud web server hosted by [DigitalOcean](https://www.digitalocean.com) with a [JATOS](http://www.jatos.org) experiment manager. Regular PHP/MySQL/JavaScript experiments can also be run on this server.


### How-to

### Local Setup
