---
id: ilcbhowto
title: How to start
sidebar_label: How-to
---
import Mermaid from '@theme/Mermaid';


:::note
Concerning the ILCB server, we opted for a cloud web server hosted by [DigitalOcean](https://www.digitalocean.com) with a [JATOS](http://www.jatos.org) experiment manager. Regular PHP/MySQL/JavaScript experiments can also be run on this server.
:::






## Easy path

---

### Lab.js + JATOS

<Mermaid chart={`
	graph LR;
	    id1(in Lab.js <br> Export to JATOS)-->| transfert |id2(in JATOS <br> Import Study);
`}/>


##### References

From JATOS doc site
- [Lab.js and JATOS](http://www.jatos.org/labjs-and-JATOS.html)

From Lab.js doc site
- [Collecting data with JATOS](https://labjs.readthedocs.io/en/latest/learn/deploy/3c-jatos.html)


##### Videos

From Lab.js Vimeo Channel ([Felix Henninger](https://vimeo.com/felixhenninger))
- [Introduction to lab.js](https://vimeo.com/241310293)
- [Collecting data on the server using PHP](https://vimeo.com/248002608)


---

### OSWeb + JATOS


<Mermaid chart={`
	graph LR;
	    id1(in OSWeb <br> Export to JATOS)-->| transfert |id2(in JATOS <br> Import Study);
`}/>


##### References

From JATOS doc site
- [OSweb and JATOS](http://www.jatos.org/OSWeb-and-JATOS.html)

##### Videos

From OpenSeasame Youtube Channel ([Sebastiaan Mathot](https://www.youtube.com/channel/UC6HfeAa0vWeSWS6IcNAjZ2A))

- [OpenSesame tutorial Implicit Association Task (beginner's level)](https://www.youtube.com/watch?v=zd-nxgGOGlE)
- [Creating online psychology experiments with OpenSesame](https://www.youtube.com/watch?v=0448NeoUaqU)
- [Creating a psychology experiment with OpenSesame 3.1](https://www.youtube.com/watch?v=FCXcnAv9aMA)
- [Online psychology experiments with OSWeb and JATOS (#1 ): Inline JavaScript](https://www.youtube.com/watch?v=-DHAX_EyKlE)
- [Online psychology experiments with OSWeb and JATOS (#2): Distributing links](https://www.youtube.com/watch?v=m1UDk5kBwH4)
- [Online psychology experiments with OSWeb and JATOS (#3): Downloading data from JATOS](https://www.youtube.com/watch?v=P1QWcqTnLJ0)





## Advanced path

---

### JsPsych + JATOS


<Mermaid chart={`
	graph LR;
	    id1( In a folder <br> JavaScript files with JsPsych library <br> that integrate JATOS subroutine)-->| transfert |id2(JATOS <br> Import Study);
`}/>


jsPsych is a JavaScript library for running behavioral experiments in a web browser. The library provides a flexible framework for building a wide range of laboratory-like experiments that can be run online.

To use jsPsych, you provide a description of the experiment in the form of a timeline. jsPsych handles things like determining which trial to run next, storing data, and randomization. jsPsych uses plugins to define what to do at each point on the timeline. Plugins are ready-made templates for simple experimental tasks like displaying instructions or displaying a stimulus and collecting a keyboard response. Plugins are very flexible to support a wide variety of experiments. It is easy to create your own plugin if you have experience with JavaScript programming.

JATOS basically cares for the server side: it stores result data, does worker management etc.

##### References

From JsPsych web site
- [jsPsych "Hello world" experiment](https://www.jspsych.org/tutorials/hello-world/)
- [jsPsych "Simple Reaction Time" task](https://www.jspsych.org/tutorials/rt-task/)


From JATOS doc site
- [jsPsych and JATOS](http://www.jatos.org/jsPsych-and-JATOS.html)
- [Adapt Pre written Code to run it in JATOS (Jatosify)](http://www.jatos.org/Adapt-Pre-written-Code-to-run-it-in-JATOS.html)


---

## Standalone solutions

-
