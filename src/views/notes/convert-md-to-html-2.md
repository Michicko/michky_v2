---
title: Convert Markdown to HTML in Nodejs 2
description: A post about converting the contents of a Markdown file to HTML in a Node.js application part 2
date: 2024-09-15
tags: [Node.js, Markdown, HTML]
category: Backend
slug: convert-md-to-html-2
---

## Intro

To read the content of a Markdown file in Node.js,<br />
we need an interpreter that understands Markdown,<br />
and can convert what he understood to HTML.<br />
So what we need is just like a translator,<br />
who can translate a context from one language to another.

## The translator

There are many [Markdown to HTML translators](https://github.com/markdown/markdown.github.com/wiki/Implementations) out there.<br />
Since we're building a Node.js app, we need a translator that works in this environnement.<br />  
We'll be using, the best one in my humble opinion for this task,<br />
[Marked](https://github.com/markedjs/marked), a markdown parser and compiler.

## Installation

To install Marked in a Node.js application,<br />
type the following command in the terminal of your code editor:

```bash
npm install marked
```

You now have a powerful Markdown converter at your service 😉

## Usage

To start using Marked, all we have to do is to fill its `parse()` method with some Markdown.<br />
It's as simple as the following block of code:

```js
import { marked } from "marked"
const html = marked.parse("# An H1 heading converted from Markdown to HTML with Marked!")
```

The output of the code above would be:

```html
<h1>An H1 heading converted from Markdown to HTML with Marked!</h1>
```

That's all folks, CU!